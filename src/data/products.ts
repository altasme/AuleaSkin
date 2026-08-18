// Catalog reconciled against real supplied product photography (label
// text is legible in the group hero shot) — this is now the source of
// truth per spec B5 ("Products = visual source of truth"), and it
// differs from the spec's own B6 text list in a few real ways:
//
// - Sunscreen is "SPF 50 with Alpha Arbutin" on the label, not "SPF 30".
// - Niacinamide Facial Wash's label carries its own claims
//   ("minimizing pores and brightening dull skin") — not previously
//   flagged, now compliance-held for the same reason as the others.
// - Collagen + Vitamin E Firming Lotion's label adds "smoother,
//   healthier-looking skin" alongside "firmer".
// - No plain "Aulea Natural Soap" exists in the photography — only
//   Glass Skin and Ultimate Whitening variants. Dropped rather than
//   invented; flag back to the client if it's meant to exist.
// - Two SKUs not in any spec version showed up in photography: Auléa
//   Essence for Men and Essence for Women (Eau de Parfum, 50 mL), each
//   with named scent variants. Added as real, photographed products —
//   everything about them beyond name/size/variant/format is still
//   pending, and unlike the skincare line they carry no regulated
//   efficacy claim on the label (just scent names), so no compliance
//   hold applies.
//
// See docs/compliance-notes.md and docs/intake-checklist.md for the
// full account of what changed and what still needs client sign-off.

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
  complianceHold: boolean;
  complianceNote?: string;
  variants?: string[];
};

export const products: Product[] = [
  {
    slug: "sunscreen-spf-50",
    name: "Auléa Sunscreen SPF 50 with Alpha Arbutin",
    category: "Sun Care",
    size: "30 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. Do not publish SPF, sun-protection, or Alpha Arbutin brightening claims without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending — label photo shows product name/size only; a legible ingredients panel is still needed.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/sunscreen-spf-50/hero.webp",
      "/images/products/sunscreen-spf-50/secondary-1.webp",
      "/images/products/sunscreen-spf-50/secondary-2.webp",
    ],
    complianceHold: true,
    complianceNote:
      "Label reads \"SPF 50\" and \"with Alpha Arbutin\" (a brightening agent) — both regulated (spec C2). This corrects the spec text's \"SPF 30\"; the real label says SPF 50. Do not publish the SPF value or any brightening/sun-protection language until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "organic-vitamin-c-serum",
    name: "Auléa Organic Serum Vitamin C",
    category: "Serums",
    size: "15 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. Do not publish \"organic\" or any brightening/efficacy claim without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending — label photo shows product name/size only; a legible ingredients panel is still needed.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/organic-vitamin-c-serum/hero.webp",
      "/images/products/organic-vitamin-c-serum/secondary-1.webp",
      "/images/products/organic-vitamin-c-serum/secondary-2.webp",
    ],
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
      "[Full description pending client input. The real label carries its own claims — see compliance note — none of that language is published here without written substantiation.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending — label photo shows product name/size only; a legible ingredients panel is still needed.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/niacinamide-facial-wash/hero.webp",
      "/images/products/niacinamide-facial-wash/secondary-1.webp",
      "/images/products/niacinamide-facial-wash/secondary-2.webp",
    ],
    complianceHold: true,
    complianceNote:
      "Label reads \"Removes dirt & impurities, minimizing pores and brightening dull skin\" — pore-minimizing and brightening are efficacy claims (spec C2), not previously flagged for this SKU. Do not publish this or similar language until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "collagen-vitamin-e-firming-lotion",
    name: "Auléa Collagen + Vitamin E Firming Lotion",
    category: "Lotions",
    size: "100 mL",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. The real label carries its own claims — see compliance note — none of that language is published here without written substantiation.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending — label photo shows product name/size only; a legible ingredients panel is still needed.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/collagen-vitamin-e-firming-lotion/hero.webp",
      "/images/products/collagen-vitamin-e-firming-lotion/secondary-1.webp",
    ],
    complianceHold: true,
    complianceNote:
      "Label reads \"For firmer, smoother & healthier-looking skin.\" \"Firming\" is an efficacy claim (spec C2); \"smoother\" and \"healthier-looking\" are sensitive in the same way. Do not publish until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "glass-skin-natural-soap",
    name: "Auléa Natural Soap — Glass Skin",
    category: "Soaps",
    size: "70 g",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. \"Glass Skin\" is an efficacy/result claim — do not publish it or imply a specific result without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending — label photo shows product name/size only; a legible ingredients panel is still needed.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/glass-skin-natural-soap/hero.webp",
      "/images/products/glass-skin-natural-soap/secondary-1.webp",
      "/images/products/glass-skin-natural-soap/secondary-2.webp",
    ],
    complianceHold: true,
    complianceNote:
      "\"Glass Skin\" is an efficacy/result claim (spec C2). Do not publish it or imply a specific outcome until the client confirms it holds up and supplies CPN + written substantiation.",
  },
  {
    slug: "ultimate-whitening-natural-soap",
    name: "Auléa Natural Soap — Ultimate Whitening",
    category: "Soaps",
    size: "70 g",
    priceDisplay: "[Price pending]",
    shortDescription: "[Short description pending client input.]",
    description:
      "[Full description pending client input. \"Whitening\" claims are heavily regulated in the Philippines and can cross into drug-claim territory — the highest compliance exposure in this catalog. Do not publish any whitening/efficacy language without written substantiation — see docs/compliance-notes.md.]",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending — label photo shows product name/size only; a legible ingredients panel is still needed.]",
    suitableFor: "Generally suitable for all skin types (per-product suitability pending confirmation).",
    images: [
      "/images/products/ultimate-whitening-natural-soap/hero.webp",
      "/images/products/ultimate-whitening-natural-soap/secondary-1.webp",
      "/images/products/ultimate-whitening-natural-soap/secondary-2.webp",
    ],
    complianceHold: true,
    complianceNote:
      "HIGHEST EXPOSURE — \"whitening\" claims are heavily regulated in the Philippines and can cross into drug-claim territory (spec C2). Do not publish this name's whitening implication as an efficacy claim, or any supporting language, until the client confirms it holds up and supplies CPN + written substantiation. Discuss naming/positioning carefully with the client before this SKU goes live.",
  },
  {
    slug: "essence-for-men",
    name: "Auléa Essence for Men",
    category: "Fragrance",
    size: "50 mL Eau de Parfum",
    priceDisplay: "[Price pending]",
    shortDescription: "Eau de Parfum, available in two scents.",
    description:
      "A men's Eau de Parfum line — not in any earlier spec version, found in the supplied product photography. Scent notes/story pending client input; nothing about fragrance composition is invented here.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending — label photo shows product name/size/variant only; a legible ingredients panel is still needed.]",
    suitableFor: "Fragrance — not a skincare product.",
    images: [
      "/images/products/essence-for-men/hero.webp",
      "/images/products/essence-for-men/secondary-1.webp",
      "/images/products/essence-for-men/secondary-2.webp",
    ],
    complianceHold: false,
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
      "A women's Eau de Parfum line — not in any earlier spec version, found in the supplied product photography. Scent notes/story pending client input; nothing about fragrance composition is invented here.",
    usage: "[Usage instructions pending client input.]",
    ingredientsNote:
      "[Full ingredient list pending — label photo shows product name/size/variant only; a legible ingredients panel is still needed.]",
    suitableFor: "Fragrance — not a skincare product.",
    images: [
      "/images/products/essence-for-women/hero.webp",
      "/images/products/essence-for-women/secondary-1.webp",
      "/images/products/essence-for-women/secondary-2.webp",
    ],
    complianceHold: false,
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
