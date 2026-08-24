"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/admin-store";
import type { SiteContent } from "@/data/site-content";
import { Field, inputClass } from "./ui";

type Section = "business" | "homepage" | "about" | "contact";

const sections: { id: Section; label: string; description: string }[] = [
  {
    id: "business",
    label: "Business Info",
    description:
      "Real business identity and settings: name, tagline, contact details, social links, shipping and payment info. Used across the whole site (header, footer, contact page).",
  },
  {
    id: "homepage",
    label: "Homepage",
    description:
      "Every text block on the homepage, in the order it appears on the page: hero, category tiles, founder story teaser, the ritual section, the promo band, testimonials heading, the \"Why Aulea\" cards, and the final call to action.",
  },
  {
    id: "about",
    label: "About Page",
    description: "The About Us page: intro, the founder story paragraphs, mission statement, and the \"Looking Ahead\" cards.",
  },
  {
    id: "contact",
    label: "Contact Page",
    description: "The Contact page's heading and intro text. Contact details themselves (email, Shopee link) come from Business Info.",
  },
];

export function SiteContentPanel() {
  const [active, setActive] = useState<Section>("business");
  const activeMeta = sections.find((s) => s.id === active)!;

  return (
    <div>
      <h2 className="text-xl font-semibold text-ink">Website Content</h2>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Everything below is grouped by where it appears on the live site. Pick a section, edit its
        fields, changes save automatically as you type.
      </p>

      <div className="mt-6 flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
              active === s.id
                ? "border-navy bg-navy text-cream"
                : "border-gray-300 text-gray-600 hover:border-navy/40"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p className="mt-4 max-w-2xl text-sm text-gray-500">{activeMeta.description}</p>

      <div className="mt-6">
        {active === "business" && <BusinessInfoForm />}
        {active === "homepage" && <HomepageForm />}
        {active === "about" && <AboutForm />}
        {active === "contact" && <ContactForm />}
      </div>
    </div>
  );
}

function BusinessInfoForm() {
  const { siteConfig, updateSiteConfig } = useAdminStore();

  return (
    <div className="max-w-3xl space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Business name">
          <input className={inputClass} value={siteConfig.businessName} onChange={(e) => updateSiteConfig({ businessName: e.target.value })} />
        </Field>
        <Field label="Wordmark" hint="How the logo/name reads in text.">
          <input className={inputClass} value={siteConfig.wordmark} onChange={(e) => updateSiteConfig({ wordmark: e.target.value })} />
        </Field>
        <Field label="Tagline">
          <input className={inputClass} value={siteConfig.tagline} onChange={(e) => updateSiteConfig({ tagline: e.target.value })} />
        </Field>
        <Field label="Positioning line" hint="Shown as the homepage brand statement.">
          <input className={inputClass} value={siteConfig.positioningLine} onChange={(e) => updateSiteConfig({ positioningLine: e.target.value })} />
        </Field>
        <Field label="Established">
          <input className={inputClass} value={siteConfig.established} onChange={(e) => updateSiteConfig({ established: e.target.value })} />
        </Field>
        <Field label="Free shipping threshold (PHP)">
          <input
            type="number"
            className={inputClass}
            value={siteConfig.freeShippingThreshold}
            onChange={(e) => updateSiteConfig({ freeShippingThreshold: Number(e.target.value) })}
          />
        </Field>
      </div>

      <Field label="Brand promise" hint="Shown on the homepage hero and About page.">
        <textarea className={inputClass} rows={2} value={siteConfig.brandPromise} onChange={(e) => updateSiteConfig({ brandPromise: e.target.value })} />
      </Field>
      <Field label="Short description" hint="Used in metadata and the footer.">
        <textarea className={inputClass} rows={2} value={siteConfig.shortDescription} onChange={(e) => updateSiteConfig({ shortDescription: e.target.value })} />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Contact email">
          <input className={inputClass} value={siteConfig.contactEmail} onChange={(e) => updateSiteConfig({ contactEmail: e.target.value })} />
        </Field>
        <Field label="Contact phone">
          <input className={inputClass} value={siteConfig.contactPhone} onChange={(e) => updateSiteConfig({ contactPhone: e.target.value })} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Shopee store link">
          <input
            className={inputClass}
            value={siteConfig.social.shopee}
            onChange={(e) => updateSiteConfig({ social: { ...siteConfig.social, shopee: e.target.value } })}
          />
        </Field>
        <Field label="Instagram">
          <input
            className={inputClass}
            value={siteConfig.social.instagram}
            onChange={(e) => updateSiteConfig({ social: { ...siteConfig.social, instagram: e.target.value } })}
          />
        </Field>
        <Field label="TikTok">
          <input
            className={inputClass}
            value={siteConfig.social.tiktok}
            onChange={(e) => updateSiteConfig({ social: { ...siteConfig.social, tiktok: e.target.value } })}
          />
        </Field>
        <Field label="Facebook">
          <input
            className={inputClass}
            value={siteConfig.social.facebook}
            onChange={(e) => updateSiteConfig({ social: { ...siteConfig.social, facebook: e.target.value } })}
          />
        </Field>
      </div>

      <Field label="Couriers" hint="Comma-separated.">
        <input
          className={inputClass}
          value={siteConfig.couriers.join(", ")}
          onChange={(e) => updateSiteConfig({ couriers: e.target.value.split(",").map((c) => c.trim()).filter(Boolean) })}
        />
      </Field>
      <Field label="Payment methods" hint="Comma-separated.">
        <input
          className={inputClass}
          value={siteConfig.paymentMethods.join(", ")}
          onChange={(e) => updateSiteConfig({ paymentMethods: e.target.value.split(",").map((c) => c.trim()).filter(Boolean) })}
        />
      </Field>
    </div>
  );
}

function HomepageForm() {
  const { siteContent, updateSiteContent } = useAdminStore();
  const hp = siteContent.homepage;

  function patch(next: Partial<SiteContent["homepage"]>) {
    updateSiteContent({ homepage: { ...hp, ...next } });
  }

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Hero</h4>
        <div className="space-y-4">
          <Field label="Heading">
            <input className={inputClass} value={hp.heroHeading} onChange={(e) => patch({ heroHeading: e.target.value })} />
          </Field>
          <Field label="Subtext">
            <textarea className={inputClass} rows={2} value={hp.heroSubtext} onChange={(e) => patch({ heroSubtext: e.target.value })} />
          </Field>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Category tiles</h4>
        <div className="space-y-3">
          {Object.entries(hp.categoryCopy).map(([category, copy]) => (
            <Field key={category} label={category}>
              <input
                className={inputClass}
                value={copy}
                onChange={(e) => patch({ categoryCopy: { ...hp.categoryCopy, [category]: e.target.value } })}
              />
            </Field>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Founder story teaser</h4>
        <div className="space-y-4">
          <Field label="Eyebrow">
            <input className={inputClass} value={hp.founderEyebrow} onChange={(e) => patch({ founderEyebrow: e.target.value })} />
          </Field>
          <Field label="Heading">
            <input className={inputClass} value={hp.founderHeading} onChange={(e) => patch({ founderHeading: e.target.value })} />
          </Field>
          <Field label="Body">
            <textarea className={inputClass} rows={3} value={hp.founderBody} onChange={(e) => patch({ founderBody: e.target.value })} />
          </Field>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">The Ritual section</h4>
        <div className="space-y-4">
          <Field label="Eyebrow">
            <input className={inputClass} value={hp.ritualEyebrow} onChange={(e) => patch({ ritualEyebrow: e.target.value })} />
          </Field>
          <Field label="Heading">
            <input className={inputClass} value={hp.ritualHeading} onChange={(e) => patch({ ritualHeading: e.target.value })} />
          </Field>
          <Field label="Body">
            <textarea className={inputClass} rows={3} value={hp.ritualBody} onChange={(e) => patch({ ritualBody: e.target.value })} />
          </Field>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Promo band</h4>
        <div className="space-y-4">
          <Field label="Eyebrow">
            <input className={inputClass} value={hp.promoEyebrow} onChange={(e) => patch({ promoEyebrow: e.target.value })} />
          </Field>
          <Field label="Body" hint="The free shipping amount itself comes from Business Info.">
            <textarea className={inputClass} rows={2} value={hp.promoBody} onChange={(e) => patch({ promoBody: e.target.value })} />
          </Field>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Testimonials</h4>
        <div className="space-y-4">
          <Field label="Heading">
            <input className={inputClass} value={hp.testimonialsHeading} onChange={(e) => patch({ testimonialsHeading: e.target.value })} />
          </Field>
          <Field label="Description">
            <input className={inputClass} value={hp.testimonialsDescription} onChange={(e) => patch({ testimonialsDescription: e.target.value })} />
          </Field>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">&quot;Why Aulea&quot; cards</h4>
        <Field label="Section heading">
          <input className={inputClass} value={hp.whyAuleaHeading} onChange={(e) => patch({ whyAuleaHeading: e.target.value })} />
        </Field>
        <div className="mt-4 space-y-4">
          {hp.whyAuleaCards.map((card, i) => (
            <div key={i} className="rounded-md border border-gray-200 p-4">
              <Field label={`Card ${i + 1} title`}>
                <input
                  className={inputClass}
                  value={card.title}
                  onChange={(e) => {
                    const cards = [...hp.whyAuleaCards];
                    cards[i] = { ...cards[i], title: e.target.value };
                    patch({ whyAuleaCards: cards });
                  }}
                />
              </Field>
              <div className="mt-3">
                <Field label={`Card ${i + 1} body`}>
                  <input
                    className={inputClass}
                    value={card.body}
                    onChange={(e) => {
                      const cards = [...hp.whyAuleaCards];
                      cards[i] = { ...cards[i], body: e.target.value };
                      patch({ whyAuleaCards: cards });
                    }}
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Final call to action</h4>
        <div className="space-y-4">
          <Field label="Heading">
            <input className={inputClass} value={hp.finalCtaHeading} onChange={(e) => patch({ finalCtaHeading: e.target.value })} />
          </Field>
          <Field label="Body">
            <input className={inputClass} value={hp.finalCtaBody} onChange={(e) => patch({ finalCtaBody: e.target.value })} />
          </Field>
        </div>
      </div>
    </div>
  );
}

function AboutForm() {
  const { siteContent, updateSiteContent } = useAdminStore();
  const about = siteContent.about;

  function patch(next: Partial<SiteContent["about"]>) {
    updateSiteContent({ about: { ...about, ...next } });
  }

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Intro</h4>
        <div className="space-y-4">
          <Field label="Heading">
            <input className={inputClass} value={about.introHeading} onChange={(e) => patch({ introHeading: e.target.value })} />
          </Field>
          <Field label="Description">
            <textarea className={inputClass} rows={2} value={about.introDescription} onChange={(e) => patch({ introDescription: e.target.value })} />
          </Field>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Founder story</h4>
        <div className="space-y-3">
          {about.storyParagraphs.map((para, i) => (
            <Field key={i} label={`Paragraph ${i + 1}`}>
              <textarea
                className={inputClass}
                rows={3}
                value={para}
                onChange={(e) => {
                  const paragraphs = [...about.storyParagraphs];
                  paragraphs[i] = e.target.value;
                  patch({ storyParagraphs: paragraphs });
                }}
              />
            </Field>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">Mission</h4>
        <div className="space-y-4">
          <Field label="Heading">
            <input className={inputClass} value={about.missionHeading} onChange={(e) => patch({ missionHeading: e.target.value })} />
          </Field>
          <Field label="Description">
            <textarea className={inputClass} rows={2} value={about.missionDescription} onChange={(e) => patch({ missionDescription: e.target.value })} />
          </Field>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">&quot;Looking Ahead&quot; cards</h4>
        <Field label="Section heading">
          <input className={inputClass} value={about.lookingAheadHeading} onChange={(e) => patch({ lookingAheadHeading: e.target.value })} />
        </Field>
        <div className="mt-4 space-y-4">
          {about.lookingAheadCards.map((card, i) => (
            <div key={i} className="rounded-md border border-gray-200 p-4">
              <Field label={`Card ${i + 1} title`}>
                <input
                  className={inputClass}
                  value={card.title}
                  onChange={(e) => {
                    const cards = [...about.lookingAheadCards];
                    cards[i] = { ...cards[i], title: e.target.value };
                    patch({ lookingAheadCards: cards });
                  }}
                />
              </Field>
              <div className="mt-3">
                <Field label={`Card ${i + 1} body`}>
                  <input
                    className={inputClass}
                    value={card.body}
                    onChange={(e) => {
                      const cards = [...about.lookingAheadCards];
                      cards[i] = { ...cards[i], body: e.target.value };
                      patch({ lookingAheadCards: cards });
                    }}
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const { siteContent, updateSiteContent } = useAdminStore();
  const contact = siteContent.contact;

  return (
    <div className="max-w-3xl space-y-4">
      <Field label="Heading">
        <input
          className={inputClass}
          value={contact.heading}
          onChange={(e) => updateSiteContent({ contact: { ...contact, heading: e.target.value } })}
        />
      </Field>
      <Field label="Description">
        <textarea
          className={inputClass}
          rows={2}
          value={contact.description}
          onChange={(e) => updateSiteContent({ contact: { ...contact, description: e.target.value } })}
        />
      </Field>
    </div>
  );
}
