import { requireAuth, jsonResponse } from "./_shared";

// The admin panel calls this once at sign-in to verify the entered
// credentials against the real, server-side secrets before treating the
// admin as logged in. There's nothing else to do here, requireAuth
// already returns 401 on a bad credential and 200 on a good one.
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const authError = requireAuth(request, env);
  if (authError) return authError;
  return jsonResponse({ ok: true });
};
