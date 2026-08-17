# Client Intake & Asset Checklist — Aulea Skin

Per ALTAVENTURES Phase 1 spec §19. This is the gate for §20 Step 1
("Confirm inputs"). The full Phase 1 build (real copy, real product data,
checkout implementation, live measurement, compliance sign-off) does not
start until this comes back READY.

**Intake status: NOT READY**

Nothing below has been supplied yet. Everything currently in the repo
(`src/data/products.ts`, `src/lib/site-config.ts`, all page copy) is a
structural placeholder only — see the `[bracketed]` notes throughout the
codebase and the image-placeholder convention from the spec.

## Brand

- [ ] Logo files (vector preferred)
- [ ] Brand colors / fonts / guidelines
- [ ] Brand story, mission, positioning

*Current state: the site uses a provisional placeholder palette (cream /
sage / clay, see `src/app/globals.css`) and a serif/sans pairing. Replace
once real brand guidelines arrive.*

## Products

- [ ] Product list with names, prices, variants, sizes
- [ ] Descriptions, benefits, usage instructions
- [ ] Ingredients / INCI lists
- [ ] Product photography
- [ ] **CPN number(s)** (skincare/cosmetics — see §11 / `docs/compliance-notes.md`)
- [ ] **Written claim substantiation** for any efficacy claim

*Current state: `src/data/products.ts` has 5 placeholder catalog entries
(Cleanser, Toner, Serum, Moisturizer, Sunscreen) as structural stand-ins
for a routine, not a real catalog.*

## Trust

- [ ] Real reviews / testimonials (with consent where required)
- [ ] Customer / UGC photos
- [ ] Certifications / registrations / media features

## Business & Operations

- [ ] Business name (legal), contact, address, hours, service areas
- [ ] Social + marketplace links (Shopee / TikTok Shop / Lazada / FB / IG)
- [ ] Payment methods, shipping, delivery, returns/refund terms

## Technical Access

- [ ] Domain registrar / DNS access (or named person who controls it)
- [ ] Ad account / pixel access for §8 measurement setup
- [ ] Any existing hosting / store admin access

## Forced Strategic Decision (§9.1)

- [ ] **Checkout vs. Marketplace routing decision** — own checkout, marketplace
      routing (Shopee / TikTok Shop / Lazada), or hybrid. This determines
      whether the `/cart` page becomes a real checkout or a routing hub, and
      is currently unresolved (`checkoutModel: "pending"` in
      `src/lib/site-config.ts`).

## Outstanding

Everything above. This checklist should be the first artifact sent back to
the client; do not proceed to Step 2 (website strategy) or real content
population until it returns READY.
