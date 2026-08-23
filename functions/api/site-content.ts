import { requireAuth, getOrSeed, jsonResponse } from "./_shared";
import { defaultSiteContent } from "../../src/data/site-content";

const KEY = "site-content";

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const authError = requireAuth(request, env);
  if (authError) return authError;
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
