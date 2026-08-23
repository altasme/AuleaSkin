import { requireAuth, getOrSeed, jsonResponse } from "./_shared";
import { products as defaultProducts } from "../../src/data/products";

const KEY = "products";

// Public on purpose: this is catalog data the storefront needs to show
// anonymous visitors, the same information already visible on the site.
// Only writes (below) are admin-gated.
export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const products = await getOrSeed(env.AULEA_DATA, KEY, defaultProducts);
  return jsonResponse(products);
};

export const onRequestPut: PagesFunction<Env> = async ({ request, env }) => {
  const authError = requireAuth(request, env);
  if (authError) return authError;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, { status: 400 });
  }
  if (!Array.isArray(body)) {
    return jsonResponse({ error: "Expected the full products array" }, { status: 400 });
  }

  await env.AULEA_DATA.put(KEY, JSON.stringify(body));
  return jsonResponse({ ok: true });
};
