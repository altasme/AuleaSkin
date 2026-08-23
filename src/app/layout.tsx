import type { Metadata } from "next";
import { Fraunces, Bebas_Neue, Mulish } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

// Body / UI / prices / forms (spec PART A4): the brand faces are display-
// only and must never carry paragraph copy. Mulish is the named fallback.
const bodyFont = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
});

// Display / headings: Tan Pearl / Sego are the brand faces but aren't
// available as web fonts here and web-embedding licensing is still
// unconfirmed (spec A4, §34). Fraunces is the spec's named free fallback,
// replace with the real files once licensed and supplied.
const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

// Caps / eyebrows / small labels: Bebas Neue is the brand face and is
// available as a free web font, so this one is final (spec A4).
const labelFont = Bebas_Neue({
  variable: "--font-label",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName}: ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.shortDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${labelFont.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
