import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, StoreIcon, TruckIcon } from "@/components/Icons";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Section className="pt-14 pb-10 bg-cream-deep text-center">
        <SectionHeading
          align="center"
          title="Contact Auléa"
          description="Questions about a product, your order, or your skin? Reach out and we'll get back to you."
        />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-ink mb-6">Get in touch</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-navy">
                  <MailIcon />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/70">Email</p>
                  <p className="mt-1 text-ink">{siteConfig.contactEmail}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-navy">
                  <StoreIcon />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/70">Shopee Store</p>
                  <a
                    href={siteConfig.social.shopee}
                    className="mt-1 block text-ink underline underline-offset-4 hover:text-navy"
                  >
                    shopee.ph/shop/1889974610
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-navy">
                  <TruckIcon />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/70">Shipping</p>
                  <p className="mt-1 text-ink">
                    Nationwide delivery, free shipping on orders ₱{siteConfig.freeShippingThreshold}
                    &nbsp;& up
                  </p>
                </div>
              </li>
            </ul>
            <p className="mt-8 text-sm text-ink/70">
              Aulea&apos;s previous social pages are being recovered, links will be added here
              once accounts are back, rather than guessed at (spec §24).
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
