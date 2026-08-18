import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

// Button roles per spec PART A6: Primary = Navy fill + Cream text.
// Secondary = Navy border + Navy text, no fill. Gold is a hover/focus
// accent only — never gold text on a light surface (≈1.8:1, forbidden by
// PART A3), so hover/focus states shift value (navy → navy-deep) or use
// gold only as a border/ring accent, never as running text color.
//
// onDark / onDarkOutline exist for the Navy Deep hero/promo bands: a
// plain className override doesn't reliably beat a variant's own classes
// under Tailwind's cascade (equal specificity, order depends on the
// generated stylesheet, not JSX order) — dedicated variants avoid that
// footgun rather than fighting it per call site.
const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 font-label text-base tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream";
const variants = {
  primary: "bg-navy text-cream hover:bg-navy-deep",
  secondary: "border border-navy text-navy bg-transparent hover:border-gold",
  ghost: "font-sans normal-case text-navy underline underline-offset-4 hover:text-navy-deep",
  onDark: "bg-cream text-navy hover:bg-white",
  onDarkOutline: "border border-cream text-cream bg-transparent hover:border-gold",
} as const;

type Variant = keyof typeof variants;

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
