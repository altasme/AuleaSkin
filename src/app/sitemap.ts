import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/trust",
    "/faq",
    "/contact",
    "/cart",
    "/policies/shipping-returns",
    "/policies/privacy",
    "/policies/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}` })),
    ...products.map((p) => ({ url: `${base}/products/${p.slug}` })),
  ];
}
