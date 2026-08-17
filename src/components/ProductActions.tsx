"use client";

import { useEffect } from "react";
import { Button } from "./Button";
import { trackEvent } from "@/lib/analytics";
import type { Product } from "@/data/products";

export function ProductActions({ product }: { product: Product }) {
  useEffect(() => {
    trackEvent("ViewContent", { content_ids: [product.slug], content_name: product.name });
  }, [product.slug, product.name]);

  return (
    <Button
      onClick={() =>
        trackEvent("AddToCart", { content_ids: [product.slug], content_name: product.name })
      }
      className="w-full sm:w-auto"
    >
      Add to Cart
    </Button>
  );
}
