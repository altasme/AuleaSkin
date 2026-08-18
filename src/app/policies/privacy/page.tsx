import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Section className="pt-14">
      <SectionHeading
        eyebrow="Policy — Draft"
        title="Privacy Policy"
        description="Draft skeleton only. Confirm data handling practices, third-party tools in use (analytics, pixel, payment processor), and Data Privacy Act (RA 10173) compliance details with the client before publishing."
      />
      <div className="max-w-2xl space-y-6 text-ink-soft leading-relaxed">
        <div>
          <h2 className="font-display text-xl text-ink">Information We Collect</h2>
          <p className="mt-2">
            [Pending — will include contact form submissions, order/checkout/COD-confirmation
            data (Aulea&apos;s own checkout is confirmed, spec §2), and analytics/pixel data per
            §33.]
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">How We Use It</h2>
          <p className="mt-2">[Pending client input.]</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Third-Party Services</h2>
          <p className="mt-2">
            [Pending — will include Google Analytics, Meta Pixel/CAPI once configured (§33), and
            the payment processor(s) selected for checkout.]
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
