# Aulea Skin

Aulea Skin's own e-commerce storefront, built following
[`docs/aulea-skin-build-spec-v2.0.md`](docs/aulea-skin-build-spec-v2.0.md)
— **the locked, authoritative spec for this project.** Its design system
(PART A) is explicitly locked: exact color tokens, named fonts, button
roles. Earlier spec versions and an experimental rose/sage palette from a
prior session are superseded; don't follow them where they conflict with
v2.0.

## Project status: intake NOT READY (spec G3/H1)

Real assets have landed: the locked colour/type system, founder story (now
written first-person on Home + About), the real logo, a sitewide hero
photo, and product photography for 6 of the catalog's 8 SKUs. What's still
blocking a launch-ready build: **prices**, full product
descriptions/benefits, legible ingredient-panel photos, FDA CPN numbers +
written claim substantiation (Ultimate Whitening is the highest compliance
exposure in the catalog), a founder photo, and payment/DNS/pixel access.
See [`docs/intake-checklist.md`](docs/intake-checklist.md) for the full
list — including two things the photography itself changed: the sunscreen
label reads **SPF 50**, not the SPF 30 in the spec text, and two SKUs not
in any spec version (**Auléa Essence for Men/Women**, a fragrance line)
turned up in the supplied photos.

- **What's here:** the locked design system (Navy `#1F1A76` / Navy Deep
  `#131047` / Gold `#E2AB2D` / Cream `#F8EFE0` / Cream Deep `#F1E7D6` /
  Mist `#ECEAF3` / Ink `#201B3B`), Fraunces/Bebas Neue/Mulish typography,
  the real logo (`public/images/logo/`, source in `assets/logo-source/`),
  real product photography wired into every product card/gallery/cart/
  checkout thumbnail, the real first-person founder story, the confirmed
  8-SKU catalog with compliance holds on the six regulated names, a
  working client-side cart, and the full customer journey (Home → Shop →
  Product → Cart → Checkout preview → Order Confirmation template →
  Contact).
- **What's not here:** real prices or product copy; a founder photo; a
  wired payment/COD checkout (own checkout is the confirmed model, spec
  §2 — what's missing is the implementation: this is a static export with
  no backend, so `/checkout` is a reachable UI preview with submission
  disabled, and `/order-confirmation` is a static template, not a real
  receipt); live analytics/pixel IDs; compliance sign-off; before/after or
  video testimonial content (no fabricated reviews or results, spec
  C1/C3).

Every placeholder in the codebase is marked with `[bracketed text]`, a 🖼️
placeholder box, or a ⚠ compliance-hold badge — nothing invented (spec
C1/C2). Compliance specifics are in
[`docs/compliance-notes.md`](docs/compliance-notes.md).

## Tech stack

Next.js (App Router, TypeScript) + Tailwind CSS v4. Static export
(`output: "export"`), deployed on Cloudflare Pages.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill in analytics/pixel IDs once
ad account access is available (see `docs/intake-checklist.md`, Technical
Access) — nothing in `src/lib/analytics.tsx` fires without them.

## Structure

```
src/
  app/                 Pages (App Router): /, about, products, products/[slug], cart,
                        checkout (preview), order-confirmation (template), contact, policies
  components/          Shared UI (Header, Footer, Logo, ProductCard, ProductActions,
                        ComplianceBadge, EmailSignup, ContactForm, Button, Section, Placeholder)
  data/products.ts     8 confirmed SKUs — real names/categories/sizes/images, price/description/
                        ingredients pending; compliance-hold flags per spec C2
public/images/         Real product photography + logo (product/, hero/, logo/)
assets/logo-source/    Original logo export files, kept for reference — see its README
  lib/site-config.ts   Real business info (email, Shopee link, tagline, nav) + genuine gaps
  lib/cart-context.tsx Client-side cart (useSyncExternalStore + localStorage)
  lib/analytics.tsx    GA4 + Meta Pixel/CAPI scaffolding (spec F5)
docs/
  aulea-skin-build-spec-v2.0.md   Authoritative, locked spec for this project
  aulea-skin-phase1-spec-v1.4.md  Superseded prior spec version, kept for history
  altaventures-phase1-spec.md     Generic process template, superseded for content
  intake-checklist.md             Build-ready checklist — current gate status
  customization-template.md       Filled-in project template
  compliance-notes.md             PH cosmetics compliance rules, brand-specific (spec C2)
  deployment.md                   Cloudflare Pages setup (build settings, custom domain)
```

## Deployment

Static export, deployed on Cloudflare Pages — see
[`docs/deployment.md`](docs/deployment.md) for the exact dashboard
settings (connecting the repo needs your Cloudflare login, which this
session doesn't have).
