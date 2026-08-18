import Link from "next/link";
import { Placeholder } from "./Placeholder";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Placeholder
        label={`Product photo — ${product.name}`}
        className="group-hover:opacity-90 transition-opacity"
      />
      <p className="mt-4 font-label text-sm tracking-[0.15em] text-gold">
        {product.category} · {product.size}
      </p>
      <h3 className="mt-1 font-display text-lg text-ink">{product.name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{product.priceDisplay}</p>
      {product.complianceHold && (
        <p className="mt-2 text-xs text-ink-soft">⚠ Compliance hold</p>
      )}
    </Link>
  );
}
