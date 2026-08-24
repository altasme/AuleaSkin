"use client";

import { useLiveSocialLinks } from "@/lib/use-live-social-links";
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

// Business Info's social fields are real free-text inputs in the admin
// panel (Instagram/TikTok/Facebook, alongside the Shopee URL that was
// already here), several still hold the placeholder "social pages lost,
// being recovered" copy from launch rather than a real link, see
// src/lib/site-config.ts. Only rendering real values keeps a
// not-yet-relinked placeholder from showing up as a dead icon link on
// the live footer.
export function SocialLinks() {
  const social = useLiveSocialLinks();

  const iconLinks = [
    { key: "instagram", value: social.instagram, label: "Instagram", Icon: InstagramIcon },
    { key: "tiktok", value: social.tiktok, label: "TikTok", Icon: TiktokIcon },
    { key: "facebook", value: social.facebook, label: "Facebook", Icon: FacebookIcon },
  ].filter((link) => isRealValue(link.value));

  return (
    <>
      {isRealValue(social.shopee) && (
        <a
          href={toHref(social.shopee)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.1em] text-gold hover:text-cream"
        >
          Visit our Shopee store →
        </a>
      )}
      {iconLinks.length > 0 && (
        <div className="mt-4 flex gap-3">
          {iconLinks.map(({ key, value, label, Icon }) => (
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
          ))}
        </div>
      )}
    </>
  );
}
