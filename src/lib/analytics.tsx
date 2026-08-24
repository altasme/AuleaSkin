"use client";

// Measurement scaffolding per spec §8. Nothing fires until real IDs are
// supplied in .env.local (see .env.example). This only wires the plumbing
// so Phase 1 completion (§8, §21) is a config step, not a rebuild.
//
// Event map (mirrors §8):
//   PageView -> ViewContent -> AddToCart -> InitiateCheckout -> Purchase
//
// Deduplication: pass the same `eventId` to trackEvent() for the pixel
// (browser) and CAPI (server) calls of the same event so Meta can dedupe.

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type CommerceEvent =
  | "ViewContent"
  | "AddToCart"
  | "InitiateCheckout"
  | "Purchase"
  | "Lead"
  | "CompleteRegistration";

export function trackEvent(
  event: CommerceEvent,
  params: Record<string, unknown> = {},
  eventId?: string
) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", event, params);
  }

  if (window.fbq) {
    window.fbq("track", event, params, eventId ? { eventID: eventId } : undefined);
  }

  if (!window.gtag && !window.fbq) {
    // No analytics configured yet, surface events in dev so the event map
    // can be sanity-checked before real IDs are wired up.
    if (process.env.NODE_ENV === "development") {
      console.info("[analytics:pending config]", event, params);
    }
  }
}

export function AnalyticsScripts() {
  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {META_PIXEL_ID && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
