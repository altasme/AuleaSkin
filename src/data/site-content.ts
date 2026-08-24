// Editable snapshot of the homepage/about/contact copy blocks, for the
// admin panel (src/app/adminpanel) to edit. This is a separate, parallel
// copy of what's currently hardcoded in the page files, not the live
// source those pages actually render from. There's no database and no
// server on this static-export site, so an admin edit here can't change
// what a real visitor sees by itself, see docs/admin-panel.md for what
// "no database yet" actually means and how an edit here reaches the live
// site (export it, hand it to a developer, they apply it in code).
//
// Defaults below match the copy live on the site as of this file's
// creation. Business-identity fields (name, tagline, contact info, nav,
// social links, shipping/payment info) live in src/lib/site-config.ts
// instead, that file was already the site's real "editable settings"
// object before this admin panel existed, so the panel edits it directly
// rather than duplicating it here.

export type WhyAuleaCard = {
  title: string;
  body: string;
};

export type LookingAheadCard = {
  title: string;
  body: string;
};

export type SiteContent = {
  homepage: {
    heroHeading: string;
    heroSubtext: string;
    categoryCopy: Record<string, string>;
    founderEyebrow: string;
    founderHeading: string;
    founderBody: string;
    ritualEyebrow: string;
    ritualHeading: string;
    ritualBody: string;
    promoEyebrow: string;
    promoBody: string;
    testimonialsHeading: string;
    testimonialsDescription: string;
    whyAuleaHeading: string;
    whyAuleaCards: WhyAuleaCard[];
    finalCtaHeading: string;
    finalCtaBody: string;
  };
  about: {
    introHeading: string;
    introDescription: string;
    storyParagraphs: string[];
    missionHeading: string;
    missionDescription: string;
    lookingAheadHeading: string;
    lookingAheadCards: LookingAheadCard[];
  };
  contact: {
    heading: string;
    description: string;
  };
};

export const defaultSiteContent: SiteContent = {
  homepage: {
    heroHeading: "Everyday skincare, made more accessible.",
    heroSubtext:
      "Aulea Skin started from one person's search for skincare that felt comfortable, simple, and worth the money.",
    categoryCopy: {
      "Sun Care": "Daily sun protection for your routine.",
      Serums: "Targeted treatments for brighter, healthier-looking skin.",
      Cleansers: "Gentle daily washes to start and end the day.",
      Lotions: "Everyday moisture for firmer, smoother skin.",
      Soaps: "Natural bar soaps for everyday cleansing.",
      Fragrance: "Eau de Parfum in scents for him and her.",
      Sets: "Complete routines, bundled together.",
    },
    founderEyebrow: "The Aulea Story",
    founderHeading: "Born from a personal skincare journey.",
    founderBody:
      "Finding skincare that felt comfortable, without costing too much, wasn't easy. That gap is why Aulea exists: accessible, reasonably priced products that fit an everyday routine without feeling complicated.",
    ritualEyebrow: "The Ritual",
    ritualHeading: "A few quiet minutes, every day.",
    ritualBody:
      "Cleanse, treat, hydrate. No overwhelming steps, just a simple rhythm that lets your skin feel cared for, morning and night.",
    promoEyebrow: "A Small Gift, Every Order",
    promoBody:
      "Nationwide delivery available. Cash on delivery welcome where courier support allows, subject to applicable courier and shipping arrangements.",
    testimonialsHeading: "Real feedback, in their words",
    testimonialsDescription: "Genuine reviews shared by Aulea customers.",
    whyAuleaHeading: "Skincare, made simple",
    whyAuleaCards: [
      {
        title: "Made from experience",
        body: "Created from a personal skincare journey with sensitive skin in mind.",
      },
      {
        title: "Thoughtful products",
        body: "Simple, considered formulas you can build into your everyday routine.",
      },
      {
        title: "Accessible by design",
        body: "Skincare that feels worth it, without feeling unnecessarily expensive.",
      },
      {
        title: "Easy to get",
        body: "Nationwide delivery, COD, and multiple payment options to suit you.",
      },
    ],
    finalCtaHeading: "Take care of your skin, without overcomplicating it.",
    finalCtaBody: "Explore the Aulea range and find a ritual that fits your everyday.",
  },
  about: {
    introHeading: "Skincare, made for real life",
    introDescription:
      "Aulea Skin began in December 2025, born from a personal journey with sensitive skin and a belief that taking care of yourself shouldn't feel complicated or out of reach.",
    storyParagraphs: [
      "I started Aulea because of my own experience with sensitive skin. Finding products that actually felt comfortable, without costing too much, wasn't easy. I tried a lot of things that either irritated my skin or asked me to spend more than I could justify for a daily routine. That gap is why Aulea exists.",
      "I believe skincare shouldn't have to be complicated or expensive to work. Aulea is built around two things I wished existed when I was looking: accessibility, reasonably priced products that don't feel out of reach, and simplicity, a routine that fits into an actual day, not a ten-step ritual.",
      "Aulea isn't trying to be luxurious or exclusive. It's meant to be approachable: skincare that feels far more premium than the price suggests, made by someone who needed it to exist. That's the idea behind \"A Better You.\"",
    ],
    missionHeading: "Taking care of your skin doesn't have to be complicated or expensive.",
    missionDescription:
      "We want more people to feel that skincare can be part of their everyday, and to feel confident making it their own.",
    lookingAheadHeading: "A brand built to grow with you",
    lookingAheadCards: [
      {
        title: "Expand the range",
        body: "Thoughtfully adding products that fit real, everyday routines.",
      },
      {
        title: "Build a community",
        body: "Creating a space where people feel supported in caring for their skin.",
      },
      {
        title: "Stay accessible",
        body: "Keeping skincare approachable as the brand grows.",
      },
    ],
  },
  contact: {
    heading: "Contact Auléa",
    description:
      "Questions about a product, your order, or your skin? Reach out and we'll get back to you.",
  },
};
