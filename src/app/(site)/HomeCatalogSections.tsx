"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { ArrowRightIcon } from "@/components/Icons";
import { useLiveProducts } from "@/lib/use-live-products";

const categoryCopy: Record<string, string> = {
  "Sun Care": "Daily sun protection for your routine.",
  Serums: "Targeted treatments for brighter, healthier-looking skin.",
  Cleansers: "Gentle daily washes to start and end the day.",
  Lotions: "Everyday moisture for firmer, smoother skin.",
  Soaps: "Natural bar soaps for everyday cleansing.",
  Fragrance: "Eau de Parfum in scents for him and her.",
  Sets: "Complete routines, bundled together.",
};

// Featured products and category tiles both need the live catalog (a
// product added in the admin panel should show up here without a full
// site rebuild), so they're pulled out of the otherwise-static homepage
// into their own client component. See use-live-products.ts and
// docs/admin-panel.md, "Storefront now reads live data".
export function HomeCatalogSections() {
  const products = useLiveProducts();
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <>
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
            const rep = products.find((p) => p.category === category);
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
                    className="object-cover"
                    unoptimized={rep.images[1]?.startsWith("http") || rep.images[0]?.startsWith("http")}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-colors duration-300 group-hover:from-ink/80" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                  <h3 className="font-display text-lg">{category}</h3>
                  <p className="mt-1 text-xs text-cream/80">
                    {categoryCopy[category] ?? "Shop this category."}
                  </p>
                  <p className="mt-2 flex items-center gap-1 text-xs font-medium uppercase tracking-[0.1em]">
                    Shop Now{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
