// Text-based wordmark standing in for the real logo. The brand kit
// doesn't have vector logo files yet (spec B2: "do not redesign the
// logo") — this renders "Auléa" in the display face with a small gold
// leaf accent above it, per the locked design system (PART A). Swap for
// the real SVG/AI artwork once supplied; keep this component's call
// sites unchanged.

function LeafAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M12 21c-4-1-7-4.5-7-9.5C5 6.8 8 3.5 12 2c4 1.5 7 4.8 7 9.5 0 5-3 8.5-7 9.5Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M12 21V6" stroke="var(--cream)" strokeWidth="0.75" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <LeafAccent className="h-4 w-4 text-gold" />
      <span className="font-display text-xl tracking-wide text-navy">Auléa</span>
      <span className="font-label text-[0.7rem] tracking-[0.15em] text-navy/60 self-end mb-0.5">
        SKIN
      </span>
    </span>
  );
}
