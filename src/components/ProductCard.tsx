import Link from "next/link";
import { Placeholder } from "./Placeholder";
import type { Product } from "@/data/products";

// Editorial, not marketplace (spec D4): large clean imagery, minimal
// borders, soft hover. Product image areas use White — the one place
// spec A1 calls for it ("use sparingly; prefer Cream" elsewhere).
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative rounded-md bg-white p-4 transition-opacity group-hover:opacity-90">
        {product.complianceHold && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-cream px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.05em] text-ink/70">
            ⚠ Compliance hold
          </span>
        )}
        <Placeholder label={`Product photo — ${product.name}`} bare />
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-ink/70">
        {product.category} · {product.size}
      </p>
      <h3 className="mt-1 font-display text-lg text-ink">{product.name}</h3>
      <p className="mt-1 text-sm font-medium text-navy">{product.priceDisplay}</p>
    </Link>
  );
}
