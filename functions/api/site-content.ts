import { requireAuth, getOrSeed, jsonResponse } from "./_shared";
import { defaultSiteContent } from "../../src/data/site-content";

const KEY = "site-content";

// Public on purpose, same reasoning as products.ts: this is homepage/
// About/Contact copy, meant to be public once the pages that read it
// exist. Only writes are admin-gated.
export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const siteContent = await getOrSeed(env.AULEA_DATA, KEY, defaultSiteContent);
  return jsonResponse(siteContent);
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
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return jsonResponse({ error: "Expected a single site-content object" }, { status: 400 });
  }

  await env.AULEA_DATA.put(KEY, JSON.stringify(body));
  return jsonResponse({ ok: true });
};
