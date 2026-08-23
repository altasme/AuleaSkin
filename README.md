# Aulea Skin

Aulea Skin's product catalog and brand site, built following
[`docs/aulea-skin-build-spec-v2.0.md`](docs/aulea-skin-build-spec-v2.0.md),
originally the locked spec for this project. Two client directives since
then have superseded parts of it (documented inline, not silently): the
purchase model moved from an own-checkout build to redirecting each
product to its real Shopee listing, and colours were re-matched to a
later supplied reference design. Earlier spec versions and an
experimental rose/sage palette from a prior session are also superseded.

## Project status: intake NOT READY

Real assets have landed: the colour/type system, founder story (written
first-person on Home + About), the real logo, a real founder photo, a
sitewide hero photo, product photography for 8 of the catalog's 10 SKUs
(including the 2 set SKUs, both added from a later upload), 8 real
customer testimonial graphics, and real Shopee listing links for the
original 8 SKUs. What's still genuinely missing: legible
ingredient-panel photos (needed before publishing any ingredient list,
see `docs/compliance-notes.md`), Shopee listing links for the 2 new set
SKUs, and DNS/pixel access. See
[`docs/intake-checklist.md`](docs/intake-checklist.md) for the full list,
including what the real photography and client directives changed along
the way (sunscreen is SPF 50 not SPF 30, two Essence SKUs found in
photography, two set SKUs added later, purchase model, composed copy,
colour deviation).

- **What's here:** the design system with colours matched to a
  client-supplied reference and sampled directly from it (Navy `#102048` /
  Navy Deep `#0A1730` / Gold `#C68B57` / Cream `#FBFAF8` / Cream Deep
  `#F5F2EC` / Mist `#F0EFEB` / Ink `#16223D`, flagged in
  `docs/intake-checklist.md` for confirmation since it deviates from spec
  v2.0 PART A), Fraunces/Bebas Neue/Mulish typography, the real logo
  (`public/images/logo/`, source in `assets/logo-source/`), real product
  photography wired into every product card/gallery, the real first-person
  founder story with a real founder photo, the confirmed 10-SKU catalog
  with composed benefits/usage/description copy, 8 real customer
  testimonials on the homepage, and a "Buy on Shopee" link on every
  product that opens its real Shopee listing (the two new set SKUs have
  that link in place but pointed at a blank URL, no listing exists yet),
  there is no cart or checkout on this site.
- **What's not here:** an ingredients list for any SKU (composing one
  would mean fabricating a safety-relevant claim, so it stays pending
  until the client supplies a legible label); live analytics/pixel IDs;
  whether the plain "Aulea Natural Soap" SKU is real; Shopee listing
  links for the 2 new set SKUs; client confirmation on whether "Melasma
  Set" can ever be used as a public product name (see
  `docs/compliance-notes.md`, published for now as "Gentle Brightening
  Set").

Every remaining placeholder is marked with `[bracketed text]` or a 🖼️
placeholder box. Regulatory reference material (informational only, not a
build gate for this project) is in
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
ad account access is available (see `docs/intake-checklist.md`), nothing
in `src/lib/analytics.tsx` fires without them.

## Structure

```
src/
  app/                 Pages (App Router): /, about, products, products/[slug], contact, policies
  components/          Shared UI (Header, Footer, Logo, ProductCard, ProductActions,
                        EmailSignup, Button, Section, Placeholder, SearchOverlay, Icons)
  data/products.ts     8 confirmed SKUs: names/categories/sizes/images/descriptions/benefits/
                        usage (composed), real Shopee listing links, no price (Shopee is the
                        pricing source of truth)
public/images/         Real product photography, logo, brand photo, testimonials
assets/logo-source/    Original logo/favicon export files, kept for reference, see its README
  lib/site-config.ts   Real business info (email, Shopee link, tagline, nav) + genuine gaps
  lib/analytics.tsx    GA4 + Meta Pixel/CAPI scaffolding (spec F5)
docs/
  aulea-skin-build-spec-v2.0.md   Originally the locked spec, since partly superseded (see README/intake)
  aulea-skin-phase1-spec-v1.4.md  Superseded prior spec version, kept for history
  altaventures-phase1-spec.md     Generic process template, superseded for content
  intake-checklist.md             Build-ready checklist, current gate status
  customization-template.md       Filled-in project template
  compliance-notes.md             PH cosmetics regulatory reference, informational only
  deployment.md                   Cloudflare Pages setup (build settings, custom domain)
  image-requirements.md           Canvas sizes, format, aspect ratio for every image slot
```

## Deployment

Static export, deployed on Cloudflare Pages, see
[`docs/deployment.md`](docs/deployment.md) for the exact dashboard
settings (connecting the repo needs your Cloudflare login, which this
session doesn't have).
