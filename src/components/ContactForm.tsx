"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired yet — this only confirms the UI flow.
    // Wire to a real form handler / email service before launch.
    trackEvent("Lead", { form: "contact" });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-sm border border-line bg-sand/40 p-6 text-sm text-ink-soft">
        Thanks — this is a placeholder confirmation. The form isn&apos;t connected to a real
        inbox yet; wire it to an email service before launch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-ink-soft" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-sm border border-line bg-cream px-4 py-2.5 text-ink outline-none focus:border-sage"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-ink-soft" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-sm border border-line bg-cream px-4 py-2.5 text-ink outline-none focus:border-sage"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-ink-soft" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-sm border border-line bg-cream px-4 py-2.5 text-ink outline-none focus:border-sage"
        />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
