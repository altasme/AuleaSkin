import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = { title: "Shipping & Returns" };

export default function ShippingReturnsPage() {
  return (
    <Section className="pt-14">
      <SectionHeading
        eyebrow="Policy — Draft"
        title="Shipping & Returns"
        description="Draft skeleton only. Must be rewritten to match the client's actual product category and fulfillment terms before publishing — see spec §11.5. A generic returns policy is not acceptable for cosmetics."
      />
      <div className="prose-sm max-w-2xl space-y-6 text-ink-soft leading-relaxed">
        <div>
          <h2 className="font-serif text-xl text-ink">Shipping</h2>
          <p className="mt-2">
            [Shipping areas, carriers, timelines, and fees — pending client input.]
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl text-ink">Returns & Refunds</h2>
          <p className="mt-2">
            [Pending client input. Note for drafting: under the Philippine Consumer Act (RA
            7394) and DTI rules, opened cosmetics are commonly non-returnable on hygiene
            grounds. Confirm the client&apos;s actual policy — do not publish this draft
            unchanged.]
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl text-ink">Order Cancellations</h2>
          <p className="mt-2">[Pending client input.]</p>
        </div>
      </div>
    </Section>
  );
}
