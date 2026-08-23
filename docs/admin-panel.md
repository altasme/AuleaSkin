# Admin Panel

`/adminpanel`, added on client request. Lets an admin manage the product
catalog and the site's main content blocks without touching code directly.

## Sign in

- Username: `Auleadmin`
- Password: `aulea@2026`

Hardcoded in `src/app/adminpanel/auth.ts`, per the client's own request.

**This is not real security.** The site is a static export with no server
(`next.config.ts`, `output: "export"`), so there is nowhere to check a
password except inside the same JavaScript bundle every visitor already
has. Anyone who opens devtools can read these values or skip the gate
entirely. It keeps the page off casual, stumbled-upon links, not off a
determined visitor. If that's not acceptable once this is live, put a real
gate in front of the route instead (Cloudflare Access, HTTP basic auth at
the CDN/edge, or a real login backed by an actual server), rather than
trying to harden the client-side check, that ceiling can't be raised from
inside a static bundle.

## What "no database yet" actually means here

There is no database and no backend. `/adminpanel` is a fully client-side
React app that:

1. Loads the site's current hardcoded data (`src/data/products.ts`,
   `src/lib/site-config.ts`, `src/data/site-content.ts`) as its starting
   point.
2. Lets the admin edit it in memory.
3. Mirrors every edit to that browser's `localStorage`
   (`src/lib/admin-store.tsx`), so it survives a page reload.

That's the entire persistence story. **An edit made in the admin panel
does not change what a customer sees on the live site**, and it doesn't
sync to any other browser, device, or visitor either. There's no backend
for it to sync to. This is a deliberate, honest limitation, not a bug:
building a panel that looked like it saved live changes when it
structurally can't would be worse than one that's upfront about what it
does.

The intended workflow, until real persistence exists:

1. Admin edits products or site content in the panel.
2. Admin opens the **Export & Sync** tab and copies the JSON for whatever
   changed.
3. That JSON goes to a developer (or the admin edits the matching source
   file directly, if comfortable in code): `src/data/products.ts`,
   `src/lib/site-config.ts`, or `src/data/site-content.ts` (the last one is
   currently a content snapshot for the panel to edit, not yet read by the
   live pages, see "Site content, not yet live" below).
4. The developer commits it and redeploys. Only then does it reach real
   visitors.

### Getting to real persistence later

Whenever this needs to become a real live-editing CMS, that requires
picking a real backend (a database + an API layer this static export
doesn't have room for today), which also means moving off pure static
export for at least the admin route (or the whole site) toward a runtime
that can serve dynamic reads/writes, e.g. Next's Node runtime, a small API
on Cloudflare Workers/D1, or a headless CMS. That's a real architecture
change, not a tweak to this panel, and is worth scoping as its own piece
of work rather than backing into it.

## Products & Pricing tab

Full add / edit / delete for the product catalog, matching every field
`src/data/products.ts` actually has: name, slug, category, size, short
description, full description, benefits (add/remove any number), how to
use, suitable for, ingredients note, variants, Buy on Shopee URL, and a
**price field** (PHP). Price is captured and stored but intentionally not
rendered anywhere on the live site yet, Shopee stays the pricing source of
truth per the client's standing purchase-model directive (see
`docs/intake-checklist.md`); it's just ready for whenever that changes.

### Product images

Each product takes three images: two square (1:1) and one portrait (4:5),
per the client's spec for this panel. That's a different shape from the
convention the *existing* photographed catalog uses (one 4:3 landscape
lead image + up to two 1:1 secondaries, see `docs/image-requirements.md`),
which is why: a product added or edited here stores its images in the
order **[square, square, portrait]**, not `[landscape, square, square]`.
The live product detail page's gallery (`src/app/products/[slug]/page.tsx`)
still renders the first image large in a 4:3 frame and the rest as
squares, it hasn't been changed to match the new shape. If a set of admin
images from here is applied to a live product, whoever applies it should
either supply a genuinely wide first image or adjust that gallery
component, the panel doesn't attempt that layout decision on its own.

Images upload straight to Cloudinary from the browser (see "Image uploads
(Cloudinary)" below). An aspect-ratio mismatch shows a warning but never
blocks the upload, there's no server here to enforce anything harder than
that.

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

### Site content, not yet live

**Business Info edits *are* editing the same data type the live site
uses** (`src/lib/site-config.ts`'s shape), that part of the panel is a
real editor for real site settings, exported as-is.

**Homepage / About / Contact edits are different**: `src/data/site-content.ts`
is a new file created specifically for this panel, a snapshot of the
copy that's currently hardcoded directly in the page files
(`src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`).
Editing it in the panel does not change those pages, because those pages
don't read from it, they still render their own hardcoded JSX. Making
this fully live (pages reading from `site-content.ts` instead of literal
JSX) is a reasonable next step, deliberately not done as a silent side
effect of building this panel, since it touches every one of those pages.
Flagging it here rather than doing it quietly.

This is not withheld to be difficult, it's the direct consequence of
"hardcoded, no database yet" plus a static-export site with no backend:
nothing running anywhere can accept a write from a browser and make it
appear for other visitors.

## Image uploads (Cloudinary)

Cloud name (from the client): `o300ubug`

Because this site has no server, uploads are **unsigned**: the browser
posts the file straight to Cloudinary's REST endpoint with the cloud name
and a preset name, nothing else. The API key the client also supplied
isn't used anywhere in this code, an API key alone can't authorize an
unsigned upload (that's the point of "unsigned"), and a key without its
secret can't do a signed one either, there's no server here to hold a
secret safely regardless.

**Setup still needed**: create an upload preset in the Cloudinary console
(Settings → Upload → Upload presets → Add upload preset), set its Signing
Mode to **Unsigned**, then put its name in `.env.local` as
`NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`. Until that exists, the panel shows
a clear inline message instead of failing silently, both on the products
tab (a banner) and on each image slot (an error under the upload button).

## Files

```
src/app/adminpanel/
  page.tsx              Route entry, noindex metadata
  AdminApp.tsx           Auth gate + tab shell
  auth.ts                 Hardcoded username/password, see caveats above
  LoginGate.tsx           Sign-in form
  ProductsPanel.tsx        Product list, add/edit/delete
  ProductForm.tsx           Add/edit form, all fields + image slots
  ImageSlot.tsx              Cloudinary upload control per image
  SiteContentPanel.tsx    Business Info / Homepage / About / Contact editor
  ExportPanel.tsx         Copy-out JSON + reset

src/lib/admin-store.tsx  React context + localStorage persistence
src/lib/cloudinary.ts    Unsigned upload helper
src/data/site-content.ts Homepage/About/Contact copy snapshot (panel-only)
```
