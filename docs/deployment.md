# Deployment — Cloudflare Pages

The site is a static export (`next.config.ts` sets `output: "export"`) —
no server, no API routes, no SSR. Everything currently on the site (pages,
cart, contact form) works client-side, so Cloudflare Pages can serve the
build output directly with no adapter or Workers runtime.

> If Phase 2 adds something that needs a server — real checkout, an API
> route, ISR — this stops working as a plain static export. At that point,
> switch to `@cloudflare/next-on-pages` (Workers-based) or another Node
> host, and drop `output: "export"` from `next.config.ts`.

## One-time setup (do this in the Cloudflare dashboard — needs your login)

I don't have access to your Cloudflare account from this session, so this
part is manual:

1. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.**
2. Authorize Cloudflare's GitHub App and select the `altasme/AuleaSkin`
   repository.
3. Build settings:
   | Setting | Value |
   |---|---|
   | Framework preset | `None` (do **not** pick the "Next.js" preset — that assumes SSR via Workers, which this build doesn't use) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `/` |
4. Environment variable: add `NODE_VERSION` = `20` (Cloudflare's default
   build image can be older than what this repo's dependencies expect).
5. Production branch: point it at whichever branch should go live —
   typically `main` once this branch is merged. Every other branch/PR gets
   its own preview URL automatically.
6. Save and deploy. First build takes a few minutes; Cloudflare gives you
   a `*.pages.dev` URL immediately.

Once connected, every push to the production branch auto-deploys — no
further action needed here.

## Custom domain

Not set up yet. When ready: **Pages project → Custom domains → Set up a
domain**, and Cloudflare walks you through the DNS records. Per spec §30,
write down exactly what changed (record type, old/new value, registrar) in
a handover note — that's a recurring source of post-launch pain otherwise.

## Local verification

To reproduce what Cloudflare will build:

```bash
npm run build      # outputs static site to ./out
npx serve out       # serve it locally to sanity-check
```

## Env vars this site doesn't need for a static deploy

`.env.example` lists GA4 / Meta Pixel / CAPI variables (§8 measurement).
Those are `NEXT_PUBLIC_*` and get baked into the static output at build
time — set them as Cloudflare Pages **build-time** environment variables
(same dashboard project → Settings → Environment variables) once real IDs
are available, then trigger a rebuild. `META_CAPI_ACCESS_TOKEN` is
server-side only and has no effect in a static export — CAPI calls need a
server, which this deployment doesn't have yet.
