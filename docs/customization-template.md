# Customization Template, Aulea Skin

Filled in against spec v2.0 (`docs/aulea-skin-build-spec-v2.0.md`) as of
this rebuild. Values are real where the spec/brand kit supplied them;
brackets mark genuine gaps.

```
CLIENT:                    Aulea Skin
INDUSTRY:                  Skincare / Cosmetics (Beauty DTC)
BUSINESS MODEL:            Online-based, own e-commerce storefront (established December 2025)
PRIMARY AUDIENCE:          Customers seeking accessible, affordable, simple everyday skincare
PRIMARY BUSINESS OBJECTIVE:A premium-but-accessible storefront distinctly Aulea's own, not a
                            Shopee replacement (spec H4)
PRIMARY CONVERSION:        Purchase (Browse -> Add to Cart -> Checkout -> Payment/COD -> Order)
SECONDARY CONVERSION:      Email signup (not yet wired, no destination named, spec F5)
TRAFFIC SOURCES:           Paid social (Meta), plus existing Shopee audience
CORE PRODUCTS / SERVICES:  8 SKUs, reconciled against real product photography (supersedes spec
                            B6's text list, see docs/intake-checklist.md): Sunscreen SPF 50 with
                            Alpha Arbutin (30 mL, label says 50, spec text said 30), Organic
                            Vitamin C Serum (15 mL), Niacinamide Facial Wash (60 mL), Collagen +
                            Vitamin E Firming Lotion (100 mL), Glass Skin Natural Soap (70 g),
                            Ultimate Whitening Natural Soap (70 g), Essence for Men (50 mL EDP,
                            scents Paul/Cedrick, new, not in any spec version), Essence for Women
                            (50 mL EDP, scents Irish/Nathalie/Courtney, new). Plain "Aulea Natural
                            Soap" dropped, no photo evidence it exists. Prices/ingredients still
                            pending for all.
WEBSITE TYPE:              E-COMMERCE
CHECKOUT MODEL:            OWN CHECKOUT, confirmed (spec §2), not an open decision. Checkout UI
                            is built as a flow preview (src/app/checkout); no payment gateway or
                            backend is connected yet (spec E1-E2).
PHASE 1 PAGES:             Home, Shop (categories), Product Detail, About Us, Contact, Cart,
                            Checkout (preview), Order Confirmation (template), Policies, matches
                            spec G2 scope. No separate Trust/FAQ nav pages (spec D1 keeps nav to
                            Home/About Us/Shop/Contact); that content is folded into homepage
                            sections, product pages, and policies.
PHASE 1 FUNCTIONALITY:     Working cart (client-side, localStorage); checkout is a reachable UI
                            preview with Place Order disabled (no backend exists in this static
                            export); Order Confirmation is a static template, not a real receipt.
MEASUREMENT (F5):          GA4 + Meta Pixel/CAPI scaffolded (src/lib/analytics.tsx), event map
                            wired (ViewContent, AddToCart, Lead), IDs not yet supplied, see
                            .env.example. Email capture destination not yet named.
REGULATORY REFERENCE:      Informational only, not a build gate for this project, see
                            docs/compliance-notes.md for what's on the real product labels.
BRAND DIRECTION:           LOCKED per spec PART A, Navy #1F1A76 (accent), Navy Deep #131047
                            (large fills: hero + footer + one promo band only), Gold #E2AB2D
                            (decoration/hover only, never body text), Cream #F8EFE0 (base), Cream
                            Deep #F1E7D6 + Mist #ECEAF3 (alternating surfaces), Ink #201B3B (body
                            text). This supersedes the rose/sage palette explored in an earlier
                            session, that deviation is retired; PART A is the locked source of
                            truth now. Typography: Bebas Neue (caps, final), Fraunces (display,
                            placeholder for Tan Pearl/Sego pending licensing), Mulish (body,
                            final per spec A4). Logo: RECEIVED and live (full lockup + icon),
                            used as supplied per spec B2, see assets/logo-source/README.md.
CLIENT MATERIALS RECEIVED: Brand kit (locked colour/type system), founder story, real logo
                            (lockup + icon), sitewide hero photo, product photography for 6 of 8
                            SKUs, contact email, Shopee store link, courier list, free-shipping
                            threshold, payment methods list (GCash/Maya/Bank Transfer/COD)
MISSING MATERIALS:         Prices, full product descriptions/benefits (all 8 SKUs), legible
                            ingredients-panel photos, founder photo, payment gateway access,
                            DNS/pixel access, order backend, see docs/intake-checklist.md
ESTIMATED BUILD TIME:      4 to 6 days from Build-Ready confirmation (spec G3), not started,
                            clock has not begun
PHASE 1 STATUS:            BUILDING (design system, brand content, and full page structure in
                            place per spec; blocked on prices/payment access before launch-ready)
PHASE 2 OPPORTUNITIES:     Not yet scoped, admin/back-office (spec E5), real payment/order
                            backend, abandoned-cart recovery, customer accounts, loyalty,
                            advanced SEO
```
