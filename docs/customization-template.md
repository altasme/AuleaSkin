# Customization Template — Aulea Skin

Filled in against spec §34/intake as of this build. Values are real where
the brand kit/spec supplied them; brackets mark genuine gaps.

```
CLIENT:                    Aulea Skin
INDUSTRY:                  Skincare / Cosmetics (Beauty DTC)
BUSINESS MODEL:            Online-based, own e-commerce storefront (established December 2025)
PRIMARY AUDIENCE:          Customers seeking accessible, affordable, simple everyday skincare
PRIMARY BUSINESS OBJECTIVE:Establish Aulea's own online storefront, independent of Shopee/social
PRIMARY CONVERSION:        Purchase (Add to Cart → Checkout → Order)
SECONDARY CONVERSION:      Email signup (not yet wired — no destination named, §33)
TRAFFIC SOURCES:           Paid social (Meta), plus existing Shopee audience
CORE PRODUCTS / SERVICES:  Auléa Sunscreen (SPF 30), Auléa Organic Serum Vitamin C (15 mL),
                            Auléa Niacinamide Facial Wash (60 mL) — additional SKUs may exist,
                            not yet confirmed
WEBSITE TYPE:              E-COMMERCE
CHECKOUT MODEL:            OWN CHECKOUT — confirmed (spec §2, §14), not an open decision.
                            Payment/COD implementation still pending (§18–20).
PHASE 1 PAGES:             Home, Shop, Product Categories, Product Pages, About Aulea, FAQ,
                            Contact, Cart, Checkout (UI built, disabled pending payment access),
                            Trust & Reviews, Policies
PHASE 1 FUNCTIONALITY:     Working cart (client-side, localStorage); checkout UI present but
                            disabled until payment methods + COD workflow are wired
MEASUREMENT (§33):         GA4 + Meta Pixel/CAPI scaffolded (src/lib/analytics.tsx), event map
                            wired (ViewContent, AddToCart, Lead), IDs not yet supplied — see
                            .env.example. Email capture destination not yet named.
COMPLIANCE (§27):          CPN numbers: NOT SUPPLIED. Substantiation: NOT SUPPLIED. "Organic"
                            and "SPF 30" flagged as compliance holds on their respective product
                            pages — see docs/compliance-notes.md.
BRAND DIRECTION:           Confirmed from brand kit — indigo #1F1A76 / gold #E2AB2D / cream
                            #F8EFE0; Tan Pearl + Sego (display, placeholder: Playfair Display),
                            Bebas Neue (labels/buttons, final), body font unconfirmed (placeholder:
                            Geist Sans). Vector logo files still needed.
CLIENT MATERIALS RECEIVED: Brand kit (logo variants, palette, typefaces, tagline, product hero
                            shots), founder story, 3 confirmed SKU names + sizes, contact email,
                            Shopee store link, courier list, free-shipping threshold
MISSING MATERIALS:         Prices, full product descriptions/benefits/ingredients, label photos,
                            high-res product photography, CPN + substantiation, vector logo,
                            body font confirmation, payment/DNS/pixel access — see
                            docs/intake-checklist.md
ESTIMATED BUILD TIME:      4 to 6 days from Build-Ready confirmation (not started — clock has
                            not begun)
PHASE 1 STATUS:            BUILDING (scaffold + brand system + content structure in place;
                            blocked on intake for prices/compliance/payment before launch-ready)
PHASE 2 OPPORTUNITIES:     TO BE IDENTIFIED AFTER PHASE 1 PRESENTATION (spec §36) — e.g.
                            abandoned-cart recovery, customer accounts, bundles/routines,
                            loyalty, advanced SEO
```
