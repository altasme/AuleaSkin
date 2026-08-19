import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopView } from "./ShopView";

export const metadata: Metadata = { title: "Shop" };

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ShopView />
    </Suspense>
  );
}
