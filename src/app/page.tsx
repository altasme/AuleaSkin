import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { EmailSignup } from "@/components/EmailSignup";
import { ArrowRightIcon, HeartIcon, SparkleIcon, TruckIcon, WalletIcon } from "@/components/Icons";
import { products, categories, getProductsByCategory } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

const categoryCopy: Record<string, string> = {
  "Sun Care": "Daily sun protection for your routine.",
  Serums: "Targeted treatments for brighter, healthier-looking skin.",
  Cleansers: "Gentle daily washes to start and end the day.",
  Lotions: "Everyday moisture for firmer, smoother skin.",
  Soaps: "Natural bar soaps for everyday cleansing.",
  Fragrance: "Eau de Parfum in scents for him and her.",
};

const testimonialImages = Array.from(
  { length: 8 },
  (_, i) => `/images/testimonials/review-${i + 1}.webp`
);

const whyAulea = [
  {
    icon: HeartIcon,
    title: "Made from experience",
    body: "Created from a personal skincare journey with sensitive skin in mind.",
  },
  {
    icon: SparkleIcon,
    title: "Thoughtful products",
    body: "Simple, considered formulas you can build into your everyday routine.",
  },
  {
    icon: WalletIcon,
    title: "Accessible by design",
    body: "Skincare that feels worth it, without feeling unnecessarily expensive.",
  },
  {
    icon: TruckIcon,
    title: "Easy to get",
    body: "Nationwide delivery, COD, and multiple payment options to suit you.",
  },
];

export default function Home() {
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
              Everyday skincare, made more accessible.
            </h1>
            <p className="mt-5 max-w-md text-ink/70 leading-relaxed">
              {siteConfig.brandPromise} Aulea Skin started from one person&apos;s search for
              skincare that felt comfortable, simple, and worth the money.
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

      {/* Brand moment: real social-post graphic supplied by the client. */}
      <Section>
        <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-md">
          <Image
            src="/images/brand/shelf-social-moment.webp"
            alt="Auléa Skin products, a moment from Aulea's social content"
            fill
            sizes="(min-width: 768px) 400px, 90vw"
            className="object-cover"
          />
        </div>
      </Section>

      {/* Brand statement */}
      <Section className="text-center">
        <p className="mx-auto max-w-2xl font-display text-2xl text-ink sm:text-3xl">
          {siteConfig.positioningLine}
        </p>
      </Section>

      {/* Featured products */}
      <Section className="bg-mist">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Featured" title="Shop Aulea" />
          <Link
            href="/products"
            className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.1em] text-navy hover:text-navy-deep"
          >
            View all products <ArrowRightIcon />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* Shop by category */}
      <Section className="bg-cream-deep">
        <SectionHeading align="center" eyebrow="Shop By Category" title="Find your ritual" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const rep = getProductsByCategory(category)[0];
            return (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-md"
              >
                {rep && (
                  <Image
                    src={rep.images[1] ?? rep.images[0]}
                    alt={category}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                  <h3 className="font-display text-lg">{category}</h3>
                  <p className="mt-1 text-xs text-cream/80">{categoryCopy[category]}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.1em]">Shop Now →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Founder / brand story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Placeholder label="Founder photo, pending" aspect="aspect-[4/5]" />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy/70 mb-3">
              The Aulea Story
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Born from a personal skincare journey.
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Finding skincare that felt comfortable, without costing too much, wasn&apos;t
              easy. That gap is why Aulea exists: accessible, reasonably priced products that
              fit an everyday routine without feeling complicated.
            </p>
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
              The Ritual
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              A few quiet minutes, every day.
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Cleanse, treat, hydrate. No overwhelming steps, just a simple rhythm that lets your
              skin feel cared for, morning and night.
            </p>
            <div className="mt-6">
              <LinkButton href="/products" variant="secondary">
                Explore The Products
              </LinkButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
            <Image
              src="/images/products/ultimate-whitening-natural-soap/secondary-1.webp"
              alt="Aulea Skin product in everyday use"
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
            <p className="font-label text-sm tracking-[0.2em] text-gold mb-3">
              A Small Gift, Every Order
            </p>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">
              Free shipping on orders ₱{siteConfig.freeShippingThreshold}+
            </h2>
            <p className="mt-3 max-w-md text-cream/70">
              Nationwide delivery available. Cash on delivery welcome where courier support
              allows, subject to applicable courier and shipping arrangements.
            </p>
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
          title="Real feedback, in their words"
          description="Genuine reviews shared by Aulea customers."
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
        <SectionHeading align="center" eyebrow="Why Aulea" title="Skincare, made simple" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyAulea.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center sm:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-navy sm:mx-0">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{body}</p>
            </div>
          ))}
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
        <h2 className="font-display text-3xl text-cream sm:text-4xl">
          Take care of your skin, without overcomplicating it.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-cream/70">
          Explore the Aulea range and find a ritual that fits your everyday.
        </p>
        <div className="mt-8">
          <LinkButton href="/products" variant="onDark">
            Shop The Collection
          </LinkButton>
        </div>
      </section>
    </>
  );
}
