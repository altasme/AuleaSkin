# Aulea Skin

Aulea Skin's own e-commerce storefront, built following
[`docs/aulea-skin-phase1-spec-v1.4.md`](docs/aulea-skin-phase1-spec-v1.4.md)
— the client-specific spec, brand kit included, that's authoritative for
this project. (`docs/altaventures-phase1-spec.md` is the generic
ALTAVENTURES process template the v1.4 spec was instantiated from; defer
to v1.4 wherever the two differ.)

## Project status: intake NOT READY (spec §34)

The brand kit resolved a real amount: business name, tagline ("A Better
You."), full color/type system, founder story, and 3 confirmed SKU names.
What's still blocking a launch-ready build: **prices**, full product
descriptions/ingredients/benefits, product & label photography, FDA CPN
numbers + written claim substantiation, the vector logo, body-font
confirmation, and payment/DNS/pixel access. See
[`docs/intake-checklist.md`](docs/intake-checklist.md) for the full list.

- **What's here:** the confirmed brand system (indigo `#1F1A76` / gold
  `#E2AB2D` / cream `#F8EFE0`, Bebas Neue for labels, a display-face
  placeholder for Tan Pearl/Sego), the real founder story and brand
  promise, the confirmed 3-SKU catalog structure with compliance holds on
  "Organic"/"SPF 30", a working client-side cart, and the full customer
  journey (Home → Shop → Product → Trust → FAQ → Contact → Cart →
  Checkout-UI).
- **What's not here:** real prices or product copy; a wired payment/COD
  checkout (own checkout is the *confirmed* model, spec §2 — what's
  missing is the implementation, not the decision); live analytics/pixel
  IDs; compliance sign-off; the real vector logo; before/after or video
  testimonial content (explicitly out of scope per spec §11 — don't add
  placeholders implying it exists).

Every placeholder in the codebase is marked with `[bracketed text]`, a
🖼️ placeholder box, or a ⚠ compliance-hold badge — nothing invented (spec
§13/§27). Compliance specifics are in
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
  app/                 Pages (App Router) — one route per customer-journey step
  components/          Shared UI (Header, Footer, Logo, ProductCard, Faq, TrustStack,
                        ComplianceBadge, EmailSignup, ...)
  data/products.ts     3 confirmed SKUs — real names/sizes, price/description/ingredients pending
  lib/site-config.ts   Real business info (email, Shopee link, tagline) + genuine gaps
  lib/cart-context.tsx Client-side cart (useSyncExternalStore + localStorage)
  lib/analytics.tsx    GA4 + Meta Pixel/CAPI scaffolding (§33)
docs/
  aulea-skin-phase1-spec-v1.4.md   Authoritative spec for this project
  altaventures-phase1-spec.md      Generic process template (superseded by v1.4 for content)
  intake-checklist.md              §34 checklist — current gate status
  customization-template.md        Filled-in project template
  compliance-notes.md              §27 PH cosmetics compliance rules, brand-specific
  deployment.md                    Cloudflare Pages setup (build settings, custom domain)
```

## Deployment

Static export, deployed on Cloudflare Pages — see
[`docs/deployment.md`](docs/deployment.md) for the exact dashboard
settings (connecting the repo needs your Cloudflare login, which this
session doesn't have).
