// Central, editable source of site copy and settings.
// Values sourced from the client brand kit / spec v2.0 are real; anything
// still marked "pending" is a genuine intake gap, see
// docs/intake-checklist.md. Do not treat brackets as final copy, but do
// not soften the confirmed values either.

export const siteConfig = {
  businessName: "Aulea Skin",
  wordmark: "Auléa",
  tagline: "A Better You.",
  positioningLine: "Accessible skincare, beautifully made.",
  shortDescription:
    "Everyday skincare that's accessible, reasonably priced, and easy to fit into your routine. Aulea Skin's own online home.",
  brandPromise: "Taking care of your skin doesn't have to be complicated or expensive.",
  legalName: "Aulea Skin",
  established: "December 2025",
  businessType: "Online-based business",
  contactEmail: "auleaskinessentials@gmail.com",
  contactPhone: "[contact phone, pending, if any]",
  address: "[no physical storefront, online-based business]",
  hours: "[order/support hours, pending]",
  social: {
    // Previous social pages were lost and are being recovered (spec B2).
    // Do not fabricate links; do not treat recovery as a launch dependency.
    instagram: "[recovering, not yet relinked]",
    tiktok: "[recovering, not yet relinked]",
    facebook: "[recovering, not yet relinked]",
    shopee: "https://shopee.ph/shop/1889974610",
  },
  // Confirmed: Phase 1 builds Aulea's own storefront (spec §2, §14). This
  // is not the open decision it was under the generic ALTAVENTURES
  // template. What's still pending is the payment/COD *implementation*,
  // not the strategic choice.
  checkoutModel: "own" as const,
  freeShippingThreshold: 400,
  couriers: ["J&T Express", "Lalamove", "LBC"],
  paymentMethods: ["GCash", "Maya", "Bank Transfer", "Cash on Delivery"],
  // Minimal, premium nav per spec D1: Home / About Us / Shop / Contact.
  // Trust/FAQ content folded into homepage sections + footer rather than
  // kept as separate nav items.
  nav: [
    { label: "Shop", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerPolicyLinks: [
    { label: "Shipping & Returns", href: "/policies/shipping-returns" },
    { label: "Privacy Policy", href: "/policies/privacy" },
    { label: "Terms of Service", href: "/policies/terms" },
  ],
  primaryCta: "Shop Now",
  secondaryCta: "Learn More",
} as const;
