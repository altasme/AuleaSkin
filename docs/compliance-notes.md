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
| Glass Skin Set | "Glass Skin" (result-implying name, same as the soap above) |
| Melasma Set | "Melasma" in the product name, see below, this one's a client override |

`src/data/products.ts` publishes these product names and label-sourced
descriptions as-is. No efficacy claim is invented beyond what's already
on the packaging.

**"Melasma Set": published on explicit client direction, flag stands
as a record, not a blocker.** Nothing on this set's actual packaging
(soap, toner, moisturizer, night cream) says "melasma" anywhere, that
word only appeared in the client's own filename. Melasma is a specific
medical diagnosis (facial hyperpigmentation), not a cosmetic descriptor
like "whitening" or "brightening", so naming a product after treating
it is a materially stronger claim than the whitening/firming/
brightening language already on this page. This was flagged to the
client and initially published under a label-accurate name instead
("Gentle Brightening Set"). The client reviewed that and directed it be
published as "Melasma Set" regardless ("we don't care about FDA and
stuff, it's what the client asked for"). Published as directed; this
entry stays here so the tradeoff is on record, not to relitigate it.

Auléa Essence for Men / Women (Eau de Parfum) carry no efficacy claim,
just scent names.

## If the client wants to pursue formal compliance later

- "FDA-approved" is inaccurate language for cosmetics either way,
  cosmetics are *notified* (CPN), not approved.
- Returns policy: `src/app/policies/shipping-returns/page.tsx` is a
  draft. Opened cosmetics are commonly non-returnable on hygiene grounds
  under RA 7394 / DTI rules, but the actual policy should reflect
  Aulea's real fulfillment terms whenever those are supplied.
- Testimonials: 8 real, client-supplied "Product Review" graphics are
  live on the homepage (`public/images/testimonials/`). No fabricated
  names, ratings, before/after, or video content is used, and none has
  been added beyond what was actually supplied.
- Benefits copy: `benefits` in `src/data/products.ts` is composed
  marketing copy (client directive), written from the product name,
  category, and real label text already on file, not invented efficacy
  claims. Worth a client read-through given several SKUs are already
  regulated by name above.
