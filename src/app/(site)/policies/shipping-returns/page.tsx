import type { Metadata } from "next";
import { ShippingReturnsContent } from "./ShippingReturnsContent";

export const metadata: Metadata = { title: "Shipping & Returns" };

export default function ShippingReturnsPage() {
  return <ShippingReturnsContent />;
}
