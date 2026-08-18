// Confirmed catalog from the brand kit (spec §7): 3 SKUs. Names and sizes
// are client-supplied and real; price, full description, ingredients,
// benefits, and how-to-use are NOT supplied yet — those stay bracketed
// placeholders, never invented (§13 content integrity, §7 "do not
// invent"). "Additional SKUs may exist — confirm the complete catalog
// before hard-coding categories" (§7), so this list is not assumed final.
//
// complianceHold: true marks SKUs whose confirmed NAME carries a
// regulated descriptor ("Organic", "SPF 30" — spec §27). The name is
// shown because it's the client-supplied product identity, not an
// invented claim, but nothing about efficacy is asserted beyond it, and
// the product is flagged as not clear to launch until CPN + written
// substantiation are supplied (see docs/compliance-notes.md).

export type Product = {
  slug: string;
  name: string;
  category: string;
  size: string;
  priceDisplay: string;
  shortDescription: string;
  description: string;
  usage: string;
  ingredientsNote: string;
  suitableFor: string;
  images: number;
  complianceHold: boolean;
  complianceNote?: string;
};

export const products: Product[] = [
  {
    slug: "sunscreen-spf-30",
    name: "Auléa Sunscreen (SPF 30)",
    category: "Sunscreen",
    size: "[size pending]",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input — including confirmation the SPF 30 figure holds up. Do not publish efficacy or SPF claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote: "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "All skin types (general brand positioning — per-product suitability pending confirmation).",
    images: 3,
    complianceHold: true,
    complianceNote:
      "\"SPF 30\" is a regulated claim (spec §27). Do not publish the SPF value or any sun-protection efficacy language until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "organic-serum-vitamin-c",
    name: "Auléa Organic Serum Vitamin C",
    category: "Serum",
    size: "15 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. Do not publish \"organic,\" \"brightening,\" or any efficacy claim without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote: "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "All skin types (general brand positioning — per-product suitability pending confirmation).",
    images: 3,
    complianceHold: true,
    complianceNote:
      "\"Organic\" is a regulated descriptor (spec §27). Do not publish it, or any brightening claim, until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "niacinamide-facial-wash",
    name: "Auléa Niacinamide Facial Wash",
    category: "Facial Wash",
    size: "60 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. Do not publish pore-minimizing or other efficacy claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote: "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "All skin types (general brand positioning — per-product suitability pending confirmation).",
    images: 3,
    complianceHold: false,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
