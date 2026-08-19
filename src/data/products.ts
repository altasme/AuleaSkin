// Catalog reconciled against real supplied product photography (label
// text is legible in the group hero shot). This is the source of truth
// per spec B5 ("Products = visual source of truth"), and it differs from
// the spec's own B6 text list in a few real ways:
//
// - Sunscreen is "SPF 50 with Alpha Arbutin" on the label, not "SPF 30".
// - Niacinamide Facial Wash, Collagen + Vitamin E Firming Lotion, Glass
//   Skin Natural Soap, and Ultimate Whitening Natural Soap descriptions
//   below are drawn directly from the real product labels.
// - No plain "Aulea Natural Soap" exists in the photography, only Glass
//   Skin and Ultimate Whitening variants. Dropped rather than invented;
//   flag back to the client if it's meant to exist.
// - Two SKUs not in any spec version showed up in photography: Auléa
//   Essence for Men and Essence for Women (Eau de Parfum, 50 mL), each
//   with named scent variants. Added as real, photographed products.
//
// Price, ingredient lists, and usage instructions are still pending
// client input for every SKU and are marked as such below.
//
// `images` order was reworked to lead with a product-only shot (matching
// the client-supplied reference design's product-forward look) for every
// SKU where one exists; the model-photography shots stay in the array as
// supporting gallery images on the product detail page, just not first.

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
  images: string[];
  variants?: string[];
};

export const products: Product[] = [
  {
    slug: "sunscreen-spf-50",
    name: "Auléa Sunscreen SPF 50 with Alpha Arbutin",
    category: "Sun Care",
    size: "30 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "SPF 50 sunscreen with brightening Alpha Arbutin.",
    description:
      "A broad SPF 50 sunscreen formulated with Alpha Arbutin, a brightening ingredient, as shown on the product label. Daily sun protection with a lightweight finish that fits into any routine.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending, a legible ingredients panel is still needed from the client.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/sunscreen-spf-50/secondary-1.webp",
      "/images/products/sunscreen-spf-50/hero.webp",
      "/images/products/sunscreen-spf-50/secondary-2.webp",
    ],
  },
  {
    slug: "organic-vitamin-c-serum",
    name: "Auléa Organic Serum Vitamin C",
    category: "Serums",
    size: "15 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "Organic Vitamin C serum.",
    description:
      "An organic Vitamin C serum, as labeled on the product packaging. A brightening addition to any skincare routine.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending, a legible ingredients panel is still needed from the client.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/organic-vitamin-c-serum/secondary-1.webp",
      "/images/products/organic-vitamin-c-serum/hero.webp",
      "/images/products/organic-vitamin-c-serum/secondary-2.webp",
    ],
  },
  {
    slug: "niacinamide-facial-wash",
    name: "Auléa Niacinamide Facial Wash",
    category: "Cleansers",
    size: "60 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "Removes dirt and impurities, minimizing pores and brightening dull skin.",
    description:
      "Removes dirt and impurities, minimizing pores and brightening dull skin, as stated on the product label. A daily facial wash built around niacinamide.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending, a legible ingredients panel is still needed from the client.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/niacinamide-facial-wash/secondary-1.webp",
      "/images/products/niacinamide-facial-wash/hero.webp",
      "/images/products/niacinamide-facial-wash/secondary-2.webp",
    ],
  },
  {
    slug: "collagen-vitamin-e-firming-lotion",
    name: "Auléa Collagen + Vitamin E Firming Lotion",
    category: "Lotions",
    size: "100 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "For firmer, smoother, healthier-looking skin.",
    description:
      "For firmer, smoother, and healthier-looking skin, as stated on the product label. A daily lotion built around collagen and Vitamin E.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending, a legible ingredients panel is still needed from the client.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/collagen-vitamin-e-firming-lotion/secondary-1.webp",
      "/images/products/collagen-vitamin-e-firming-lotion/hero.webp",
    ],
  },
  {
    slug: "glass-skin-natural-soap",
    name: "Auléa Natural Soap, Glass Skin",
    category: "Soaps",
    size: "70 g",
    priceDisplay: "[Price pending]",
    shortDescription: "Natural soap for that glass skin glow.",
    description:
      "A natural bar soap made for that coveted glass skin glow. Gentle enough for daily use, as part of a full-body routine.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending, a legible ingredients panel is still needed from the client.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/glass-skin-natural-soap/secondary-1.webp",
      "/images/products/glass-skin-natural-soap/hero.webp",
      "/images/products/glass-skin-natural-soap/secondary-2.webp",
    ],
  },
  {
    slug: "ultimate-whitening-natural-soap",
    name: "Auléa Natural Soap, Ultimate Whitening",
    category: "Soaps",
    size: "70 g",
    priceDisplay: "[Price pending]",
    shortDescription: "Natural whitening soap.",
    description:
      "A natural bar soap formulated for whitening, as named on the product label. Aulea's bestselling soap.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending, a legible ingredients panel is still needed from the client.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/ultimate-whitening-natural-soap/secondary-1.webp",
      "/images/products/ultimate-whitening-natural-soap/hero.webp",
      "/images/products/ultimate-whitening-natural-soap/secondary-2.webp",
    ],
  },
  {
    slug: "essence-for-men",
    name: "Auléa Essence for Men",
    category: "Fragrance",
    size: "50 mL Eau de Parfum",
    priceDisplay: "[Price pending]",
    shortDescription: "Eau de Parfum, available in two scents.",
    description:
      "A men's Eau de Parfum line, found in the supplied product photography and not in any earlier spec version. Scent notes and story pending client input; nothing about fragrance composition is invented here.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending, a legible ingredients panel is still needed from the client.]",
    suitableFor: "Fragrance, not a skincare product.",
    images: [
      "/images/products/essence-for-men/hero.webp",
      "/images/products/essence-for-men/secondary-1.webp",
      "/images/products/essence-for-men/secondary-2.webp",
    ],
    variants: ["Paul", "Cedrick"],
  },
  {
    slug: "essence-for-women",
    name: "Auléa Essence for Women",
    category: "Fragrance",
    size: "50 mL Eau de Parfum",
    priceDisplay: "[Price pending]",
    shortDescription: "Eau de Parfum, available in three scents.",
    description:
      "A women's Eau de Parfum line, found in the supplied product photography and not in any earlier spec version. Scent notes and story pending client input; nothing about fragrance composition is invented here.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending, a legible ingredients panel is still needed from the client.]",
    suitableFor: "Fragrance, not a skincare product.",
    images: [
      "/images/products/essence-for-women/hero.webp",
      "/images/products/essence-for-women/secondary-1.webp",
      "/images/products/essence-for-women/secondary-2.webp",
    ],
    variants: ["Irish", "Nathalie", "Courtney"],
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}
