// Visual stand-in for an asset that hasn't been supplied yet.
// Swap for a real <Image> once the client asset arrives, see
// docs/intake-checklist.md for what's outstanding.

export function Placeholder({
  label,
  className = "",
  aspect = "aspect-square",
  bare = false,
}: {
  label: string;
  className?: string;
  aspect?: string;
  /** Drop the own background/border, for use inside an already-surfaced
   * card (e.g. a panel-colored product tile), so the image area doesn't
   * get a second nested box. */
  bare?: boolean;
}) {
  return (
    <div
      className={`${bare ? "" : "placeholder-box border border-ink/12"} ${aspect} w-full flex items-center justify-center rounded-sm ${className}`}
    >
      <span className="bg-cream/90 text-ink/70 text-xs tracking-wide px-3 py-1.5 text-center">
        🖼️ {label}
      </span>
    </div>
  );
}
