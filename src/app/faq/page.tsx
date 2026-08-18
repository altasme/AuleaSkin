import type { Metadata } from "next";
import { FaqList } from "@/components/Faq";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "FAQ" };

const categories = [
  {
    name: "Orders & Payment",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "Aulea can accommodate GCash, Maya, bank transfer, and Cash on Delivery (COD) — but Phase 1 only shows the methods actually connected and operational at checkout, not everything the brand could theoretically accept. Which methods are live at launch is still being confirmed (spec §18).",
      },
      {
        question: "Do you offer Cash on Delivery?",
        answer:
          "Yes — COD nationwide is intended, subject to courier availability and coverage in your area. Because COD carries real risk for a new brand (mistaken or bogus orders, return-to-sender costs), orders may go through a short confirmation step before dispatch — a quick check, not a hurdle (spec §19–20).",
      },
      {
        question: "Can I change or cancel my order?",
        answer: "[Pending client input on order cancellation policy.]",
      },
    ],
  },
  {
    name: "Shipping",
    items: [
      {
        question: "Do you ship nationwide?",
        answer: `Yes, including provinces, via ${siteConfig.couriers.join(", ")}. Fees depend on your location, courier, and arrangement.`,
      },
      {
        question: "Is there free shipping?",
        answer: `Free shipping applies on orders ₱${siteConfig.freeShippingThreshold} and above, subject to courier arrangement — not an unconditional guarantee unless confirmed at checkout.`,
      },
      {
        question: "How long does shipping take?",
        answer: "[Delivery timelines pending client input.]",
      },
    ],
  },
  {
    name: "Returns",
    items: [
      {
        question: "Can I return a product?",
        answer:
          "Opened cosmetics are commonly non-returnable on hygiene grounds under the Consumer Act of the Philippines (RA 7394) and DTI rules. The exact policy — what qualifies, timeframes, how to request one — is still being confirmed with the client and will not be published as a generic template. See Shipping & Returns.",
      },
    ],
  },
  {
    name: "Product & Ingredients",
    items: [
      {
        question: "Are Aulea products suitable for sensitive skin?",
        answer:
          "Aulea's products are generally intended for all skin types, and the brand itself started from the founder's own experience with sensitive skin. Specific per-product suitability claims are only published once the client supplies and confirms them — see docs/compliance-notes.md.",
      },
      {
        question: "Where can I find the full ingredient list?",
        answer:
          "Ingredient lists come directly from photos of each product's actual label. They'll appear on each product page once the client supplies the label photos — nothing is invented in the meantime.",
      },
      {
        question: "Is FDA CPN information available?",
        answer: siteConfig.cpnStatus,
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <Section className="pt-14">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.name}>
            <h2 className="mb-4 font-display text-xl text-ink">{category.name}</h2>
            <FaqList items={category.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
