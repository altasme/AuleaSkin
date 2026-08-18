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
          eyebrow="About Aulea"
          title="The story behind Aulea Skin"
          description={siteConfig.brandPromise}
        />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Placeholder label="Founder / brand photo — pending" aspect="aspect-[4/5]" />
          <div className="space-y-4 text-ink-soft leading-relaxed">
            <p>
              Aulea Skin was established in {siteConfig.established}, created from the
              founder&apos;s personal experience with sensitive skin and different skin
              concerns. Finding products that felt comfortable — without costing too much —
              wasn&apos;t easy, and that gap is why Aulea exists.
            </p>
            <p>
              Two problems, one brand: <strong className="text-ink">accessibility</strong> —
              reasonably priced options that don&apos;t feel out of reach — and{" "}
              <strong className="text-ink">simplicity</strong> — skincare that fits an everyday
              routine without feeling complicated.
            </p>
            <p>
              Aulea isn&apos;t positioned as luxurious or exclusive. It&apos;s built to be
              approachable, comfortable to use, and worth the money — everyday skincare, not an
              intimidating regimen. That&apos;s the idea behind the tagline:{" "}
              <span className="font-display text-ink">&ldquo;{siteConfig.tagline}&rdquo;</span>
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Where We're Headed" title="A trusted, accessible skincare brand" />
        <p className="max-w-2xl text-ink-soft leading-relaxed">
          Long-term, Aulea intends to grow its product range, introduce new items, and build a
          community around its accessibility mission — while staying true to what it started as.
          This website is the first foundation for that, not the whole plan; the catalog and
          site structure are built to expand rather than to box the brand into today&apos;s
          three SKUs.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="What guides Aulea" />
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="border border-line rounded-sm p-6">
            <h3 className="font-display text-lg text-ink">Accessibility</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              Reasonably priced, accessible options — good skincare shouldn&apos;t require a
              luxury budget.
            </p>
          </div>
          <div className="border border-line rounded-sm p-6">
            <h3 className="font-display text-lg text-ink">Simplicity</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              Skincare that fits into an everyday routine without feeling complicated or
              overwhelming.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
