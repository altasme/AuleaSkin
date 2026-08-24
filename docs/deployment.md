# Deployment: Cloudflare Pages

The Next.js app itself is still a static export (`next.config.ts` sets
`output: "export"`), no server, no SSR, every public page (Home, About,
Shop, product pages, policies) is prebuilt HTML that Cloudflare Pages
serves directly with no adapter or Workers runtime.

**The admin panel is the one exception**, and it doesn't change the
above: `functions/` at the repo root is a Cloudflare Pages **Functions**
directory, a separate mechanism from the Next.js build that deploys a
handful of small KV-backed API routes (`/api/products`, `/api/site-config`,
`/api/site-content`, `/api/login`) alongside the static `out/` output, on
the same domain. See `docs/admin-panel.md` for the full architecture,
local dev, and one-time production setup (creating the KV namespace,
binding it, setting the two admin-credential secrets), that setup is
required once, separately from everything below, before `/adminpanel`
works for real.

> If a *public* page ever needs real server rendering (real checkout, ISR),
> that's a bigger step than what Functions cover, it'd mean moving the
> whole Next.js app off `output: "export"` (e.g. `@opennextjs/cloudflare`
> or another Node host). Functions don't require that, they're additive.

## One-time setup (do this in the Cloudflare dashboard, needs your login)

I don't have access to your Cloudflare account from this session, so this
part is manual:

1. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.**
2. Authorize Cloudflare's GitHub App and select the `altasme/AuleaSkin`
   repository.
3. Build settings:
   | Setting | Value |
   |---|---|
   | Framework preset | `None` (do **not** pick the "Next.js" preset, that assumes SSR via Workers, which this build doesn't use) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `/` |
4. Environment variable: add `NODE_VERSION` = `20` (Cloudflare's default
   build image can be older than what this repo's dependencies expect).
5. Production branch: point it at whichever branch should go live,
   typically `main` once this branch is merged. Every other branch/PR gets
   its own preview URL automatically.
6. Save and deploy. First build takes a few minutes; Cloudflare gives you
   a `*.pages.dev` URL immediately.
7. **For the admin panel specifically**: create and bind the `AULEA_DATA`
   KV namespace and set the `ADMIN_USERNAME` / `ADMIN_PASSWORD` secrets on
   this same Pages project, see `docs/admin-panel.md`'s "Production
   setup" section for the exact steps. `/adminpanel` deploys with the
   rest of the site either way, but won't work until this step is done.

Once connected, every push to the production branch auto-deploys, no
further action needed here.

## Custom domain

Not set up yet. When ready: **Pages project → Custom domains → Set up a
domain**, and Cloudflare walks you through the DNS records. Per spec §30,
write down exactly what changed (record type, old/new value, registrar) in
a handover note, that's a recurring source of post-launch pain otherwise.

## Local verification

To reproduce what Cloudflare will build:

```bash
npm run build      # outputs static site to ./out
npx serve out       # serve it locally to sanity-check
```

## Env vars this site doesn't need for a static deploy

`.env.example` lists GA4 / Meta Pixel / CAPI variables (§8 measurement).
Those are `NEXT_PUBLIC_*` and get baked into the static output at build
time, set them as Cloudflare Pages **build-time** environment variables
(same dashboard project → Settings → Environment variables) once real IDs
are available, then trigger a rebuild. `META_CAPI_ACCESS_TOKEN` is
server-side only and has no effect in a static export, CAPI calls need a
server, which this deployment doesn't have yet.

**`NEXT_PUBLIC_SITE_URL` needs a full URL, scheme included** (e.g.
`https://aulea.altasme.com`, not just `aulea.altasme.com`). A bare-domain
value once set on the real Pages project broke `next build` outright:
`src/app/layout.tsx` passed it straight to `new URL()` for
`metadataBase`, which throws on a schemeless string, so **every**
deployment after that failed before producing anything, Cloudflare's
dashboard just showed no deployment available with no obvious cause
pointing at this variable. `src/lib/site-url.ts` now normalizes it (adds
`https://` if missing, strips a trailing slash) before layout.tsx,
robots.ts, or sitemap.ts ever see it, so this specific failure mode can't
recur regardless of how the value gets typed into the dashboard, but the
variable is still worth setting correctly the first time.
