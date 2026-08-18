# Compliance Notes — Aulea Skin (Philippines Cosmetics)

Operational summary of spec C2 (`docs/aulea-skin-build-spec-v2.0.md`). Not
legal advice — confirm current FDA Philippines and DTI requirements per
project.

## Hard rules baked into this codebase

1. **Never use "FDA-approved."** Cosmetics are *notified*, not approved.
   Where regulatory standing is shown, it must be the CPN number
   (`siteConfig.cpnStatus` — currently a pending placeholder).
2. **No therapeutic/medical claims.** Whitening, firming, "clinically
   proven," and result-implying language is sensitive and must be
   substantiated in writing by the client before publishing.
3. **This catalog specifically — regulated by name (spec C2):**
   | Product | Regulated element | Exposure |
   |---|---|---|
   | Ultimate Whitening Natural Soap | "Whitening" | **Highest** — can cross into drug-claim territory |
   | Glass Skin Natural Soap | "Glass Skin" (result claim) | High |
   | Collagen + Vitamin E Firming Lotion | "Firming" (efficacy claim) | Moderate |
   | Organic Vitamin C Serum | "Organic" (regulated descriptor) | Moderate |
   | Sunscreen (SPF 30) | "SPF 30" (SPF claims get heavier scrutiny) | Moderate |

   `src/data/products.ts` marks each with `complianceHold: true` and a
   `complianceNote` explaining exactly what's blocked. The product
   **name** is shown (it's the client-supplied product identity, not an
   invented claim), but no description, benefit, or efficacy copy beyond
   the bare name is published — every `description` field for these SKUs
   stays a bracketed placeholder for exactly this reason. Niacinamide
   Facial Wash and Aulea Natural Soap carry no named regulated claim and
   are unflagged.
4. **No claim ships without both:**
   - the CPN number(s) for the product being marketed, and
   - written substantiation for the specific efficacy claim.
   If either is missing, the claim is cut or reworded to neutral language
   — no exceptions, even at client request.
5. **Testimonials/trust content:** only genuine, client-supplied feedback
   (spec C3). No fabricated names, ratings, before/after, or video. Where
   identity is unavailable, label it "Verified customer feedback" rather
   than inventing one.
6. **Returns policy is category-specific.**
   `src/app/policies/shipping-returns/page.tsx` is a draft, not a
   publishable policy — opened cosmetics are commonly non-returnable on
   hygiene grounds under RA 7394 / DTI rules, but the actual policy must
   reflect Aulea's real fulfillment terms.

## QA gate before launch (mirrors spec G4 "Compliance")

- [ ] No "FDA-approved" anywhere on the site
- [ ] Whitening / Glass Skin / Firming / Organic / SPF map to supplied
      substantiation, or stay cut
- [ ] CPN number(s) displayed only where supplied
- [ ] Returns policy matches the actual product category, not a generic
      template
- [ ] Every text/background pairing meets spec A3 contrast targets — no
      forbidden pairings (gold text on cream, long body copy on full navy)
