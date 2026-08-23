import type { Metadata } from "next";
import { AdminApp } from "./AdminApp";

// Kept out of search engines, this is an internal tool, not a public page.
export const metadata: Metadata = {
  title: "Admin Panel",
  robots: { index: false, follow: false },
};

export default function AdminPanelPage() {
  return <AdminApp />;
}
