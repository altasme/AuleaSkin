# Compliance Notes — Aulea Skin (Philippines Cosmetics)

Operational summary of spec §27. Not legal advice — confirm current FDA
Philippines and DTI requirements per project.

## Hard rules baked into this codebase

1. **Never use "FDA-approved."** Cosmetics are *notified*, not approved.
   Where regulatory standing is shown, it must be the CPN number
   (`siteConfig.cpnStatus` — currently a pending placeholder).
2. **No therapeutic/medical claims.** Whitening, anti-acne, anti-aging,
   and "clinically proven" language is sensitive and must be
   substantiated in writing by the client before publishing.
3. **This brand specifically — named risk.** The three confirmed SKUs
   carry regulated language *in their names*, not just in marketing copy:
   - **"Organic"** — Auléa Organic Serum Vitamin C. "Organic" is a
     regulated descriptor.
   - **"SPF 30"** — Auléa Sunscreen (SPF 30). Sunscreens with SPF claims
     get heavier regulatory scrutiny.
   - Product copy like **"brightening"** and **"pore-minimizing"** is
     sensitive wherever it appears (e.g. on the Niacinamide Facial Wash).

   `src/data/products.ts` marks the Sunscreen and Serum with
   `complianceHold: true` and a `complianceNote` explaining exactly what's
   blocked. The product **name** is shown (it's the client-supplied
   product identity from the brand kit, not an invented claim), but
   **no description, benefit, or efficacy copy beyond the bare name is
   published** until CPN + written substantiation arrive — every
   `description`/`ingredientsNote`/benefits field for these SKUs stays a
   bracketed placeholder for exactly this reason.
4. **No claim ships without both:**
   - the CPN number(s) for the product being marketed, and
   - written substantiation for the specific efficacy claim.
   If either is missing, the claim is cut or reworded to neutral language
   — no exceptions, even at client request.
5. **Before/after and video testimonials are explicitly out of scope**
   (spec §11) — Aulea has none currently, and the spec says not to create
   placeholders implying they exist. None appear anywhere on this site;
   don't add any without real, consented client material.
6. **Returns policy is category-specific.**
   `src/app/policies/shipping-returns/page.tsx` is a draft, not a
   publishable policy — opened cosmetics are commonly non-returnable on
   hygiene grounds under RA 7394 / DTI rules, but the actual policy must
   reflect Aulea's real fulfillment terms (spec §41).

## QA gate before launch (mirrors spec §39 "Compliance")

- [ ] No "FDA-approved" anywhere on the site
- [ ] "Organic" / SPF value / brightening / pore-minimizing language maps
      to supplied substantiation, or stays cut
- [ ] CPN number(s) displayed only where supplied
- [ ] Returns policy matches the actual product category, not a generic
      template
- [ ] No before/after or video testimonial content implied or shown
