# Build-Ready Intake & Asset Checklist — Aulea Skin

Tracks what's still outstanding against
[`docs/aulea-skin-build-spec-v2.0.md`](aulea-skin-build-spec-v2.0.md) — the
locked, authoritative spec for this rebuild. The 4–6 day build clock (spec
G3) starts once this comes back READY, not before.

**Status: NOT READY** — blockers below still open.

## Blockers (build cannot fully proceed without these)

- [ ] Complete product list — **prices**, sizes/variants beyond what's
      confirmed, descriptions, benefits, how-to-use for all 7 confirmed
      SKUs (spec B6)
- [ ] Product **label photos** (ingredient info must come from the actual
      label, not be invented — spec C1)
- [ ] Product photography — originals/high-res, plus group/lifestyle shots
      (spec B5)
- [ ] **FDA CPN number(s)** or written status — especially for the five
      regulated-by-name SKUs (spec C2)
- [ ] **Written substantiation** for any efficacy claim to be published —
      **Ultimate Whitening is the highest exposure item in the catalog**
      and needs explicit client discussion on naming/positioning before
      it can go live, not just a substantiation document (spec C2)

## Brand & content

- [x] Colour system — locked, spec PART A tokens implemented exactly
      (`src/app/globals.css`)
- [x] Typography — Bebas Neue final; Fraunces standing in for Tan Pearl /
      Sego pending web-licensing confirmation (spec A4)
- [ ] **Vector logo files** (SVG/AI/PDF) for web/retina rendering +
      favicon — `src/components/Logo.tsx` is a text-based stand-in;
      spec B2 says do not redesign the logo, only swap in the real one
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

Full product data + prices (7 SKUs), label photos, high-res photography,
CPN/substantiation (Ultimate Whitening especially), vector logo,
payment/DNS/pixel access, email capture destination, an actual backend for
checkout/orders (this build is currently static/frontend-only).
