import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site is currently static/SSG (no API routes,
  // no server-side cart/checkout, see docs/deployment.md). This lets
  // Cloudflare Pages serve it directly with no adapter or Workers runtime.
  // If Phase 2 adds real server rendering or API routes, this needs to
  // change (e.g. to @cloudflare/next-on-pages).
  output: "export",
  images: {
    // Static export can't use Next's image optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
