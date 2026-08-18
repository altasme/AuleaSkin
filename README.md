# Aulea Skin

A skincare/beauty DTC website, built following the [ALTAVENTURES Phase 1
Website Build Spec v1.1](docs/altaventures-phase1-spec.md).

## Project status: intake NOT READY

This repo currently contains the **Phase 1 scaffold**, not a finished build.
Per the spec's Step 1 gate (§20), the real build — real copy, real product
catalog, checkout implementation, live measurement, compliance sign-off —
does not start until client intake comes back READY.

- **What's here:** full page structure and customer journey (Home → Shop →
  Product → Trust → FAQ → Contact → Cart), a component system, a
  provisional design direction, and measurement/analytics plumbing — all
  built against placeholder content so the real assets can be dropped in
  without restructuring anything.
- **What's not here:** any real brand, product, or business content; a
  working checkout (blocked on the §9.1 checkout-vs-marketplace decision);
  live analytics/pixel IDs; compliance sign-off (CPN numbers, claim
  substantiation).
- **See:** [`docs/intake-checklist.md`](docs/intake-checklist.md) for
  exactly what's outstanding, and
  [`docs/customization-template.md`](docs/customization-template.md) for
  the project's filled-in strategy template.

Every placeholder in the codebase is marked with `[bracketed text]` or a
🖼️ placeholder box — nothing invented (per spec §13). Content integrity and
Philippines cosmetics compliance rules are in
[`docs/compliance-notes.md`](docs/compliance-notes.md).

## Tech stack

Next.js (App Router, TypeScript) + Tailwind CSS v4.

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
  components/          Shared UI (Header, Footer, ProductCard, Faq, TrustStack, ...)
  data/products.ts     Placeholder product catalog — replace with real data
  lib/site-config.ts   Business info, nav, social links — replace with real data
  lib/analytics.tsx    GA4 + Meta Pixel/CAPI scaffolding (§8)
docs/
  altaventures-phase1-spec.md   The build spec this project follows
  intake-checklist.md           §19 checklist — current gate status
  customization-template.md     §31 filled-in project template
  compliance-notes.md           §11 PH cosmetics compliance rules
  deployment.md                 Cloudflare Pages setup (build settings, custom domain)
```

## Deployment

Static export, deployed on Cloudflare Pages — see
[`docs/deployment.md`](docs/deployment.md) for the exact dashboard
settings (connecting the repo needs your Cloudflare login, which this
session doesn't have).
