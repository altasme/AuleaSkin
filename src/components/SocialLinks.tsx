"use client";

import type { SiteConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "./Icons";

// Bracket-wrapped is this codebase's existing convention for "not real
// yet" content (see contactPhone, address, hours in site-config.ts), so
// social links use the same rule rather than requiring a literal
// "http(s)://" prefix, an admin typing "instagram.com/aulea" or
// "IG.com" into a plain text field is real intent, not a value to
// silently hide, they just didn't type a protocol.
function isRealValue(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 && !trimmed.startsWith("[");
}

// Anchor hrefs need an absolute URL to actually navigate off-site; a bare
// "instagram.com/x" with no scheme is parsed as a path relative to the
// current page instead, add https:// if the admin didn't type one.
function toHref(value: string) {
  const trimmed = value.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

// Takes `social` as a prop rather than fetching its own copy: Footer.tsx
// already reads the live siteConfig once via useLiveSiteConfig() for
// everything else in the footer, this reuses that same fetch instead of
// duplicating it.
//
// Client wants the icons showing on the storefront regardless of whether
// a real link is behind them yet, not hidden until Instagram/TikTok/
// Facebook are relinked (see spec B2, those pages were lost and are
// still being recovered as of src/lib/site-config.ts). So every icon
// always renders. What differs is only whether it's a working link: a
// real value gets a real href, a still-placeholder value renders as an
// inert icon (dimmed, no navigation) rather than a link to literal
// placeholder text like "https://[recovering, not yet relinked]", which
// would just be a broken URL, worse than not being clickable yet.
export function SocialLinks({ social }: { social: SiteConfig["social"] }) {
  const iconLinks = [
    { key: "instagram", value: social.instagram, label: "Instagram", Icon: InstagramIcon },
    { key: "tiktok", value: social.tiktok, label: "TikTok", Icon: TiktokIcon },
    { key: "facebook", value: social.facebook, label: "Facebook", Icon: FacebookIcon },
  ];

  return (
    <>
      {isRealValue(social.shopee) ? (
        <a
          href={toHref(social.shopee)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.1em] text-gold hover:text-cream"
        >
          Visit our Shopee store →
        </a>
      ) : (
        <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.1em] text-gold/50">
          Visit our Shopee store →
        </span>
      )}
      <div className="mt-4 flex gap-3">
        {iconLinks.map(({ key, value, label, Icon }) =>
          isRealValue(value) ? (
            <a
              key={key}
              href={toHref(value)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cream/70 transition-colors hover:text-cream"
            >
              <Icon className="h-5 w-5" />
            </a>
          ) : (
            <span
              key={key}
              aria-label={`${label} (link coming soon)`}
              title={`${label} link coming soon`}
              className="text-cream/30"
            >
              <Icon className="h-5 w-5" />
            </span>
          )
        )}
      </div>
    </>
  );
}
