"use client";

import Image from "next/image";
import { LinkButton } from "@/components/Button";
import { BagIcon } from "@/components/Icons";
import { Section, SectionHeading } from "@/components/Section";
import { getProductBySlug, type Product } from "@/data/products";
import { useCart, type CartLine } from "@/lib/cart-context";

export function CartView() {
  const { lines, setQuantity, removeItem } = useCart();

  if (lines.length === 0) {
    return (
      <Section className="pt-24 pb-24 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 text-ink/50">
          <BagIcon className="h-6 w-6" />
        </div>
        <h1 className="mt-6 font-display text-3xl text-ink">Your cart is empty</h1>
        <p className="mt-2 text-ink/70">Discover skincare made for your everyday ritual.</p>
        <div className="mt-8">
          <LinkButton href="/products">Shop The Collection</LinkButton>
        </div>
      </Section>
    );
  }

  const items = lines
    .map((line) => ({ line, product: getProductBySlug(line.slug) }))
    .filter((entry): entry is { line: CartLine; product: Product } => Boolean(entry.product));

  return (
    <Section className="pt-14">
      <SectionHeading eyebrow="Cart" title="Your cart" />

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 divide-y divide-ink/12 border-y border-ink/12">
          {items.map(({ line, product }) => (
            <div key={product.slug} className="flex gap-4 py-6">
              <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-sm bg-white">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="96px"
                  className="object-cover p-1.5"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/70">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg text-ink">{product.name}</h3>
                  <p className="mt-1 text-sm text-ink/70">{product.priceDisplay}</p>
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-ink/12">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      className="px-3 py-1.5 text-ink/70 hover:text-ink"
                      onClick={() => setQuantity(product.slug, line.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="min-w-6 text-center text-sm text-ink">
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      className="px-3 py-1.5 text-ink/70 hover:text-ink"
                      onClick={() => setQuantity(product.slug, line.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-xs text-ink/70 underline underline-offset-4 hover:text-ink"
                    onClick={() => removeItem(product.slug)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-sm border border-ink/12 bg-cream-deep p-6">
          <h3 className="font-display text-lg text-ink">Order summary</h3>
          <p className="mt-3 text-sm text-ink/70 leading-relaxed">
            [Prices pending client input. Subtotal will calculate automatically once real
            prices are in <code>src/data/products.ts</code>.]
          </p>
          <div className="mt-6 border-t border-ink/12 pt-4">
            <p className="text-xs text-ink/70 leading-relaxed">
              Aulea Skin&apos;s own checkout is the confirmed Phase 1 model (spec §2, §14). The
              checkout page below is a flow preview only, since no payment method is technically
              configured yet (spec E2). See docs/intake-checklist.md.
            </p>
            <LinkButton href="/checkout" className="mt-4 block w-full text-center">
              Proceed to Checkout
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
