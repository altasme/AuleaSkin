# Admin Panel

`/adminpanel`, added on client request. Lets an admin manage the product
catalog and the site's main content blocks without touching code directly.
Backed by a real database (Cloudflare Workers KV) as of the KV setup
described below, edits are live for every visitor as soon as they save.

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

### Site content: data is live, the public pages aren't wired to it yet

**Products and Business Info are fully live**: editing either in the
panel changes what KV holds, and the admin panel (and anyone else calling
the API) sees it immediately. `src/lib/site-config.ts`'s shape is the real
site-settings shape, not a duplicate.

**Homepage / About / Contact copy is real and persisted, but the public
pages don't read it yet.** `src/data/site-content.ts` is a snapshot of the
copy that's still hardcoded directly in the page files (`src/app/(site)/page.tsx`,
`src/app/(site)/about/page.tsx`, `src/app/(site)/contact/page.tsx`).
Editing it in the panel now genuinely persists to KV (and would round-trip
correctly through the API), but those pages still render their own literal
JSX at build time, they were never changed to fetch from KV. Making that
fully live means either:

- fetching `site-content` from the KV API at request time, which requires
  those pages to stop being purely static (they'd need to move off
  `output: "export"`, at least for that route), or
- generating the static site's copy from KV at *build* time instead of
  request time (a build step that pulls current KV content into
  `site-content.ts`-shaped data before `next build` runs).

Either is a real, scoped follow-up, deliberately not done as a silent
side effect of adding KV, since it changes how the public pages render.
Flagging it here rather than doing it quietly.

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

1. **Create the KV namespace**: `npx wrangler login`, then
   `npx wrangler kv namespace create AULEA_DATA`. This prints a namespace
   id, copy it.
2. **Bind it to the Pages project**: Cloudflare dashboard → Workers & Pages
   → this project → Settings → Functions → KV namespace bindings → Add
   binding. Variable name `AULEA_DATA`, select the namespace just created.
   (Alternatively, put the id into `wrangler.toml`'s
   `REPLACE_WITH_REAL_KV_NAMESPACE_ID` placeholder and deploy with
   `wrangler pages deploy`, if this project moves to a wrangler-driven
   deploy instead of git-integrated dashboard deploys, either path binds
   the same namespace, the dashboard takes precedence if both are set.)
3. **Set the two secrets**: same Settings page → Environment variables →
   Add secret, for both `ADMIN_USERNAME` and `ADMIN_PASSWORD`. Secrets,
   not plain variables, so they're not readable back out via the
   dashboard once set.
4. **Redeploy** so the new binding and secrets take effect (Pages only
   picks up binding/secret changes on the next deployment).
5. Sign in at `/adminpanel`, the catalog auto-seeds on first load, no
   manual data entry needed to get started.

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
src/data/site-content.ts   Homepage/About/Contact copy, seeds KV on first
                            read, see "Site content" above for what's and
                            isn't live yet
wrangler.toml               Local dev config (KV binding), see "Local
                             development" above
.dev.vars                   Local-only secrets, gitignored, create it
                             yourself, see "Local development" above
```
