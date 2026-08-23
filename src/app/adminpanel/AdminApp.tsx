"use client";

import { useEffect, useState } from "react";
import { AdminStoreProvider, useAdminStore } from "@/lib/admin-store";
import { isCloudinaryConfigured } from "@/lib/cloudinary";
import { ADMIN_SESSION_KEY, getStoredCredentials } from "./auth";
import { LoginGate } from "./LoginGate";
import { ProductsPanel } from "./ProductsPanel";
import { SiteContentPanel } from "./SiteContentPanel";
import { ExportPanel } from "./ExportPanel";

type Tab = "products" | "content" | "export";

export function AdminApp() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    // sessionStorage doesn't exist during the static prerender (no
    // `window` on the server), so this read has to happen post-mount,
    // it can't be a lazy useState initializer without crashing the build.
    // A stored credential here just means "signed in earlier this tab",
    // not proof it's still valid, the first API call re-verifies it and
    // bounces back to the login screen via onUnauthorized if not.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAuthed(getStoredCredentials() !== null);
  }, []);

  function handleUnauthorized() {
    try {
      window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {
      // Nothing to clean up if storage isn't available.
    }
    setAuthed(false);
  }

  if (authed === null) return null;
  if (!authed) return <LoginGate onSuccess={() => setAuthed(true)} />;

  return (
    <AdminStoreProvider onUnauthorized={handleUnauthorized}>
      <AdminShell onLogout={handleUnauthorized} />
    </AdminStoreProvider>
  );
}

function AdminShell({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>("products");
  const { isHydrated, isLoading, loadError, isSaving, saveError, lastSavedAt } = useAdminStore();
  const cloudinaryReady = isCloudinaryConfigured();

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center text-sm text-gray-400">Loading&hellip;</div>;
  }

  if (loadError) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="max-w-sm rounded-lg border border-red-200 bg-red-50 p-6 text-sm text-red-800">
          <p className="font-medium">Couldn&apos;t load admin data.</p>
          <p className="mt-2">{loadError}</p>
          <p className="mt-2 text-red-700/80">
            If this is a fresh setup, make sure the AULEA_DATA KV namespace is bound and the
            ADMIN_USERNAME / ADMIN_PASSWORD secrets are set, see docs/admin-panel.md.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-label text-xs tracking-[0.15em] text-navy/70">AULÉA SKIN</p>
            <h1 className="font-display text-xl text-ink">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">
              {isSaving ? "Saving…" : lastSavedAt ? `Saved ${new Date(lastSavedAt).toLocaleTimeString()}` : ""}
            </span>
            <button type="button" onClick={onLogout} className="text-sm font-medium text-gray-500 hover:text-navy">
              Sign out
            </button>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl gap-1 px-6">
          <TabButton active={tab === "products"} onClick={() => setTab("products")}>
            Products &amp; Pricing
          </TabButton>
          <TabButton active={tab === "content"} onClick={() => setTab("content")}>
            Website Content
          </TabButton>
          <TabButton active={tab === "export"} onClick={() => setTab("export")}>
            Backup &amp; Reset
          </TabButton>
        </div>
      </header>

      {!cloudinaryReady && (
        <div className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-xs text-amber-800">
          Image uploads aren&apos;t connected yet: Cloudinary needs an unsigned upload preset. See{" "}
          <code>docs/admin-panel.md</code>.
        </div>
      )}

      {saveError && (
        <div className="border-b border-red-200 bg-red-50 px-6 py-2 text-center text-xs text-red-800">
          Last save failed: {saveError}. Your edit is only reflected here until this succeeds, try
          again.
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-900">
          Changes save straight to Aulea&apos;s database (Cloudflare KV) and go live immediately,
          there&apos;s no separate publish step.
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {!isHydrated ? null : (
          <>
            {tab === "products" && <ProductsPanel />}
            {tab === "content" && <SiteContentPanel />}
            {tab === "export" && <ExportPanel />}
          </>
        )}
      </main>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
        active ? "border-navy text-navy" : "border-transparent text-gray-500 hover:text-navy"
      }`}
    >
      {children}
    </button>
  );
}
