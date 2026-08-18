import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComplianceBadge } from "@/components/ComplianceBadge";
import { Placeholder } from "@/components/Placeholder";
import { ProductActions } from "@/components/ProductActions";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { getProductBySlug, products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? product.name : "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const sameCategory = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );
  const related = (sameCategory.length > 0 ? sameCategory : products.filter((p) => p.slug !== product.slug)).slice(0, 3);

  return (
    <>
      <Section className="pt-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: product.images }).map((_, i) => (
              <Placeholder
                key={i}
                label={`${product.name} — photo ${i + 1}`}
                className={i === 0 ? "col-span-2 aspect-[4/3]" : ""}
              />
            ))}
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/70">
              {product.category} · {product.size}
            </p>
            <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">{product.name}</h1>
            <p className="mt-3 text-lg text-ink/70">{product.priceDisplay}</p>

            {product.complianceHold && (
              <div className="mt-4">
                <ComplianceBadge note={product.complianceNote} />
              </div>
            )}

            <p className="mt-6 leading-relaxed text-ink/70">{product.description}</p>

            <div className="mt-8">
              <ProductActions product={product} />
            </div>

            <p className="mt-4 text-xs text-ink/70">
              Free shipping on orders ₱{siteConfig.freeShippingThreshold}+ (subject to courier
              arrangement). Ships nationwide via {siteConfig.couriers.join(", ")}.
            </p>

            <dl className="mt-10 space-y-6 border-t border-ink/12 pt-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.1em] text-ink/60">Benefits</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">
                  [Benefits pending client input — not published without written substantiation
                  where they involve an efficacy claim.]
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.1em] text-ink/60">How to use</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">{product.usage}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.1em] text-ink/60">
                  Ingredients
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">
                  {product.ingredientsNote}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.1em] text-ink/60">
                  Suitable for
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">
                  {product.suitableFor}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section className="bg-cream-deep">
        <h2 className="font-display text-xl text-ink mb-4">Customer feedback</h2>
        <p className="max-w-xl text-sm text-ink/70 leading-relaxed">
          No feedback for this product has been supplied yet. Aulea&apos;s prior social pages
          are being recovered — only authentic, client-supplied feedback will appear here (no
          invented reviews).
        </p>
      </Section>

      {related.length > 0 && (
        <Section>
          <h2 className="font-display text-xl text-ink mb-6">You Might Also Like</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
