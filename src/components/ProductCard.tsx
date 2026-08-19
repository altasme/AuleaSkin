"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { trackEvent } from "@/lib/analytics";

// Editorial, not marketplace (spec D4): large clean imagery, minimal
// borders, soft hover. Product image areas use White, the one place
// spec A1 calls for it ("use sparingly; prefer Cream" elsewhere).
export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.slug);
    trackEvent("AddToCart", { slug: product.slug, name: product.name });
  }

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-md bg-white transition-opacity group-hover:opacity-90">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover p-4"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg text-ink">{product.name}</h3>
          <p className="mt-1 text-sm text-ink/70">{product.shortDescription}</p>
          <p className="mt-1 text-sm font-medium text-navy">{product.priceDisplay}</p>
        </div>
        <button
          type="button"
          onClick={handleQuickAdd}
          aria-label={`Add ${product.name} to cart`}
          className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink/70 transition-colors hover:border-navy hover:text-navy"
        >
          +
        </button>
      </div>
    </Link>
  );
}
