import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Order Confirmation" };

// Static template only — not the result of a real order. There is no
// backend/order system wired up yet (spec E1, E5), so this page exists to
// show what a confirmation will look like, not to confirm anything real.
// Linked from the checkout preview; never reached by completing an
// actual purchase.
export default function OrderConfirmationPage() {
  return (
    <Section className="pt-14 text-center">
      <div className="mx-auto max-w-lg rounded-sm border border-ink/12 bg-cream-deep p-10">
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-navy/70">
          Template preview — not a real order
        </p>
        <h1 className="mt-3 font-display text-3xl text-ink">Thank you for your order!</h1>
        <p className="mt-3 text-ink/70 leading-relaxed">
          Order <span className="text-ink">#AULEA-000000</span> has been received. A confirmation
          will be sent to your email — for Cash on Delivery orders, we may follow up to confirm
          details before dispatch (spec E3).
        </p>
        <p className="mt-6 text-sm text-ink/70">
          Questions? Reach us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline underline-offset-4">
            {siteConfig.contactEmail}
          </a>
        </p>
        <div className="mt-8">
          <LinkButton href="/products" variant="secondary">
            Continue Shopping
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
