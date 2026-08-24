// Ambient types for Cloudflare Pages Functions (functions/**), a separate
// runtime from the Next.js app in src/ (see functions/tsconfig.json, kept
// out of the root tsconfig.json so `next build`'s TypeScript pass doesn't
// try to check Workers-runtime code against DOM lib types).

/// <reference types="@cloudflare/workers-types" />

interface Env {
  // Workers KV namespace holding the admin panel's data, bind it under
  // this exact name (Cloudflare dashboard: Settings > Functions > KV
  // namespace bindings, or wrangler.toml for local dev). See
  // docs/admin-panel.md for setup.
  AULEA_DATA: KVNamespace;

  // Admin credentials, set as encrypted secrets (Settings > Environment
  // variables > Add secret), never committed and never shipped to the
  // client, that's the whole point of moving auth server-side.
  ADMIN_USERNAME: string;
  ADMIN_PASSWORD: string;

  // Cloudflare Pages provides this automatically to every Function, no
  // dashboard setup needed, it fetches this project's own deployed
  // static assets (see functions/products/[slug].ts).
  ASSETS: Fetcher;
}
