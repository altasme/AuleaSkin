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
          description="New brands often start with few or no reviews. Here's how we build credibility honestly — no invented testimonials, no fabricated numbers (see spec §13, §14)."
        />
        <TrustStack />
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Regulatory" title="Regulatory standing" />
        <p className="max-w-2xl text-ink-soft leading-relaxed">{siteConfig.cpnStatus}</p>
        <p className="mt-3 max-w-2xl text-sm text-ink-soft leading-relaxed">
          Cosmetics sold in the Philippines are FDA-notified, not &ldquo;FDA-approved&rdquo; —
          this site will never use that phrase. Any efficacy claim published here must map to
          client-supplied written substantiation. See docs/compliance-notes.md.
        </p>
      </Section>
    </>
  );
}
