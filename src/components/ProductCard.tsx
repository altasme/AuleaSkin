import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

// Editorial, not marketplace (spec D4): large clean imagery, minimal
// borders, soft hover. Product image areas use White, the one place
// spec A1 calls for it ("use sparingly; prefer Cream" elsewhere).
export function ProductCard({ product }: { product: Product }) {
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
      <div className="mt-4">
        <h3 className="min-h-[3.5rem] font-display text-lg leading-snug text-ink line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 min-h-[2.5rem] text-sm text-ink/70 line-clamp-2">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
