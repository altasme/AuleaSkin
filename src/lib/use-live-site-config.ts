"use client";

import { useEffect, useState } from "react";
import { siteConfig, type SiteConfig } from "@/lib/site-config";

// Static-shell-then-live-overlay, same pattern as useLiveProducts
// (src/lib/use-live-products.ts): render the build-time siteConfig first
// (fast, works with no JS), then swap in whatever's actually saved in the
// admin panel's Business Info tab once /api/site-config resolves. Every
// consumer of Business Info data (Header, Footer, page copy, policy
// pages) reads through this one hook instead of each doing its own
// fetch, see docs/admin-panel.md, "What's actually live on the
// storefront".
export function useLiveSiteConfig(): SiteConfig {
  // siteConfig is `as const` (deliberately, for compile-time literal
  // safety on the static default, see site-config.ts), so its inferred
  // type has readonly arrays and narrow literals that don't structurally
  // match SiteConfig's mutable shape, same cast admin-store.tsx already
  // uses for the same reason.
  const [config, setConfig] = useState<SiteConfig>(siteConfig as unknown as SiteConfig);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/site-config", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: SiteConfig) => {
        if (!cancelled && data) setConfig(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return config;
}
