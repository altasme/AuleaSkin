# Build-Ready Intake & Asset Checklist, Aulea Skin

Tracks what's still outstanding against
[`docs/aulea-skin-build-spec-v2.0.md`](aulea-skin-build-spec-v2.0.md), the
locked, authoritative spec for this rebuild.

**Status: NOT READY**, real prices, payment access, and a few other items
below are still outstanding.

## Frontend redesign, based on a supplied reference

The frontend was reskinned against a set of reference screenshots
(`Aulea__template.zip`) showing a more polished layout: announcement bar,
header search + cart icons, badge-style product cards, category tiles,
icon-based benefit row, and a 4-column footer. That layout and component
language is now live across the site.

The reference screenshots also contained specific prices (e.g. ₱129,
₱349), Sale/New/Best Seller badges, three testimonial quotes, and a 6-SKU
catalog that included the plain "Aulea Natural Soap" we'd already
confirmed doesn't exist in the real photography. None of that content was
adopted: prices stay `[Price pending]`, no sale/bestseller badges are
shown (no real sales data to base them on), testimonials stay the honest
pending-feedback panel, and the catalog stays the confirmed 8 SKUs. If any
of those prices or testimonials are real and meant to publish, please
confirm and we'll wire them in directly.

## Received: product & lifestyle photography + logo

Real assets landed and are now live on the site (`public/images/`,
`src/components/Logo.tsx`): the sitewide hero shot, 3 photos each for 6 of
the 8 catalog SKUs (2 for Collagen + Vitamin E Firming Lotion), and the
real logo lockup + icon (used as-is per spec B2, not redesigned, just
re-exported as web-weight PNG; see `assets/logo-source/README.md`).

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

## Blockers (build cannot fully proceed without these)

- [ ] Complete product list: **prices**, full descriptions, benefits,
      how-to-use for all 8 confirmed SKUs (spec B6, revised)
- [ ] Legible **ingredients label photos**, the supplied photography shows
      product name/size/branding clearly but not a readable ingredients
      panel

## Brand & content

- [x] Colour system, locked, spec PART A tokens implemented exactly
      (`src/app/globals.css`)
- [x] Typography, Bebas Neue final; Fraunces standing in for Tan Pearl /
      Sego pending web-licensing confirmation (spec A4)
- [x] **Logo, received and live** (`Full logo - lock up.svg`, `logo
      icon.svg`). Used as supplied, not redesigned; re-exported as
      web-weight PNGs for performance (spec F2), see
      `assets/logo-source/README.md` for the source files and why.
- [x] **Product & lifestyle photography, received for 6 of 8 SKUs** (see
      above); sitewide hero image received and live on the homepage.
      Founder photo still pending.
- [ ] Authentic customer feedback (screenshots or transcribed quotes,
      spec C3)
- [x] Founder story, received and implemented first-person on Home + About
      per spec D7

## Operations

- [ ] Payment methods that can actually be connected (spec E2), nothing is
      shown as live at checkout until this is confirmed
- [ ] COD terms + any order-value ceiling (spec E3)
- [x] Shipping/couriers + ₱400 free-ship threshold, stated (J&T Express,
      Lalamove, LBC); confirm operational accuracy before launch
- [ ] Returns/refund terms, matching Aulea's actual fulfillment terms
      (the shipping-returns page has a drafting note, not a publishable
      policy)
- [x] Primary contact email, auleaskinessentials@gmail.com; confirm any
      other official channel

## Technical access

- [ ] Domain registrar / DNS access (or named controller)
- [ ] Meta ad account / pixel access for spec F5 measurement
- [ ] Payment gateway / processor access, checkout is a **flow preview
      only** (`src/app/checkout`) until this exists; there is no backend
      or order database in this static export
- [ ] Email capture destination (list/store/Resend or equivalent) for the
      homepage signup, the signup is intentionally disabled
      (`src/components/EmailSignup.tsx`) until this exists

## Outstanding, in short

Prices for all 8 SKUs, legible ingredient-panel photos, whether "Aulea
Natural Soap" (plain) is real, founder photo, payment/DNS/pixel access,
email capture destination, an actual backend for checkout/orders (this
build is currently static/frontend-only).

See [`docs/compliance-notes.md`](compliance-notes.md) for the regulatory
reference material (informational only, not a build blocker for this
project).
