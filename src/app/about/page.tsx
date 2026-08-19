import type { Metadata } from "next";
import Image from "next/image";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <Section className="pt-14 pb-10 bg-cream-deep text-center">
        <SectionHeading
          align="center"
          eyebrow="Our Story"
          title="Skincare, made for real life"
          description={`Aulea Skin began in ${siteConfig.established}, born from a personal journey with sensitive skin and a belief that taking care of yourself shouldn't feel complicated or out of reach.`}
        />
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
            <Image
              src="/images/founder/founder.webp"
              alt="Aulea Skin founder"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy/70 mb-3">
              How It Started
            </p>
            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                I started Aulea because of my own experience with sensitive skin. Finding
                products that actually felt comfortable, without costing too much, wasn&apos;t
                easy. I tried a lot of things that either irritated my skin or asked me to spend
                more than I could justify for a daily routine. That gap is why Aulea exists.
              </p>
              <p>
                I believe skincare shouldn&apos;t have to be complicated or expensive to work.
                Aulea is built around two things I wished existed when I was looking:{" "}
                <strong className="text-ink">accessibility</strong>, reasonably priced products
                that don&apos;t feel out of reach, and{" "}
                <strong className="text-ink">simplicity</strong>, a routine that fits into an
                actual day, not a ten-step ritual.
              </p>
              <p>
                Aulea isn&apos;t trying to be luxurious or exclusive. It&apos;s meant to be
                approachable: skincare that feels far more premium than the price suggests, made
                by someone who needed it to exist. That&apos;s the idea behind{" "}
                <span className="font-display text-ink">&ldquo;{siteConfig.tagline}&rdquo;</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-cream-deep text-center">
        <SectionHeading
          align="center"
          eyebrow="Our Mission"
          title="Taking care of your skin doesn't have to be complicated or expensive."
          description="We want more people to feel that skincare can be part of their everyday, and to feel confident making it their own."
        />
      </Section>

      <Section>
        <SectionHeading align="center" eyebrow="Looking Ahead" title="A brand built to grow with you" />
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-md border border-ink/12 bg-white p-6">
            <h3 className="font-display text-lg text-ink">Expand the range</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Thoughtfully adding products that fit real, everyday routines.
            </p>
          </div>
          <div className="rounded-md border border-ink/12 bg-white p-6">
            <h3 className="font-display text-lg text-ink">Build a community</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Creating a space where people feel supported in caring for their skin.
            </p>
          </div>
          <div className="rounded-md border border-ink/12 bg-white p-6">
            <h3 className="font-display text-lg text-ink">Stay accessible</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Keeping skincare approachable as the brand grows.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-navy-deep px-6 py-16 text-center sm:px-10 lg:px-16">
        <p className="font-display text-2xl text-cream sm:text-3xl">Explore the collection</p>
        <div className="mt-6">
          <LinkButton href="/products" variant="onDark">
            Shop Now
          </LinkButton>
        </div>
      </section>
    </>
  );
}
