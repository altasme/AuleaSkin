import type { Metadata } from "next";
import { FaqList } from "@/components/Faq";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = { title: "FAQ" };

const categories = [
  {
    name: "Orders & Payment",
    items: [
      {
        question: "What payment methods do you accept?",
        answer: "[Pending client input — GCash / Maya / cards / COD per §9.2.]",
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
        question: "How long does shipping take?",
        answer: "[Pending client input on shipping timelines and areas served.]",
      },
      {
        question: "Do you ship nationwide?",
        answer: "[Pending client input.]",
      },
    ],
  },
  {
    name: "Returns",
    items: [
      {
        question: "Can I return a product?",
        answer:
          "[Pending client input. Note: opened cosmetics are commonly non-returnable on hygiene grounds under RA 7394 / DTI rules — the real policy must match the client's actual product category and fulfillment terms. See §11.5.]",
      },
    ],
  },
  {
    name: "Product & Ingredients",
    items: [
      {
        question: "Is this product suitable for sensitive skin?",
        answer:
          "[No claim published without written substantiation from the client — see docs/compliance-notes.md.]",
      },
      {
        question: "Where can I find the full ingredient list?",
        answer: "[Pending client input — INCI list per product.]",
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
            <h2 className="mb-4 font-serif text-xl text-ink">{category.name}</h2>
            <FaqList items={category.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
