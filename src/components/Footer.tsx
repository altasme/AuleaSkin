import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink/12 bg-navy-deep text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo onDark height={28} />
            <p className="mt-4 text-sm text-cream/70 leading-relaxed">
              {siteConfig.shortDescription}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-3">Shop</p>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-3">Policies</p>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerPolicyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-3">Contact</p>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>{siteConfig.contactEmail}</li>
              <li>{siteConfig.businessType}</li>
              <li>
                <a href={siteConfig.social.shopee} className="hover:text-cream">
                  Shop on Shopee ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/20 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>{siteConfig.cpnStatus}</p>
        </div>
      </div>
    </footer>
  );
}
