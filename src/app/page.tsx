import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { EmailSignup } from "@/components/EmailSignup";
import { products, categories } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

const routineSteps = [
  { step: "Cleanse", slug: "niacinamide-facial-wash" },
  { step: "Treat", slug: "organic-vitamin-c-serum" },
  { step: "Hydrate", slug: "collagen-vitamin-e-firming-lotion" },
  { step: "Protect", slug: "sunscreen-spf-50" },
];

export default function Home() {
  return (
    <>
      {/* 2. Hero: Navy Deep band per spec D3, one of only two large dark
          fills (the other is the footer). */}
      <section className="bg-navy-deep px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-label text-sm tracking-[0.2em] text-gold mb-4">
              {siteConfig.tagline}
            </p>
            <h1 className="font-display text-4xl leading-tight text-cream sm:text-5xl">
              Everyday skincare, made more accessible.
            </h1>
            <p className="mt-5 max-w-md text-cream/80 leading-relaxed">
              {siteConfig.brandPromise} Aulea Skin started from one person&apos;s search for
              skincare that felt comfortable, simple, and worth the money.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/products" variant="onDark">
                Shop Now
              </LinkButton>
              <LinkButton href="/about" variant="onDarkOutline">
                Our Story
              </LinkButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
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

      {/* 3. Brand statement */}
      <Section className="text-center">
        <p className="mx-auto max-w-2xl font-display text-2xl text-ink sm:text-3xl">
          {siteConfig.positioningLine}
        </p>
      </Section>

      {/* 4. Featured products */}
      <Section className="bg-mist">
        <SectionHeading
          eyebrow="Featured"
          title="Shop Aulea"
          description="A first look at the confirmed catalog. Merchandising (featured/best-seller flags) is pending real sales data, not assumed."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* 5. Shop by category */}
      <Section className="bg-cream-deep">
        <SectionHeading eyebrow="Shop By Category" title="Find what you need" />
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              href="/products"
              className="group flex items-center justify-between rounded-md bg-cream px-6 py-5 transition-colors hover:bg-white"
            >
              <span className="font-display text-lg text-ink">{category}</span>
              <span className="text-navy transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 6. Founder / brand story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Placeholder label="Founder photo, pending" aspect="aspect-[4/5]" />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy/70 mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              &ldquo;I started Aulea because of my own sensitive skin.&rdquo;
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

      {/* 7. Product-focused editorial: Cleanse/Treat/Hydrate/Protect maps
          to today's confirmed catalog (spec D8). */}
      <Section className="bg-mist">
        <SectionHeading
          eyebrow="Build Your Routine"
          title="Cleanse → Treat → Hydrate → Protect"
        />
        <div className="grid gap-6 sm:grid-cols-4">
          {routineSteps.map(({ step, slug }) => {
            const product = products.find((p) => p.slug === slug);
            if (!product) return null;
            return (
              <Link key={step} href={`/products/${product.slug}`} className="block text-center">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-navy/70">
                  {step}
                </p>
                <div className="relative mt-3 aspect-square overflow-hidden rounded-md bg-white">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover p-3"
                  />
                </div>
                <p className="mt-2 font-display text-sm text-ink">{product.name}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* 8. Promotional offer: the one extra Navy Deep band spec A2
          allows ("at most one promo band"), real and supplied (free
          shipping threshold), never an invented discount. */}
      <section className="bg-navy-deep px-6 py-16 text-center sm:px-10 lg:px-16">
        <p className="font-label text-sm tracking-[0.2em] text-gold mb-3">Free Shipping</p>
        <h2 className="font-display text-3xl text-cream sm:text-4xl">
          Free shipping on orders ₱{siteConfig.freeShippingThreshold}+
        </h2>
        <p className="mx-auto mt-3 max-w-md text-cream/70">
          Nationwide via {siteConfig.couriers.join(", ")}, subject to courier arrangement.
        </p>
      </section>

      {/* 9. Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Customer Love"
          title="What customers are saying"
          description="Aulea's previous social pages were lost and are being recovered, so history here is limited by design. Nothing below is invented (spec C3)."
        />
        <div className="rounded-sm border border-ink/12 bg-cream-deep p-8 text-center">
          <p className="text-ink/70 leading-relaxed">
            [Genuine customer feedback pending from the client, see docs/intake-checklist.md.
            Only real, supplied feedback (labeled &ldquo;Verified customer feedback&rdquo; where
            identity is unavailable) will be published here.]
          </p>
        </div>
      </Section>

      {/* 10. Why Aulea */}
      <Section className="bg-cream-deep">
        <SectionHeading eyebrow="Why Aulea" title="Skincare that doesn't have to be complicated" />
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="rounded-md bg-cream p-6">
            <h3 className="font-display text-lg text-ink">Born from real experience</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Aulea started because the founder struggled to find products that felt comfortable
              for sensitive, easily-irritated skin, not as a generic beauty brand.
            </p>
          </div>
          <div className="rounded-md bg-cream p-6">
            <h3 className="font-display text-lg text-ink">Accessible pricing</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Reasonably priced by design, so a good routine doesn&apos;t have to be a luxury
              purchase.
            </p>
          </div>
          <div className="rounded-md bg-cream p-6">
            <h3 className="font-display text-lg text-ink">Simple, everyday routines</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Skincare that fits into a normal day, not an intimidating, multi-step regimen.
            </p>
          </div>
        </div>
      </Section>

      {/* Email signup */}
      <Section>
        <SectionHeading eyebrow="Stay In The Loop" title="Hear about new products first" />
        <EmailSignup />
      </Section>

      {/* 11. Final CTA: quiet treatment; large dark fills are reserved
          for the hero, footer, and the one promo band above. */}
      <Section>
        <div className="rounded-sm border-t-2 border-gold bg-cream-deep px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Start your everyday skincare routine with Aulea Skin.
          </h2>
          <p className="mt-3 text-ink/70">{siteConfig.contactEmail}</p>
          <div className="mt-8">
            <LinkButton href="/products">Shop Aulea</LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
