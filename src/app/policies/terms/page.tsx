import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <Section className="pt-14">
      <SectionHeading
        title="Terms of Service"
        description="Composed from how this site actually works today; confirm legal business name and registration details with the client before treating as final."
      />
      <div className="max-w-2xl space-y-6 text-ink/70 leading-relaxed">
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
            This website is a catalog, not a checkout. Every order and payment is completed on
            Shopee through the linked product listing, and is governed by Shopee&apos;s own
            terms of service, not this website&apos;s. Aulea Skin does not process or store
            payment information.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Product Information</h2>
          <p className="mt-2">
            We aim for accuracy but do not guarantee that product descriptions on this site are
            error-free. The listing on Shopee is the authoritative source for price, stock, and
            variant availability at the time of your order.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Limitation of Liability</h2>
          <p className="mt-2">
            Aulea Skin isn&apos;t responsible for issues arising from the order or payment
            process itself, that&apos;s handled by Shopee under its own terms. For anything
            related to the products themselves, reach out at {siteConfig.contactEmail}.
          </p>
        </div>
      </div>
    </Section>
  );
}
