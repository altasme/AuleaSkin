"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";
import { CloseIcon, SearchIcon } from "./Icons";

// Real client-side search over the confirmed catalog (name + category),
// not a dead search icon. No backend needed since the full catalog is
// already bundled into the static export.
export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 pt-24 sm:pt-32" onClick={onClose}>
      <div
        className="w-full max-w-xl rounded-md bg-cream shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-ink/12 px-5 py-4">
          <SearchIcon className="h-5 w-5 shrink-0 text-ink/50" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full bg-transparent text-ink outline-none placeholder:text-ink/40"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="text-ink/50 hover:text-ink">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {query.trim() && (
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length === 0 ? (
              <p className="px-3 py-6 text-center text-sm text-ink/70">
                No products match &ldquo;{query}&rdquo;.
              </p>
            ) : (
              results.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 rounded-sm px-3 py-3 hover:bg-mist"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm bg-white">
                    <Image src={product.images[0]} alt={product.name} fill sizes="56px" className="object-cover p-1.5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{product.name}</p>
                    <p className="text-xs text-ink/70">{product.category}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
