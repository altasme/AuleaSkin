"use client";

import { useEffect, useState } from "react";
import { products as staticProducts, type Product } from "@/data/products";

// Renders the build-time catalog first (fast, works with no JS), then
// swaps in whatever's actually in the database once the fetch resolves,
// so a product added or edited in the admin panel shows up on the
// storefront without a full site rebuild. See docs/admin-panel.md,
// "Storefront now reads live data" for what this does and doesn't cover
// (a brand-new product's own /products/<slug> page still needs a rebuild
// to exist as a URL, this only covers listing surfaces).
export function useLiveProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>(staticProducts);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/products")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: Product[]) => {
        if (!cancelled && Array.isArray(data)) setProducts(data);
      })
      .catch(() => {
        // Live fetch failed (offline, KV not set up yet, etc.), the
        // build-time catalog already rendered, nothing more to do.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return products;
}
