// The admin credentials themselves no longer live here, or anywhere in
// the client bundle, they're checked server-side by functions/api/login.ts
// against Cloudflare Pages secrets (see docs/admin-panel.md). This file
// just holds the sessionStorage key the panel uses to remember a
// successful login for the rest of the browser tab's session, and the
// small helper every API call uses to attach it as an Authorization
// header.

export const ADMIN_SESSION_KEY = "aulea-admin-credentials";

// Stored as "username:password", base64-encoded for the Authorization
// header. This sits in sessionStorage the same way the credentials the
// admin just typed into the login form do, it's not a new exposure, the
// server still verifies it on every request rather than trusting it.
export function getStoredCredentials(): string | null {
  try {
    return window.sessionStorage.getItem(ADMIN_SESSION_KEY);
  } catch {
    return null;
  }
}

export function authHeader(): Record<string, string> {
  const creds = getStoredCredentials();
  return creds ? { Authorization: `Basic ${creds}` } : {};
}
