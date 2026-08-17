// Central, editable source of site copy and settings.
// Anything marked "pending" is a structural placeholder, not real client
// content — see docs/intake-checklist.md. Do not treat as final copy.

export const siteConfig = {
  businessName: "Aulea Skin",
  tagline: "[Value proposition pending client input]",
  shortDescription:
    "[One or two sentences on what Aulea Skin is, who it's for, and why it exists — pending brand story from client intake.]",
  legalName: "[Registered business name — pending]",
  contactEmail: "[contact email — pending]",
  contactPhone: "[contact phone — pending]",
  address: "[business address — pending, where applicable]",
  hours: "[business hours — pending]",
  cpnStatus:
    "[FDA Cosmetic Product Notification (CPN) numbers — pending. Do not publish without them. See docs/compliance-notes.md]",
  social: {
    instagram: "[Instagram URL — pending]",
    tiktok: "[TikTok URL — pending]",
    facebook: "[Facebook URL — pending]",
    shopee: "[Shopee store URL — pending]",
    tiktokShop: "[TikTok Shop URL — pending]",
    lazada: "[Lazada store URL — pending]",
  },
  checkoutModel: "pending" as "pending" | "own" | "marketplace" | "hybrid",
  nav: [
    { label: "Shop", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Trust & Reviews", href: "/trust" },
    { label: "FAQ", href: "/faq" },
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
