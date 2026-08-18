import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Shipping & Returns" };

export default function ShippingReturnsPage() {
  return (
    <Section className="pt-14">
      <SectionHeading
        eyebrow="Policy, Draft"
        title="Shipping & Returns"
        description="Draft only. Returns terms must match Aulea's actual fulfillment terms before publishing, see spec H3. A generic returns policy is not acceptable for cosmetics."
      />
      <div className="max-w-2xl space-y-6 text-ink/70 leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink">Shipping</h2>
          <p className="mt-2">
            Ships nationwide, including provinces, via {siteConfig.couriers.join(", ")}. Fees
            depend on location, courier, and arrangement. Free shipping applies on orders ₱
            {siteConfig.freeShippingThreshold}+ (subject to courier arrangement, not an
            unconditional guarantee unless confirmed at checkout, spec E4).
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Payment Methods</h2>
          <p className="mt-2">
            Aulea can accommodate {siteConfig.paymentMethods.join(", ")}, but only methods that
            are technically configured and operational are shown as available at checkout (spec
            E2). See the checkout page for current status.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Cash on Delivery</h2>
          <p className="mt-2">
            COD is offered nationwide where courier coverage allows. Because nationwide COD for a
            new brand invites mistaken or bogus orders, orders may go through a short
            confirmation step before dispatch, reachable phone and email are required at
            checkout for this reason (spec E3).
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Returns & Refunds</h2>
          <p className="mt-2">
            [Pending client confirmation. Note for drafting: under the Philippine Consumer Act
            (RA 7394) and DTI rules, opened cosmetics are commonly non-returnable on hygiene
            grounds. This section will reflect Aulea&apos;s actual policy, not a generic
            template, see spec C2/G4.]
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Order Cancellations</h2>
          <p className="mt-2">[Pending client input.]</p>
        </div>
      </div>
    </Section>
  );
}
