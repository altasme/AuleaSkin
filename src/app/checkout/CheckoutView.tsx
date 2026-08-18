"use client";

// This is a flow PREVIEW, not a live checkout. Spec E2 is explicit: "Only
// enable methods that are technically configured and operational — never
// show an unconfigured method." Nothing here is wired to a real payment
// processor, order database, or email service (this is a static export
// with no backend) — see docs/intake-checklist.md. The form is built and
// laid out per spec D5/E1-E3 so the intended flow can be reviewed, but
// submission is disabled rather than faking a completed order.

import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { getProductBySlug } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import { useCart } from "@/lib/cart-context";

export function CheckoutView() {
  const { lines } = useCart();
  const items = lines
    .map((line) => ({ line, product: getProductBySlug(line.slug) }))
    .filter((entry) => Boolean(entry.product));

  return (
    <Section className="pt-14">
      <SectionHeading eyebrow="Checkout" title="Checkout" />

      <div className="mb-8 rounded-sm border border-navy/30 bg-navy/5 p-4 text-sm text-ink/70">
        <strong className="text-ink">Preview only.</strong> This checkout isn&apos;t connected to
        a payment processor or order system yet — no payment methods are technically configured
        (spec E2). See{" "}
        <Link href="/order-confirmation" className="underline underline-offset-4 hover:text-ink">
          what a confirmation will look like
        </Link>
        .
      </div>

      {items.length === 0 ? (
        <div className="max-w-xl rounded-sm border border-ink/12 bg-cream-deep p-8">
          <p className="text-ink/70 leading-relaxed">Your cart is empty.</p>
          <div className="mt-6">
            <LinkButton href="/products" variant="secondary">
              Continue Shopping
            </LinkButton>
          </div>
        </div>
      ) : (
        <form className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="font-display text-xl text-ink mb-4">Contact</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" type="email" name="email" required />
                <Field label="Phone" type="tel" name="phone" required />
              </div>
              <p className="mt-2 text-xs text-ink/70">
                Required so unconfirmed COD orders can be verified before dispatch (spec E3).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink mb-4">Shipping Address</h2>
              <div className="grid gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Address" name="address" required />
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label="City" name="city" required />
                  <Field label="Province" name="province" required />
                  <Field label="Postal code" name="postal" required />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink mb-4">Payment Method</h2>
              <div className="space-y-3">
                {siteConfig.paymentMethods.map((method, i) => (
                  <label
                    key={method}
                    className="flex items-center gap-3 rounded-sm border border-ink/12 p-4 text-sm text-ink/70"
                  >
                    <input type="radio" name="payment" disabled defaultChecked={i === 0} />
                    <span className="text-ink">{method}</span>
                    <span className="ml-auto text-xs text-ink/70">Not yet connected</span>
                  </label>
                ))}
              </div>
              <p className="mt-2 text-xs text-ink/70">
                Cash on Delivery is nationwide, subject to courier availability and applicable
                requirements (spec E3). Online methods activate once payment access is confirmed.
              </p>
            </div>
          </div>

          <div className="h-fit rounded-sm border border-ink/12 bg-cream-deep p-6">
            <h2 className="font-display text-lg text-ink mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map(({ line, product }) => (
                <div key={product!.slug} className="flex gap-3">
                  <div className="relative aspect-square w-14 shrink-0 overflow-hidden rounded-sm bg-white">
                    <Image
                      src={product!.images[0]}
                      alt={product!.name}
                      fill
                      sizes="56px"
                      className="object-cover p-1"
                    />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="text-ink">{product!.name}</p>
                    <p className="text-ink/70">
                      Qty {line.quantity} · {product!.priceDisplay}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 border-t border-ink/12 pt-4 text-xs text-ink/70">
              [Subtotal pending real prices — see src/data/products.ts.] Free shipping on orders
              ₱{siteConfig.freeShippingThreshold}+.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 w-full cursor-not-allowed rounded-full bg-ink/20 px-6 py-3 font-label text-sm tracking-wider uppercase text-ink/50"
            >
              Place Order
            </button>
          </div>
        </form>
      )}
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm text-ink/70" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-ink/12 bg-cream px-4 py-2.5 text-ink outline-none focus:border-gold"
      />
    </div>
  );
}
