# Compliance Notes — Aulea Skin (Philippines Cosmetics)

Operational summary of spec §11. Not legal advice — confirm current FDA
Philippines and DTI requirements per project.

## Hard rules baked into this codebase

1. **Never use "FDA-approved."** Cosmetics are *notified*, not approved.
   Where regulatory standing is shown, it must be the CPN number
   (`siteConfig.cpnStatus` — currently a pending placeholder).
2. **No therapeutic/medical claims.** Whitening, anti-acne, anti-aging, and
   "clinically proven" language is sensitive and must be substantiated in
   writing by the client before publishing. Every product's `description`
   field in `src/data/products.ts` is currently a neutral placeholder for
   exactly this reason — ALTAVENTURES does not author or verify efficacy
   claims (§11.3).
3. **No claim ships without both:**
   - the CPN number(s) for the product being marketed, and
   - written substantiation for the specific efficacy claim.
   If either is missing, the claim is cut or reworded to neutral language —
   no exceptions, even at client request.
4. **Before/after and testimonial imagery** must be real, client-supplied,
   and consented where required. Never fabricate or imply guaranteed
   results.
5. **Returns policy is category-specific.** `src/app/policies/shipping-returns/page.tsx`
   is a draft skeleton, not a publishable policy — opened cosmetics are
   commonly non-returnable on hygiene grounds under RA 7394 / DTI rules, but
   the actual policy must reflect the client's real product category and
   fulfillment terms.

## QA gate before launch (mirrors spec §21 "Compliance")

- [ ] No "FDA-approved" anywhere on the site
- [ ] Every published efficacy claim maps to supplied written substantiation
- [ ] CPN number(s) displayed wherever regulatory standing is referenced
- [ ] Returns policy matches the actual product category, not a generic template
