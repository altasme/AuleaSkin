// Placeholder catalog structure only. Names, prices, descriptions, and
// ingredients below are structural stand-ins — NOT real product claims.
// Replace entirely with the client's actual catalog from intake (§19).
// Do not publish any of this copy as-is.

export type Product = {
  slug: string;
  name: string;
  category: string;
  priceDisplay: string;
  shortDescription: string;
  description: string;
  usage: string;
  ingredientsNote: string;
  images: number;
};

export const products: Product[] = [
  {
    slug: "gentle-cleanser",
    name: "[Product name pending] — Cleanser",
    category: "Cleanser",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short product description pending client input.]",
    description:
      "[Full product description pending client input. Do not publish efficacy claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote: "[Full INCI ingredient list pending client input.]",
    images: 3,
  },
  {
    slug: "hydrating-toner",
    name: "[Product name pending] — Toner",
    category: "Toner",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short product description pending client input.]",
    description:
      "[Full product description pending client input. Do not publish efficacy claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote: "[Full INCI ingredient list pending client input.]",
    images: 3,
  },
  {
    slug: "daily-serum",
    name: "[Product name pending] — Serum",
    category: "Serum",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short product description pending client input.]",
    description:
      "[Full product description pending client input. Do not publish efficacy claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote: "[Full INCI ingredient list pending client input.]",
    images: 3,
  },
  {
    slug: "daily-moisturizer",
    name: "[Product name pending] — Moisturizer",
    category: "Moisturizer",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short product description pending client input.]",
    description:
      "[Full product description pending client input. Do not publish efficacy claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote: "[Full INCI ingredient list pending client input.]",
    images: 3,
  },
  {
    slug: "daily-sunscreen",
    name: "[Product name pending] — Sunscreen",
    category: "Sunscreen",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short product description pending client input.]",
    description:
      "[Full product description pending client input. Do not publish efficacy claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote: "[Full INCI ingredient list pending client input.]",
    images: 3,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
