"use client";

import Image from "next/image";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { useLiveSiteContent } from "@/lib/use-live-site-content";

export function AboutContent() {
  const { about } = useLiveSiteContent();

  return (
    <>
      <Section className="pt-14 pb-10 bg-cream-deep text-center">
        <SectionHeading
          align="center"
          eyebrow="Our Story"
          title={about.introHeading}
          description={about.introDescription}
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
            {/* Plain paragraphs: storyParagraphs is a fixed-length list of
                plain-text admin fields (see SiteContentPanel.tsx), the
                inline bold/serif emphasis the original hardcoded copy
                had can't survive a plain textarea, and the default
                content's own third paragraph already closes on the
                brand tagline as part of its text, so there's no separate
                dynamic tagline sentence to append here without
                duplicating it. */}
            <div className="space-y-4 text-ink/70 leading-relaxed">
              {about.storyParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-cream-deep text-center">
        <SectionHeading
          align="center"
          eyebrow="Our Mission"
          title={about.missionHeading}
          description={about.missionDescription}
        />
      </Section>

      <Section>
        <SectionHeading align="center" eyebrow="Looking Ahead" title={about.lookingAheadHeading} />
        <div className="grid gap-6 sm:grid-cols-3">
          {about.lookingAheadCards.map((card) => (
            <div key={card.title} className="rounded-md border border-ink/12 bg-white p-6">
              <h3 className="font-display text-lg text-ink">{card.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{card.body}</p>
            </div>
          ))}
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
