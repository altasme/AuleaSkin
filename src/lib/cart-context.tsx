"use client";

// A minimal external store (not React Context) so multiple components can
// read/write the cart without prop drilling, while staying SSR-safe via
// useSyncExternalStore — avoids the "setState during effect" hydration
// dance a Context + useEffect(localStorage) version would need.

import { useMemo, useSyncExternalStore } from "react";
import { getProductBySlug } from "@/data/products";

export type CartLine = { slug: string; quantity: number };

const STORAGE_KEY = "aulea-skin-cart";
const EMPTY: CartLine[] = [];
const listeners = new Set<() => void>();

let lines: CartLine[] = EMPTY;
let initialized = false;

function loadFromStorage(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // Storage unavailable (private browsing, quota) — cart still works
    // in-memory for the session.
  }
}

function commit(next: CartLine[]) {
  lines = next;
  persist();
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  if (!initialized) {
    initialized = true;
    lines = loadFromStorage();
  }
  return lines;
}

function getServerSnapshot() {
  return EMPTY;
}

function addItem(slug: string, quantity = 1) {
  if (!getProductBySlug(slug)) return;
  const existing = lines.find((line) => line.slug === slug);
  if (existing) {
    commit(
      lines.map((line) => (line.slug === slug ? { ...line, quantity: line.quantity + quantity } : line))
    );
  } else {
    commit([...lines, { slug, quantity }]);
  }
}

function removeItem(slug: string) {
  commit(lines.filter((line) => line.slug !== slug));
}

function setQuantity(slug: string, quantity: number) {
  if (quantity < 1) {
    removeItem(slug);
    return;
  }
  commit(lines.map((line) => (line.slug === slug ? { ...line, quantity } : line)));
}

function clear() {
  commit([]);
}

export function useCart() {
  const currentLines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const itemCount = useMemo(
    () => currentLines.reduce((sum, line) => sum + line.quantity, 0),
    [currentLines]
  );

  return { lines: currentLines, itemCount, addItem, removeItem, setQuantity, clear };
}
