import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnalyticsScripts } from "@/lib/analytics";

// Public-site chrome (announcement bar, nav, footer) and analytics, scoped
// to this route group so /adminpanel (a sibling top-level route outside
// this group) doesn't inherit them, an admin tool shouldn't show the
// customer nav or fire customer-facing GA/Meta pixel events.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <AnalyticsScripts />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
