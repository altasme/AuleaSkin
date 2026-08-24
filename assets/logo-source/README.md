# Logo source files

Original supplied logo exports (`Full logo - lock up.svg`, `logo icon.svg`
renamed here as `aulea-full-lockup.svg` / `aulea-icon.svg`), plus a later
supplied `favicon (2).svg` renamed `aulea-favicon-source.svg`. These are
Illustrator "export as SVG" files that embed a raster image inside
filter/mask XML rather than true vector paths, real, but not infinitely
scalable, and far too heavy (500KB+ each) to ship on every page load.

**Don't reference these directly from the site.** The web-ready derivatives
actually used by the app live in `public/images/logo/`:

- `aulea-lockup.png`: navy/gold, for light (Cream/Mist) surfaces
- `aulea-lockup-cream.png`: flat cream silhouette generated from the same
  artwork's alpha channel (not redrawn), for the Navy Deep footer
- `aulea-icon-512.png`: gold monogram, trimmed square (superseded by the
  favicon source below for actual favicon/app-icon use, kept for reference)
- `aulea-favicon-512.png`: the stacked "Auléa Skin" wordmark + gold leaf
  from `aulea-favicon-source.svg`, trimmed and padded onto a cream square.
  Site favicon/app-icon (`src/app/icon.png`, `src/app/apple-icon.png`) are
  generated from this so they read at small sizes in browser chrome.

Keep these source files around for regenerating derivatives, and swap them
if the client ever supplies real vector (path-based) artwork.
