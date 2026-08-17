import { LinkButton } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { TrustStack } from "@/components/TrustStack";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage mb-4">
              {siteConfig.businessName}
            </p>
            <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-md text-ink-soft leading-relaxed">
              {siteConfig.shortDescription}
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

      {/* Featured products */}
      <Section className="bg-sand/40">
        <SectionHeading
          eyebrow="The Routine"
          title="Featured products"
          description="Structure placeholder — replace with the client's real hero SKUs once the catalog is confirmed."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading
          eyebrow="Why Aulea Skin"
          title="Reasons to choose us"
          description="[Benefit statements pending client input — do not publish unsubstantiated claims. See docs/compliance-notes.md.]"
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {["[Benefit 1]", "[Benefit 2]", "[Benefit 3]"].map((benefit) => (
            <div key={benefit} className="border border-line rounded-sm p-6">
              <h3 className="font-serif text-lg text-ink">{benefit}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                [Supporting copy pending client input.]
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust */}
      <Section className="bg-sand/40">
        <SectionHeading
          eyebrow="Trust"
          title="No reviews yet? Here's how we earn trust anyway"
          description="Per the ALTAVENTURES trust playbook (§14) — compliant substitutes for invented proof."
        />
        <TrustStack />
      </Section>

      {/* Secondary CTA */}
      <Section>
        <div className="rounded-sm border border-line bg-sage px-8 py-14 text-center sm:px-16">
          <h2 className="font-serif text-3xl text-cream sm:text-4xl">
            Ready to explore the routine?
          </h2>
          <p className="mt-3 text-cream/80">
            {siteConfig.contactEmail} · [social / marketplace links pending]
          </p>
          <div className="mt-8">
            <LinkButton href="/products" variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-sage">
              {siteConfig.primaryCta}
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
