"use client";

import Image from "next/image";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { EmailSignup } from "@/components/EmailSignup";
import { HeartIcon, SparkleIcon, TruckIcon, WalletIcon } from "@/components/Icons";
import { products } from "@/data/products";
import { useLiveSiteConfig } from "@/lib/use-live-site-config";
import { useLiveSiteContent } from "@/lib/use-live-site-content";
import { HomeCatalogSections } from "./HomeCatalogSections";

const testimonialImages = Array.from(
  { length: 8 },
  (_, i) => `/images/testimonials/review-${i + 1}.webp`
);

// Card icons aren't part of Website Content (nothing to serialize a React
// component through KV/JSON), only title/body are editable, see
// docs/admin-panel.md. Matched to siteContent.homepage.whyAuleaCards by
// position, that array is a fixed 4 cards in the admin panel (edit in
// place, no add/remove), not a dynamic list.
const whyAuleaIcons = [HeartIcon, SparkleIcon, WalletIcon, TruckIcon];

export default function Home() {
  const siteConfig = useLiveSiteConfig();
  const { homepage } = useLiveSiteContent();

  return (
    <>
      {/* Hero: full-bleed split, image right, edge to edge like the ref design. */}
      <section className="bg-cream-deep">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
          <div className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy/70 mb-4">
              Aulea Skin &middot; Est. {siteConfig.established}
            </p>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {homepage.heroHeading}
            </h1>
            <p className="mt-5 max-w-md text-ink/70 leading-relaxed">
              {siteConfig.brandPromise} {homepage.heroSubtext}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <LinkButton href="/products">Shop Now</LinkButton>
              <LinkButton href="/about" variant="ghost">
                Discover Auléa
              </LinkButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[640px]">
            <Image
              src="/images/hero/sitewide-hero.webp"
              alt="Auléa Skin product lineup"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <Section className="text-center">
        <p className="mx-auto max-w-2xl font-display text-2xl text-ink sm:text-3xl">
          {siteConfig.positioningLine}
        </p>
      </Section>

      <HomeCatalogSections />

      {/* Founder / brand story */}
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
              {homepage.founderEyebrow}
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">{homepage.founderHeading}</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">{homepage.founderBody}</p>
            <div className="mt-6">
              <LinkButton href="/about" variant="secondary">
                Read Our Story
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* The ritual: Cleanse/Treat/Hydrate/Protect */}
      <Section className="bg-mist">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy/70 mb-3">
              {homepage.ritualEyebrow}
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">{homepage.ritualHeading}</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">{homepage.ritualBody}</p>
            <div className="mt-6">
              <LinkButton href="/products" variant="secondary">
                Explore The Products
              </LinkButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
            <Image
              src="/images/brand/shelf-social-moment.webp"
              alt="Auléa Skin products, a moment from Aulea's social content"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Promotional offer: the one extra Navy Deep band spec A2
          allows ("at most one promo band"), real and supplied (free
          shipping threshold), never an invented discount. */}
      <section className="bg-navy-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="font-label text-sm tracking-[0.2em] text-gold mb-3">{homepage.promoEyebrow}</p>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">
              Free shipping on orders ₱{siteConfig.freeShippingThreshold}+
            </h2>
            <p className="mt-3 max-w-md text-cream/70">{homepage.promoBody}</p>
            <div className="mt-6">
              <LinkButton href="/products" variant="onDark">
                Start Shopping
              </LinkButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src={products[0].images[0]}
              alt={products[0].name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials: real customer review graphics supplied by the client (spec C3), no invented quotes. */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="From Our Customers"
          title={homepage.testimonialsHeading}
          description={homepage.testimonialsDescription}
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {testimonialImages.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-md bg-white">
              <Image
                src={src}
                alt={`Auléa Skin customer review ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Why Aulea */}
      <Section className="bg-cream-deep">
        <SectionHeading align="center" eyebrow="Why Aulea" title={homepage.whyAuleaHeading} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homepage.whyAuleaCards.map((card, i) => {
            const Icon = whyAuleaIcons[i];
            return (
              <div key={card.title} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-navy sm:mx-0">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="mt-4 font-display text-lg text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Email signup */}
      <Section>
        <SectionHeading align="center" eyebrow="Stay In The Loop" title="Hear about new products first" />
        <div className="mx-auto max-w-md">
          <EmailSignup />
        </div>
      </Section>

      {/* Final CTA: quiet treatment; large dark fills are reserved
          for the hero, footer, and the one promo band above. */}
      <section className="bg-navy-deep px-6 py-20 text-center sm:px-10 lg:px-16">
        <h2 className="font-display text-3xl text-cream sm:text-4xl">{homepage.finalCtaHeading}</h2>
        <p className="mx-auto mt-3 max-w-md text-cream/70">{homepage.finalCtaBody}</p>
        <div className="mt-8">
          <LinkButton href="/products" variant="onDark">
            Shop The Collection
          </LinkButton>
        </div>
      </section>
    </>
  );
}
