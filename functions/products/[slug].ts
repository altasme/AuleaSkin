// Static export can only pre-render pages for products that existed at
// the last build (see generateStaticParams in
// src/app/(site)/products/[slug]/page.tsx), so a product added since then
// has no matching .html file in the deploy. This Function's route
// (/products/:slug) matches every product URL, existing and new alike,
// tested locally and confirmed: a matching Function here runs even when a
// static asset also exists at the same path, it does NOT defer to the
// static asset automatically. So this checks for the real static page
// itself first, existing products keep loading their real prebuilt page,
// completely untouched, byte for byte.
//
// Only when that lookup genuinely 404s (a slug with no static file, i.e.
// a product added since the last build) does this serve the prebuilt
// client-rendered fallback shell (src/app/(site)/product-fallback/page.tsx)
// instead of a hard 404. That shell reads the real slug from the browser
// URL and fetches the matching product live from /api/products. See
// docs/admin-panel.md, "New products before the next rebuild".
export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const assetResponse = await env.ASSETS.fetch(request);
  if (assetResponse.status !== 404) {
    return assetResponse;
  }

  const shellUrl = new URL("/product-fallback", request.url);
  return env.ASSETS.fetch(new Request(shellUrl, request));
};
