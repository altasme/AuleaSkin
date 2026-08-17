# ALTAVENTURES — Phase 1 Website Build Skill / Specification

**Version:** 1.1
**Purpose:** Standardize the planning, design, development, QA, presentation, and handover of Phase 1 websites for ALTAVENTURES clients.

---

## CHANGELOG — v1.0 → v1.1

This revision folds in gaps exposed by real e-commerce clients (skincare / beauty DTC in particular) and by ALTAVENTURES' own Facebook-ads acquisition model.

1. **Measurement & Tracking** is now a first-class section (§8), not a single bullet. A "conversion-focused" site with no pixel/CAPI is not conversion-focused.
2. **Regulatory & Claims Compliance (PH)** added (§11) — FDA Cosmetic Product Notification, the "notified ≠ approved" rule, claim substantiation ownership, before/after handling.
3. **Checkout vs. Marketplace routing** is now a forced strategic decision inside E-commerce (§9).
4. **Trust Without Invented Proof** added (§14) — a compliant trust playbook for new brands with few or no reviews.
5. **Client Intake & Asset Checklist** added (§19) — the instrument that opens the READY / NOT READY gate.
6. **Mobile performance target** made concrete (§16). **Handover artifacts** (creds, analytics access, DNS record) made concrete (§30).
7. **Image placeholders** inserted wherever a visual belongs. See convention below.

> **Note:** The compliance guidance in §11 is operational, not legal advice. Confirm current FDA Philippines and DTI requirements per project.

---

## IMAGE PLACEHOLDER CONVENTION

Images are referenced with standard Markdown so they drop into a repo later. Until a real asset is supplied, the reference points at a `assets/placeholders/` path and carries a bracketed note. Swap the file, keep the path.

Example:

```
![Customer journey diagram](assets/placeholders/customer-journey.png)
> 🖼️ **[IMAGE PLACEHOLDER — Customer Journey Diagram]** — not yet provided.
```

---

## 1. PURPOSE OF PHASE 1

Phase 1 is the initial complete website build.

Its purpose is to transform the client's existing brand, products, services, content, and business information into a professional, functional, conversion-focused digital presence.

Phase 1 should not feel like an unfinished prototype. It should be a complete first version of the website, suitable for presentation, testing, launch, and real-world use within the agreed scope.

The website should represent the business the client is building toward, while remaining realistic about what is required for the current stage of the business.

Phase 1 establishes the foundation upon which future improvements, integrations, campaigns, automations, and advanced functionality can be built.

---

## 2. PHASE 1 CORE PRINCIPLE

Every Phase 1 build must answer three questions.

**1. Can the customer understand the business?**
The visitor should quickly understand: who the business is, what it offers, who it serves, why it exists, and why the visitor should care.

**2. Can the customer trust the business?**
The website should provide appropriate trust signals: brand story, product/service information, testimonials or reviews, contact information, FAQs, policies, relevant credentials or certifications, and clear business information.

**3. Can the customer take action?**
The website must provide a clear path toward the client's primary conversion objective — purchase, book, inquire, call, submit an application, request a quote, schedule a consultation, sign up, visit a physical location, or contact the business.

The website must not merely display information. It must guide the visitor toward an appropriate next action.

![Customer journey: Discover → Understand → Trust → Explore → Take Action](assets/placeholders/customer-journey.png)
> 🖼️ **[IMAGE PLACEHOLDER — Customer Journey Diagram]** — not yet provided.

---

## 3. PHASE 1 OBJECTIVE

Before beginning the build, identify:

- **Primary Business Objective:** [INSERT]
- **Primary Customer:** [INSERT]
- **Primary Conversion Action:** [INSERT]
- **Secondary Conversion Actions:** [INSERT]
- **Primary Traffic Sources:** [INSERT]
- **Core Products / Services:** [INSERT]

The entire website structure should support these objectives.

---

## 4. PHASE 1 MVP DEFINITION

The Phase 1 MVP is the minimum complete system required to make the website commercially useful within the agreed scope.

The MVP is not defined by how few pages are built. It is defined by whether the essential customer journey works from discovery to conversion.

Standard journey: **Discover → Understand → Trust → Explore → Take Action**

- **E-commerce:** Discover → Browse → Product Understanding → Trust → Add to Cart → Checkout → Order
- **Service:** Discover → Understand Service → Trust → Learn More → Inquiry / Booking
- **Lead generation:** Discover → Understand Offer → Trust → CTA → Lead Submission

---

## 5. STANDARD PHASE 1 SCOPE

Scope may vary by client, but Phase 1 should generally cover the appropriate pages. Typical pages: Home, About, Products / Services, individual Product / Service pages, Contact, FAQ, Reviews / Testimonials, Policies, Cart, Checkout, and any pages required by the business model.

Do not create unnecessary pages merely to increase page count. Every page must have a purpose.

---

## 6. HOMEPAGE REQUIREMENTS

The homepage functions as the primary conversion and orientation page.

**Above the fold:** what the business is, primary value proposition, relevant visual, primary CTA.

**Supporting sections (as relevant):** featured products/services, benefits, why choose the business, social proof, process, categories, founder/company story, featured offers, FAQs, secondary CTA, contact or signup.

The homepage should have a logical narrative, not a collection of unrelated sections.

![Homepage above-the-fold wireframe](assets/placeholders/homepage-wireframe.png)
> 🖼️ **[IMAGE PLACEHOLDER — Homepage Wireframe]** — not yet provided.

---

## 7. CONVERSION-FOCUSED DESIGN PRINCIPLE

ALTAVENTURES websites are designed around conversion, not decoration. The visitor should always have a logical next step.

**Use:** clear CTAs, strong visual hierarchy, concise messaging, scannable sections, appropriate social proof, benefit-driven copy, strategic product/service presentation, repeated but non-intrusive CTAs, friction reduction, mobile-first interaction patterns.

**Avoid:** excessive text, unnecessary animations, confusing navigation, too many competing CTAs, decorative elements that interfere with usability, generic filler sections, unsupported claims, artificial urgency, dark patterns.

---

## 8. MEASUREMENT & TRACKING *(new in v1.1)*

A site that cannot be measured cannot be optimized, and cannot report a cost per result. Measurement is not a nice-to-have bolted on at the end — it is part of the definition of "conversion-focused" and is a Phase 1 completion gate.

**Every Phase 1 build ships with:**

- **Analytics** installed and firing (e.g. GA4 or equivalent).
- **Meta Pixel + Conversions API (CAPI)** where paid social is a traffic source. Browser pixel alone is not sufficient given signal loss; CAPI is expected.
- **A defined event map**, instrumented and verified:
  - E-commerce: `PageView → ViewContent → AddToCart → InitiateCheckout → Purchase`
  - Lead generation: `PageView → ViewContent → Lead → CompleteRegistration` (or the client's equivalent)
- **UTM convention** documented so ad traffic is attributable by campaign / adset / ad.
- **Deduplication** between pixel and CAPI (event IDs) so conversions are not double-counted.

**Completion rule:** Phase 1 is not complete until each mapped event has been fired end-to-end in the platform's test/debug view. "The pixel is on the site" is not the same as "the events fire correctly."

This section exists because ALTAVENTURES' primary acquisition channel is paid social. Without it, cost-per-result KPIs (cost per purchase, cost per lead, ROAS) cannot be computed on the very asset being paid to drive traffic.

---

## 9. E-COMMERCE PHASE 1 REQUIREMENTS

When the client requires e-commerce, Phase 1 establishes a complete basic purchasing journey.

### 9.1 Checkout vs. Marketplace — decide before building *(new in v1.1)*

For many Philippine DTC brands, trust, ratings, reviews, vouchers, and COD **already live on Shopee / TikTok Shop / Lazada.** Rebuilding checkout on the site can be the wrong Phase 1 call. Force this decision up front:

- **Own checkout** — the site is the store. Requires payment integration (GCash / Maya / cards / COD), order management, and a returns policy. Choose when the brand wants to own the customer relationship, margin, and data, and can operate fulfillment/CS off-marketplace.
- **Marketplace routing** — the site is a brand hub that converts cold traffic into warm buyers on the existing marketplace listing where reviews and payment already exist. Choose when social proof and rails are strong on the marketplace and off-platform ops don't exist yet.
- **Hybrid** — brand hub + own checkout for hero SKUs, marketplace for the long tail.

The answer changes the entire build. Do not default to "build a full store" without confirming it.

![Checkout vs. marketplace decision tree](assets/placeholders/checkout-vs-marketplace.png)
> 🖼️ **[IMAGE PLACEHOLDER — Checkout vs. Marketplace Decision Tree]** — not yet provided.

### 9.2 Required where applicable (own-checkout builds)

Product catalog, categories, cards, detail pages, pricing, variants, images, descriptions, benefits/specifications, ingredients or relevant product information, cart, checkout, customer information collection, payment method selection, shipping information, order confirmation, order management, basic product management.

### 9.3 CTR-focused e-commerce

Optimize for: **Traffic → Product Discovery → Product Confidence → CTA → Purchase.** The site should communicate brand, value proposition, trust, and reason to purchase before asking for the sale — not simply replicate a marketplace catalog.

---

## 10. E-COMMERCE AVERAGE ORDER VALUE

Where commercially appropriate, increase order value through bundles, sets, related products, cross-selling, "complete the routine" recommendations, quantity options, free-shipping thresholds, and best-seller positioning.

Implement only when supported by the client's actual products, pricing, and fulfillment model. **Do not invent offers or discounts.**

---

## 11. REGULATORY & CLAIMS COMPLIANCE (PHILIPPINES) *(new in v1.1)*

Mandatory for skincare, cosmetics, supplements, health, beauty, food, and any product with health-adjacent claims. This protects the client and ALTAVENTURES from regulatory and liability exposure.

### 11.1 FDA notification

Cosmetics sold in the Philippines require an **FDA Cosmetic Product Notification (CPN)**. Cosmetics are **notified, not "approved."** The phrase "FDA-approved" is a common and non-compliant misuse — do not put it on a cosmetic site. Where the client wants to signal regulatory standing, display the **CPN number** instead.

### 11.2 Claim boundaries

Cosmetics may not make **therapeutic / medical claims** (treating, curing, or preventing conditions) — that reclassifies the product as a drug. Whitening, anti-acne, anti-aging, and "clinically proven" language is sensitive and must be substantiated. Claims are governed by FDA rules and the ASEAN Cosmetic Directive.

### 11.3 Claim substantiation ownership — hard rule

**ALTAVENTURES does not verify or author medical, therapeutic, or regulatory claims.** The client must supply, in writing:

- The **CPN number(s)** for products being marketed, and
- **Written substantiation** for any efficacy claim to be published.

If substantiation is not supplied, the claim is **cut or reworded to neutral, non-therapeutic language.** No exceptions, even at client request.

### 11.4 Before / after and testimonials

Before/after imagery and result claims for cosmetics are regulated and easily cross into medical-claim territory. Use only client-supplied, real, and (where required) consented material. Do not fabricate or imply guaranteed results.

### 11.5 Returns for consumables / cosmetics

Returns and refunds follow the Consumer Act of the Philippines (RA 7394) and DTI rules. Opened cosmetics are commonly non-returnable on hygiene grounds. A **generic returns policy is wrong here** — the policy must reflect the actual product category and the client's real fulfillment terms.

![Compliance gate flow: CPN + substantiation → publish, else cut/reword](assets/placeholders/compliance-flow.png)
> 🖼️ **[IMAGE PLACEHOLDER — Compliance Gate Flow]** — not yet provided.

---

## 12. CONTENT REQUIREMENTS

Before or during Phase 1, collect and organize:

- **Brand:** logo, brand colors, fonts, guidelines, existing designs, brand story, mission/vision, positioning.
- **Products:** names, prices, variants, sizes, descriptions, benefits, ingredients/specifications, usage instructions, product images, availability, **and CPN numbers where applicable (see §11).**
- **Business:** name, contact information, address where applicable, email, social profiles, business hours, service areas.
- **Trust:** reviews, testimonials, customer photos, certifications, credentials, relevant registrations, media features.
- **Operations:** payment methods, shipping, delivery, returns, refunds, cancellations, order processing, customer support.

---

## 13. CONTENT INTEGRITY

ALTAVENTURES must not invent: product benefits, ingredients, testimonials, certifications, customer statistics, guarantees, medical claims, regulatory claims, business credentials, prices, shipping promises, or policies.

When information is unavailable: **ask the client or use neutral wording.**

Particular caution: skincare, health-related products, supplements, beauty, medical services, financial services, legal services. All claims must be based on information supplied by the client or otherwise appropriately verified — with verification ownership as defined in §11.3.

---

## 14. TRUST WITHOUT INVENTED PROOF *(new in v1.1)*

New and small brands often have few or no reviews. Inventing them is banned (§13). Build trust with compliant substitutes instead:

- **Ingredient transparency** — full INCI list, honest descriptions.
- **Founder / formulation story** — why the product exists, how it's made.
- **Regulatory display** — CPN number(s), where applicable.
- **Real UGC** — embedded actual TikTok / Instagram content from real customers or the founder.
- **Marketplace proof** — rating badges and review counts pulled from the brand's real Shopee / TikTok Shop / Lazada store.
- **Operational trust** — clear contact, real address where applicable, transparent shipping and returns.

The goal: turn "we have no reviews yet" from a blocker into a credible, honest section.

![Trust stack example layout](assets/placeholders/trust-stack.png)
> 🖼️ **[IMAGE PLACEHOLDER — Trust Stack Layout]** — not yet provided.

---

## 15. BRAND INTERPRETATION

Do not simply copy the client's existing social media designs into the website. Translate the existing brand into a stronger digital experience.

Use the client's logo, colors, typography, photography, brand personality, product packaging, and existing marketing style as inputs. Then establish a consistent design system, layout system, typography hierarchy, CTA system, component system, image treatment, and spacing system.

Goal: **recognizable brand + improved digital experience.**

---

## 16. MOBILE-FIRST REQUIREMENT

Phase 1 websites are designed with mobile users as a primary consideration. Check: navigation, CTA placement, product browsing, forms, checkout, typography, image sizing, section spacing, touch targets, sticky elements, loading performance.

The mobile version must not be a compressed desktop layout.

**Performance target *(new in v1.1)*:** on a mid-range mobile device over 4G, aim for **Largest Contentful Paint under ~2.5s.** Page speed on ad landing pages directly drives bounce and cost per result — it is a conversion lever, not a technical nicety.

---

## 17. TECHNICAL FOUNDATION

Where applicable, Phase 1 establishes: responsive design, functional navigation, working forms, working CTAs, working cart, working checkout, basic SEO structure, metadata, image optimization, **analytics/tracking per §8**, basic performance optimization per §16, appropriate security configuration, domain connection, SSL, favicon, and social sharing metadata.

Only implement integrations within the agreed Phase 1 scope.

---

## 18. CLIENT ADMIN / MANAGEMENT

Where the website system supports it, give the client appropriate management capability — for e-commerce this may include product management, price management, order management, basic customer/order information, and content updates.

The client should understand what they can manage themselves and what remains an ALTAVENTURES service.

---

## 19. CLIENT INTAKE & ASSET CHECKLIST *(new in v1.1)*

The READY / NOT READY gate (§20) needs an instrument. This is it. The build does not start until this is returned. Send it as the first project artifact.

**Brand**
- [ ] Logo files (vector preferred) — `assets/placeholders/logo.png` 🖼️ **[PLACEHOLDER — logo not yet provided]**
- [ ] Brand colors / fonts / guidelines
- [ ] Brand story, mission, positioning

**Products**
- [ ] Product list with names, prices, variants, sizes
- [ ] Descriptions, benefits, usage instructions
- [ ] Ingredients / INCI lists
- [ ] Product photography — `assets/placeholders/product-*.png` 🖼️ **[PLACEHOLDER — product images not yet provided]**
- [ ] **CPN number(s)** (skincare/cosmetics — see §11)
- [ ] **Written claim substantiation** for any efficacy claim

**Trust**
- [ ] Real reviews / testimonials (with consent where required)
- [ ] Customer / UGC photos — `assets/placeholders/ugc-*.png` 🖼️ **[PLACEHOLDER — UGC not yet provided]**
- [ ] Certifications / registrations / media features

**Business & operations**
- [ ] Business name, contact, address, hours, service areas
- [ ] Social + marketplace links (Shopee / TikTok Shop / Lazada / FB / IG)
- [ ] Payment methods, shipping, delivery, returns/refund terms

**Technical access**
- [ ] Domain registrar / DNS access (or named person who controls it)
- [ ] Ad account / pixel access for §8 setup
- [ ] Any existing hosting / store admin access

**Intake status:** READY / NOT READY — **if NOT READY, list what is outstanding.**

---

## 20. PHASE 1 BUILD PROCESS

**Step 1 — Confirm inputs.** Use §19. Status READY / NOT READY. If NOT READY, identify missing requirements and stop. If READY, proceed.

**Step 2 — Define website strategy.** Target audience, primary objective, primary CTA, customer journey, website structure, core messaging, conversion strategy, required functionality, **and the §9.1 checkout-vs-marketplace decision.**

**Step 3 — Establish design direction.** Visual hierarchy, typography, colors, photography style, UI style, CTA treatment, card styles, section patterns, mobile behavior — appropriate to industry and positioning.

**Step 4 — Build Phase 1.** Prioritize, in order: (1) customer journey, (2) core functionality, (3) content accuracy, (4) conversion, (5) brand consistency, (6) visual polish. Do not over-invest in secondary features before the core journey works.

**Step 5 — Internal QA.** Per §21.

---

## 21. INTERNAL QA

**Functionality:** navigation, buttons, links, forms, cart, checkout, order flow, payment flow, product variants, mobile menu.

**Visual:** desktop, tablet, mobile, typography, spacing, images, alignment, overflow, broken sections.

**Content:** spelling, pricing, product information, contact details, policies, CTA wording.

**Technical:** responsiveness, page loading vs. §16 target, SEO basics, metadata, SSL, domain, forms, error states.

**Measurement *(new in v1.1)*:** every §8 event fires end-to-end in the platform test view; UTMs resolve; pixel/CAPI dedup confirmed.

**Compliance *(new in v1.1)*:** no "FDA-approved" on cosmetics; every published efficacy claim maps to supplied substantiation; CPN displayed where used; returns policy matches product category.

---

## 22. PHASE 1 PRESENTATION

Present what was built, why it was built that way (customer journey and conversion logic), what the website enables, and what can be improved later (as opportunities, not Phase 1 failures).

The client should leave understanding: *"This is our first complete digital storefront, and we can now see where we can take it next."*

---

## 23. PHASE 1 CLIENT REVIEW

Focus the review on accuracy, brand alignment, missing information, functional issues, necessary corrections, and reasonable revisions within the agreed Phase 1 scope. Do not allow the review to silently expand Phase 1 into a new project.

---

## 24. PHASE 1 COMPLETION

Phase 1 is complete when: core website is built; core customer journey works; agreed functionality works; **§8 measurement fires end-to-end; §11 compliance checks pass;** content is populated; internal QA is complete; client review is complete; agreed revisions are addressed; and the website is ready for the agreed launch state.

The result is a usable MVP, not a design concept.

---

## 25. PHASE 2 BOUNDARY

Phase 2 is not fully defined before Phase 1 is presented, unless the project requires it. After presentation, identify what worked, what the client wants next, what customers need next, what business bottlenecks remain, and what functionality or marketing/automation creates meaningful value.

Phase 2 may include: advanced e-commerce, advanced automation, CRM integration, email automation, abandoned-cart recovery, loyalty, memberships, advanced analytics, product recommendations, customer accounts, subscriptions, booking systems, advanced integrations, conversion optimization, campaign landing pages, advanced SEO, and other client-specific growth infrastructure.

Phase 2 is discovered and proposed after Phase 1, not arbitrarily added to the initial build.

---

## 26. ESTIMATED BUILD TIME

Standard Phase 1 build time: **4 to 6 days**, beginning when all required materials are available (§19 returned READY) and the project is confirmed ready to build.

Subject to: scope, number of products/services, complexity, integrations, client responsiveness, third-party systems, payment/shipping requirements, and unexpected technical issues. The estimate refers to the build period, not the full calendar period from project start to final launch.

---

## 27. SCOPE CONTROL

Evaluate every request:

- **Required for the core customer journey?** Yes → Phase 1 candidate. No → evaluate for Phase 2.
- **Introduces a new system, workflow, or major functionality?** Yes → usually Phase 2 unless explicitly included.
- **Substantially changes the original strategy?** Yes → pause and evaluate scope before implementing.

---

## 28. PHASE 1 SUCCESS CRITERIA

**For the customer:** easy to understand, looks credible, consistent with the brand, products/services easy to discover, reduces uncertainty, makes the desired action obvious.

**For the business:** establishes an owned digital presence, supports the primary objective, provides a functioning conversion path **that can be measured (§8)**, creates a scalable foundation, accommodates future growth, and gives the client a platform to build upon.

---

## 29. INTERNAL PHASE 1 CHECKLIST

- [ ] Client objective defined
- [ ] Target audience defined
- [ ] Primary CTA defined
- [ ] Customer journey defined
- [ ] **§19 intake returned READY**
- [ ] Brand assets reviewed
- [ ] Product/service information reviewed
- [ ] **CPN + claim substantiation received (skincare/cosmetics)**
- [ ] Website structure defined
- [ ] **Checkout-vs-marketplace decision made (§9.1)**
- [ ] Conversion strategy defined
- [ ] Design direction established
- [ ] Phase 1 MVP built
- [ ] Core functionality implemented
- [ ] Mobile experience completed (§16 target met)
- [ ] **Measurement installed and events verified (§8)**
- [ ] Content populated
- [ ] **Compliance QA passed (§11 / §21)**
- [ ] Internal QA completed
- [ ] Client presentation completed
- [ ] Client revisions addressed
- [ ] Phase 1 completion confirmed
- [ ] Phase 2 opportunities documented separately

---

## 30. STANDARD PHASE 1 HANDOVER

**Completed:** Phase 1 website, core functionality, populated content, e-commerce functionality where applicable, client management access where applicable, basic technical setup, QA-tested customer journey.

**Handover artifacts *(new in v1.1)* — provide explicitly:**
- Admin credentials document (site, store, CMS)
- Analytics + pixel/CAPI access (or confirmation client owns them)
- **DNS change record** — exactly which records were changed, old and new values, and where the domain is registered
- Content source-of-truth file
- List of what the client manages vs. what remains an ALTAVENTURES service

> The DNS record matters: undocumented domain/registrar handovers are a recurring source of post-launch pain. Write down what changed.

**Discussed separately:** future improvements, growth opportunities, advanced functionality, marketing systems, automation, Phase 2 recommendations.

Transition: **Phase 1 = build the foundation. Phase 2 = build the growth infrastructure.**

---

## 31. CUSTOMIZATION TEMPLATE

Complete before building.

```
CLIENT:                    [CLIENT NAME]
INDUSTRY:                  [INDUSTRY]
BUSINESS MODEL:            [BUSINESS MODEL]
PRIMARY AUDIENCE:          [TARGET AUDIENCE]
PRIMARY BUSINESS OBJECTIVE:[OBJECTIVE]
PRIMARY CONVERSION:        [CTA]
SECONDARY CONVERSION:      [CTA]
TRAFFIC SOURCES:           [TRAFFIC SOURCES]
CORE PRODUCTS / SERVICES:  [PRODUCTS / SERVICES]
WEBSITE TYPE:              [BUSINESS / LEAD GEN / E-COMMERCE / BOOKING / OTHER]
CHECKOUT MODEL (§9.1):     [OWN CHECKOUT / MARKETPLACE ROUTING / HYBRID]
PHASE 1 PAGES:             [PAGE LIST]
PHASE 1 FUNCTIONALITY:     [FUNCTIONALITY]
MEASUREMENT (§8):          [ANALYTICS + PIXEL/CAPI + EVENT MAP + UTM PLAN]
COMPLIANCE (§11):          [CPN NUMBERS / CLAIM SUBSTANTIATION STATUS]
BRAND DIRECTION:           [DESIGN DIRECTION]
CLIENT MATERIALS RECEIVED: [ASSETS]
MISSING MATERIALS:         [NONE / LIST]
ESTIMATED BUILD TIME:      4 to 6 days from build-ready confirmation
PHASE 1 STATUS:            [NOT STARTED / BUILDING / INTERNAL QA / CLIENT REVIEW / COMPLETE]
PHASE 2 OPPORTUNITIES:     [TO BE IDENTIFIED AFTER PHASE 1 PRESENTATION]
```

**Brand asset slots (swap placeholders as assets arrive):**

![Client logo](assets/placeholders/logo.png)
> 🖼️ **[IMAGE PLACEHOLDER — Client Logo]** — not yet provided.

![Hero / primary product image](assets/placeholders/hero.png)
> 🖼️ **[IMAGE PLACEHOLDER — Hero Image]** — not yet provided.

![Product image grid](assets/placeholders/product-grid.png)
> 🖼️ **[IMAGE PLACEHOLDER — Product Images]** — not yet provided.

---

## 32. ALTAVENTURES PHASE 1 STANDARD

> Don't build everything the client could possibly want.
> Build everything the client needs to establish a strong, functional, conversion-focused first version.
> Then use the completed Phase 1 to discover what should come next.

Phase 1 should leave the client thinking: *"This is our business online."* — not *"This is just a prototype."*

Phase 2 should leave the client thinking: *"Now let's make this business grow."*
