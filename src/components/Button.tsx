import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 font-label text-base tracking-wider uppercase transition-colors";
const variants = {
  primary: "bg-primary text-cream hover:opacity-90",
  secondary: "border border-accent text-ink hover:bg-accent hover:text-ink",
  ghost: "font-sans normal-case text-ink underline underline-offset-4 hover:text-accent",
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
