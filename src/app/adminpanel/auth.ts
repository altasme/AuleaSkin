// Client-side-only login gate. This is NOT real access control: the
// static export has no server (see next.config.ts), so there is nowhere
// to check a password except inside the same JavaScript bundle a visitor
// already has, which means these values are readable by anyone who opens
// devtools. They keep this page off casually stumbled-upon links, not off
// a determined visitor. Real protection needs a real gate in front of it
// (Cloudflare Access, HTTP basic auth at the edge, or a real login backed
// by a server), see docs/admin-panel.md.
export const ADMIN_USERNAME = "Auleadmin";
export const ADMIN_PASSWORD = "aulea@2026";

export const ADMIN_SESSION_KEY = "aulea-admin-session";
