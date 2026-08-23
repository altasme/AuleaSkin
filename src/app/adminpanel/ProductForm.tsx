"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { ImageSlot } from "./ImageSlot";

type Props = {
  initialProduct: Product | null;
  existingSlugs: string[];
  onSave: (product: Product) => void;
  onCancel: () => void;
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function emptyProduct(): Product {
  return {
    slug: "",
    name: "",
    category: "",
    size: "",
    shortDescription: "",
    description: "",
    usage: "",
    ingredientsNote: "[Full ingredient list pending.]",
    suitableFor: "",
    benefits: [""],
    images: ["", "", ""],
    shopeeUrl: "",
    price: null,
  };
}

const inputClass =
  "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy";
const labelClass = "block text-xs font-medium uppercase tracking-wide text-gray-600";

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

export function ProductForm({ initialProduct, existingSlugs, onSave, onCancel }: Props) {
  const isEditing = Boolean(initialProduct);
  const [product, setProduct] = useState<Product>(initialProduct ?? emptyProduct());
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof Product>(key: K, value: Product[K]) {
    setProduct((prev) => ({ ...prev, [key]: value }));
  }

  function handleNameChange(name: string) {
    setProduct((prev) => ({
      ...prev,
      name,
      slug: slugTouched ? prev.slug : slugify(name),
    }));
  }

  function updateBenefit(index: number, value: string) {
    setProduct((prev) => {
      const benefits = [...prev.benefits];
      benefits[index] = value;
      return { ...prev, benefits };
    });
  }

  function addBenefit() {
    setProduct((prev) => ({ ...prev, benefits: [...prev.benefits, ""] }));
  }

  function removeBenefit(index: number) {
    setProduct((prev) => ({ ...prev, benefits: prev.benefits.filter((_, i) => i !== index) }));
  }

  function updateImage(index: number, url: string) {
    setProduct((prev) => {
      const images = [...prev.images];
      images[index] = url;
      return { ...prev, images };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!product.name.trim()) return setError("Product name is required.");
    if (!product.slug.trim()) return setError("Slug is required (used in the product's URL).");
    const slugConflict = existingSlugs.some(
      (s) => s === product.slug && (!isEditing || s !== initialProduct?.slug)
    );
    if (slugConflict) return setError(`Slug "${product.slug}" is already used by another product.`);
    if (!product.category.trim()) return setError("Category is required.");

    const cleanedBenefits = product.benefits.map((b) => b.trim()).filter(Boolean);
    const cleanedImages = product.images.map((img) => img.trim());

    onSave({ ...product, benefits: cleanedBenefits, images: cleanedImages });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">Basics</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Product name">
            <input
              className={inputClass}
              value={product.name}
              onChange={(e) => handleNameChange(e.target.value)}
              required
            />
          </Field>
          <Field label="URL slug" hint="Used in the product page URL, e.g. /products/your-slug.">
            <input
              className={inputClass}
              value={product.slug}
              onChange={(e) => {
                setSlugTouched(true);
                update("slug", slugify(e.target.value));
              }}
              required
            />
          </Field>
          <Field label="Category">
            <input
              className={inputClass}
              value={product.category}
              onChange={(e) => update("category", e.target.value)}
              placeholder="e.g. Serums, Sets, Soaps"
              required
            />
          </Field>
          <Field label="Size">
            <input
              className={inputClass}
              value={product.size}
              onChange={(e) => update("size", e.target.value)}
              placeholder="e.g. 30 mL"
            />
          </Field>
          <Field
            label="Price (PHP)"
            hint="Not shown on the site yet, Shopee is still the pricing source of truth. Ready for when that changes."
          >
            <input
              type="number"
              min={0}
              step="0.01"
              className={inputClass}
              value={product.price ?? ""}
              onChange={(e) => update("price", e.target.value === "" ? null : Number(e.target.value))}
            />
          </Field>
          <Field label="Buy on Shopee URL" hint="Leave blank if no listing exists yet.">
            <input
              className={inputClass}
              value={product.shopeeUrl}
              onChange={(e) => update("shopeeUrl", e.target.value)}
              placeholder="https://shopee.ph/..."
            />
          </Field>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">Product page copy</h3>
        <div className="space-y-4">
          <Field label="Short description" hint="Shown on product cards and the shop grid.">
            <input
              className={inputClass}
              value={product.shortDescription}
              onChange={(e) => update("shortDescription", e.target.value)}
            />
          </Field>
          <Field label="Full description" hint="Shown on the product detail page.">
            <textarea
              className={inputClass}
              rows={4}
              value={product.description}
              onChange={(e) => update("description", e.target.value)}
            />
          </Field>
          <Field label="How to use">
            <textarea
              className={inputClass}
              rows={3}
              value={product.usage}
              onChange={(e) => update("usage", e.target.value)}
            />
          </Field>
          <Field label="Suitable for">
            <input
              className={inputClass}
              value={product.suitableFor}
              onChange={(e) => update("suitableFor", e.target.value)}
            />
          </Field>
          <Field
            label="Ingredients note"
            hint="Only publish a real ingredient list once a legible label photo exists, don't invent one."
          >
            <textarea
              className={inputClass}
              rows={2}
              value={product.ingredientsNote}
              onChange={(e) => update("ingredientsNote", e.target.value)}
            />
          </Field>
          <Field label="Variants" hint="Comma-separated, e.g. scent or shade names. Leave blank if none.">
            <input
              className={inputClass}
              value={(product.variants ?? []).join(", ")}
              onChange={(e) =>
                update(
                  "variants",
                  e.target.value
                    .split(",")
                    .map((v) => v.trim())
                    .filter(Boolean)
                )
              }
            />
          </Field>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">Benefits</h3>
        <div className="space-y-2">
          {product.benefits.map((benefit, i) => (
            <div key={i} className="flex gap-2">
              <input
                className={inputClass}
                value={benefit}
                onChange={(e) => updateBenefit(i, e.target.value)}
                placeholder={`Benefit ${i + 1}`}
              />
              <button
                type="button"
                onClick={() => removeBenefit(i)}
                className="shrink-0 rounded-md border border-gray-300 px-3 text-sm text-gray-500 hover:border-red-400 hover:text-red-600"
                aria-label="Remove benefit"
              >
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addBenefit}
            className="text-sm font-medium text-navy hover:text-navy-deep"
          >
            + Add benefit
          </button>
        </div>
      </div>

      <div>
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-navy">Product images</h3>
        <p className="mb-3 text-xs text-gray-500">
          Two square (1:1) images plus one portrait (4:5) image, uploaded to Cloudinary.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <ImageSlot label="Image 1" aspectRatio="1:1" value={product.images[0] ?? ""} onChange={(url) => updateImage(0, url)} />
          <ImageSlot label="Image 2" aspectRatio="1:1" value={product.images[1] ?? ""} onChange={(url) => updateImage(1, url)} />
          <ImageSlot label="Image 3" aspectRatio="4:5" value={product.images[2] ?? ""} onChange={(url) => updateImage(2, url)} />
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3 border-t border-gray-200 pt-6">
        <button
          type="submit"
          className="rounded-md bg-navy px-5 py-2 text-sm font-medium text-cream hover:bg-navy-deep"
        >
          {isEditing ? "Save changes" : "Add product"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
