// Confirmed catalog from spec v2.0 §B6: 7 SKUs. Names, sizes (where
// given), and categories are client-supplied and real; price, full
// description, ingredients, benefits, and how-to-use are NOT supplied yet
// — those stay bracketed placeholders, never invented (§C1 no-invent
// rule). Confirm the complete list/prices/sizes/variants/label photos
// before treating this as final (§B6).
//
// complianceHold: true marks SKUs whose confirmed NAME is itself a
// regulated claim (§C2) — Ultimate Whitening, Glass Skin, Collagen +
// Vitamin E Firming, Organic, SPF 30. The name is shown because it's the
// client-supplied product identity, not an invented claim, but nothing
// about efficacy is asserted beyond it, and the product is flagged as not
// clear to launch until CPN + written substantiation are supplied (see
// docs/compliance-notes.md).

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
    category: "Sun Care",
    size: "[size pending]",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input — including confirmation the SPF 30 figure holds up. Do not publish efficacy or SPF claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: 3,
    complianceHold: true,
    complianceNote:
      "\"SPF 30\" is a regulated claim — SPF claims get heavier scrutiny than plain cosmetics (spec C2). Do not publish the SPF value or any sun-protection efficacy language until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "organic-vitamin-c-serum",
    name: "Auléa Organic Vitamin C Serum",
    category: "Serums",
    size: "15 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. Do not publish \"organic\" or any brightening/efficacy claim without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: 3,
    complianceHold: true,
    complianceNote:
      "\"Organic\" is a regulated descriptor (spec C2). Do not publish it until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "niacinamide-facial-wash",
    name: "Auléa Niacinamide Facial Wash",
    category: "Cleansers",
    size: "60 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. Do not publish pore-minimizing or other efficacy claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: 3,
    complianceHold: false,
  },
  {
    slug: "collagen-vitamin-e-firming-lotion",
    name: "Auléa Collagen + Vitamin E Firming Lotion",
    category: "Lotions",
    size: "[size pending]",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. \"Firming\" is an efficacy claim — do not publish it or any collagen benefit language without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: 3,
    complianceHold: true,
    complianceNote:
      "\"Firming\" is an efficacy claim (spec C2). Do not publish it or the collagen benefit angle until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "aulea-natural-soap",
    name: "Auléa Natural Soap",
    category: "Soaps",
    size: "[size pending]",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description: "[Full description pending client input.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: 3,
    complianceHold: false,
  },
  {
    slug: "glass-skin-natural-soap",
    name: "Auléa Glass Skin Natural Soap",
    category: "Soaps",
    size: "[size pending]",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. \"Glass Skin\" is an efficacy/result claim — do not publish it or imply a specific result without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: 3,
    complianceHold: true,
    complianceNote:
      "\"Glass Skin\" is an efficacy/result claim (spec C2). Do not publish it or imply a specific outcome until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "ultimate-whitening-natural-soap",
    name: "Auléa Ultimate Whitening Natural Soap",
    category: "Soaps",
    size: "[size pending]",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. \"Whitening\" claims are heavily regulated in the Philippines and can cross into drug-claim territory — the highest compliance exposure in this catalog. Do not publish any whitening/efficacy language without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Ingredients pending — to be taken from a photo of the actual product label, not invented.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: 3,
    complianceHold: true,
    complianceNote:
      "HIGHEST EXPOSURE — \"whitening\" claims are heavily regulated in the Philippines and can cross into drug-claim territory (spec C2). Do not publish this name's whitening implication as an efficacy claim, or any supporting language, until the client confirms it holds up and supplies CPN + written substantiation. Discuss naming/positioning carefully with the client before this SKU goes live.",
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}
