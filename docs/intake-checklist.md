# Build-Ready Intake & Asset Checklist — Aulea Skin

Mirrors spec §34 (`docs/aulea-skin-phase1-spec-v1.4.md`). This is the gate
before the 4–6 day build clock starts. The brand kit resolved a lot (name,
colors, type, tagline, founder story, 3 confirmed SKU names) — what's
below is what's still outstanding.

**Status: NOT READY** — blockers below still open.

## Blockers (build cannot fully proceed without these)

- [ ] Complete product list — **prices**, sizes/variants beyond what's
      confirmed, descriptions, benefits, how-to-use (3 SKUs named via the
      brand kit; everything else about them is still missing — §7)
- [ ] Product **label photos** (ingredient info must come from the actual
      label, not be invented)
- [ ] Product photography — originals/high-res (hero shots seen in the
      kit; source files needed)
- [ ] **FDA CPN number(s)** or written status — especially for the
      "Organic" and "SPF 30" claims baked into the confirmed SKU names
      (§27)
- [ ] **Written substantiation** for any efficacy claim to be published
      (brightening, pore-minimizing, SPF value, "organic")

## Brand & content

- [x] Logo variants, palette, typefaces, tagline — received (brand kit,
      folded into `src/app/globals.css` / `src/app/layout.tsx`)
- [ ] **Vector logo files** (SVG/AI/PDF) for web/retina rendering +
      favicon — `src/components/Logo.tsx` is a text-based stand-in until
      these arrive
- [ ] **Body/paragraph typeface** confirmed (§13.3) — Geist Sans used as
      placeholder pairing
- [ ] Web-embedding **font licensing** for Tan Pearl / Sego confirmed —
      Playfair Display used as a placeholder display face in the meantime
- [ ] Authentic customer feedback screenshots (§10)
- [x] Founder story — received and implemented on Home + About

## Operations

- [ ] Payment methods that can actually be connected (§18)
- [ ] COD terms + any order-value ceiling (§19–20)
- [x] Shipping/couriers + ₱400 free-ship threshold — stated (J&T Express,
      Lalamove, LBC); confirm operational accuracy before launch
- [ ] Returns/refund terms for cosmetics (§41) — `docs/compliance-notes.md`
      has the drafting note, not a publishable policy
- [x] Primary contact email — auleaskinessentials@gmail.com; confirm any
      other official channel

## Technical access

- [ ] Domain registrar / DNS access (or named controller)
- [ ] Meta ad account / pixel access for §33 measurement
- [ ] Any existing hosting/store admin access
- [ ] Email capture destination (list/store/Resend or equivalent) for the
      homepage signup — see §33; the signup is intentionally disabled
      (`src/components/EmailSignup.tsx`) until this exists

## Outstanding, in short

Full product data + prices, label photos, high-res product images,
CPN/substantiation, vector logo, body font confirmation, payment/DNS/pixel
access, email capture destination.
