// Spec §16 lists an email signup homepage section; spec §33 explicitly
// forbids implying a newsletter that isn't wired ("no dead field, no
// implied newsletter that isn't wired"). No capture destination (list /
// store / Resend or equivalent) has been named yet, so this renders as
// visibly disabled rather than as a form that silently goes nowhere —
// same pattern as the disabled checkout button in the cart.

export function EmailSignup() {
  return (
    <div className="max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          disabled
          placeholder="you@email.com"
          aria-label="Email address"
          className="w-full cursor-not-allowed rounded-full border border-line bg-cream/60 px-5 py-3 text-sm text-ink-soft outline-none"
        />
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-full bg-indigo/30 px-6 py-3 font-label text-sm tracking-wider uppercase text-cream/80"
        >
          Notify Me
        </button>
      </div>
      <p className="mt-3 text-xs text-ink-soft leading-relaxed">
        Signup isn&apos;t wired to a real list yet — spec §33 requires a named capture
        destination before this goes live. See docs/intake-checklist.md.
      </p>
    </div>
  );
}
