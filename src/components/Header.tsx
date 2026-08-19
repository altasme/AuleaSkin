"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { useCart } from "@/lib/cart-context";
import { Logo } from "./Logo";
import { BagIcon, SearchIcon } from "./Icons";
import { SearchOverlay } from "./SearchOverlay";

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <div className="bg-navy-deep px-4 py-2 text-center text-xs font-medium tracking-[0.08em] text-cream">
        FREE SHIPPING ON ORDERS ₱{siteConfig.freeShippingThreshold} & UP &middot; NATIONWIDE
        DELIVERY
      </div>
      <header className="sticky top-0 z-40 border-b border-ink/12 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <Link href="/" aria-label={siteConfig.businessName}>
            <Logo />
          </Link>

          <nav className="hidden gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="text-ink/70 transition-colors hover:text-ink"
            >
              <SearchIcon />
            </button>
            <Link
              href="/cart"
              aria-label={`Cart (${itemCount})`}
              className="relative flex items-center text-ink/70 transition-colors hover:text-ink"
            >
              <BagIcon />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-navy px-1 text-[0.6rem] font-medium text-cream">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden text-ink/70"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-ink/12 px-6 py-4 md:hidden">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm text-ink/70 hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
