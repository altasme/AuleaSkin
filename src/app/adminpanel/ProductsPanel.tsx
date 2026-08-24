"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { useAdminStore } from "@/lib/admin-store";
import { ProductForm } from "./ProductForm";
import { buttonDanger, buttonGhost, buttonPrimary, buttonSecondary } from "./ui";

// Advisory cap for the Free website plan (see the Account menu in
// AdminApp.tsx for the upgrade pitch). Nothing on the API/KV side enforces
// this, it's a UI limit only, an admin who somehow already has more than
// 15 products (imported, or the limit changes later) can still edit or
// delete existing ones, this only blocks adding a 16th.
const FREE_PLAN_PRODUCT_LIMIT = 15;

export function ProductsPanel() {
  const { products, addProduct, updateProduct, deleteProduct } = useAdminStore();
  const [editing, setEditing] = useState<Product | null | "new">(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const atLimit = products.length >= FREE_PLAN_PRODUCT_LIMIT;

  if (editing) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setEditing(null)}
          className="mb-4 text-sm font-medium text-navy hover:text-navy-deep"
        >
          &larr; Back to products
        </button>
        <h2 className="mb-6 text-xl font-semibold text-ink">
          {editing === "new" ? "Add product" : `Edit: ${editing.name}`}
        </h2>
        <ProductForm
          initialProduct={editing === "new" ? null : editing}
          existingSlugs={products.map((p) => p.slug)}
          onSave={(product) => {
            if (editing === "new") addProduct(product);
            else updateProduct(editing.slug, product);
            setEditing(null);
          }}
          onCancel={() => setEditing(null)}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-ink">Products</h2>
          <p className="text-sm text-gray-500">
            {products.length} of {FREE_PLAN_PRODUCT_LIMIT} products on the Free plan
          </p>
        </div>
        <button
          type="button"
          onClick={() => setEditing("new")}
          disabled={atLimit}
          className={buttonPrimary}
        >
          + Add product
        </button>
      </div>

      {atLimit && (
        <div className="mb-6 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <p className="font-medium">You&apos;ve reached the {FREE_PLAN_PRODUCT_LIMIT}-product limit on the Free plan.</p>
          <p className="mt-1 text-amber-800">
            Delete a product to add another, or upgrade for unlimited products and the rest of the
            catalog tools. See the Account menu in the header for what upgrading unlocks.
          </p>
        </div>
      )}

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Shopee link</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-gray-500">
                  No products yet. Add your first one to get it showing on the Shop page.
                </td>
              </tr>
            )}
            {products.map((product) => (
              <tr key={product.slug} className="transition-colors hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded bg-gray-100">
                    {product.images[0] && (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                        unoptimized={product.images[0].startsWith("http")}
                      />
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-ink">{product.name}</td>
                <td className="px-4 py-3 text-gray-600">{product.category}</td>
                <td className="px-4 py-3 text-gray-600">
                  {product.price != null ? `₱${product.price.toLocaleString()}` : "—"}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {product.shopeeUrl ? (
                    <span className="text-green-700">Linked</span>
                  ) : (
                    <span className="text-amber-600">Blank</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => setEditing(product)}
                    className={`${buttonGhost} font-medium text-navy hover:text-navy-deep`}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmDelete(product.slug)}
                    className={`${buttonGhost} font-medium text-red-600 hover:text-red-800`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <p className="text-sm text-ink">
              Delete <strong>{products.find((p) => p.slug === confirmDelete)?.name}</strong>? This can&apos;t
              be undone in this browser.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button type="button" onClick={() => setConfirmDelete(null)} className={buttonSecondary}>
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteProduct(confirmDelete);
                  setConfirmDelete(null);
                }}
                className={buttonDanger}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
