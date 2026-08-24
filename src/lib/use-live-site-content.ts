"use client";

import { useEffect, useState } from "react";
import { defaultSiteContent, type SiteContent } from "@/data/site-content";

// Same static-shell-then-live-overlay pattern as useLiveSiteConfig /
// useLiveProducts: render the build-time defaults first, then swap in
// whatever's saved in the admin panel's Website Content tab once
// /api/site-content resolves. The admin panel always PUTs the complete
// SiteContent object (never a partial patch to the API itself, see
// updateSiteContent in admin-store.tsx), so the live response always has
// full homepage/about/contact sub-objects, no deep merge needed here.
export function useLiveSiteContent(): SiteContent {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/site-content", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: SiteContent) => {
        if (!cancelled && data) setContent(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return content;
}
