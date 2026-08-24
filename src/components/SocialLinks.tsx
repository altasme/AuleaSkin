"use client";

import { useLiveSocialLinks } from "@/lib/use-live-social-links";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "./Icons";

function isRealUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://");
}

// Business Info's social fields are real free-text inputs in the admin
// panel (Instagram/TikTok/Facebook, alongside the Shopee URL that was
// already here), several still hold the placeholder "social pages lost,
// being recovered" copy from launch rather than a real link, see
// src/lib/site-config.ts. Only rendering values that actually look like a
// URL keeps a not-yet-relinked placeholder from showing up as a dead icon
// link on the live footer.
export function SocialLinks() {
  const social = useLiveSocialLinks();

  const iconLinks = [
    { key: "instagram", href: social.instagram, label: "Instagram", Icon: InstagramIcon },
    { key: "tiktok", href: social.tiktok, label: "TikTok", Icon: TiktokIcon },
    { key: "facebook", href: social.facebook, label: "Facebook", Icon: FacebookIcon },
  ].filter((link) => isRealUrl(link.href));

  return (
    <>
      {isRealUrl(social.shopee) && (
        <a
          href={social.shopee}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.1em] text-gold hover:text-cream"
        >
          Visit our Shopee store →
        </a>
      )}
      {iconLinks.length > 0 && (
        <div className="mt-4 flex gap-3">
          {iconLinks.map(({ key, href, label, Icon }) => (
            <a
              key={key}
              href={href}
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
