// Visual stand-in for an asset that hasn't been supplied yet.
// Swap for a real <Image> once the client asset arrives — see
// docs/intake-checklist.md for what's outstanding.

export function Placeholder({
  label,
  className = "",
  aspect = "aspect-square",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`placeholder-box ${aspect} w-full flex items-center justify-center border border-line rounded-sm ${className}`}
    >
      <span className="bg-cream/90 text-ink-soft text-xs tracking-wide px-3 py-1.5 text-center">
        🖼️ {label}
      </span>
    </div>
  );
}
