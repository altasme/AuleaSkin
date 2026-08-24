"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductDetailView } from "@/components/ProductDetailView";
import type { Product } from "@/data/products";

// Static fallback for a product slug that didn't exist at the last build,
// so it has no page of its own under out/products/. Cloudflare Pages
// serves *this* page's built HTML for any /products/<unknown-slug>
// request (see functions/products/[slug].ts) while the browser's address
// bar keeps showing the real slug, this component never trusts its own
// build-time route, it reads the actual URL and fetches live. Lives
// outside /products/ on purpose, an underscore-prefixed folder under
// products/ is a Next.js "private segment" and never gets built as a
// route at all, and a plain folder there would risk colliding with a
// real product slug. See docs/admin-panel.md, "New products before the
// next rebuild".
type State =
  | { status: "loading" }
  | { status: "found"; product: Product; related: Product[] }
  | { status: "not-found" };

export default function ProductFallback() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const slug = window.location.pathname.split("/").filter(Boolean).pop() ?? "";
    let cancelled = false;

    fetch("/api/products", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((allProducts: Product[]) => {
        if (cancelled) return;
        const product = allProducts.find((p) => p.slug === slug);
        if (!product) {
          setState({ status: "not-found" });
          return;
        }
        document.title = product.name;
        const sameCategory = allProducts.filter(
          (p) => p.slug !== product.slug && p.category === product.category
        );
        const related = (
          sameCategory.length > 0
            ? sameCategory
            : allProducts.filter((p) => p.slug !== product.slug)
        ).slice(0, 3);
        setState({ status: "found", product, related });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "not-found" });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center text-sm text-ink/60 sm:px-10 lg:px-16">
        Loading product…
      </div>
    );
  }

  if (state.status === "not-found") {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10 lg:px-16">
        <h1 className="font-display text-2xl text-ink">Product not found</h1>
        <p className="mt-2 text-ink/70">This product may have been removed or renamed.</p>
        <Link
          href="/products"
          className="mt-6 inline-block text-sm font-medium text-navy underline underline-offset-4"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return <ProductDetailView product={state.product} related={state.related} />;
}
