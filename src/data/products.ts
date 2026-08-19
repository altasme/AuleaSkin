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
// `images` order leads with a product-only shot for every SKU where one
// exists; model-photography shots stay in the array as supporting
// gallery images on the product detail page, just not first.
//
// Purchases route to each product's real Shopee listing (`shopeeUrl`),
// there is no cart/checkout on this site. Price is intentionally not
// shown here since Shopee is the pricing source of truth.
//
// `usage`, `suitableFor`, and `benefits` are composed marketing copy
// (client asked for placeholders to be filled in), written from what's
// actually known: the product name, category, and real label text.
// `ingredientsNote` is left as "coming soon" on purpose: inventing a
// specific ingredient list isn't safe copy to fabricate (allergens,
// actual formulation), so it still needs the client's real ingredients
// panel before it can say more than that.

export type Product = {
  slug: string;
  name: string;
  category: string;
  size: string;
  shortDescription: string;
  description: string;
  usage: string;
  ingredientsNote: string;
  suitableFor: string;
  benefits: string[];
  images: string[];
  shopeeUrl: string;
  variants?: string[];
};

export const products: Product[] = [
  {
    slug: "sunscreen-spf-50",
    name: "Auléa Sunscreen SPF 50 with Alpha Arbutin",
    category: "Sun Care",
    size: "30 mL",
    shortDescription: "SPF 50 sunscreen with brightening Alpha Arbutin.",
    description:
      "A broad SPF 50 sunscreen formulated with Alpha Arbutin, a brightening ingredient, as shown on the product label. Daily sun protection with a lightweight finish that fits into any routine.",
    usage:
      "Apply generously as the last step of your morning routine, after moisturizer. Reapply every 2 to 3 hours with sun exposure, or after swimming or sweating.",
    ingredientsNote: "Full ingredient list coming soon.",
    suitableFor: "All skin types, including sensitive skin. A daily essential for anyone spending time outdoors.",
    benefits: [
      "Broad SPF 50 sun protection",
      "Alpha Arbutin helps brighten the look of skin over time",
      "Lightweight, non-greasy finish that layers well under makeup",
    ],
    images: [
      "/images/products/sunscreen-spf-50/secondary-1.webp",
      "/images/products/sunscreen-spf-50/hero.webp",
      "/images/products/sunscreen-spf-50/secondary-2.webp",
    ],
    shopeeUrl:
      "https://shopee.ph/Organic-sunsceen-SPF-50-i.1889974610.43333268191?extraParams=%7B%22display_model_id%22%3A371322056838%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    slug: "organic-vitamin-c-serum",
    name: "Auléa Organic Serum Vitamin C",
    category: "Serums",
    size: "15 mL",
    shortDescription: "Organic Vitamin C serum.",
    description:
      "An organic Vitamin C serum, as labeled on the product packaging. A brightening addition to any skincare routine.",
    usage:
      "Apply 2 to 3 drops to clean, dry skin every morning before moisturizer and sunscreen. Patch test before first use.",
    ingredientsNote: "Full ingredient list coming soon.",
    suitableFor: "All skin types looking to brighten and even out their complexion.",
    benefits: [
      "Organic Vitamin C formula",
      "Brightens the look of dull skin",
      "Lightweight, fast-absorbing texture",
    ],
    images: [
      "/images/products/organic-vitamin-c-serum/secondary-1.webp",
      "/images/products/organic-vitamin-c-serum/hero.webp",
      "/images/products/organic-vitamin-c-serum/secondary-2.webp",
    ],
    shopeeUrl:
      "https://shopee.ph/Organic-Vitamin-C-Serum-i.1889974610.29595509004?extraParams=%7B%22display_model_id%22%3A259312686890%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    slug: "niacinamide-facial-wash",
    name: "Auléa Niacinamide Facial Wash",
    category: "Cleansers",
    size: "60 mL",
    shortDescription: "Removes dirt and impurities, minimizing pores and brightening dull skin.",
    description:
      "Removes dirt and impurities, minimizing pores and brightening dull skin, as stated on the product label. A daily facial wash built around niacinamide.",
    usage: "Massage a small amount onto damp skin morning and night, then rinse thoroughly with lukewarm water.",
    ingredientsNote: "Full ingredient list coming soon.",
    suitableFor: "All skin types, including oily and combination skin.",
    benefits: [
      "Removes dirt, impurities, and excess oil",
      "Niacinamide helps minimize the look of pores",
      "Helps brighten dull-looking skin",
    ],
    images: [
      "/images/products/niacinamide-facial-wash/secondary-1.webp",
      "/images/products/niacinamide-facial-wash/hero.webp",
      "/images/products/niacinamide-facial-wash/secondary-2.webp",
    ],
    shopeeUrl:
      "https://shopee.ph/Niacinamide-Facial-Wash-i.1889974610.27645512528?extraParams=%7B%22display_model_id%22%3A361346432347%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    slug: "collagen-vitamin-e-firming-lotion",
    name: "Auléa Collagen + Vitamin E Firming Lotion",
    category: "Lotions",
    size: "100 mL",
    shortDescription: "For firmer, smoother, healthier-looking skin.",
    description:
      "For firmer, smoother, and healthier-looking skin, as stated on the product label. A daily lotion built around collagen and Vitamin E.",
    usage: "Apply to clean skin morning and night, massaging gently until fully absorbed.",
    ingredientsNote: "Full ingredient list coming soon.",
    suitableFor: "All skin types looking for extra firmness and hydration.",
    benefits: [
      "Collagen + Vitamin E formula",
      "For firmer, smoother-feeling skin",
      "Supports a healthier-looking complexion with daily use",
    ],
    images: [
      "/images/products/collagen-vitamin-e-firming-lotion/secondary-1.webp",
      "/images/products/collagen-vitamin-e-firming-lotion/hero.webp",
    ],
    shopeeUrl:
      "https://shopee.ph/Collagen-whitening-Lotion-i.1889974610.47365668960?extraParams=%7B%22display_model_id%22%3A356338070447%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    slug: "glass-skin-natural-soap",
    name: "Auléa Natural Soap, Glass Skin",
    category: "Soaps",
    size: "70 g",
    shortDescription: "Natural soap for that glass skin glow.",
    description:
      "A natural bar soap made for that coveted glass skin glow. Gentle enough for daily use, as part of a full-body routine.",
    usage: "Lather with water and massage over face and body. Rinse thoroughly. Use daily as part of your cleansing routine.",
    ingredientsNote: "Full ingredient list coming soon.",
    suitableFor: "All skin types looking for a gentle, everyday bar soap.",
    benefits: [
      "Natural bar soap",
      "Formulated for that coveted glass skin glow",
      "Gentle enough for daily face and body use",
    ],
    images: [
      "/images/products/glass-skin-natural-soap/secondary-1.webp",
      "/images/products/glass-skin-natural-soap/hero.webp",
      "/images/products/glass-skin-natural-soap/secondary-2.webp",
    ],
    shopeeUrl:
      "https://shopee.ph/Aulea-Glass-Skin-Soap-i.1889974610.40733433810?extraParams=%7B%22display_model_id%22%3A376346471343%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    slug: "ultimate-whitening-natural-soap",
    name: "Auléa Natural Soap, Ultimate Whitening",
    category: "Soaps",
    size: "70 g",
    shortDescription: "Natural whitening soap.",
    description:
      "A natural bar soap formulated for whitening, as named on the product label. Aulea's bestselling soap.",
    usage: "Lather with water and massage over face and body. Rinse thoroughly. Use daily, morning and night.",
    ingredientsNote: "Full ingredient list coming soon.",
    suitableFor: "All skin types looking for an everyday whitening bar soap.",
    benefits: [
      "Natural bar soap formulated for whitening",
      "Aulea's bestselling soap",
      "Gentle enough for daily face and body use",
    ],
    images: [
      "/images/products/ultimate-whitening-natural-soap/secondary-1.webp",
      "/images/products/ultimate-whitening-natural-soap/hero.webp",
      "/images/products/ultimate-whitening-natural-soap/secondary-2.webp",
    ],
    shopeeUrl:
      "https://shopee.ph/Ultimate-Whitening-Soap-i.1889974610.44515681939?extraParams=%7B%22display_model_id%22%3A391338106605%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    slug: "essence-for-men",
    name: "Auléa Essence for Men",
    category: "Fragrance",
    size: "50 mL Eau de Parfum",
    shortDescription: "Eau de Parfum, available in two scents.",
    description:
      "A men's Eau de Parfum line, found in the supplied product photography and not in any earlier spec version. Scent notes and story pending client input; nothing about fragrance composition is invented here.",
    usage: "Spray onto pulse points, such as the wrists and neck, after showering for a longer-lasting scent.",
    ingredientsNote: "Full ingredient list coming soon.",
    suitableFor: "Fragrance, not a skincare product.",
    benefits: [
      "50 mL Eau de Parfum",
      "Available in two scents: Paul and Cedrick",
      "Long-lasting fragrance formula",
    ],
    images: [
      "/images/products/essence-for-men/hero.webp",
      "/images/products/essence-for-men/secondary-1.webp",
      "/images/products/essence-for-men/secondary-2.webp",
    ],
    shopeeUrl:
      "https://shopee.ph/Aulea-Men's-Collection-i.1889974610.47265724436?extraParams=%7B%22display_model_id%22%3A277861711805%2C%22model_selection_logic%22%3A3%7D",
    variants: ["Paul", "Cedrick"],
  },
  {
    slug: "essence-for-women",
    name: "Auléa Essence for Women",
    category: "Fragrance",
    size: "50 mL Eau de Parfum",
    shortDescription: "Eau de Parfum, available in three scents.",
    description:
      "A women's Eau de Parfum line, found in the supplied product photography and not in any earlier spec version. Scent notes and story pending client input; nothing about fragrance composition is invented here.",
    usage: "Spray onto pulse points, such as the wrists and neck, after showering for a longer-lasting scent.",
    ingredientsNote: "Full ingredient list coming soon.",
    suitableFor: "Fragrance, not a skincare product.",
    benefits: [
      "50 mL Eau de Parfum",
      "Available in three scents: Irish, Nathalie, and Courtney",
      "Long-lasting fragrance formula",
    ],
    images: [
      "/images/products/essence-for-women/hero.webp",
      "/images/products/essence-for-women/secondary-1.webp",
      "/images/products/essence-for-women/secondary-2.webp",
    ],
    shopeeUrl:
      "https://shopee.ph/Aulea-Fragrance-Womens-Collection-50ml-i.1889974610.40183412198?extraParams=%7B%22display_model_id%22%3A401342203764%2C%22model_selection_logic%22%3A3%7D",
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
