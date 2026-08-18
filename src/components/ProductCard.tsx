import Link from "next/link";
import { Placeholder } from "./Placeholder";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative rounded-md bg-panel p-4 transition-colors group-hover:bg-panel/70">
        {product.complianceHold && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-cream px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.05em] text-ink-soft">
            ⚠ Compliance hold
          </span>
        )}
        <Placeholder label={`Product photo — ${product.name}`} bare />
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-ink-soft">
        {product.category} · {product.size}
      </p>
      <h3 className="mt-1 font-display text-lg text-ink">{product.name}</h3>
      <p className="mt-1 text-sm text-ink-soft">{product.priceDisplay}</p>
    </Link>
  );
}
