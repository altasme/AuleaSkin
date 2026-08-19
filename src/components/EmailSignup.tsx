// No capture destination (list / store / Resend or equivalent) is wired
// up yet, so this renders as visibly disabled rather than as a form
// that silently goes nowhere.

export function EmailSignup() {
  return (
    <div className="max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          disabled
          placeholder="you@email.com"
          aria-label="Email address"
          className="w-full cursor-not-allowed rounded-full border border-ink/12 bg-cream/60 px-5 py-3 text-sm text-ink/70 outline-none"
        />
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-full bg-navy/30 px-6 py-3 font-label text-sm tracking-wider uppercase text-cream/80"
        >
          Notify Me
        </button>
      </div>
      <p className="mt-3 text-xs text-ink/70 leading-relaxed">
        Sign-up is launching soon, check back shortly.
      </p>
    </div>
  );
}
