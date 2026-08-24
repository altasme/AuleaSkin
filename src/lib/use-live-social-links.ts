"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export type SocialLinks = { instagram: string; tiktok: string; facebook: string; shopee: string };

// Same static-shell-then-live-overlay pattern as useLiveProducts
// (src/lib/use-live-products.ts): render the build-time siteConfig first
// (fast, works with no JS), then swap in whatever's actually saved in the
// admin panel's Business Info tab once /api/site-config resolves. Scoped
// to just `social` rather than the whole site-config object, this is the
// one Business Info slice with a live public consumer so far, see
// docs/admin-panel.md, "What's actually live on the storefront".
export function useLiveSocialLinks(): SocialLinks {
  const [social, setSocial] = useState<SocialLinks>(siteConfig.social);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/site-config", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: { social?: Partial<SocialLinks> }) => {
        if (!cancelled && data.social) {
          setSocial((prev) => ({ ...prev, ...data.social }));
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return social;
}
