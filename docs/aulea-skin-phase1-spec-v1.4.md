# AULEA SKIN
## PHASE 1 WEBSITE BUILD SPECIFICATION

**Project:** Aulea Skin Website
**Phase:** Phase 1 MVP
**Website Type:** Conversion-Focused E-Commerce (own storefront)
**Estimated Build Time:** 4 to 6 days (from Build-Ready)
**Primary Objective:** Establish Aulea Skin's own online storefront and enable customers to discover, understand, trust, and purchase its products online.

---

## CHANGELOG

**v1.3 → v1.4 — brand kit incorporated**
- Real brand system folded into §13 (colors, typefaces, logo variants, tagline, name styling) from the client brand kit.
- §12 Brand Assets updated — visual reference received; vector files still needed.
- §7 updated with three confirmed SKUs (Sunscreen SPF 30, Organic Serum Vitamin C 15 mL, Niacinamide Facial Wash 60 mL); prices, descriptions, ingredients, and label photos still outstanding.
- §27 notes that the confirmed product names carry regulated claims ("Organic," "SPF 30," "brightening," "pore-minimizing") — CPN + substantiation applies to these hero SKUs by name.
- §34 intake updated to reflect what the kit resolves vs. what still blocks build.

**v1.2 → v1.3 — key additions**
- §27 Regulatory & Claims Compliance (FDA CPN, "notified ≠ approved," substantiation ownership).
- §33 Measurement & Ad Tracking (Meta Pixel + CAPI + UTM + verified events).
- §20 COD Order Verification & RTS Risk. §22 AOV & free-shipping threshold. §26 Shopee-rating trust. §34 Build-Ready intake. §28 LCP target. §42 Handover artifacts.

> Compliance guidance is operational, not legal advice. Confirm current FDA Philippines / DTI requirements per project.

---

## IMAGE CONVENTION

Provided assets are referenced from `assets/`. Not-yet-provided assets point at `assets/placeholders/` with a bracketed note — swap the file, keep the path. No placeholder implies content exists that does not (e.g. no fake before/after — see §11).

---

# 1. PROJECT OVERVIEW

Aulea Skin is an online-based skincare and beauty business established in **December 2025**, created from the founder's personal experience with sensitive skin and different skin concerns. Brand tagline: **"A Better You."**

Core philosophy: skincare that is accessible, reasonably priced, easy to incorporate into everyday routines, enjoyable, and worth the customer's money.

The website should feel like **Aulea Skin's own digital home**, not a copy of its Shopee storefront — communicating the personal origin while providing a practical, conversion-focused shopping experience.

![Aulea Skin brand kit](assets/aulea-brand-kit.png)
> 🎨 **Brand kit (client-supplied)** — source for the design system in §13.

---

# 2. PRIMARY WEBSITE OBJECTIVE

Phase 1 creates an **owned e-commerce storefront**. Customers should be able to discover Aulea, understand what the brand represents, explore products, understand individual products, build confidence, add to cart, checkout, select a payment method, and receive order confirmation/instructions.

Design around: **Discover → Understand → Trust → Explore → Purchase.**

---

# 3. BUSINESS CONTEXT

Aulea currently operates primarily online. Main selling platform: Shopee — **https://shopee.ph/shop/1889974610**

The previous social media pages were lost and are being recovered. As a result: some prior content is unavailable, historical customer feedback was lost, existing testimonials are limited to screenshots the client still holds, and social integrations must not depend on recovery for Phase 1.

Establish an **independent digital home** rather than a brand dependent on social platforms.

---

# 4. BRAND STORY

The founder started Aulea because of personal experience with sensitive skin and the difficulty of finding products that feel comfortable while staying affordable. Two problems solved: **Accessibility** (reasonably priced, accessible options) and **Simplicity** (skincare that fits an everyday routine without feeling complicated or out of reach).

Aulea is not "just another skincare business" — it began from personal experience and a genuine desire to make skincare more accessible.

---

# 5. BRAND PROMISE

Underlying message:

> Taking care of your skin does not have to be complicated or expensive.

Customers should feel they're getting value, comfortable using the products, that skincare can be enjoyable and accessible rather than intimidating. Do not position Aulea as luxurious or exclusive. Positioning: **accessible, approachable, everyday skincare** — expressed through the tagline **"A Better You."**

---

# 6. LONG-TERM BRAND VISION

Long-term: a **trusted and accessible skincare brand.** Intends to grow its range, introduce products, build a community, and keep its accessibility mission. The architecture must be scalable; the initial catalog must not block future expansion.

---

# 7. PRODUCT INFORMATION

The client provides complete product information separately: name, price, size, variant, description, benefits, how to use. Ingredients come from photographs of the **actual product labels**.

**Confirmed SKUs (from brand kit — details still to be supplied):**

| Product | Size (from kit) | Still needed |
|---|---|---|
| Auléa Sunscreen (SPF 30) | — | price, full label copy/SPF confirmation, ingredients, actives, benefits, how-to-use |
| Auléa Organic Serum Vitamin C | 15 mL | price, description, ingredients, benefits, how-to-use |
| Auléa Niacinamide Facial Wash | 60 mL | price, full description, ingredients, benefits, how-to-use |

Additional SKUs may exist — confirm the complete catalog before hard-coding categories (§15).

Supplied information is the source of truth. **Do not invent** ingredients, benefits, product claims, sizes, prices, usage instructions, medical claims, or regulatory claims. If a detail is not supplied, flag it (§34), do not fabricate it.

---

# 8. PRODUCT PHOTOGRAPHY

The client provides available product photos separately. Use the highest-quality/original images supplied. Photography should make products easy to identify, create visual consistency, support product confidence, and keep the product as the focus, against the cream/indigo brand palette (§13). Do not alter packaging, labels, colors, or claims.

![Product image grid](assets/placeholders/product-grid.png)
> 🖼️ **[IMAGE PLACEHOLDER — Product Images]** — hero shots visible in the brand kit; original high-res files still to be provided.

---

# 9. SKIN TYPE POSITIONING

Products are generally intended for **all skin types**, communicated where appropriate. Individual product claims must be based on supplied information. Do not turn "all skin types" into unsupported per-product claims.

---

# 10. CUSTOMER REVIEWS AND SOCIAL PROOF

The client has existing customer feedback as screenshots. Incorporate where appropriate into homepage, product pages, testimonials, and relevant sections. Use **only authentic** supplied feedback. Do not manufacture testimonials or imply a larger review history than can be substantiated. Because the social pages were lost, available testimonials are an important early trust asset; add more as the brand recovers its presence.

---

# 11. BEFORE / AFTER AND VIDEO TESTIMONIALS

The client currently has **no** before-and-after photos or video testimonials. These are **not required Phase 1 sections.** Do not create placeholders implying such content exists. Future UGC can be added later.

---

# 12. BRAND ASSETS

**Received:** brand kit (logo variants, color palette, typefaces, product hero shots, tagline) — see §13.
**Still needed:** original **vector logo files** (SVG/AI/PDF) for crisp web/retina rendering and favicon generation; any additional marketing materials/previous designs.

Preserve Aulea's recognizable identity in a more polished e-commerce environment. Do not reproduce social media layouts.

![Aulea Skin logo (from kit)](assets/aulea-brand-kit.png)
> 🖼️ Logo visible in the brand kit; **vector source files still to be provided.**

---

# 13. BRAND SYSTEM & DESIGN DIRECTION *(updated from client brand kit)*

### 13.1 Name & tagline
- Business name: **Aulea Skin**. Styled form on logo and products: **Auléa** (accent on the "e"), with a small gold leaf accent above it.
- Tagline: **"A Better You."** (use sparingly — hero, footer, about).

### 13.2 Color palette
| Role | Hex | Notes |
|---|---|---|
| Primary — deep indigo | `#1F1A76` | Backgrounds, headers, primary buttons, footer |
| Accent — gold | `#E2AB2D` | The leaf, highlights, secondary CTAs, price/badge accents — use as an accent, not a large fill |
| Neutral — cream | `#F8EFE0` | Page background, cards, sections; keeps the brand warm and "accessible," not clinical |

Aim for a light, airy cream base with indigo for structure and gold as a restrained accent. Avoid heavy indigo fills across large mobile surfaces (contrast/battery/scanning); reserve full indigo for the hero and footer.

### 13.3 Typography
- **Display / headings:** **Tan Pearl** and **Sego** (elegant display faces from the kit). Use for the logo lockup, hero headline, and section titles.
- **Labels / all-caps / buttons:** **Bebas Neue** (condensed caps) — nav, buttons, category labels, small headings.
- **Body / paragraph *(gap — confirm)*:** the kit does not specify a body font. Tan Pearl, Sego, and Bebas Neue are all poor for long-form reading. Pair with a clean, readable web sans (e.g. a neutral grotesk) for product descriptions, FAQ, and policies. **Confirm the body typeface with the client before build.**

Provide web-licensed/self-hosted versions of the display faces, or nearest web-safe equivalents, and confirm licensing for web embedding.

### 13.4 Visual feel
Clean, modern, approachable, feminine where appropriate, premium without becoming inaccessible, product-focused, trustworthy, fresh, simple to navigate. Prioritize product photography, clear typography, strong hierarchy, comfortable whitespace, easy scanning, clear CTAs, and mobile usability. Avoid a generic marketplace-template look.

---

# 14. E-COMMERCE POSITIONING

Not a catalog — a **conversion-focused storefront.** The goal is not "show customers our products" but: **help customers understand Aulea, find the right product, feel confident, and purchase.** Every major page has a clear purpose and next action.

---

# 15. RECOMMENDED WEBSITE STRUCTURE

Core structure, subject to final requirements: **Home**; **Shop** (complete catalog); **Product Categories** (based on the actual range — do not hard-code before reviewing the full list); **Product Pages**; **About Aulea** (founder story, purpose, vision); **FAQ** (products, ordering, payment, shipping, COD, delivery, common concerns); **Contact** (supplied official info); **Cart**; **Checkout**; **Order Confirmation**; **Policies** (client-supplied/approved — see §27 and §41 for cosmetic-specific returns).

---

# 16. HOMEPAGE CONVERSION STRATEGY

Introduce Aulea and guide toward shopping:

- **HERO** — core proposition: everyday skincare, accessibility, personal brand story, simple routines; tagline "A Better You." Primary CTA: **SHOP NOW**.
- **SHOP THE COLLECTION** — categories from the full list.
- **FEATURED PRODUCTS** — selected products for primary promotion. Do not label "Best Sellers" without client confirmation.
- **WHY AULEA** — born from personal experience, accessible, everyday use, reasonable pricing, simple routines.
- **PRODUCT DISCOVERY** — potential **Cleanse → Treat → Protect → Moisturize** (maps naturally to Facial Wash → Serum → Sunscreen; only implement if supported by the actual catalog).
- **CUSTOMER LOVE** — authentic supplied feedback.
- **THE AULEA STORY** — founder story; CTA **LEARN MORE**.
- **FAQ** — common purchasing/product questions.
- **EMAIL SIGNUP** — updates on new products/launches; don't imply a newsletter unless the integration is implemented (§33).
- **FINAL CTA** — e.g. *"Start your everyday skincare routine with Aulea Skin."* **SHOP AULEA.**

Copy refined during build based on visual design.

---

# 17. PRODUCT PAGE STRATEGY

Each product page answers the customer's main questions without forcing them to leave: **Product Hero** (image, name, price, variant/size, short value prop, Add to Cart, Buy Now where appropriate); **Product Overview**; **Benefits** (client-supplied only); **Ingredients** (from the actual label); **How to Use** (client-provided); **Suitable For** (where supported); **Customer Feedback** (authentic); **Related Products** (real catalog relevance); **Purchase Information**. Add a free-shipping nudge where price is near the ₱400 threshold (§22).

---

# 18. PAYMENT METHODS

Aulea can accommodate GCash, Maya, bank transfer, COD, and other available online methods. Phase 1 includes only methods that can actually be connected and are operational through the selected infrastructure. Do not display a method as available merely because it can be accepted manually unless checkout clearly supports it.

---

# 19. CASH ON DELIVERY

The client wants **COD nationwide**, supported where technically and operationally possible, subject to courier availability, platform requirements, service coverage, and operational restrictions. Do not promise COD where fulfillment can't support it.

---

# 20. COD ORDER VERIFICATION & RTS RISK

Nationwide COD for a new brand carries real exposure: bogus/mistaken orders and return-to-sender (RTS) losses come out of the founder's pocket. Reduce this without adding friction that kills conversion:

- **Order confirmation step** — automated confirmation after a COD order (email now; SMS/messenger later); a lightweight confirm-your-order action before dispatch for higher-value/flagged orders.
- **Capture a reachable contact** — phone + email required at checkout so unconfirmed COD orders can be verified before shipping.
- **COD guardrails** — client can set a COD order-value ceiling and disable COD for repeat non-receivers later.
- **RTS handling** — an internal failed-delivery status so the client can track RTS rate; revisit COD terms in Phase 2 if it climbs.

Proportionate — a confirmation step, not a gauntlet. The point is protecting cash, not slowing genuine buyers.

---

# 21. SHIPPING

Ships nationwide, including provinces. Couriers: **J&T Express, Lalamove, LBC.** Fees depend on location, courier, and arrangement. Communicate carefully; don't represent shipping the operation can't support.

---

# 22. AVERAGE ORDER VALUE & FREE-SHIPPING THRESHOLD

Free shipping for orders **₱400 and above** (subject to courier arrangement — not an unconditional guarantee unless confirmed). At accessible price points this is a deliberate basket-builder:

- **Cart progress nudge** — "You're ₱X away from free shipping."
- **Bundles / routines** — Facial Wash → Serum → Sunscreen maps to a natural routine bundle; only build offers the client actually supplies.
- **Related products** on product and cart pages to lift basket size toward ₱400.

Build the mechanics; the client supplies the real offers. Do not invent discounts.

---

# 23. SHOPEE

Shopee remains an existing channel, not to be unnecessarily replaced in Phase 1. The website establishes **Aulea's own direct storefront**; Shopee may be presented as an additional option where useful. Official Shopee: **https://shopee.ph/shop/1889974610**. See §26 for the Shopee rating as trust proof.

---

# 24. SOCIAL MEDIA

Previous pages are being recovered. Do not fabricate social links/profiles; do not make social a launch dependency; use only verified/recovered accounts; update later as accounts return. The site must be fully functional without the old accounts.

---

# 25. CONTACT INFORMATION

- **Brand:** Aulea Skin
- **Email:** auleaskinessentials@gmail.com
- **Business Type:** Online-based business
- **Established:** December 2025

Use the supplied email as the primary contact unless another official channel is provided.

---

# 26. TRUST STRATEGY

Compensate for the lost social presence with strong owned trust signals: authentic customer feedback, real product images, founder story, clear contact details, clear product information, transparent shipping/payment information, FAQ, appropriate business information, and relevant certifications/registrations if supplied. Do not exaggerate history or customer base.

**Use the Shopee rating as third-party proof.** The existing Shopee store is the strongest external trust asset the brand still owns after losing social. If the store's rating and review count are solid, surface them (e.g. "Rated on Shopee" with the real figures, linking to the store). Real numbers only; if the rating is weak or sparse, omit rather than spin.

---

# 27. REGULATORY & CLAIMS COMPLIANCE (PHILIPPINES)

Mandatory for a skincare storefront. Operational guidance, not legal advice — confirm current FDA/DTI requirements.

- **FDA notification.** PH cosmetics require an **FDA Cosmetic Product Notification (CPN).** Cosmetics are **notified, not "approved"** — do not use "FDA-approved" on the site. Display the **CPN number** supplied by the client where regulatory standing is signalled.
- **Claim boundaries.** No therapeutic/medical claims (treat, cure, prevent) — that reclassifies a cosmetic as a drug. Whitening, anti-acne, anti-aging, "clinically proven" language is sensitive and must be substantiated (FDA rules / ASEAN Cosmetic Directive).
- **This brand specifically.** The confirmed SKUs carry regulated language by name: **"Organic"** (a regulated descriptor), **"SPF 30"** (sunscreens with SPF claims get heavier scrutiny), and copy like **"brightening"** / **"minimize pores."** Each needs the corresponding CPN and written substantiation, or the wording is cut/neutralized. Do not publish "organic" or the SPF value unless the client confirms they hold up.
- **Substantiation ownership — hard rule.** ALTAVENTURES does not verify or author medical/regulatory claims. The client supplies, in writing, the CPN number(s) and substantiation for any efficacy claim published. **No substantiation → the claim is cut or reworded to neutral language.** No exceptions.
- **Returns for cosmetics.** See §41.

Because Aulea was established December 2025, confirm CPN status early. Missing CPNs don't block the build, but they cap the claims and regulatory language that can appear — flag in intake (§34).

---

# 28. MOBILE-FIRST REQUIREMENT

Most Aulea customers discover on mobile, so the site is mobile-first. Attend to product browsing, product photography, sticky add-to-cart, navigation, checkout, forms, CTA visibility, text readability, touch targets, page speed, image sizing. Mobile should feel intentional, not a reduced desktop layout.

**Performance target:** on a mid-range mobile device over 4G, aim for **LCP under ~2.5s.** On paid-ad landing pages, speed directly affects bounce and cost per result.

---

# 29. CORE E-COMMERCE USER JOURNEY

**Traffic Source → Homepage/Landing → Product Discovery → Product Page → Product Understanding → Trust → Add to Cart → Checkout → Payment/COD Selection → Order Submission → Order Confirmation.** This is the primary Phase 1 conversion system.

---

# 30. ADMINISTRATION

Where the platform supports it, the client manages products, prices, product information, availability, and orders without contacting ALTAVENTURES for every basic task. Advanced management, automation, analytics, and CRM come later.

---

# 31. PHASE 1 TECHNICAL REQUIREMENTS

Where applicable: responsive website, mobile optimization, functional navigation, functional catalog and product pages, cart, checkout, order processing, payment workflow, COD workflow, contact form, email signup, basic SEO, metadata, favicon (from vector logo — §12), SSL, domain configuration, analytics/tracking (§33), and basic performance optimization (§28). Only implement integrations actually required and available within Phase 1.

---

# 32. SEO

Basic SEO: appropriate page titles, meta descriptions, proper heading hierarchy, descriptive product/page URLs, image alt text, product-specific content, mobile responsiveness, basic structured data where supported. Any product/review structured data must reflect only real, supplied reviews. Advanced SEO campaigns are not Phase 1.

---

# 33. MEASUREMENT & AD TRACKING

Generic analytics isn't enough for a store driven by paid social. Measurement is part of "conversion-focused" and a completion gate.

- **Analytics** installed and firing (GA4 or equivalent).
- **Meta Pixel + Conversions API (CAPI)** with event **deduplication** (event IDs). Browser pixel alone is insufficient.
- **Event map verified end-to-end in the platform test view:** `PageView → ViewContent → AddToCart → InitiateCheckout → Purchase`, plus `Lead`/email-signup.
- **UTM convention** documented so ad traffic is attributable by campaign / adset / ad — enabling cost per purchase, AOV, ROAS.
- **Email capture destination named** — the signup must write somewhere real (list/store/Resend or equivalent). No dead field, no implied newsletter that isn't wired.

Completion rule: "the pixel is on the site" ≠ "the events fire correctly." Verify each event before sign-off.

---

# 34. BUILD-READY INTAKE & ASSET CHECKLIST

The 4–6 day estimate starts at **Build-Ready**, not project start.

**Blockers (build cannot fully proceed without these):**
- [ ] Complete product list — names, **prices**, sizes, variants, descriptions, benefits, how-to-use *(3 SKUs partly confirmed via kit; prices/descriptions/ingredients still missing — §7)*
- [ ] Product **label photos** (for accurate ingredient info)
- [ ] Product photography — originals/high-res *(hero shots seen in kit; source files needed)*
- [ ] **FDA CPN number(s)** or written status — with attention to "Organic"/SPF/brightening claims (§27)
- [ ] **Written substantiation** for any efficacy claim to be published

**Brand & content:**
- [x] Logo variants, palette, typefaces, tagline — **received (brand kit)**
- [ ] **Vector logo files** (SVG/AI/PDF) for web/retina + favicon
- [ ] **Body/paragraph typeface** confirmed (§13.3)
- [ ] Web-embedding **font licensing** for Tan Pearl / Sego confirmed
- [ ] Authentic customer feedback screenshots (§10)
- [ ] Founder story confirmation / edits

**Operations:**
- [ ] Payment methods that can actually be connected (§18)
- [ ] COD terms + any order-value ceiling (§19–20)
- [x] Shipping/couriers + ₱400 free-ship *(stated; confirm operational accuracy)*
- [ ] Returns/refund terms for cosmetics (§41)
- [x] Primary contact email *(auleaskinessentials@gmail.com)*; confirm any other official channel

**Technical access:**
- [ ] Domain registrar / DNS access (or named controller)
- [ ] Meta ad account / pixel access for §33
- [ ] Any existing hosting/store admin access

**Status:** NOT READY — outstanding: full product data + prices, label photos, high-res product images, CPN/substantiation, vector logo, body font, payment/DNS/pixel access.

---

# 35. PHASE 1 EXCLUSIONS

Not added unless agreed: loyalty/rewards, membership accounts, subscription commerce, advanced CRM, advanced email automation, abandoned-cart automation, advanced recommendation engine, advanced personalization, mobile app, complex dashboards, advanced marketing automation, advanced SEO campaign, extensive blog/content system, advanced analytics dashboard, complex social integrations, advanced marketplace sync. Potential Phase 2 items.

---

# 36. PHASE 2 APPROACH

Discussed **after Phase 1 is built and presented**, against business growth, customer behavior, website usage, sales requirements, operational bottlenecks, marketing opportunities, and client priorities. Potential items: advanced conversion optimization, abandoned-cart recovery, email automation, customer accounts, loyalty, bundles, advanced analytics, CRM integration, marketing automation, social commerce, advanced SEO, retargeting, segmentation, advanced recommendations. Proposed on actual needs, not assumed.

---

# 37. BUILD TIMELINE

**4 to 6 days**, assuming required materials are available. The timeline begins once the project is marked **Build-Ready** (§34).

---

# 38. BUILD PRIORITIES

In order: (1) functional customer journey, (2) e-commerce functionality, (3) product accuracy, (4) conversion strategy, (5) brand presentation, (6) visual polish, (7) secondary enhancements. Do not sacrifice the purchasing journey for decorative features.

---

# 39. INTERNAL QA

**Brand:** logo (vector rendering, favicon), colors (`#1F1A76` / `#E2AB2D` / `#F8EFE0`), typography (display + Bebas Neue + confirmed body font), consistency, product photography.

**Content:** product names, prices, sizes, variants, benefits, ingredients, how-to-use, contact, shipping, payment.

**E-commerce:** product selection, variants, cart, checkout, payment selection, COD, order submission, confirmation.

**Mobile:** navigation, product browsing, cart, checkout, forms, CTAs, typography, images; LCP vs §28.

**General:** links, buttons, forms, email signup, SEO basics, SSL, performance, error states.

**Measurement:** every §33 event fires end-to-end in the platform test view; UTMs resolve; pixel/CAPI dedup confirmed; email signup writes to its real destination.

**Compliance:** no "FDA-approved" anywhere; "Organic"/SPF/brightening/pore claims map to supplied substantiation; CPN displayed only where supplied; returns policy matches the cosmetic category.

---

# 40. CLIENT PRESENTATION

Once QA-tested, present: **The Brand** (story/identity translated to the site), **The Shopping Experience**, **The Conversion Strategy**, **The E-Commerce System** (products, cart, checkout, payments, COD, orders), **The Foundation** (how it grows with Aulea). The client should see the shift from marketplace/social-dependent selling to **Aulea Skin's own branded storefront.**

---

# 41. DEFINITION OF DONE

Phase 1 is complete when: the website is built; brand identity implemented per §13; catalog populated from supplied info; product pages functional; cart functional; checkout/order process functional; agreed payment methods functional; COD workflow established where supported, **with the §20 confirmation step**; shipping info implemented; supplied reviews incorporated appropriately; founder story represented; contact info implemented; mobile experience completed to the §28 target; basic SEO established; **§33 measurement installed and events verified**; **§27 compliance checks passed**; **a cosmetic-appropriate returns/refund policy published** (opened cosmetics typically non-returnable on hygiene grounds; reflect the client's real terms and RA 7394 — not a generic policy); internal QA completed; client presentation completed; agreed revisions addressed.

---

# 42. HANDOVER ARTIFACTS

Provide explicitly: admin credentials (site, store/CMS); analytics + Meta Pixel/CAPI access (or confirmation the client owns them); **DNS change record** (exactly which records changed, old and new values, and where the domain is registered); content source-of-truth file (product records as built); a short note of what the client manages vs. what remains an ALTAVENTURES service.

> Undocumented domain/registrar handovers are a recurring source of post-launch pain. Write down what changed.

---

# 43. FINAL PHASE 1 OUTCOME

The final product should feel like:

> **Aulea Skin has officially moved from simply selling online to having its own online home.**

Customers can discover the brand, understand its purpose, explore products, build trust, and purchase. It should be **beautiful enough to represent the brand, simple enough for customers to use, functional enough to sell, and flexible enough to grow.** The objective is the **right first foundation**, not every system Aulea may eventually need.

---

# 44. BUILD INSTRUCTION

Build the Aulea Skin Phase 1 website using this specification, the brand kit (§13), and the client-provided assets as the source of truth.

Do not invent missing information. Do not introduce unsupported product or regulatory claims. Do not add unnecessary Phase 2 functionality. Prioritize mobile-first usability, e-commerce functionality, conversion, trust, brand consistency, and a clear customer journey.

Where product information is supplied separately, incorporate it into the appropriate records and pages. Where label images are supplied, use them to represent ingredient information accurately. Where information remains unavailable, flag it for review (§34) rather than guessing.

The final result is a **complete Phase 1 MVP suitable for client presentation and real-world use**, with an estimated build period of **4 to 6 days** from Build-Ready. Phase 2 opportunities are identified **after Phase 1 is presented.**
