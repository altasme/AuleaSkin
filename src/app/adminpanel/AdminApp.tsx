"use client";

import { useEffect, useState } from "react";
import { AdminStoreProvider, useAdminStore } from "@/lib/admin-store";
import { isCloudinaryConfigured } from "@/lib/cloudinary";
import { ADMIN_SESSION_KEY } from "./auth";
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
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAuthed(window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "1");
    } catch {
      setAuthed(false);
    }
  }, []);

  if (authed === null) return null;
  if (!authed) return <LoginGate onSuccess={() => setAuthed(true)} />;

  return (
    <AdminStoreProvider>
      <AdminShell onLogout={() => setAuthed(false)} />
    </AdminStoreProvider>
  );
}

function AdminShell({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>("products");
  const { isHydrated } = useAdminStore();
  const cloudinaryReady = isCloudinaryConfigured();

  function handleLogout() {
    try {
      window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {
      // Nothing to clean up if storage isn't available.
    }
    onLogout();
  }

  if (!isHydrated) {
    return <div className="flex min-h-screen items-center justify-center text-sm text-gray-400">Loading&hellip;</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-label text-xs tracking-[0.15em] text-navy/70">AULÉA SKIN</p>
            <h1 className="font-display text-xl text-ink">Admin Panel</h1>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="text-sm font-medium text-gray-500 hover:text-navy"
          >
            Sign out
          </button>
        </div>
        <div className="mx-auto flex max-w-6xl gap-1 px-6">
          <TabButton active={tab === "products"} onClick={() => setTab("products")}>
            Products &amp; Pricing
          </TabButton>
          <TabButton active={tab === "content"} onClick={() => setTab("content")}>
            Website Content
          </TabButton>
          <TabButton active={tab === "export"} onClick={() => setTab("export")}>
            Export &amp; Sync
          </TabButton>
        </div>
      </header>

      {!cloudinaryReady && (
        <div className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-xs text-amber-800">
          Image uploads aren&apos;t connected yet: Cloudinary needs an unsigned upload preset. See{" "}
          <code>docs/admin-panel.md</code>.
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-blue-900">
          Changes here save to this browser only, there&apos;s no database yet. Use{" "}
          <strong>Export &amp; Sync</strong> to hand your edits to a developer once you&apos;re happy
          with them.
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {tab === "products" && <ProductsPanel />}
        {tab === "content" && <SiteContentPanel />}
        {tab === "export" && <ExportPanel />}
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
