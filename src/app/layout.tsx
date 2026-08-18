import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import { AnalyticsScripts } from "@/lib/analytics";

// Body copy: the brand kit doesn't specify a body typeface (spec §13.3
// flags this as a gap to confirm with the client). Geist Sans is used as
// the "clean, readable web sans" placeholder the spec recommends pairing
// with the display faces — swap once the client confirms.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display headings: the brand kit specifies Tan Pearl + Sego, which are
// not available as web fonts here and whose web-embedding license is
// still unconfirmed (§13.3, §34). Playfair Display stands in as the
// nearest readily-licensable elegant serif — replace with the real files
// once licensed and supplied.
const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

// Labels / buttons / nav: Bebas Neue is specified directly in the brand
// kit (§13.3) and is available as a web font, so this one is final.
const labelFont = Bebas_Neue({
  variable: "--font-label",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.shortDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} ${labelFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AnalyticsScripts />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
