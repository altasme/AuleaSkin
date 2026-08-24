"use client";

import { useLiveProducts } from "@/lib/use-live-products";
import { getRelatedProducts, type Product } from "@/data/products";
import { ProductDetailView } from "./ProductDetailView";

// Closes the one gap useLiveProducts' listing surfaces (Shop grid,
// homepage) never covered: a product's own detail page. useLiveProducts
// already implements static-shell-then-live-overlay (defaults to the
// build-time products array, replaced once /api/products resolves), so
// before that resolves this renders the exact same thing the old fully-
// static page did (the slug is guaranteed present in the static import,
// [slug]/page.tsx only renders this for a slug generateStaticParams
// already knows about). After it resolves, an edited name/description/
// image/price shows up here too, not just in listings. `initialProduct`
// is a defensive fallback only, for the edge case where the product was
// deleted from the live database after this page's build, it should
// never actually get used.
export function LiveProductDetail({ slug, initialProduct }: { slug: string; initialProduct: Product }) {
  const products = useLiveProducts();
  const product = products.find((p) => p.slug === slug) ?? initialProduct;
  const related = getRelatedProducts(product, products);

  return <ProductDetailView product={product} related={related} />;
}
