# Regulatory Notes (Philippines Cosmetics)

Informational reference only, not a build gate. Not legal advice, confirm
current FDA Philippines and DTI requirements per project if the client
wants to pursue formal compliance later.

## What's on the real product labels

For the client's own awareness, these SKUs carry language that Philippine
FDA cosmetics regulation treats as sensitive (whitening, firming, or
brightening claims can shade into drug-claim territory if pushed too
far):

| Product | Label language |
|---|---|
| Ultimate Whitening Natural Soap | "Whitening" in the product name |
| Glass Skin Natural Soap | "Glass Skin" (result-implying name) |
| Collagen + Vitamin E Firming Lotion | "For firmer, smoother & healthier-looking skin" |
| Niacinamide Facial Wash | "Removes dirt & impurities, minimizing pores and brightening dull skin" |
| Sunscreen with Alpha Arbutin | "SPF 50" (label says 50, spec text said 30, worth confirming which is correct) + Alpha Arbutin brightening claim |
| Organic Vitamin C Serum | "Organic" |

`src/data/products.ts` publishes these product names and label-sourced
descriptions as-is. No efficacy claim is invented beyond what's already
on the packaging.

Auléa Essence for Men / Women (Eau de Parfum) carry no efficacy claim,
just scent names.

## If the client wants to pursue formal compliance later

- "FDA-approved" is inaccurate language for cosmetics either way,
  cosmetics are *notified* (CPN), not approved.
- Returns policy: `src/app/policies/shipping-returns/page.tsx` is a
  draft. Opened cosmetics are commonly non-returnable on hygiene grounds
  under RA 7394 / DTI rules, but the actual policy should reflect
  Aulea's real fulfillment terms whenever those are supplied.
- Testimonials: only genuine, client-supplied feedback is used. No
  fabricated names, ratings, before/after, or video.
