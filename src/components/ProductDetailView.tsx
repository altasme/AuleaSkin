"use client";

import Image from "next/image";
import { ProductActions } from "@/components/ProductActions";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { useLiveSiteConfig } from "@/lib/use-live-site-config";
import type { Product } from "@/data/products";

// The actual product-detail rendering, factored out of
// src/app/(site)/products/[slug]/page.tsx so the same markup can be
// reused by the live fallback shell (products/_live) for a product added
// after the last build, see functions/products/[slug].ts. Client
// component so the free-shipping threshold and courier list read live
// from Business Info here too, not just the rest of the site.
export function ProductDetailView({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const siteConfig = useLiveSiteConfig();
  return (
    <>
      <Section className="pt-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-sm bg-white ${
                  i === 0 ? "col-span-2 aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`${product.name}, photo ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/70">
              {product.category} · {product.size}
            </p>
            <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">{product.name}</h1>

            {product.variants && product.variants.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/70 mb-2">
                  Available options
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <span
                      key={variant}
                      className="rounded-full border border-ink/12 px-4 py-1.5 text-sm text-ink/70"
                    >
                      {variant}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-xs text-ink/70">
                  Pick your option when you buy on Shopee.
                </p>
              </div>
            )}

            <p className="mt-6 leading-relaxed text-ink/70">{product.description}</p>

            <div className="mt-8">
              <ProductActions product={product} />
            </div>

            <p className="mt-4 text-xs text-ink/70">
              Purchases complete on Shopee. Free shipping on orders ₱{siteConfig.freeShippingThreshold}
              + (subject to courier arrangement). Ships nationwide via {siteConfig.couriers.join(", ")}.
            </p>

            <dl className="mt-10 space-y-6 border-t border-ink/12 pt-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.1em] text-ink/60">Benefits</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">
                  <ul className="list-disc space-y-1 pl-4">
                    {product.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.1em] text-ink/60">How to use</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">{product.usage}</dd>
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
