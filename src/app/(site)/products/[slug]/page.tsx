import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/ProductDetailView";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? product.name : "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const sameCategory = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );
  const related = (sameCategory.length > 0 ? sameCategory : products.filter((p) => p.slug !== product.slug)).slice(0, 3);

  return <ProductDetailView product={product} related={related} />;
}
