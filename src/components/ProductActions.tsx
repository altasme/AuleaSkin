"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import type { Product } from "@/data/products";

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 font-label text-base tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

export function ProductActions({ product }: { product: Product }) {
  useEffect(() => {
    trackEvent("ViewContent", { content_ids: [product.slug], content_name: product.name });
  }, [product.slug, product.name]);

  function handleBuyOnShopee() {
    trackEvent("InitiateCheckout", {
      content_ids: [product.slug],
      content_name: product.name,
    });
  }

  return (
    <a
      href={product.shopeeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleBuyOnShopee}
      className={`${base} bg-navy text-cream hover:bg-navy-deep`}
    >
      Buy on Shopee
    </a>
  );
}
