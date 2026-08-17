import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <Section className="pt-14">
      <SectionHeading eyebrow="Cart" title="Your cart" />
      <div className="max-w-xl rounded-sm border border-line bg-sand/40 p-8">
        <p className="text-ink-soft leading-relaxed">
          Your cart is empty. Real cart, checkout, and payment flow are intentionally not built
          yet: the spec (§9.1) requires a checkout-vs-marketplace decision — own checkout,
          marketplace routing (Shopee / TikTok Shop / Lazada), or hybrid — before that
          functionality is built. See docs/customization-template.md.
        </p>
        <div className="mt-6">
          <LinkButton href="/products" variant="secondary">
            Continue Shopping
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
