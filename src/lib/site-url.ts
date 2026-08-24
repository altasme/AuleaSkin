// Real incident: NEXT_PUBLIC_SITE_URL was set on the Cloudflare Pages
// project as a bare domain ("aulea.altasme.com", no scheme), and
// layout.tsx passed it straight to `new URL()` for metadataBase. That
// throws on a schemeless string, which broke `next build` itself, so
// every deploy after that failed silently from the outside, Cloudflare
// just showed "no deployment available" with no obvious cause. Centralizing
// the normalization here (add https:// if missing, strip a trailing
// slash) means this can't happen again regardless of how the env var
// gets typed into the dashboard, and every consumer (layout metadata,
// robots.ts, sitemap.ts) reads the same corrected value instead of each
// repeating its own fallback/parsing.
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "https://example.com";
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withScheme.replace(/\/+$/, "");
}
