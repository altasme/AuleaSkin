import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Shop" };

export default function ProductsPage() {
  return (
    <Section className="pt-14">
      <SectionHeading
        eyebrow="Shop"
        title="The Aulea collection"
        description="The confirmed catalog so far — additional SKUs may be added as the full range is confirmed (spec §7)."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Section>
  );
}
