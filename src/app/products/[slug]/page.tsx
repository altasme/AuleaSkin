import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Placeholder } from "@/components/Placeholder";
import { ProductActions } from "@/components/ProductActions";
import { Section } from "@/components/Section";
import { getProductBySlug, products } from "@/data/products";

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

  return (
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
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage">
            {product.category}
          </p>
          <h1 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-lg text-ink-soft">{product.priceDisplay}</p>
          <p className="mt-6 leading-relaxed text-ink-soft">{product.description}</p>

          <div className="mt-8">
            <ProductActions product={product} />
          </div>

          <dl className="mt-10 space-y-6 border-t border-line pt-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.15em] text-ink-soft">
                How to use
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{product.usage}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.15em] text-ink-soft">
                Ingredients
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                {product.ingredientsNote}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
