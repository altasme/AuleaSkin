"use client";

import { useEffect, useRef, useState } from "react";
import { SparkleIcon } from "@/components/Icons";

function ChevronDownIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const UPGRADE_REASONS = [
  {
    title: "Advanced database structure",
    body: "A relational data model built for growth, past simple key-value storage: variants, inventory, and reporting that scale with the catalog.",
  },
  {
    title: "Order management system",
    body: "Track orders, statuses, and customer history in one place instead of relying on Shopee alone.",
  },
  {
    title: "Promotions & discounts",
    body: "Run sales, coupon codes, and bundle pricing straight from the storefront, no manual price edits.",
  },
  {
    title: "Unlimited products",
    body: "The Free plan caps the catalog at 15 products. Paid plans remove that ceiling.",
  },
];

// A dropdown from the header, not a full account system, there's no
// per-user login here (see docs/admin-panel.md, "Sign in": one shared
// admin credential by design). This is the upgrade pitch + plan
// housekeeping surface the client's own Free-plan flyer calls for.
export function AccountMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 py-1.5 pl-3 pr-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
      >
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">Free plan</span>
        <ChevronDownIcon className={`h-4 w-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-80 rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Why upgrade</p>
          <p className="mt-1 text-sm text-gray-600">You&apos;re on the Free website plan. Paid plans unlock:</p>
          <ul className="mt-3 space-y-3">
            {UPGRADE_REASONS.map((r) => (
              <li key={r.title} className="flex gap-2.5">
                <SparkleIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <div>
                  <p className="text-sm font-medium text-ink">{r.title}</p>
                  <p className="text-xs leading-relaxed text-gray-500">{r.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="https://altasme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-md bg-navy px-3 py-2 text-center text-sm font-medium text-cream transition-colors hover:bg-navy-deep"
          >
            Talk to Altaventures about upgrading
          </a>
          <a
            href="https://altasme.com/WSA-free"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-xs text-gray-500 underline underline-offset-4 hover:text-navy"
          >
            View Website Service Agreement
          </a>
        </div>
      )}
    </div>
  );
}
