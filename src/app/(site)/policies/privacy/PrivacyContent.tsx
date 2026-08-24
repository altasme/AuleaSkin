"use client";

import { Section, SectionHeading } from "@/components/Section";
import { useLiveSiteConfig } from "@/lib/use-live-site-config";

export function PrivacyContent() {
  const siteConfig = useLiveSiteConfig();

  return (
    <Section className="pt-14">
      <SectionHeading
        eyebrow="Policy"
        title="Privacy Policy"
        description="Composed from how this site actually works today; confirm against Data Privacy Act (RA 10173) requirements before treating as final."
      />
      <div className="max-w-2xl space-y-6 text-ink/70 leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink">Information We Collect</h2>
          <p className="mt-2">
            This website itself doesn&apos;t collect personal information through a contact form
            or checkout, there isn&apos;t one. Buying a product takes you to that product&apos;s
            Shopee listing, where Shopee collects whatever it needs to process your order
            (name, address, payment details). We don&apos;t see or store that information.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Analytics</h2>
          <p className="mt-2">
            Once configured, this site may use Google Analytics and Meta Pixel to understand
            traffic and improve the browsing experience (standard device/browsing data, not
            personal order information). See .env.example for what&apos;s wired and pending.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Third-Party Services</h2>
          <p className="mt-2">
            Purchases are completed on Shopee, governed by{" "}
            <a href="https://shopee.ph" className="underline underline-offset-4 hover:text-ink">
              Shopee&apos;s own privacy policy
            </a>
            , not this one. Analytics tools (Google Analytics, Meta Pixel/CAPI) are listed above.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Contact</h2>
          <p className="mt-2">{siteConfig.contactEmail}</p>
        </div>
      </div>
    </Section>
  );
}
