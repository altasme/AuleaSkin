# Build-Ready Intake & Asset Checklist — Aulea Skin

Tracks what's still outstanding against
[`docs/aulea-skin-build-spec-v2.0.md`](aulea-skin-build-spec-v2.0.md) — the
locked, authoritative spec for this rebuild. The 4–6 day build clock (spec
G3) starts once this comes back READY, not before.

**Status: NOT READY** — blockers below still open.

## Received this round — product & lifestyle photography + logo

Real assets landed and are now live on the site (`public/images/`,
`src/components/Logo.tsx`): the sitewide hero shot, 3 photos each for 6 of
the 8 catalog SKUs (2 for Collagen + Vitamin E Firming Lotion), and the
real logo lockup + icon (used as-is per spec B2 — not redesigned, just
re-exported as web-weight PNG; see `assets/logo-source/README.md`).

**This photography changed what the catalog actually is, vs. the spec
text — flagging clearly rather than quietly reconciling:**

- [x] **Sunscreen is SPF 50 with Alpha Arbutin**, not SPF 30. The spec text
      (B6/C2) says SPF 30; the real product label says SPF 50 with Alpha
      Arbutin. Product renamed and compliance note updated accordingly —
      **please confirm which figure is correct** before this SKU can be
      cleared to publish either way.
- [x] **Niacinamide Facial Wash's real label carries its own claims** —
      "Removes dirt & impurities, minimizing pores and brightening dull
      skin" — not previously flagged as a regulated-claim SKU. Now
      compliance-held like the other five.
- [x] **Collagen + Vitamin E Firming Lotion's label reads** "For firmer,
      smoother & healthier-looking skin" (confirms 100 mL size too).
- [ ] **No plain "Aulea Natural Soap" exists in the photography** — only
      Glass Skin and Ultimate Whitening variants. Removed from the catalog
      rather than kept as an unphotographed placeholder — **please confirm
      whether this SKU actually exists** (discontinued? renamed? still
      pending photography?).
- [x] **Two SKUs not in any spec version showed up in photography**: Auléa
      Essence for Men (scents "Paul", "Cedrick") and Essence for Women
      (scents "Irish", "Nathalie", "Courtney") — 50 mL Eau de Parfum. Added
      to the catalog as real, photographed products. No regulated efficacy
      claim on either label, so no compliance hold — but everything else
      (price, notes, ingredients, actual FDA category) is still pending.

Catalog is now **8 SKUs**, not 7. See `docs/compliance-notes.md` for the
full compliance implication of each of these.

## Blockers (build cannot fully proceed without these)

- [ ] Complete product list — **prices**, full descriptions, benefits,
      how-to-use for all 8 confirmed SKUs (spec B6, revised)
- [ ] Legible **ingredients label photos** — the supplied photography
      shows product name/size/branding clearly but not a readable
      ingredients panel (spec C1)
- [ ] **FDA CPN number(s)** or written status — especially for the six
      regulated-by-name SKUs (spec C2)
- [ ] **Written substantiation** for any efficacy claim to be published —
      **Ultimate Whitening is the highest exposure item in the catalog**
      and needs explicit client discussion on naming/positioning before
      it can go live, not just a substantiation document (spec C2)
- [ ] **Confirm SPF 30 vs. SPF 50** for the sunscreen — spec text and
      product label disagree (see above)

## Brand & content

- [x] Colour system — locked, spec PART A tokens implemented exactly
      (`src/app/globals.css`)
- [x] Typography — Bebas Neue final; Fraunces standing in for Tan Pearl /
      Sego pending web-licensing confirmation (spec A4)
- [x] **Logo — received and live** (`Full logo - lock up.svg`, `logo
      icon.svg`). Used as supplied, not redesigned; re-exported as
      web-weight PNGs for performance (spec F2) — see
      `assets/logo-source/README.md` for the source files and why.
- [x] **Product & lifestyle photography — received for 6 of 8 SKUs** (see
      above); sitewide hero image received and live on the homepage.
      Founder photo still pending.
- [ ] Authentic customer feedback (screenshots or transcribed quotes,
      spec C3)
- [x] Founder story — received and implemented first-person on Home +
      About per spec D7

## Operations

- [ ] Payment methods that can actually be connected (spec E2) — nothing
      is shown as live at checkout until this is confirmed
- [ ] COD terms + any order-value ceiling (spec E3)
- [x] Shipping/couriers + ₱400 free-ship threshold — stated (J&T Express,
      Lalamove, LBC); confirm operational accuracy before launch
- [ ] Returns/refund terms for cosmetics (spec C2/G4) — the shipping-returns
      page has a drafting note, not a publishable policy
- [x] Primary contact email — auleaskinessentials@gmail.com; confirm any
      other official channel

## Technical access

- [ ] Domain registrar / DNS access (or named controller)
- [ ] Meta ad account / pixel access for spec F5 measurement
- [ ] Payment gateway / processor access — checkout is a **flow preview
      only** (`src/app/checkout`) until this exists; there is no backend
      or order database in this static export
- [ ] Email capture destination (list/store/Resend or equivalent) for the
      homepage signup — the signup is intentionally disabled
      (`src/components/EmailSignup.tsx`) until this exists

## Outstanding, in short

Prices for all 8 SKUs, legible ingredient-panel photos, CPN/substantiation
(Ultimate Whitening especially), SPF 30-vs-50 confirmation, whether "Aulea
Natural Soap" (plain) is real, founder photo, payment/DNS/pixel access,
email capture destination, an actual backend for checkout/orders (this
build is currently static/frontend-only).
