# Image Requirements, Aulea Skin

Canvas sizes, format, and aspect ratio for every image slot on the site,
based on how each is actually used in the codebase (not a generic
guideline). Deliver source files at or above the minimum size; the build
converts everything to WebP for production, so JPG or PNG source is fine.

## Product photography

Used in `src/data/products.ts` (`images` array), rendered by
`ProductCard`, the product detail gallery
(`src/app/products/[slug]/page.tsx`), and homepage/category tiles.

| Slot | Aspect ratio | Minimum size | Format | Notes |
|---|---|---|---|---|
| Card / grid image (`images[0]`) | 1:1 square | 1600 x 1600 px | JPG or PNG, sRGB | Should be a clean product-only shot (no model), matches the reference design's product-forward look |
| Product detail gallery, first image | 4:3 | 1600 x 1200 px | JPG or PNG | Displayed larger, spans two grid columns on the product page |
| Product detail gallery, additional images | 1:1 square | 1200 x 1200 px | JPG or PNG | 2 to 3 per product; model/lifestyle shots work well here |

Current real photography is delivered at 1600x1200 (hero) and 1200x1200
(secondary) and meets this bar. Essence for Men/Women and the two soap
SKUs are the only lines without a dedicated square product-only shot for
every angle, if more scent variants are photographed later, keep the
same 1:1 product-only-first pattern.

## Homepage hero

`src/app/page.tsx`, full-bleed on the right half of the hero section.

- Aspect ratio: 4:5 portrait (matches the current `sitewide-hero.webp`)
- Minimum size: 1600 x 2000 px
- Format: JPG or PNG, sRGB

## Category tiles ("Find your ritual")

`src/app/page.tsx`, one tile per category, currently reusing each
category's lead product image. A dedicated lifestyle shot per category
would read better than a product-on-white shot cropped to a tile.

- Aspect ratio: 4:3
- Minimum size: 1200 x 900 px
- Format: JPG or PNG

## Founder / brand photo

Currently a placeholder on Home and About (`src/components/Placeholder.tsx`)
pending a real photo.

- Aspect ratio: 4:5 portrait
- Minimum size: 1200 x 1500 px
- Format: JPG or PNG

## Logo

`assets/logo-source/` holds the original supplied files; `public/images/logo/`
holds the derived web assets actually used by the app.

| Asset | Current size | Format | Notes |
|---|---|---|---|
| Full lockup | 1200 x 266 px (~4.5:1) | PNG, transparent background | Navy/gold on transparent, for light (Cream/Mist) surfaces |
| Full lockup, cream variant | Same as above | PNG, transparent background | Generated from the same artwork's alpha channel for the Navy footer, not a separate deliverable |
| Icon / monogram | 512 x 512 px (1:1) | PNG, transparent background | Gold monogram, trimmed square |

If the client ever supplies real vector artwork (true path-based SVG or
AI/EPS, not an Illustrator raster-export), that becomes the new source
and the PNGs above get regenerated from it.

## Favicon / app icon

Auto-generated from the icon asset above (`src/app/icon.png` at 256x256,
`src/app/apple-icon.png` at 180x180, composited onto the Cream background
so the gold mark reads at small sizes). No separate deliverable needed
unless the icon artwork itself changes.

## Not yet created: social share image (Open Graph)

Not currently in the codebase. If wanted for link previews on social/chat
apps:

- Aspect ratio: 1.91:1
- Size: 1200 x 630 px
- Format: JPG or PNG
