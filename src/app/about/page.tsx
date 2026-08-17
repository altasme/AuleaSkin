import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Section className="pt-14">
        <SectionHeading
          eyebrow="About"
          title={`The story behind ${siteConfig.businessName}`}
          description="[Brand story, mission, and positioning pending client input — see docs/intake-checklist.md, Brand section.]"
        />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Placeholder label="Founder / brand photo — pending" aspect="aspect-[4/5]" />
          <div className="space-y-4 text-ink-soft leading-relaxed">
            <p>[Founder story paragraph — pending.]</p>
            <p>[What the brand stands for and why it exists — pending.]</p>
            <p>[How products are made / sourced / formulated — pending.]</p>
          </div>
        </div>
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Values" title="What guides us" />
        <div className="grid gap-8 sm:grid-cols-3">
          {["[Value 1]", "[Value 2]", "[Value 3]"].map((value) => (
            <div key={value} className="border border-line rounded-sm p-6">
              <h3 className="font-serif text-lg text-ink">{value}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                [Description pending client input.]
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
