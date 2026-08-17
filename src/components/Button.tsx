import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors";
const variants = {
  primary: "bg-sage text-cream hover:bg-sage-dark",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-cream",
  ghost: "text-ink underline underline-offset-4 hover:text-sage",
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
