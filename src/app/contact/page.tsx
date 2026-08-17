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
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink">Email</p>
            <p className="mt-1">{siteConfig.contactEmail}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink">Phone</p>
            <p className="mt-1">{siteConfig.contactPhone}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink">Address</p>
            <p className="mt-1">{siteConfig.address}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink">Hours</p>
            <p className="mt-1">{siteConfig.hours}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink">
              Social & Marketplace
            </p>
            <p className="mt-1">
              {siteConfig.social.instagram} · {siteConfig.social.tiktok} ·{" "}
              {siteConfig.social.facebook}
            </p>
            <p className="mt-1">
              {siteConfig.social.shopee} · {siteConfig.social.tiktokShop} ·{" "}
              {siteConfig.social.lazada}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
