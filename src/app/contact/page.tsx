import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section className="pt-14">
      <SectionHeading eyebrow="Contact" title="Get in touch" />
      <div className="grid gap-12 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6 text-sm text-ink-soft">
          <div>
            <p className="font-label text-xs tracking-[0.15em] text-ink">Email</p>
            <p className="mt-1">{siteConfig.contactEmail}</p>
          </div>
          <div>
            <p className="font-label text-xs tracking-[0.15em] text-ink">Business</p>
            <p className="mt-1">
              {siteConfig.businessType}, established {siteConfig.established}
            </p>
          </div>
          <div>
            <p className="font-label text-xs tracking-[0.15em] text-ink">Shopee</p>
            <a
              href={siteConfig.social.shopee}
              className="mt-1 block underline underline-offset-4 hover:text-ink"
            >
              shopee.ph/shop/1889974610 ↗
            </a>
          </div>
          <div>
            <p className="font-label text-xs tracking-[0.15em] text-ink">Social</p>
            <p className="mt-1">
              Aulea&apos;s previous social pages are being recovered — links will be added here
              once accounts are back, rather than guessed at (spec §24).
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
