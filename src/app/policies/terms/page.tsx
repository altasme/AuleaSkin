import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <Section className="pt-14">
      <SectionHeading
        eyebrow="Policy — Draft"
        title="Terms of Service"
        description="Draft skeleton only. Confirm legal business name, registration details, and terms with the client before publishing."
      />
      <div className="max-w-2xl space-y-6 text-ink-soft leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink">About These Terms</h2>
          <p className="mt-2">
            These terms govern use of the {siteConfig.businessName} website, operated by{" "}
            {siteConfig.legalName}.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Orders & Payment</h2>
          <p className="mt-2">
            [Pending — Aulea&apos;s own checkout is the confirmed model (spec §2); terms here depend
            on which payment methods and COD terms are finalized (§18–20).]
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Product Information</h2>
          <p className="mt-2">
            We aim for accuracy but do not guarantee that product descriptions are error-free.
            [Refine with client input.]
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Limitation of Liability</h2>
          <p className="mt-2">[Pending legal review.]</p>
        </div>
      </div>
    </Section>
  );
}
