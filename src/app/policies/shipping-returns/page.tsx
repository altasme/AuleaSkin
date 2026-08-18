import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Shipping & Returns" };

export default function ShippingReturnsPage() {
  return (
    <Section className="pt-14">
      <SectionHeading
        eyebrow="Policy — Draft"
        title="Shipping & Returns"
        description="Draft only. Returns terms must match Aulea's actual fulfillment terms before publishing — see spec §41. A generic returns policy is not acceptable for cosmetics."
      />
      <div className="max-w-2xl space-y-6 text-ink-soft leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink">Shipping</h2>
          <p className="mt-2">
            Ships nationwide, including provinces, via {siteConfig.couriers.join(", ")}. Fees
            depend on location, courier, and arrangement. Free shipping applies on orders ₱
            {siteConfig.freeShippingThreshold}+ (subject to courier arrangement).
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Cash on Delivery</h2>
          <p className="mt-2">
            COD is offered nationwide where courier coverage allows. Orders may go through a
            short confirmation step before dispatch to protect against mistaken or bogus orders
            (spec §20) — reachable phone and email are required at checkout for this reason.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Returns & Refunds</h2>
          <p className="mt-2">
            [Pending client confirmation. Note for drafting: under the Philippine Consumer Act
            (RA 7394) and DTI rules, opened cosmetics are commonly non-returnable on hygiene
            grounds. This section will reflect Aulea&apos;s actual policy, not a generic
            template — see spec §41.]
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
