import Link from "next/link";
import { categories } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";
import { MailIcon, StoreIcon, TruckIcon, WalletIcon } from "./Icons";
import { SocialLinks } from "./SocialLinks";

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
            <SocialLinks />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-3">Shop</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-cream/80 hover:text-cream">
                  All Products
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/products?category=${encodeURIComponent(category)}`}
                    className="text-cream/80 hover:text-cream"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-3">About</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-cream/80 hover:text-cream">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-cream">
                  Contact
                </Link>
              </li>
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
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-cream/50 mb-3">
              Get In Touch
            </p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream/50" />
                <span>{siteConfig.contactEmail}</span>
              </li>
              <li className="flex items-start gap-2">
                <StoreIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream/50" />
                <span>{siteConfig.businessType}</span>
              </li>
              <li className="flex items-start gap-2">
                <TruckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream/50" />
                <span>
                  Nationwide delivery, free shipping over ₱{siteConfig.freeShippingThreshold}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <WalletIcon className="mt-0.5 h-4 w-4 shrink-0 text-cream/50" />
                <span>Pay via Shopee: {siteConfig.paymentMethods.join(", ")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/20 pt-6 text-xs text-cream/60">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="mt-2">
            Website and hosting powered by{" "}
            <a
              href="https://altasme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-cream"
            >
              Altaventures
            </a>{" "}
            |{" "}
            <a
              href="https://altasme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-cream"
            >
              Get your business website for free!
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
