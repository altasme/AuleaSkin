import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { TrustStack } from "@/components/TrustStack";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Trust & Reviews" };

export default function TrustPage() {
  return (
    <>
      <Section className="pt-14">
        <SectionHeading
          eyebrow="Trust & Reviews"
          title="Why you can trust Aulea Skin"
          description="Aulea's earlier social pages were lost and are being recovered, so this page leans on what the brand still owns: real product information, a real founder story, and its existing Shopee track record — no invented testimonials, no fabricated numbers."
        />
        <TrustStack />
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Shopee Track Record" title="Rated on Shopee" />
        <div className="max-w-2xl rounded-sm border border-line bg-cream p-6">
          <p className="text-ink-soft leading-relaxed">
            [Shopee rating and review count pending — pull the real figures from the store
            before publishing. If the rating is weak or sparse, omit this section rather than
            spin it (spec §26).]
          </p>
          <a
            href={siteConfig.social.shopee}
            className="mt-4 inline-block text-sm font-medium text-indigo underline underline-offset-4"
          >
            Visit the Aulea Skin Shopee store ↗
          </a>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Regulatory" title="Regulatory standing" />
        <p className="max-w-2xl text-ink-soft leading-relaxed">{siteConfig.cpnStatus}</p>
        <p className="mt-3 max-w-2xl text-sm text-ink-soft leading-relaxed">
          Cosmetics sold in the Philippines are FDA-notified, not &ldquo;FDA-approved&rdquo; —
          this site will never use that phrase. &ldquo;Organic,&rdquo; the SPF 30 figure, and any
          brightening or pore-minimizing language stay off the site until the client confirms
          they hold up and supplies CPN + written substantiation. See docs/compliance-notes.md.
        </p>
      </Section>
    </>
  );
}
