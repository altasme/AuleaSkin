import { LinkButton } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { EmailSignup } from "@/components/EmailSignup";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

const categories = Array.from(new Set(products.map((p) => p.category)));

const routineSteps = [
  { step: "Cleanse", product: products.find((p) => p.category === "Facial Wash") },
  { step: "Treat", product: products.find((p) => p.category === "Serum") },
  { step: "Protect", product: products.find((p) => p.category === "Sunscreen") },
  { step: "Moisturize", product: undefined },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-label text-sm tracking-[0.2em] text-gold mb-4">
              {siteConfig.tagline}
            </p>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Everyday skincare, without the complication.
            </h1>
            <p className="mt-5 max-w-md text-ink-soft leading-relaxed">
              {siteConfig.brandPromise} Aulea Skin started from one person&apos;s search for
              skincare that felt comfortable, simple, and worth the money — now it&apos;s a
              routine you can build online.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/products">{siteConfig.primaryCta}</LinkButton>
              <LinkButton href="/about" variant="secondary">
                {siteConfig.secondaryCta}
              </LinkButton>
            </div>
          </div>
          <Placeholder label="Hero image — pending client photography" aspect="aspect-[4/5]" />
        </div>
      </Section>

      {/* Shop the collection */}
      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Shop The Collection" title="Find your routine" />
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              href="/products"
              className="group flex items-center justify-between rounded-sm border border-line bg-cream px-6 py-5 transition-colors hover:border-gold"
            >
              <span className="font-display text-lg text-ink">{category}</span>
              <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured products */}
      <Section>
        <SectionHeading
          eyebrow="Featured"
          title="Shop Aulea"
          description="The confirmed lineup so far — more SKUs may be added as the full catalog is confirmed."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* Why Aulea */}
      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Why Aulea" title="Skincare that doesn't have to be complicated" />
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="border border-line rounded-sm bg-cream p-6">
            <h3 className="font-display text-lg text-ink">Born from real experience</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              Aulea started because the founder struggled to find products that felt comfortable
              for sensitive, easily-irritated skin — not as a generic beauty brand.
            </p>
          </div>
          <div className="border border-line rounded-sm bg-cream p-6">
            <h3 className="font-display text-lg text-ink">Accessible pricing</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              Reasonably priced by design, so a good routine doesn&apos;t have to be a luxury
              purchase.
            </p>
          </div>
          <div className="border border-line rounded-sm bg-cream p-6">
            <h3 className="font-display text-lg text-ink">Simple, everyday routines</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              Skincare that fits into a normal day — not an intimidating, multi-step regimen.
            </p>
          </div>
        </div>
      </Section>

      {/* Product discovery / routine */}
      <Section>
        <SectionHeading
          eyebrow="Product Discovery"
          title="Cleanse → Treat → Protect → Moisturize"
          description="Maps to the confirmed catalog where a product exists yet — the fourth step is a gap in today's lineup, not a hidden product."
        />
        <div className="grid gap-6 sm:grid-cols-4">
          {routineSteps.map(({ step, product }) => (
            <div key={step} className="text-center">
              <p className="font-label text-sm tracking-[0.15em] text-gold">{step}</p>
              {product ? (
                <Link href={`/products/${product.slug}`} className="mt-3 block">
                  <Placeholder label={product.category} aspect="aspect-square" />
                  <p className="mt-2 font-display text-sm text-ink">{product.name}</p>
                </Link>
              ) : (
                <div className="mt-3">
                  <div className="flex aspect-square w-full items-center justify-center rounded-sm border border-dashed border-line">
                    <span className="px-3 text-center text-xs text-ink-soft">
                      Not in the catalog yet
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Customer love */}
      <Section className="bg-sand/40">
        <SectionHeading
          eyebrow="Customer Love"
          title="What customers are saying"
          description="Aulea's previous social pages were lost and are being recovered, so history here is limited by design — nothing below is invented (spec §10, §13)."
        />
        <div className="rounded-sm border border-line bg-cream p-8 text-center">
          <p className="text-ink-soft leading-relaxed">
            [Authentic customer feedback screenshots pending from the client — see
            docs/intake-checklist.md. Only real, supplied feedback will be published here.]
          </p>
        </div>
      </Section>

      {/* Aulea story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-label text-sm tracking-[0.2em] text-gold mb-3">The Aulea Story</p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Started from personal experience, not a marketing plan
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              The founder started Aulea after struggling to find skincare that felt comfortable
              for sensitive skin without costing too much. Two problems, one brand: making good
              skincare more accessible, and making it simple enough to actually stick to.
            </p>
            <div className="mt-6">
              <LinkButton href="/about" variant="secondary">
                Learn More
              </LinkButton>
            </div>
          </div>
          <Placeholder label="Founder photo — pending" aspect="aspect-[4/5]" />
        </div>
      </Section>

      {/* Email signup */}
      <Section className="bg-sand/40">
        <SectionHeading
          eyebrow="Stay In The Loop"
          title="Hear about new products first"
        />
        <EmailSignup />
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="rounded-sm border border-line bg-indigo px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Start your everyday skincare routine with Aulea Skin.
          </h2>
          <p className="mt-3 text-cream/80">{siteConfig.contactEmail}</p>
          <div className="mt-8">
            <LinkButton
              href="/products"
              variant="secondary"
              className="border-cream text-cream hover:bg-cream hover:text-indigo"
            >
              Shop Aulea
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
