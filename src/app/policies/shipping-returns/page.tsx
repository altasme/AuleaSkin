import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Shipping & Returns" };

// Composed from how orders actually flow today (fulfilled via Shopee).
// Confirm against Aulea's real fulfillment terms before treating as
// final; see docs/compliance-notes.md for cosmetics-specific context.
export default function ShippingReturnsPage() {
  return (
    <Section className="pt-14">
      <SectionHeading
        eyebrow="Policy"
        title="Shipping & Returns"
        description="What to expect for delivery, payment, and returns when you order Auléa Skin products through Shopee."
      />
      <div className="max-w-2xl space-y-6 text-ink/70 leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink">Shipping</h2>
          <p className="mt-2">
            Every order is placed and shipped through Shopee, so shipping, tracking, and delivery
            timelines follow Shopee&apos;s own process for that listing. Aulea ships nationwide,
            including provinces, via {siteConfig.couriers.join(", ")}, with free shipping
            available on qualifying orders over ₱{siteConfig.freeShippingThreshold} where Shopee
            offers it.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Payment Methods</h2>
          <p className="mt-2">
            Payment happens on Shopee at checkout, not on this site. Shopee generally supports{" "}
            {siteConfig.paymentMethods.join(", ")}, though exact availability depends on Shopee&apos;s
            own settings at the time of your order.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Cash on Delivery</h2>
          <p className="mt-2">
            Where available, Cash on Delivery is offered through Shopee&apos;s own COD program,
            subject to Shopee&apos;s eligibility rules for your area and the specific listing.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Returns & Refunds</h2>
          <p className="mt-2">
            Returns and refunds are requested and processed through Shopee&apos;s own Return &
            Refund system for your order. As with most cosmetics, opened products are commonly
            non-returnable on hygiene grounds under Philippine Consumer Act (RA 7394) and DTI
            guidance, actual eligibility follows Shopee&apos;s policy at the time of your order.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Order Cancellations</h2>
          <p className="mt-2">
            Cancel or modify an order directly through Shopee before it ships. If you need help,
            reach out at {siteConfig.contactEmail}.
          </p>
        </div>
      </div>
    </Section>
  );
}
