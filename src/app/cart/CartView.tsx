"use client";

import { LinkButton } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";
import { Section, SectionHeading } from "@/components/Section";
import { getProductBySlug, type Product } from "@/data/products";
import { useCart, type CartLine } from "@/lib/cart-context";

export function CartView() {
  const { lines, setQuantity, removeItem } = useCart();

  if (lines.length === 0) {
    return (
      <Section className="pt-14">
        <SectionHeading eyebrow="Cart" title="Your cart" />
        <div className="max-w-xl rounded-sm border border-line bg-sand/40 p-8">
          <p className="text-ink-soft leading-relaxed">
            Your cart is empty.
          </p>
          <div className="mt-6">
            <LinkButton href="/products" variant="secondary">
              Continue Shopping
            </LinkButton>
          </div>
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
        <div className="lg:col-span-2 divide-y divide-line border-y border-line">
          {items.map(({ line, product }) => (
            <div key={product.slug} className="flex gap-4 py-6">
              <div className="w-24 shrink-0">
                <Placeholder label="Photo" aspect="aspect-square" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-sage">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-serif text-lg text-ink">{product.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{product.priceDisplay}</p>
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-line">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      className="px-3 py-1.5 text-ink-soft hover:text-ink"
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
                      className="px-3 py-1.5 text-ink-soft hover:text-ink"
                      onClick={() => setQuantity(product.slug, line.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-xs text-ink-soft underline underline-offset-4 hover:text-ink"
                    onClick={() => removeItem(product.slug)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-sm border border-line bg-sand/40 p-6">
          <h3 className="font-serif text-lg text-ink">Order summary</h3>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            [Prices pending client input — subtotal will calculate automatically once real
            prices are in <code>src/data/products.ts</code>.]
          </p>
          <div className="mt-6 border-t border-line pt-4">
            <p className="text-xs text-ink-soft leading-relaxed">
              Checkout isn&apos;t built yet: the spec (§9.1) requires a checkout-vs-marketplace
              decision — own checkout, marketplace routing, or hybrid — before that flow is
              built. See docs/customization-template.md.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 w-full cursor-not-allowed rounded-full bg-ink/20 px-6 py-3 text-sm font-medium text-ink/50"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
