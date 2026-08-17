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
      <p className="mt-4 text-xs uppercase tracking-[0.15em] text-sage">
        {product.category}
      </p>
      <h3 className="mt-1 font-serif text-lg text-ink">{product.name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{product.priceDisplay}</p>
    </Link>
  );
}
