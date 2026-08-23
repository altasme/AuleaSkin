// Shared helpers for Cloudflare Pages Functions under functions/api/.
// HTTP Basic Auth against the two secrets set in the Pages project
// (ADMIN_USERNAME / ADMIN_PASSWORD), checked on every request, there's no
// session store: this is a single shared admin credential, not per-user
// accounts, so a session layer would add complexity without adding real
// access control. See docs/admin-panel.md.

export function requireAuth(request: Request, env: Env): Response | null {
  const header = request.headers.get("Authorization") ?? "";
  const [scheme, encoded] = header.split(" ");
  if (scheme !== "Basic" || !encoded) return unauthorized();

  let decoded: string;
  try {
    decoded = atob(encoded);
  } catch {
    return unauthorized();
  }

  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex === -1) return unauthorized();
  const username = decoded.slice(0, separatorIndex);
  const password = decoded.slice(separatorIndex + 1);

  if (username !== env.ADMIN_USERNAME || password !== env.ADMIN_PASSWORD) {
    return unauthorized();
  }
  return null;
}

function unauthorized(): Response {
  return jsonResponse(
    { error: "Unauthorized" },
    { status: 401, headers: { "WWW-Authenticate": 'Basic realm="Aulea Admin"' } }
  );
}

// KV starts empty. The first authenticated read of a key seeds it from
// the value currently hardcoded in the app (the same defaults the site
// shipped with), so there's no manual seeding step, the catalog just
// works the first time the admin panel loads against a freshly bound
// namespace.
export async function getOrSeed<T>(kv: KVNamespace, key: string, seed: T): Promise<T> {
  const existing = await kv.get(key);
  if (existing !== null) return JSON.parse(existing) as T;
  await kv.put(key, JSON.stringify(seed));
  return seed;
}

// No-store on every response: this data changes whenever the admin
// saves something, and both browsers and Cloudflare's edge will cache a
// plain GET response unless told not to, a stale cached copy here means
// "I added a product and it didn't show up" even though the database is
// already correct. Real bug found from a live report, not a guess.
export function jsonResponse(data: unknown, init?: ResponseInit): Response {
  const headers = new Headers(init?.headers);
  headers.set("content-type", "application/json");
  headers.set("cache-control", "no-store");
  return new Response(JSON.stringify(data), { ...init, headers });
}
