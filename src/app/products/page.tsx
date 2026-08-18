import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = { title: "Shop" };

export default function ProductsPage() {
  return (
    <>
      <Section className="pt-14">
        <SectionHeading
          eyebrow="Shop"
          title="The Aulea collection"
          description="The confirmed catalog so far — additional SKUs may be added as the full range is confirmed (spec B6)."
        />
      </Section>

      {categories.map((category, i) => (
        <Section key={category} className={i % 2 === 1 ? "bg-mist" : undefined}>
          <h2 className="font-display text-2xl text-ink mb-8">{category}</h2>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {getProductsByCategory(category).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
