import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <Section className="pt-14">
        <SectionHeading eyebrow="About Us" title="Our Story" description={siteConfig.brandPromise} />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Placeholder label="Founder / brand photo — pending" aspect="aspect-[4/5]" />
          <div className="space-y-4 text-ink/70 leading-relaxed">
            <p>
              I started Aulea because of my own experience with sensitive skin. Finding products
              that actually felt comfortable — without costing too much — wasn&apos;t easy. I
              tried a lot of things that either irritated my skin or asked me to spend more than
              I could justify for a daily routine. That gap is why Aulea exists.
            </p>
            <p>
              I believe skincare shouldn&apos;t have to be complicated or expensive to work.
              Aulea is built around two things I wished existed when I was looking:{" "}
              <strong className="text-ink">accessibility</strong> — reasonably priced products
              that don&apos;t feel out of reach — and{" "}
              <strong className="text-ink">simplicity</strong> — a routine that fits into an
              actual day, not a ten-step ritual.
            </p>
            <p>
              Aulea isn&apos;t trying to be luxurious or exclusive. It&apos;s meant to be
              approachable — skincare that feels far more premium than the price suggests, made
              by someone who needed it to exist. That&apos;s the idea behind{" "}
              <span className="font-display text-ink">&ldquo;{siteConfig.tagline}&rdquo;</span>
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-cream-deep">
        <SectionHeading eyebrow="Where We're Headed" title="A trusted, accessible skincare brand" />
        <p className="max-w-2xl text-ink/70 leading-relaxed">
          Long-term, I want Aulea to grow its range, introduce new products, and build a real
          community around that accessibility belief — while staying true to why it started.
          This website is the foundation for that, not the whole plan; the catalog and site
          structure are built to expand rather than box the brand into today&apos;s lineup.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="What Guides Aulea" title="Accessible. Simple. Genuine." />
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="rounded-md bg-mist p-6">
            <h3 className="font-display text-lg text-ink">Accessibility</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Reasonably priced, accessible options — good skincare shouldn&apos;t require a
              luxury budget.
            </p>
          </div>
          <div className="rounded-md bg-mist p-6">
            <h3 className="font-display text-lg text-ink">Simplicity</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              A routine that fits into an everyday life without feeling complicated or
              overwhelming.
            </p>
          </div>
          <div className="rounded-md bg-mist p-6">
            <h3 className="font-display text-lg text-ink">Authenticity</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              A brand built from real experience, not a template — every product decision starts
              from what actually worked.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
