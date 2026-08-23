"use client";

// Client-side data store for the admin panel (src/app/adminpanel). There
// is no database and no server on this static-export site (see
// next.config.ts), so "saving" here means: keep the edit in React state,
// mirror it to this browser's localStorage so it survives a reload, and
// nothing more. It does not reach the live site or any other visitor's
// browser. See docs/admin-panel.md for the full explanation and the
// intended workflow (edit here, then Export, then a developer applies it
// to the codebase).

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { products as defaultProducts, type Product } from "@/data/products";
import { siteConfig as defaultSiteConfig } from "@/lib/site-config";
import { defaultSiteContent, type SiteContent } from "@/data/site-content";

// Hand-written, not derived from `typeof defaultSiteConfig`: that object
// is declared `as const` in site-config.ts, so its inferred type has
// string-literal fields (e.g. businessName: "Aulea Skin", not string),
// which would make every input's onChange a type error the moment it
// tried to assign a different value.
export type MutableSiteConfig = {
  businessName: string;
  wordmark: string;
  tagline: string;
  positioningLine: string;
  shortDescription: string;
  brandPromise: string;
  legalName: string;
  established: string;
  businessType: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  hours: string;
  social: {
    instagram: string;
    tiktok: string;
    facebook: string;
    shopee: string;
  };
  checkoutModel: string;
  freeShippingThreshold: number;
  couriers: string[];
  paymentMethods: string[];
  nav: { label: string; href: string }[];
  footerPolicyLinks: { label: string; href: string }[];
  primaryCta: string;
  secondaryCta: string;
};

const STORAGE_KEY = "aulea-admin-store-v1";

type StoredShape = {
  products: Product[];
  siteConfig: MutableSiteConfig;
  siteContent: SiteContent;
  savedAt: string | null;
};

function cloneDefaults(): StoredShape {
  return {
    products: JSON.parse(JSON.stringify(defaultProducts)),
    siteConfig: JSON.parse(JSON.stringify(defaultSiteConfig)),
    siteContent: JSON.parse(JSON.stringify(defaultSiteContent)),
    savedAt: null,
  };
}

type AdminStore = StoredShape & {
  isHydrated: boolean;
  addProduct: (product: Product) => void;
  updateProduct: (slug: string, product: Product) => void;
  deleteProduct: (slug: string) => void;
  updateSiteConfig: (patch: Partial<MutableSiteConfig>) => void;
  updateSiteContent: (patch: Partial<SiteContent>) => void;
  resetProducts: () => void;
  resetSiteConfig: () => void;
  resetSiteContent: () => void;
  resetAll: () => void;
};

const AdminStoreContext = createContext<AdminStore | null>(null);

export function AdminStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StoredShape>(cloneDefaults);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // localStorage doesn't exist during the static prerender (no `window`
    // on the server), so this read has to happen post-mount, it can't be
    // a lazy useState initializer without crashing the build.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredShape;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setState({
          products: parsed.products ?? cloneDefaults().products,
          siteConfig: { ...cloneDefaults().siteConfig, ...parsed.siteConfig },
          siteContent: { ...cloneDefaults().siteContent, ...parsed.siteContent },
          savedAt: parsed.savedAt ?? null,
        });
      }
    } catch {
      // Corrupt or unavailable localStorage, fall back to defaults silently.
    }
    setIsHydrated(true);
  }, []);

  const persist = useCallback((next: StoredShape) => {
    setState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage full or unavailable (private browsing). Edits still work
      // for this page load, they just won't survive a reload.
    }
  }, []);

  const addProduct = useCallback(
    (product: Product) => {
      setState((prev) => {
        const next = { ...prev, products: [...prev.products, product], savedAt: new Date().toISOString() };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const updateProduct = useCallback(
    (slug: string, product: Product) => {
      setState((prev) => {
        const next = {
          ...prev,
          products: prev.products.map((p) => (p.slug === slug ? product : p)),
          savedAt: new Date().toISOString(),
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const deleteProduct = useCallback(
    (slug: string) => {
      setState((prev) => {
        const next = {
          ...prev,
          products: prev.products.filter((p) => p.slug !== slug),
          savedAt: new Date().toISOString(),
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const updateSiteConfig = useCallback(
    (patch: Partial<MutableSiteConfig>) => {
      setState((prev) => {
        const next = { ...prev, siteConfig: { ...prev.siteConfig, ...patch }, savedAt: new Date().toISOString() };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const updateSiteContent = useCallback(
    (patch: Partial<SiteContent>) => {
      setState((prev) => {
        const next = { ...prev, siteContent: { ...prev.siteContent, ...patch }, savedAt: new Date().toISOString() };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const resetProducts = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, products: cloneDefaults().products, savedAt: new Date().toISOString() };
      persist(next);
      return next;
    });
  }, [persist]);

  const resetSiteConfig = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, siteConfig: cloneDefaults().siteConfig, savedAt: new Date().toISOString() };
      persist(next);
      return next;
    });
  }, [persist]);

  const resetSiteContent = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, siteContent: cloneDefaults().siteContent, savedAt: new Date().toISOString() };
      persist(next);
      return next;
    });
  }, [persist]);

  const resetAll = useCallback(() => {
    persist(cloneDefaults());
  }, [persist]);

  const value = useMemo<AdminStore>(
    () => ({
      ...state,
      isHydrated,
      addProduct,
      updateProduct,
      deleteProduct,
      updateSiteConfig,
      updateSiteContent,
      resetProducts,
      resetSiteConfig,
      resetSiteContent,
      resetAll,
    }),
    [
      state,
      isHydrated,
      addProduct,
      updateProduct,
      deleteProduct,
      updateSiteConfig,
      updateSiteContent,
      resetProducts,
      resetSiteConfig,
      resetSiteContent,
      resetAll,
    ]
  );

  return <AdminStoreContext.Provider value={value}>{children}</AdminStoreContext.Provider>;
}

export function useAdminStore() {
  const ctx = useContext(AdminStoreContext);
  if (!ctx) throw new Error("useAdminStore must be used inside AdminStoreProvider");
  return ctx;
}
