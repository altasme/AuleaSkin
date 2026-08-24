"use client";

// Client-side data store for the admin panel (src/app/adminpanel).
// Reads and writes go straight to the Cloudflare Pages Functions API
// under functions/api/ (KV-backed, see docs/admin-panel.md), there's no
// local caching layer, the API is the source of truth. An edit here is
// live for every visitor as soon as the PUT request succeeds.
//
// Business Info / Homepage / About / Contact fields update local state
// immediately on every keystroke (so typing feels normal) but the actual
// network PUT is debounced, otherwise every keystroke would fire its own
// request. Products save immediately on each add/edit/delete instead,
// those are already discrete, deliberate actions, not continuous typing.

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/data/products";
import { siteConfig as defaultSiteConfig, type SiteConfig } from "@/lib/site-config";
import { defaultSiteContent, type SiteContent } from "@/data/site-content";
import { authHeader } from "@/app/adminpanel/auth";

type State = {
  products: Product[];
  siteConfig: SiteConfig;
  siteContent: SiteContent;
  isLoading: boolean;
  loadError: string | null;
  saveError: string | null;
  isSaving: boolean;
  lastSavedAt: string | null;
};

type AdminStore = State & {
  isHydrated: boolean;
  addProduct: (product: Product) => Promise<void>;
  updateProduct: (slug: string, product: Product) => Promise<void>;
  deleteProduct: (slug: string) => Promise<void>;
  updateSiteConfig: (patch: Partial<SiteConfig>) => void;
  updateSiteContent: (patch: Partial<SiteContent>) => void;
};

const AdminStoreContext = createContext<AdminStore | null>(null);

const SAVE_DEBOUNCE_MS = 800;

class UnauthorizedError extends Error {}

async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(path, { headers: { ...authHeader() }, cache: "no-store" });
  if (res.status === 401) throw new UnauthorizedError();
  if (!res.ok) throw new Error(`Failed to load ${path} (${res.status})`);
  return res.json();
}

async function apiPut(path: string, body: unknown): Promise<void> {
  const res = await fetch(path, {
    method: "PUT",
    headers: { "content-type": "application/json", ...authHeader() },
    body: JSON.stringify(body),
  });
  if (res.status === 401) throw new UnauthorizedError();
  if (!res.ok) throw new Error(`Failed to save ${path} (${res.status})`);
}

export function AdminStoreProvider({
  children,
  onUnauthorized,
}: {
  children: React.ReactNode;
  onUnauthorized: () => void;
}) {
  const [state, setState] = useState<State>({
    products: [],
    siteConfig: defaultSiteConfig as unknown as SiteConfig,
    siteContent: defaultSiteContent,
    isLoading: true,
    loadError: null,
    saveError: null,
    isSaving: false,
    lastSavedAt: null,
  });

  const handleUnauthorized = useCallback(() => onUnauthorized(), [onUnauthorized]);

  // Guards against the debounced site-config/site-content effects firing
  // for a state change that came FROM the server (initial load, or
  // restoreDefaults), rather than from the admin actually typing
  // something. Starts true so the first load doesn't re-PUT what it just
  // fetched.
  const skipNextConfigSave = useRef(true);
  const skipNextContentSave = useRef(true);
  const configSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [products, siteConfig, siteContent] = await Promise.all([
          apiGet<Product[]>("/api/products"),
          apiGet<SiteConfig>("/api/site-config"),
          apiGet<SiteContent>("/api/site-content"),
        ]);
        if (cancelled) return;
        setState((prev) => ({ ...prev, products, siteConfig, siteContent, isLoading: false }));
      } catch (err) {
        if (cancelled) return;
        if (err instanceof UnauthorizedError) return handleUnauthorized();
        setState((prev) => ({
          ...prev,
          isLoading: false,
          loadError: err instanceof Error ? err.message : "Failed to load admin data.",
        }));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [handleUnauthorized]);

  const persistProducts = useCallback(
    async (next: Product[]) => {
      setState((prev) => ({ ...prev, isSaving: true, saveError: null }));
      try {
        await apiPut("/api/products", next);
        setState((prev) => ({ ...prev, isSaving: false, lastSavedAt: new Date().toISOString() }));
      } catch (err) {
        if (err instanceof UnauthorizedError) return handleUnauthorized();
        setState((prev) => ({
          ...prev,
          isSaving: false,
          saveError: err instanceof Error ? err.message : "Save failed.",
        }));
      }
    },
    [handleUnauthorized]
  );

  const addProduct = useCallback(
    async (product: Product) => {
      const next = [...state.products, product];
      setState((prev) => ({ ...prev, products: next }));
      await persistProducts(next);
    },
    [state.products, persistProducts]
  );

  const updateProduct = useCallback(
    async (slug: string, product: Product) => {
      const next = state.products.map((p) => (p.slug === slug ? product : p));
      setState((prev) => ({ ...prev, products: next }));
      await persistProducts(next);
    },
    [state.products, persistProducts]
  );

  const deleteProduct = useCallback(
    async (slug: string) => {
      const next = state.products.filter((p) => p.slug !== slug);
      setState((prev) => ({ ...prev, products: next }));
      await persistProducts(next);
    },
    [state.products, persistProducts]
  );

  const updateSiteConfig = useCallback((patch: Partial<SiteConfig>) => {
    setState((prev) => ({ ...prev, siteConfig: { ...prev.siteConfig, ...patch } }));
  }, []);

  const updateSiteContent = useCallback((patch: Partial<SiteContent>) => {
    setState((prev) => ({ ...prev, siteContent: { ...prev.siteContent, ...patch } }));
  }, []);

  // Debounced network PUTs, fire ~800ms after the admin stops typing.
  useEffect(() => {
    if (state.isLoading) return;
    if (skipNextConfigSave.current) {
      skipNextConfigSave.current = false;
      return;
    }
    if (configSaveTimer.current) clearTimeout(configSaveTimer.current);
    configSaveTimer.current = setTimeout(() => {
      setState((prev) => ({ ...prev, isSaving: true, saveError: null }));
      apiPut("/api/site-config", state.siteConfig)
        .then(() => setState((prev) => ({ ...prev, isSaving: false, lastSavedAt: new Date().toISOString() })))
        .catch((err) => {
          if (err instanceof UnauthorizedError) return handleUnauthorized();
          setState((prev) => ({
            ...prev,
            isSaving: false,
            saveError: err instanceof Error ? err.message : "Save failed.",
          }));
        });
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (configSaveTimer.current) clearTimeout(configSaveTimer.current);
    };
  }, [state.siteConfig, state.isLoading, handleUnauthorized]);

  useEffect(() => {
    if (state.isLoading) return;
    if (skipNextContentSave.current) {
      skipNextContentSave.current = false;
      return;
    }
    if (contentSaveTimer.current) clearTimeout(contentSaveTimer.current);
    contentSaveTimer.current = setTimeout(() => {
      setState((prev) => ({ ...prev, isSaving: true, saveError: null }));
      apiPut("/api/site-content", state.siteContent)
        .then(() => setState((prev) => ({ ...prev, isSaving: false, lastSavedAt: new Date().toISOString() })))
        .catch((err) => {
          if (err instanceof UnauthorizedError) return handleUnauthorized();
          setState((prev) => ({
            ...prev,
            isSaving: false,
            saveError: err instanceof Error ? err.message : "Save failed.",
          }));
        });
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (contentSaveTimer.current) clearTimeout(contentSaveTimer.current);
    };
  }, [state.siteContent, state.isLoading, handleUnauthorized]);

  const value = useMemo<AdminStore>(
    () => ({
      ...state,
      isHydrated: !state.isLoading,
      addProduct,
      updateProduct,
      deleteProduct,
      updateSiteConfig,
      updateSiteContent,
    }),
    [state, addProduct, updateProduct, deleteProduct, updateSiteConfig, updateSiteContent]
  );

  return <AdminStoreContext.Provider value={value}>{children}</AdminStoreContext.Provider>;
}

export function useAdminStore() {
  const ctx = useContext(AdminStoreContext);
  if (!ctx) throw new Error("useAdminStore must be used inside AdminStoreProvider");
  return ctx;
}
