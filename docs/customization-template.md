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
PRIMARY CONVERSION:        Purchase (Browse -> Buy on Shopee -> completes on Shopee, client
                            directive supersedes spec §2's own-checkout plan)
SECONDARY CONVERSION:      Email signup (not yet wired, no destination named, spec F5)
TRAFFIC SOURCES:           Paid social (Meta), plus existing Shopee audience
CORE PRODUCTS / SERVICES:  10 SKUs, reconciled against real product photography (supersedes spec
                            B6's text list, see docs/intake-checklist.md): Sunscreen SPF 50 with
                            Alpha Arbutin (30 mL, label says 50, spec text said 30), Organic
                            Vitamin C Serum (15 mL), Niacinamide Facial Wash (60 mL), Collagen +
                            Vitamin E Firming Lotion (100 mL), Glass Skin Natural Soap (70 g),
                            Ultimate Whitening Natural Soap (70 g), Essence for Men (50 mL EDP,
                            scents Paul/Cedrick, new, not in any spec version), Essence for Women
                            (50 mL EDP, scents Irish/Nathalie/Courtney, new), Glass Skin Set
                            (4-piece bundle, added from a later upload), Gentle Brightening Set
                            (4-piece bundle, client's own filename called this one "Melasma Set,"
                            renamed to match its actual label text, see compliance-notes.md; no
                            Shopee link supplied yet for either set). Plain "Aulea Natural
                            Soap" dropped, no photo evidence it exists. Ingredients still pending
                            for all (see compliance-notes.md for why that one stays pending even
                            though usage/benefits were composed); no price shown on this site,
                            Shopee is the pricing source of truth.
WEBSITE TYPE:              CATALOG + SHOPEE REDIRECT (not e-commerce with its own checkout)
CHECKOUT MODEL:            SHOPEE REDIRECT, client directive, supersedes spec §2's own-checkout
                            plan. Every product's "Buy on Shopee" button links straight to its
                            real Shopee listing (src/data/products.ts shopeeUrl). There is no
                            cart, checkout, or order backend on this site.
PHASE 1 PAGES:             Home, Shop (categories), Product Detail, About Us, Contact, Policies,
                            matches spec G2 scope minus Cart/Checkout/Order Confirmation (removed
                            with the checkout model change). No separate Trust/FAQ nav pages (spec
                            D1 keeps nav to Home/About Us/Shop/Contact); that content is folded
                            into homepage sections, product pages, and policies.
PHASE 1 FUNCTIONALITY:     No cart or checkout, "Buy on Shopee" opens the real listing in a new
                            tab. Contact page is an info list only (message form removed per
                            client request).
MEASUREMENT (F5):          GA4 + Meta Pixel/CAPI scaffolded (src/lib/analytics.tsx), event map
                            wired (ViewContent, InitiateCheckout on Shopee-button click), IDs not
                            yet supplied, see .env.example. Email capture destination not yet
                            named.
REGULATORY REFERENCE:      Informational only, not a build gate for this project, see
                            docs/compliance-notes.md for what's on the real product labels.
BRAND DIRECTION:           Updated to match a client-supplied reference design
                            (Aulea__template.zip), colours sampled directly from those
                            screenshots: Navy #102048 (accent + large fills: hero, footer, promo
                            band), Gold #C68B57 (muted bronze, decoration/hover only, never body
                            text), Cream #FBFAF8 (near-white base), Cream Deep #F5F2EC + Mist
                            #F0EFEB (alternating surfaces), Ink #16223D (body/heading text). This
                            supersedes spec v2.0 PART A's warmer indigo/bright-gold/yellow-cream
                            values (#1F1A76/#E2AB2D/#F8EFE0), please confirm this is the intended
                            direction since it's a real deviation from the originally locked spec.
                            Typography unchanged: Bebas Neue (caps, final), Fraunces (display,
                            placeholder for Tan Pearl/Sego pending licensing), Mulish (body,
                            final per spec A4). Logo: RECEIVED and live (full lockup + icon),
                            used as supplied per spec B2, see assets/logo-source/README.md.
CLIENT MATERIALS RECEIVED: Brand kit, founder story, founder photo, real logo (lockup + icon +
                            favicon source), sitewide hero photo, product photography for 6 of the
                            original 8 SKUs plus both set SKUs (8 of 10 total), a real brand photo,
                            8 real customer testimonial graphics, real Shopee listing links for the
                            original 8 SKUs, contact email, Shopee store link, courier list,
                            free-shipping threshold, payment methods list (GCash/Maya/Bank
                            Transfer/COD, via Shopee)
MISSING MATERIALS:         Legible ingredients-panel photos, Shopee listing links for the 2 set
                            SKUs, client confirmation on the "Melasma Set" naming question, DNS/
                            pixel access, see docs/intake-checklist.md
ESTIMATED BUILD TIME:      4 to 6 days from Build-Ready confirmation (spec G3), not started,
                            clock has not begun
PHASE 1 STATUS:            BUILDING (design system, brand content, catalog, and Shopee-redirect
                            purchase flow in place; blocked on ingredients photos + Shopee links
                            for the 2 set SKUs + DNS/pixel access before launch-ready)
PHASE 2 OPPORTUNITIES:     Not yet scoped, admin/back-office (spec E5), an actual own-checkout
                            payment/order backend if the client later wants to move off Shopee,
                            customer accounts, loyalty, advanced SEO
```
