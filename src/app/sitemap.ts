import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/policies/shipping-returns",
    "/policies/privacy",
    "/policies/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}` })),
    ...products.map((p) => ({ url: `${base}/products/${p.slug}` })),
  ];
}
