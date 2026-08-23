import { requireAuth, getOrSeed, jsonResponse } from "./_shared";
import { siteConfig as defaultSiteConfig } from "../../src/lib/site-config";

const KEY = "site-config";

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const authError = requireAuth(request, env);
  if (authError) return authError;
  const siteConfig = await getOrSeed(env.AULEA_DATA, KEY, defaultSiteConfig);
  return jsonResponse(siteConfig);
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
    return jsonResponse({ error: "Expected a single site-config object" }, { status: 400 });
  }

  await env.AULEA_DATA.put(KEY, JSON.stringify(body));
  return jsonResponse({ ok: true });
};
