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
        title="The full routine"
        description="Placeholder catalog structure — replace with the client's real products from intake (§19)."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Section>
  );
}
