# Build-Ready Intake & Asset Checklist, Aulea Skin

Tracks what's still outstanding against
[`docs/aulea-skin-build-spec-v2.0.md`](aulea-skin-build-spec-v2.0.md), the
locked, authoritative spec for this rebuild.

**Status: NOT READY**, a few genuine gaps remain below, but the biggest
former blocker (own checkout/payment backend) is now moot, see below.

## Purchase model: redirects to Shopee, not an own checkout

Client directive supersedes spec §2's own-checkout plan. There is no
cart, checkout, or order backend on this site anymore:

- [x] Every product's "Buy on Shopee" button links to that SKU's real
      Shopee listing (`shopeeUrl` in `src/data/products.ts`), opens in a
      new tab. `src/app/cart`, `src/app/checkout`, `src/app/order-confirmation`,
      and `src/lib/cart-context.tsx` were removed, they no longer apply.
- [x] No price is shown on this site, Shopee is the pricing source of
      truth. Product pages/cards show name, category, description, and
      composed benefits/usage copy, not a price.
- [x] Privacy Policy, Terms of Service, and Shipping & Returns pages
      rewritten to describe this model honestly (orders/payment/returns
      all happen on Shopee, governed by Shopee's own policies, this site
      collects nothing itself since the contact form was also removed).
- [x] Contact page's message form removed per client request, only the
      real contact info list (email, Shopee store, shipping) remains.

## Real testimonials received

`docs/intake-checklist.md`'s long-standing "authentic customer feedback"
gap is resolved: 8 real "Product Review" graphics (with genuine
star ratings and customer quotes, English and Tagalog) are live on the
homepage (`public/images/testimonials/`, `src/app/page.tsx`). These
replace the earlier honest "pending" placeholder.

## Composed copy (client directive, not client-supplied)

The client asked to have remaining text placeholders generated rather
than left pending. Done for:

- [x] `usage`, `suitableFor`, and `benefits` for all 8 SKUs
      (`src/data/products.ts`), written from what's actually known: the
      product name, category, and real label text already on file.
- [x] Privacy/Terms/Shipping-Returns policy pages, rewritten to reflect
      the Shopee-redirect model above.

**Not composed on purpose:** `ingredientsNote` stays a pending
placeholder for every SKU. Inventing a specific ingredient list isn't
safe copy to fabricate, it's a real safety/allergen claim, not a
stylistic gap, so it still needs the client's actual ingredients panel
rather than generated text. The Ingredients row on the product detail
page (`src/app/products/[slug]/page.tsx`) is hidden for now rather than
showing that placeholder text to visitors; `ingredientsNote` stays in
`src/data/products.ts` so the row can come back once real label data
lands.

Since this is composed copy rather than client-supplied fact, it's worth
a client read-through before treating it as final, particularly the
`benefits` bullets (adjacent to claims territory for the regulated-name
SKUs, see `docs/compliance-notes.md`).

## Frontend design: matched to a supplied reference, then extended

The frontend was reskinned against reference screenshots
(`Aulea__template.zip`): announcement bar, header search icon,
category tiles, icon-based benefit row, 4-column footer. Colour tokens
were then sampled directly from that reference and now differ from spec
v2.0 PART A's original hex values, real navy blue (`#102048`) and muted
bronze-gold (`#c68b57`) on near-white, vs. the spec's warmer indigo
(`#1F1A76`) and bright golden-yellow (`#E2AB2D`) on warm cream, please
confirm this is the intended direction since it's a real deviation from
the originally locked spec, not just an approximation.

Product cards, homepage, and category tiles lead with a product-only
shot where one exists (7 of 8 SKUs); a later request specifically asked
the homepage's "Find Your Ritual" category tiles to use the model
photography instead, so those tiles (only) show the model shots, while
product cards elsewhere keep the product-only lead. See
`docs/image-requirements.md` for canvas sizes for any future photography.

A new brand photo (real, client-supplied social-post graphic) sits in
its own section right after the homepage hero. The site favicon/app-icon
were regenerated from a newly supplied favicon source
(`assets/logo-source/aulea-favicon-source.svg`).

## Received: product & lifestyle photography + logo

Real assets landed and are live on the site (`public/images/`,
`src/components/Logo.tsx`): the sitewide hero shot, 3 photos each for 6 of
the 8 catalog SKUs (2 for Collagen + Vitamin E Firming Lotion), and the
real logo lockup + icon (used as-is per spec B2, not redesigned).

This photography changed what the catalog actually is, vs. the spec text:

- [x] **Sunscreen is SPF 50 with Alpha Arbutin**, not SPF 30. The spec
      text (B6/C2) says SPF 30; the real product label says SPF 50 with
      Alpha Arbutin. Product renamed accordingly, worth double-checking
      with the client which figure is current.
- [x] **Niacinamide Facial Wash's real label carries its own claims**,
      "Removes dirt & impurities, minimizing pores and brightening dull
      skin", now published as the product description.
- [x] **Collagen + Vitamin E Firming Lotion's label reads** "For firmer,
      smoother & healthier-looking skin" (confirms 100 mL size too).
- [ ] **No plain "Aulea Natural Soap" exists in the photography**, only
      Glass Skin and Ultimate Whitening variants. Removed from the catalog
      rather than kept as an unphotographed placeholder, worth confirming
      whether this SKU actually exists (discontinued? renamed? still
      pending photography?).
- [x] **Two SKUs not in any spec version showed up in photography**: Auléa
      Essence for Men (scents "Paul", "Cedrick") and Essence for Women
      (scents "Irish", "Nathalie", "Courtney"), 50 mL Eau de Parfum. Added
      to the catalog as real, photographed products.

Catalog is now **8 SKUs**, not 7.

## Two set SKUs added from a later photography upload

- [x] **Auléa Glass Skin Set** (`glass-skin-set`), a 4-piece bundle:
      Glass Skin Brightening Soap (70 g), Glass Skin Hydrating Toner
      (60 mL), Glass Skin Day Cream SPF 30 PA++++ (15 g), Glass Skin
      Night Repair Cream (15 g). All four names come straight off the
      real label photography.
- [x] **Auléa Melasma Set** (`melasma-set`), a 4-piece bundle: Gentle
      Brightening Soap (70 g), Exfoliating Toner (60 mL), Hydrating
      Moisturizer with Sun Protection (15 g), Night Repair Cream
      (15 g). Nothing on the actual packaging says "melasma", that
      name came from the client's own filename, not the label. Flagged
      as a regulated-claim risk (melasma is a medical diagnosis, not a
      cosmetic descriptor) and briefly published under a label-accurate
      name instead ("Gentle Brightening Set"); the client reviewed that
      and directed it be published as "Melasma Set" regardless, see
      `compliance-notes.md` for the record of that decision.
- [ ] Both sets' `shopeeUrl` is intentionally blank
      (`src/data/products.ts`), no listing link was supplied yet. The
      "Buy on Shopee" button is live but currently links nowhere, fill
      in before launch.
- [ ] `benefits`, `description`, `usage`, and `suitableFor` for both
      sets are composed copy, same basis and same client
      read-through caveat as the rest of the composed catalog copy
      above.

Catalog is now **10 SKUs**.

## Still outstanding

- [ ] Legible **ingredients label photos**, the supplied photography shows
      product name/size/branding clearly but not a readable ingredients
      panel, see "Composed copy" above for why this one can't be filled
      in with generated text
- [ ] Whether plain "Aulea Natural Soap" is a real SKU
- [x] Founder photo, received and live on Home and About
      (`public/images/founder/founder.webp`)
- [ ] Real Shopee listing links for the two new set SKUs (Glass Skin
      Set, Melasma Set)
- [ ] Cloudinary unsigned upload preset for the admin panel's image
      uploader (cloud name is set, the preset itself still needs to be
      created in the Cloudinary dashboard), see `docs/admin-panel.md`
- [ ] Cloudflare KV namespace for the admin panel's database, needs
      creating and binding on the real Cloudflare account, four clicks in
      the dashboard, no CLI or compute environment needed, plus setting
      the `ADMIN_USERNAME` / `ADMIN_PASSWORD` secrets on the Pages project,
      see `docs/admin-panel.md`'s "Production setup". Works already in
      local dev without this.
- [ ] Domain registrar / DNS access (or named controller)
- [ ] Meta ad account / pixel access for spec F5 measurement
- [ ] Email capture destination (list/store/Resend or equivalent) for the
      homepage signup, intentionally disabled
      (`src/components/EmailSignup.tsx`) until this exists

See [`docs/compliance-notes.md`](compliance-notes.md) for the regulatory
reference material (informational only, not a build blocker for this
project).
