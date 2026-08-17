import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-sand/60">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg text-ink">{siteConfig.businessName}</p>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {siteConfig.shortDescription}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-soft mb-3">
              Shop
            </p>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-soft mb-3">
              Policies
            </p>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerPolicyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-soft mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>{siteConfig.contactEmail}</li>
              <li>{siteConfig.contactPhone}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>{siteConfig.cpnStatus}</p>
        </div>
      </div>
    </footer>
  );
}
