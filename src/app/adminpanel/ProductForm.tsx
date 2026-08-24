"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { useAdminStore } from "@/lib/admin-store";
import { ImageSlot } from "./ImageSlot";
import { Field, buttonPrimary, buttonSecondary, inputClass, selectClass } from "./ui";

type Props = {
  initialProduct: Product | null;
  existingSlugs: string[];
  onSave: (product: Product) => void;
  onCancel: () => void;
};

// The categories already live on the storefront (see src/data/products.ts).
// Kept as the dropdown's base set, not the client's shorter verbal list
// from the request that added this field, because the Shop page derives
// its filter chips from whatever string each product's category actually
// is: a product saved as "Soap" next to nine saved as "Soaps" would split
// into two near-identical filter chips instead of one. "Add custom
// category" below covers anything genuinely new.
const BASE_CATEGORIES = ["Cleansers", "Fragrance", "Lotions", "Serums", "Sets", "Soaps", "Sun Care"];
const CUSTOM_OPTION = "__custom__";

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

function CategoryField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const { products } = useAdminStore();
  const options = useMemo(() => {
    const set = new Set(BASE_CATEGORIES);
    for (const p of products) if (p.category) set.add(p.category);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [products]);
  const [customMode, setCustomMode] = useState(() => value !== "" && !BASE_CATEGORIES.includes(value));

  if (customMode) {
    return (
      <Field label="Category" hint="This becomes a new filter category on the Shop page.">
        <div className="flex gap-2">
          <input
            className={`${inputClass} flex-1`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="New category name"
            autoFocus
            required
          />
          <button
            type="button"
            onClick={() => {
              setCustomMode(false);
              onChange("");
            }}
            className={buttonSecondary}
          >
            Choose existing
          </button>
        </div>
      </Field>
    );
  }

  return (
    <Field label="Category">
      <select
        className={selectClass}
        value={options.includes(value) ? value : ""}
        onChange={(e) => {
          if (e.target.value === CUSTOM_OPTION) {
            setCustomMode(true);
            onChange("");
          } else {
            onChange(e.target.value);
          }
        }}
        required
      >
        <option value="" disabled>
          Select a category
        </option>
        {options.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
        <option value={CUSTOM_OPTION}>+ Add custom category…</option>
      </select>
    </Field>
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
    const cleanedVariants = (product.variants ?? []).map((v) => v.trim()).filter(Boolean);

    onSave({
      ...product,
      benefits: cleanedBenefits,
      images: cleanedImages,
      variants: cleanedVariants.length > 0 ? cleanedVariants : undefined,
    });
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
          <CategoryField value={product.category} onChange={(v) => update("category", v)} />
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
          <Field
            label="Variants"
            hint="Comma-separated names of the distinct options a customer picks between when buying (e.g. scent, shade, or size names). Leave blank if this product doesn't have that kind of choice, anything entered here shows live on the product page as an 'Available options' list."
          >
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
                className="shrink-0 rounded-md border border-gray-300 px-3 text-sm text-gray-500 transition-colors hover:border-red-400 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                aria-label="Remove benefit"
              >
                &times;
              </button>
            </div>
          ))}
          <button type="button" onClick={addBenefit} className={buttonSecondary}>
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
        <button type="submit" className={buttonPrimary}>
          {isEditing ? "Save changes" : "Add product"}
        </button>
        <button type="button" onClick={onCancel} className={buttonSecondary}>
          Cancel
        </button>
      </div>
    </form>
  );
}
