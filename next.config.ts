import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site is currently static/SSG (no API routes,
  // no server-side cart/checkout, see docs/deployment.md). This lets
  // Cloudflare Pages serve it directly with no adapter or Workers runtime.
  // If Phase 2 adds real server rendering or API routes, this needs to
  // change (e.g. to @cloudflare/next-on-pages).
  output: "export",
  images: {
    // Static export can't use Next's image optimization server. No
    // next/image usage yet (only placeholder boxes), but set this so it
    // doesn't break the moment real product photography is dropped in.
    unoptimized: true,
  },
};

export default nextConfig;
