"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { Section, SectionHeading } from "@/components/Section";
import { categories, products } from "@/data/products";

type SortOption = "featured" | "name-asc" | "name-desc";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];

export function ShopView() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    initialCategory && categories.includes(initialCategory) ? initialCategory : null
  );
  const [sort, setSort] = useState<SortOption>("featured");

  const visible = useMemo(() => {
    let list = activeCategory ? products.filter((p) => p.category === activeCategory) : products;
    if (sort === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc") list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [activeCategory, sort]);

  return (
    <>
      <Section className="pt-14 pb-10 bg-cream-deep">
        <SectionHeading
          align="center"
          title="Shop Auléa"
          description="Thoughtful skincare for your everyday ritual. Generally suitable for all skin types."
        />
      </Section>

      <Section>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] transition-colors ${
                activeCategory === null
                  ? "border-navy bg-navy text-cream"
                  : "border-ink/15 text-ink/70 hover:border-navy/40"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] transition-colors ${
                  activeCategory === category
                    ? "border-navy bg-navy text-cream"
                    : "border-ink/15 text-ink/70 hover:border-navy/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-sm text-ink/70">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-full border border-ink/15 bg-cream px-4 py-2 text-sm text-ink outline-none focus:border-gold"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mb-6 text-sm text-ink/70">{visible.length} products</p>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>
    </>
  );
}
