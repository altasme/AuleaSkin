"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { trackEvent } from "@/lib/analytics";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/data/products";

export function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    trackEvent("ViewContent", { content_ids: [product.slug], content_name: product.name });
  }, [product.slug, product.name]);

  function handleAddToCart() {
    addItem(product.slug, quantity);
    trackEvent("AddToCart", {
      content_ids: [product.slug],
      content_name: product.name,
      quantity,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product.slug, quantity);
    trackEvent("AddToCart", {
      content_ids: [product.slug],
      content_name: product.name,
      quantity,
    });
    router.push("/checkout");
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center rounded-full border border-ink/12">
        <button
          type="button"
          aria-label="Decrease quantity"
          className="px-3 py-2.5 text-ink/70 hover:text-ink"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          −
        </button>
        <span className="min-w-6 text-center text-sm text-ink">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          className="px-3 py-2.5 text-ink/70 hover:text-ink"
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </button>
      </div>
      <Button onClick={handleAddToCart}>{justAdded ? "Added ✓" : "Add to Cart"}</Button>
      <Button onClick={handleBuyNow} variant="secondary">
        Buy Now
      </Button>
    </div>
  );
}
