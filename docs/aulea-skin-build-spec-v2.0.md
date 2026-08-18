# AULEA SKIN — Phase 1 Website Design & Build Spec
**Version:** 2.0 (build-ready · locked design system)
**Project:** Aulea Skin e-commerce website
**Build phase:** Phase 1
**Target build time:** 4–6 days from build-ready
**Objective:** A polished, conversion-focused, premium-but-accessible skincare storefront that feels distinctly Aulea Skin.

---

## HOW TO USE THIS FILE (Claude Code)

This is the single source of truth for the Phase 1 rebuild. Rules:

- **PART A (Design System) is LOCKED.** Use those exact tokens. Do not invent colours, fonts, or values.
- **Never fabricate** product info, ingredients, claims, reviews, prices, certifications, or policies. If something isn't supplied, leave it configurable/pending — see PART C.
- The design reference (Cinzal-style) is for **layout and editorial feel only — never colour, copy, or content.**
- When a design choice is "more like the reference" vs "more like Aulea," choose **Aulea**.

---

## CHANGELOG — v1.0 → v2.0

1. **Navy locked to `#1F1A76`** (sampled from the actual brand kit — hero field, secondary band, and palette swatch all match). The previous `#0C1D4A` was off-brand and is removed. A same-hue **Navy Deep `#131047`** is added for large dark fills to fix eye-strain without changing the hue.
2. **Colour system made accessible** — contrast ratios, approved/forbidden pairing tables, tints for breathing room, WCAG targets. Fixes the "hurts the eyes" problem.
3. **Typography now names the real brand faces** (Tan Pearl / Sego display, Bebas Neue caps) with buildable free fallbacks and a locked, readable **body** font. Body copy may never be set in display/condensed faces.
4. **Regulatory & claims compliance section added** — FDA CPN, "notified ≠ approved," and the substantiation-ownership rule. The confirmed product names (**Ultimate Whitening**, **Glass Skin**, **Collagen Firming**, **Organic**, **SPF 30**) are regulated claims and are flagged specifically.
5. **Measurement added** — Meta Pixel + CAPI + UTM (this store runs on paid social).
6. **COD order-verification / RTS guard** and **AOV free-ship nudge** folded in.
7. Reorganised into parts (Design System → Brand → Content/Compliance → Site → Commerce → Technical → Build → Success) for Claude Code.

---

# PART A — LOCKED DESIGN SYSTEM

## A1. Colour tokens

| Token | Hex | Role |
|---|---|---|
| **Navy** (brand) | `#1F1A76` | Brand accent — headings, primary buttons, nav accents, icons, links, price/label accents, short navy bands. **Do not overuse.** |
| **Navy Deep** | `#131047` | Large dark fills only (hero band, footer, promo panels) — a darker shade of Navy so big areas don't vibrate |
| **Gold** | `#E2AB2D` | Accent only — the logo leaf, small highlights, dividers, focus rings, hover, badges. **Never gold text on cream.** |
| **Cream** (base) | `#F8EFE0` | Primary background / reading surface |
| **Cream Deep** | `#F1E7D6` | Warm alternating section background |
| **Mist** | `#ECEAF3` | Cool pale-indigo alternating surface for cards/sections |
| **Ink** | `#201B3B` | Body text on light (warm near-black; calmer than pure black) |
| **White** | `#FFFFFF` | Product image areas and fine detail — use sparingly; prefer Cream |

These are all the brand's three core colours (`#1F1A76` / `#E2AB2D` / `#F8EFE0`) plus tints/shades derived from them. **No colour outside this set** — especially no green/teal (that's the reference), no bright pink, neon, heavy purple, or strong orange.

## A2. Eye-comfort rules (why the palette felt harsh before)

- **Cream is the default surface.** Long text = Ink or Navy on Cream. Never long body copy set on saturated Navy.
- **Deep dark fields are limited** — hero, footer, at most one promo band — using **Navy Deep**, not full Navy, with Cream/White text. The site must not feel like permanent dark mode.
- **Gold is decoration, never body text.** Gold-on-cream is ~1.8:1 and unreadable.
- **No pure black.** Use Ink. Avoid large pure-white fields except product imagery.
- Generous whitespace; body ≥16px on mobile; line-height ~1.6; comfortable measure (~60–75ch).

## A3. Contrast & pairings

**Targets:** body text ≥ 4.5:1 (aim 7:1 / AAA), large text & UI ≥ 3:1.

**Approved**

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| Ink / Navy | Cream | ~12.6:1 | Body & headings on light — AAA |
| Cream / White | Navy `#1F1A76` | ~12.6:1 | Text on navy bands — AAA |
| Cream / White | Navy Deep `#131047` | ~15:1+ | Text on large dark fills |
| Gold | Navy | ~6.9:1 | Gold accents / large text on dark |
| Navy / Ink | Gold | ~6.9:1 | Text on a gold badge/fill |

**Forbidden**

| Never | Ratio | Why |
|---|---|---|
| Gold text on Cream | ~1.8:1 | Unreadable |
| Cream text on Gold | ~1.8:1 | Unreadable |
| Long body copy on full Navy | — | Eye strain — navy bands are for short content only |
| Two near-value neutrals (e.g. text on Mist that's too pale) | low | No contrast |

## A4. Typography

Use the brand faces where web-licensed; otherwise the named free fallbacks so the build isn't blocked.

| Role | Brand face | Free fallback (buildable) | Usage |
|---|---|---|---|
| **Display / headings** | Tan Pearl / Sego | **Fraunces** (or Cormorant Garamond) | Hero headline, section titles, editorial moments |
| **Caps / eyebrows / small labels** | Bebas Neue | **Bebas Neue** (free) | Nav, eyebrows, small labels, badges — sparingly |
| **Body / UI / prices / forms** | — | **Mulish** (or Inter) | All paragraph copy, product info, prices, forms |

Rules: **Never** set product descriptions, policies, FAQ, or any paragraph in Tan Pearl / Sego / Bebas Neue. Confirm web-embedding licensing for Tan Pearl/Sego before using them online; if unavailable, ship Fraunces and note it for the client. Headings luxurious but readable; no other decorative fonts.

## A5. Shape, spacing, motion

- **Radius:** product images & editorial images slightly rounded; buttons moderate/pill; cards mostly clean rectangular. No "bubble UI."
- **Spacing:** large section padding, generous product spacing, big imagery. Premium = restraint.
- **Shadows:** minimal; avoid heavy borders and marketplace-style cards.
- **Motion:** gentle fade/slide, product hover, smooth scroll, cart interaction. No excessive parallax, constant movement, or animation that interferes with buying.
- **Touch targets:** ≥44px on mobile.

## A6. Tokens for implementation

```css
:root{
  --navy:#1F1A76;        /* brand accent */
  --navy-deep:#131047;   /* large dark fills */
  --gold:#E2AB2D;        /* accent only */
  --cream:#F8EFE0;       /* base surface */
  --cream-deep:#F1E7D6;  /* warm alt surface */
  --mist:#ECEAF3;        /* cool alt surface */
  --ink:#201B3B;         /* body text */
  --white:#FFFFFF;       /* sparing */
}
```

```js
// tailwind.config — colors
colors: {
  navy:      '#1F1A76',
  'navy-deep':'#131047',
  gold:      '#E2AB2D',
  cream:     '#F8EFE0',
  'cream-deep':'#F1E7D6',
  mist:      '#ECEAF3',
  ink:       '#201B3B',
}
// fonts
fontFamily: {
  display: ['Fraunces','Tan Pearl','Georgia','serif'],
  caps:    ['"Bebas Neue"','sans-serif'],
  body:    ['Mulish','Inter','system-ui','sans-serif'],
}
```

**Buttons:** Primary = Navy fill + Cream/White text. Secondary = transparent/cream + Navy border + Navy text. Gold = hover/focus/badge accents only; if ever a gold fill, text must be Navy/Ink. Avoid aggressive CTA copy ("BUY NOW BEFORE IT'S TOO LATE").

---

# PART B — BRAND TRUTH

## B1. Role
Act as lead web/UI/UX + brand experience designer and frontend developer. Translate the client's real brand, story, products, photography, and positioning into a premium storefront — not a generic skincare template. The site should feel elegant, warm, premium, modern, approachable, feminine-without-being-decorative, trustworthy, clean, editorial, product-focused, accessible.

## B2. Brand foundation
- **Name:** Aulea Skin. Styled form on logo/products: **Auléa** (accent + gold leaf). Use the accented form only where it matches the official logo; do not redesign the logo.
- **Tagline:** "A Better You."
- **Established:** December 2025 · online-based skincare business.
- **Email:** auleaskinessentials@gmail.com
- **Shopee:** https://shopee.ph/shop/1889974610
- **Social:** previous pages lost, being recovered — never a launch dependency; make links admin-configurable.

## B3. Story, mission, vision
Founded from the founder's own experience with sensitive skin and different concerns, and the difficulty of finding comfortable products that stay affordable. Belief: skincare should be **accessible, simple, enjoyable, worth the money, easy to fit into everyday life.** Mission feeling: *"Taking care of your skin doesn't have to be complicated or expensive."* Long-term: a trusted, accessible skincare brand that grows its range and community — so build a **scalable platform**, not a landing page.

## B4. Personality
Warm, elegant, calm, confident, modern, accessible, caring, authentic, clean, feminine, premium. **Avoid:** clinical, cold, corporate, aggressively sales-driven, cheap, childish, excessively pink, excessively "K-beauty," overly luxurious, pretentious. Positioning line: **"Accessible skincare, beautifully made."** Desired reaction: *"Reasonably priced, but feels far more premium than I expected."*

## B5. Products = visual source of truth
Packaging is white with strong navy labels, navy typography, clean minimal layouts, and gold elements on some products. The website must feel continuous with the packaging — Aulea site → Aulea product should feel seamless. Never redesign products to fit the site; the site adapts to the products.

## B6. Confirmed catalog (details client-supplied; do not invent)
Sunscreen (SPF 30) · Organic Vitamin C Serum (15 mL) · Niacinamide Facial Wash (60 mL) · Collagen + Vitamin E Firming Lotion · Aulea Natural Soap · Glass Skin Natural Soap · Ultimate Whitening Natural Soap. Plus group and lifestyle photography. **Confirm the complete list, prices, sizes, variants, and label photos before/at build (configurable if pending).** Several names are regulated claims — see PART C.

---

# PART C — CONTENT & COMPLIANCE

## C1. No-invent rule (applies everywhere)
Never fabricate: ingredients, benefits, clinical/medical claims, "clinically proven," "dermatologist approved/tested," "FDA approved," certifications, before/after results, reviews, customer names, ratings, prices, shipping fees, policies, social accounts, or business credentials. If information is missing: leave blank, mark pending, or make it admin-configurable. Ingredients come only from photos of the actual product labels; if a label can't be read confidently, leave it for client confirmation.

## C2. Regulatory & claims compliance (Philippines)
Operational guidance, not legal advice — confirm current FDA/DTI rules.

- **CPN, not "approval."** PH cosmetics require an FDA **Cosmetic Product Notification (CPN)**. Cosmetics are **notified, not "approved"** — never display "FDA-approved." Show the **CPN number** where regulatory standing is signalled.
- **Claim boundaries.** No therapeutic/medical claims (treat, cure, prevent) — that reclassifies a cosmetic as a drug. Efficacy language must be substantiated (FDA rules / ASEAN Cosmetic Directive).
- **This catalog specifically — regulated by name:**
  - **Ultimate Whitening** — whitening claims are heavily regulated in PH and can cross into drug-claim territory. **Highest exposure.**
  - **Glass Skin** — an efficacy/result claim.
  - **Collagen + Vitamin E Firming** — "firming" is an efficacy claim.
  - **Organic** (serum) — "organic" is a regulated descriptor.
  - **SPF 30** (sunscreen) — SPF claims get heavier scrutiny than plain cosmetics.
  These appear on the site because they're the product names, so each needs its CPN + written substantiation, or the naming/positioning is handled carefully with the client.
- **Substantiation ownership — hard rule.** The build does not author or verify claims. The client supplies CPN number(s) + written substantiation for any efficacy claim published. **No substantiation → the claim is cut or reworded to neutral language.** No exceptions.

## C3. Testimonials & trust content
Use only genuine client-supplied feedback (screenshots or carefully transcribed quotes, meaning preserved). If identity is unavailable, label "Verified customer feedback." **No** fabricated names, ratings, testimonials, before/after, or video. Design so testimonials can be added later. Where the real Shopee rating is solid, surface it as third-party proof (real numbers only). No manufactured trust badges.

## C4. Skin type
Products are generally for all skin types — communicate carefully ("Generally suitable for all skin types"). No absolute medical/dermatological claims.

---

# PART D — SITE STRUCTURE & PAGES

## D1. Navigation
Minimal, premium: Home · About Us · Shop (All Products, Categories) · Contact. Optional Blog/Journal only with real content. Right side: Search · Account · Cart. Clean mobile menu. Don't overload.

## D2. Homepage flow
1. Header · 2. Hero · 3. Brand statement · 4. Featured / Best Sellers · 5. Shop by Category · 6. Founder / Brand story · 7. Product-focused editorial · 8. Promotional offer · 9. Testimonials · 10. Why Aulea · 11. Final CTA · 12. Footer. It should read like a story, not unrelated blocks. **Alternate Cream / Cream-Deep / Mist surfaces; reserve Navy Deep for Hero and Footer** so the page stays easy on the eyes.

## D3. Hero
Large editorial hero: premium headline (display face), short emotional supporting copy, strong **Shop Now** CTA, real Aulea product/lifestyle imagery, on a warm surface or a Navy Deep band with Cream text. Communicate what Aulea is, what it believes, and why to explore — not "Welcome to Aulea." Refine messaging from the brand story (e.g. "Everyday skincare, made more accessible"). Temporary placeholder imagery must be clearly temporary and never presented as real Aulea photography.

## D4. Product cards & grid
Editorial, not marketplace: large imagery on clean white/ivory, minimal borders, soft hover, strong product type, Navy price/CTA accents, generous spacing. 4/row desktop, 2/row mobile. Card supports image, name, short description, price, sale price, original price, sale indicator, real rating (only if genuine), Add to Cart, Quick View. Admin can flag Featured / Best Seller / New / On Sale. No fake ratings, review counts, or unconfirmed "Best Seller" badges.

## D5. Product detail page
Name, price, sale price, images (multi-image: primary, secondary, lifestyle, in-use, detail), variants, size, description, benefits, how to use, ingredients (from labels), skin-type note, availability, Add to Cart, Buy Now. Free-shipping nudge near the ₱400 threshold. Never invent ingredient lists.

## D6. Categories
Derived from the actual catalog only (e.g. Facial Care, Body Care, Soaps, Serums, Cleansers, Lotions, Sun Care — confirm against the real list). Editorial/real imagery, curated-collection feel, not a directory.

## D7. About / Founder
Emotionally compelling, human, first-person ("I started Aulea because…"), no corporate filler. Why Aulea exists, the founder's sensitive-skin experience, the accessibility belief, the long-term vision.

## D8. Editorial, promo, routine sections
Alternating large image + text compositions (eyebrow, headline, short paragraph, CTA). Promo panels use Navy Deep + Cream text + product imagery — not marketplace banners. Product storytelling (Cleanse / Treat / Hydrate / Protect) only where it matches the real catalog; a "Build Your Routine" section only if enough product info exists.

## D9. Footer
Logo, short brand statement, shop links, About, Contact, shipping info, payment info, Shopee link, social (when confirmed), Privacy Policy, Terms, Return/Refund policy. Clean and premium.

---

# PART E — E-COMMERCE

## E1. Core flow (must work before Phase 1 is "done")
Browse → Product → Add to Cart → Checkout → Payment/COD → Order → Confirmation → Admin visibility. Minimize steps; the customer should never feel lost. Test end-to-end.

## E2. Payments
GCash, Maya, Bank Transfer, COD, other online methods. Clearly separate online payment vs COD. **Only enable methods that are technically configured and operational** — never show an unconfigured method.

## E3. COD + verification (RTS guard)
COD nationwide desired, subject to courier/platform support ("Cash on Delivery available nationwide, subject to courier availability and applicable requirements"). Nationwide COD for a new brand invites bogus orders and return-to-sender losses, so:
- Automated order confirmation (email now; SMS/messenger later); a lightweight confirm-your-order step before dispatch for higher-value/flagged orders.
- Require phone + email at checkout so unconfirmed COD orders can be verified.
- Admin can set a COD value ceiling and disable COD for repeat non-receivers.
- Internal failed-delivery (RTS) status to track the rate. Keep it proportionate — a confirmation step, not a gauntlet.

## E4. Shipping & AOV
Couriers: J&T Express, Lalamove, LBC. Nationwide incl. provinces; fees vary by location/courier. **Free shipping on orders ₱400+**, subject to courier arrangement — represent accurately, never as unconditional. Use the threshold as a basket-builder: cart progress nudge ("You're ₱X away from free shipping"), routine bundles and related products (only real offers the client supplies).

## E5. Admin
Simple, non-developer-friendly management of products, prices, descriptions, images, categories, inventory (stock/out-of-stock/low-stock if supported), orders, order status, featured/sale flags.

---

# PART F — TECHNICAL

## F1. Responsive / mobile-first
Mobile is first-class (most traffic is mobile/social). Recompose sections for mobile — don't shrink desktop. Mobile priority: brand → hero → shop CTA → best sellers → discovery → story → testimonials → shipping/payment trust → final CTA. Sticky/accessible shopping actions.

## F2. Performance
Fast loading, optimized/responsive images, lazy loading, efficient code, minimal dependencies, good Core Web Vitals. **Target LCP < ~2.5s on 4G** — speed affects bounce and paid-ad cost.

## F3. Accessibility
Meets PART A contrast targets; readable sizes; clear button/focus states (gold focus ring on light, cream ring on dark); keyboard access; alt text on meaningful images; proper form labels; clear error messages.

## F4. SEO
Page titles, meta descriptions, semantic headings, product structured data (only real reviews if review schema is used), clean URLs, image alt text, sitemap, mobile responsiveness. No keyword stuffing.

## F5. Measurement & ad tracking *(this store runs on paid social)*
- Analytics installed and firing (GA4 or equivalent).
- **Meta Pixel + Conversions API (CAPI)** with event **deduplication** (event IDs).
- Event map verified end-to-end in the platform test view: `PageView → ViewContent → AddToCart → InitiateCheckout → Purchase`, plus `Lead`/email-signup.
- **UTM convention** documented so ad traffic is attributable (campaign/adset/ad) → cost per purchase, AOV, ROAS.
- Email signup writes to a real destination (list/store/Resend) — no dead field, no implied newsletter that isn't wired.
- "Pixel on the site" ≠ "events fire correctly." Verify before sign-off.

---

# PART G — BUILD PROCESS

## G1. Priorities
1 Functional e-commerce foundation · 2 Premium homepage · 3 Product catalogue · 4 Product detail pages · 5 Checkout · 6 About/Story · 7 Shipping & payment info · 8 Testimonials · 9 SEO & performance · 10 Scalable admin.

## G2. Scope (major pages)
Home · Shop · Product Detail · About · Contact · Cart · Checkout · Order Confirmation · Policy pages. Others where practical.

## G3. Workflow (4–6 days)
- **Day 1** — design system (tokens from PART A), typography, navigation, global components, hero, homepage skeleton.
- **Day 2** — catalogue, product cards, categories, PDP structure, product image system.
- **Day 3** — cart, checkout, payment options, COD flow + verification, shipping logic, order confirmation.
- **Day 4** — About/story, testimonials, promo/trust sections, footer.
- **Day 5** — responsive refinement, mobile optimization, visual polish, content integration, product QA.
- **Day 6** — final QA, checkout/product/responsive testing, performance, measurement verification, bug fixes, handover prep.

Don't delay by asking for already-supplied info; if an item is genuinely missing, make that section configurable rather than blocking the build.

## G4. QA gates
- **Brand:** logo (vector/favicon), colours are the PART A tokens, typography is the real/fallback faces, product photography consistent.
- **Content:** names, prices, sizes, variants, benefits, ingredients, how-to-use, contact, shipping, payment.
- **Commerce:** product → cart → checkout → payment/COD → order → confirmation → admin visibility.
- **Mobile:** navigation, browsing, cart, checkout, forms, CTAs, images; LCP < 2.5s.
- **Measurement:** every event fires in the platform test view; UTMs resolve; pixel/CAPI dedup; email signup writes somewhere real.
- **Compliance:** no "FDA-approved"; Whitening/Glass Skin/Firming/Organic/SPF map to supplied substantiation (or neutralised); CPN shown only where supplied; returns policy fits cosmetics (opened cosmetics typically non-returnable on hygiene grounds; reflect real terms + RA 7394).
- **Contrast:** every text/background pair meets PART A; no forbidden pairings.

## G5. Handover
Admin credentials; analytics + Pixel/CAPI access; **DNS change record** (which records changed, old/new values, registrar); content source-of-truth (product records as built); a note of what the client manages vs what remains a service.

---

# PART H — SUCCESS CRITERIA & FINAL RULES

## H1. Critical rules
- **Navy `#1F1A76` stays recognizable and intentional throughout.** Reference secondary, brand primary.
- Real Aulea products are the definitive visual source; never redesign them to fit the site.
- Uncertain about a claim → **do not invent it**; use verified info or leave it configurable.
- A beautiful site that can't reliably take orders is not a successful Phase 1 — the transaction must work and be tested.

## H2. Final design test
Does this look like Aulea? Does the navy feel intentional (not overused)? Do the real products look at home? Premium without feeling inaccessible? Founder story genuine? Can a customer grasp what Aulea sells in seconds, find a product fast, and check out easily? Is mobile as polished as desktop? Does anything look fabricated or contradict client info? Is every text pair readable (PART A)? Any answer "no" → refine before handover.

## H3. Success criteria
Recognizable digital identity · premium & editorial · distinctly Aulea · products presented beautifully · navy used consistently and intentionally · functional catalogue, cart, checkout · COD where configured · clear shipping & payment · brand story communicated emotionally · genuine testimonials supported · **all text meets contrast targets; no forbidden pairings; no colour outside the Aulea system** · real product data and prices · works on mobile (LCP < 2.5s) · measurement firing · technically stable · ready for future expansion · feels like the brand's own site, not a Shopee replacement.

## H4. Final instruction
Build Aulea Skin as a real brand, not a template. Use the real products as the visual source of truth, Navy `#1F1A76` as the brand colour (accent, not overused), the reference only to learn premium editorial e-commerce — never to copy. The result should feel premium enough to create desire, warm enough to create trust, simple enough to feel accessible, and functional enough to turn interest into an order. When someone lands on the site, they should feel they've entered the world of Aulea Skin.
