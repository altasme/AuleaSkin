# Admin Panel

`/adminpanel`, added on client request. Lets an admin manage the product
catalog and the site's main content blocks without touching code directly.
Backed by a real database (Cloudflare Workers KV) as of the KV setup
described below. Product listings (Shop grid, homepage) read live from it
for every visitor, no rebuild needed, see "What's actually live on the
storefront, precisely" for exactly what that does and doesn't cover yet
(a brand-new product's own detail page, and Business Info / Website
Content, aren't wired to it on the public pages yet).

## Sign in

- Username: `Auleadmin`
- Password: `aulea@2026`

Checked server-side now (`functions/api/login.ts`, via `functions/api/_shared.ts`'s
`requireAuth`), against the `ADMIN_USERNAME` / `ADMIN_PASSWORD` secrets set
on the Cloudflare Pages project, not against anything shipped in the
client bundle. This is a real gate: a visitor without the password cannot
read or write the admin API, full stop.

It's still a single shared credential pair, not per-user accounts, HTTP
Basic Auth checked on every request rather than session tokens. That's an
intentional, appropriate simplification for one shared admin login, not a
corner cut, adding session/token infrastructure here would be complexity
without adding real access control for this use case.

## Architecture: Cloudflare Pages Functions + Workers KV

The public site still builds as a static export exactly as before
(`next.config.ts`, `output: "export"`, unchanged, see `docs/deployment.md`).
Only the admin panel's data layer changed. Cloudflare Pages supports a
`functions/` directory at the repo root that deploys as edge API routes
**alongside** the static build, on the same domain, no separate hosting
project or URL:

```
functions/
  env.d.ts        Env type (the KV binding + the two secrets)
  tsconfig.json   Separate from the root tsconfig, Workers runtime types
                  differ from the Next.js app's DOM types, kept out of
                  `next build`'s TypeScript pass (see root tsconfig.json's
                  exclude) so the two don't collide
  api/
    _shared.ts    requireAuth() + getOrSeed() + jsonResponse() helpers
    login.ts      POST, used once at sign-in to verify credentials
    products.ts   GET / PUT the full products array
    site-config.ts    GET / PUT the Business Info object
    site-content.ts   GET / PUT the Homepage/About/Contact copy object
```

Data lives in one KV namespace (binding name `AULEA_DATA`) as three JSON
values, keyed `products`, `site-config`, `site-content`. That's it, no
relational schema, this is genuinely "text data only" at catalog scale
(~10-20 products, a handful of copy blocks), a few JSON blobs is the
right amount of structure, not an undersized one.

**Auto-seeding**: KV starts empty. The first authenticated read of a key
that doesn't exist yet seeds it from the value currently hardcoded in the
app (`src/data/products.ts`, `src/lib/site-config.ts`,
`src/data/site-content.ts`) and writes that back to KV
(`getOrSeed` in `functions/api/_shared.ts`). No manual seeding step, the
catalog just works the first time the admin panel loads against a freshly
bound namespace.

### What's actually live on the storefront, precisely

Every `GET` on `/api/*` is **public, unauthenticated** on purpose,
products, business info, and site content are catalog/marketing content,
not secrets, and the storefront needs to read them without a login.
Only `PUT` (and `/api/login`) require the admin credentials.

**Product listings are live**: `src/app/(site)/products/ShopView.tsx`
and the homepage's Featured/category sections
(`src/app/(site)/HomeCatalogSections.tsx`) render the build-time catalog
first (fast first paint, works with no JS), then fetch `/api/products`
on mount and re-render with whatever's actually in the database, via the
shared `useLiveProducts()` hook (`src/lib/use-live-products.ts`). Add,
edit, or delete a product in the admin panel and it shows up in the Shop
grid and homepage within moments, no rebuild, no redeploy. Verified: a
product added through the panel showed up on the Shop page in a
completely separate, logged-out browser.

**One real gap this doesn't cover**: a brand-new product's own
`/products/<slug>` detail page. That route is prebuilt per-product at
`next build` time via `generateStaticParams()`
(`src/app/(site)/products/[slug]/page.tsx`), a slug that didn't exist at
the last build has no HTML file for it, static hosting can't generate one
on the fly. So a new product is fully clickable and correctly shown in
listings, but its own page 404s until the next real `next build` +
deploy. The same gap applies to *editing* an existing product too:
`src/app/(site)/products/[slug]/page.tsx` is a server component reading
the static `products` import directly, not live, so a name/description/
image edit shows up in the Shop grid and homepage immediately but not on
that product's own detail page until the next rebuild. Only the listing
surfaces are wired to live data so far; extending `[slug]/page.tsx`
itself is a reasonable next step, not done yet.

**Business Info (`site-config`) and Website Content (`site-content`,
Homepage/About/Contact copy) are correctly saved to the database and
readable via their public GET endpoints, but no public page fetches them
yet.** The public pages (`src/app/(site)/page.tsx`,
`src/app/(site)/about/page.tsx`, `src/app/(site)/contact/page.tsx`,
`src/components/Header.tsx`, `Footer.tsx`) still render their own literal
JSX / the build-time `siteConfig` import. Wiring these the same way the
product listings are wired (a client-side fetch-and-overlay) is the same
kind of scoped follow-up as the product detail page gap above, not done
as a silent side effect of this pass.

## Local development

```bash
npm run build          # produces out/, the static site Functions serve alongside
npx wrangler pages dev out
```

`wrangler pages dev` reads `wrangler.toml` for the `AULEA_DATA` KV binding
and `.dev.vars` for the two secrets (both gitignored, `.dev.vars` needs
creating locally, see `.dev.vars` below), and persists KV writes to
`.wrangler/state` on disk between runs, no real Cloudflare account or
login needed for local testing. Only real remote deployment needs that.

Create `.dev.vars` at the repo root (not committed):

```
ADMIN_USERNAME=Auleadmin
ADMIN_PASSWORD=aulea@2026
```

## Production setup (do this once, on the real Cloudflare account)

**None of this needs the `wrangler` CLI, a terminal, or any compute
environment.** It's four steps entirely in the Cloudflare dashboard, in a
browser, since this project deploys via git integration (dashboard
auto-deploy on push, see `docs/deployment.md`), not `wrangler pages deploy`.
The CLI commands mentioned elsewhere in this doc are for optional local
dev only, never required for this part.

1. **Create the KV namespace**: Cloudflare dashboard → **Workers & Pages**
   → **KV** (left sidebar) → **Create a namespace** → name it `AULEA_DATA`
   (the name is just a label, doesn't need to match anything) → **Add**.
2. **Bind it to the Pages project**: Workers & Pages → your Pages project
   → **Settings** → **Functions** → **KV namespace bindings** → **Add
   binding**. Variable name `AULEA_DATA` (this exact name matters, it's
   what `functions/env.d.ts` expects), KV namespace: select the one just
   created → **Save**.
3. **Set the two secrets**: same Settings page → **Environment
   variables** → **Add variable** → set type to **Secret** (not
   "Text") → add `ADMIN_USERNAME` = `Auleadmin` and `ADMIN_PASSWORD` =
   `aulea@2026` → **Save**. Secrets, not plain variables, so they're not
   readable back out via the dashboard once set.
4. **Redeploy** so the new binding and secrets take effect (Pages only
   picks up binding/secret changes on the *next* deployment, not
   retroactively): **Deployments** tab → **⋯** on the latest one →
   **Retry deployment**, or just push any commit.
5. Sign in at `/adminpanel`, the catalog auto-seeds on first load, no
   manual data entry needed to get started.

(The `wrangler kv namespace create` CLI command does the same thing as
step 1 and additionally prints a namespace ID, useful only if you're
binding via `wrangler.toml` instead of the dashboard, which this project
doesn't need to do.)

## Products & Pricing tab

Full add / edit / delete for the product catalog, matching every field
`src/data/products.ts` actually has: name, slug, category, size, short
description, full description, benefits (add/remove any number), how to
use, suitable for, ingredients note, variants, Buy on Shopee URL, and a
**price field** (PHP). Price is captured and stored but intentionally not
rendered anywhere on the live site yet, Shopee stays the pricing source of
truth per the client's standing purchase-model directive (see
`docs/intake-checklist.md`); it's just ready for whenever that changes.

Every add/edit/delete PUTs the full products array to `/api/products`
immediately, these are already discrete, deliberate actions (a form
submit, a confirmed delete), not continuous typing, so there's no reason
to debounce them the way Website Content fields are (see below).

### Product images

Each product takes three images: two square (1:1) and one portrait (4:5),
per the client's spec for this panel. That's a different shape from the
convention the *existing* photographed catalog uses (one 4:3 landscape
lead image + up to two 1:1 secondaries, see `docs/image-requirements.md`),
which is why: a product added or edited here stores its images in the
order **[square, square, portrait]**, not `[landscape, square, square]`.
The live product detail page's gallery (`src/app/(site)/products/[slug]/page.tsx`)
still renders the first image large in a 4:3 frame and the rest as
squares, it hasn't been changed to match the new shape. If a set of admin
images from here is applied to a live product, whoever applies it should
either supply a genuinely wide first image or adjust that gallery
component, the panel doesn't attempt that layout decision on its own.

Images upload straight to Cloudinary from the browser (see "Image uploads
(Cloudinary)" below). An aspect-ratio mismatch shows a warning but never
blocks the upload.

## Website Content tab

Organized into four sections, each labeled with exactly what it covers so
it doesn't turn into a wall of unlabeled text fields:

- **Business Info**: real identity/settings that already lived in
  `src/lib/site-config.ts` before this panel existed (name, tagline,
  contact details, social links, shipping threshold, couriers, payment
  methods). Edited directly, not duplicated elsewhere.
- **Homepage**: every text block on the homepage, in page order (hero,
  category tiles, founder story teaser, the Ritual section, the promo
  band, testimonials heading, the four "Why Aulea" cards, final CTA).
- **About Page**: intro, the three founder-story paragraphs, mission
  statement, the three "Looking Ahead" cards.
- **Contact Page**: heading and intro text (contact details themselves
  come from Business Info, not duplicated here).

Every field in this tab saves on a debounce (~800ms after the admin stops
typing), not on every keystroke, that would mean a network request per
character. `src/lib/admin-store.tsx` updates local state immediately (so
typing feels normal) and fires the actual `PUT` after the pause.

## Image uploads (Cloudinary)

Cloud name (from the client): `o300ubug`

Because this site has no server *for images* (Cloudinary handles those,
not KV, "our database will be text data only" was the client's own
framing), uploads are **unsigned**: the browser posts the file straight to
Cloudinary's REST endpoint with the cloud name and a preset name, nothing
else. The API key the client also supplied isn't used anywhere in this
code, an API key alone can't authorize an unsigned upload (that's the
point of "unsigned"), and a key without its secret can't do a signed one
either.

**Setup still needed**: create an upload preset in the Cloudinary console
(Settings → Upload → Upload presets → Add upload preset), set its Signing
Mode to **Unsigned**, then put its name in `.env.local` as
`NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`. Until that exists, the panel shows
a clear inline message instead of failing silently, both on the products
tab (a banner) and on each image slot (an error under the upload button).

## Files

```
functions/                Cloudflare Pages Functions, the admin API, see
                           "Architecture" above
src/app/adminpanel/
  page.tsx                 Route entry, noindex metadata
  AdminApp.tsx               Auth gate + tab shell + save-status banner
  auth.ts                     sessionStorage helpers, no credentials live
                               here anymore, see "Sign in" above
  LoginGate.tsx               Sign-in form, POSTs to /api/login
  ProductsPanel.tsx            Product list, add/edit/delete
  ProductForm.tsx               Add/edit form, all fields + image slots
  ImageSlot.tsx                  Cloudinary upload control per image
  SiteContentPanel.tsx        Business Info / Homepage / About / Contact editor
  ExportPanel.tsx             Backup (copy JSON) + restore original defaults

src/lib/admin-store.tsx    React context, fetches/PUTs the Functions API,
                            debounces Website Content saves
src/lib/cloudinary.ts      Unsigned upload helper
src/lib/use-live-products.ts  Client hook: static catalog first, swaps in
                                live /api/products on mount, shared by
                                ShopView and HomeCatalogSections
src/data/site-content.ts   Homepage/About/Contact copy, seeds KV on first
                            read, see "What's actually live" above for
                            what's and isn't live yet

src/app/(site)/products/ShopView.tsx        Shop grid, live via
                                              useLiveProducts()
src/app/(site)/HomeCatalogSections.tsx      Featured + category tiles,
                                              live via useLiveProducts()
wrangler.toml               Local dev config (KV binding), see "Local
                             development" above
.dev.vars                   Local-only secrets, gitignored, create it
                             yourself, see "Local development" above
```
