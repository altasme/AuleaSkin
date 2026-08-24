// Shared visual primitives for the admin panel. One place for the input/
// label/button vocabulary so every tab looks and behaves the same way
// (Operate-mode consistency: same control shape, same states, everywhere)
// instead of each panel re-declaring its own near-identical classes.
//
// The admin panel intentionally uses plain sans throughout, no display
// serif, no label caps font. Those belong to the public site's editorial
// voice; a dashboard is a tool the admin uses daily, it should read as
// one, not as a second brand surface.

export const inputClass =
  "mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-ink outline-none transition-colors placeholder:text-gray-400 focus:border-navy focus:ring-2 focus:ring-navy/20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400";

export const selectClass = `${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="%23667085" stroke-width="1.5"><path d="M5 7.5l5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>')] bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-9`;

export const labelClass = "block text-xs font-medium uppercase tracking-wide text-gray-600";

export const hintClass = "mt-1 text-xs text-gray-400";

const buttonBase =
  "inline-flex items-center justify-center gap-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50";

export const buttonPrimary = `${buttonBase} bg-navy px-4 py-2 text-cream hover:bg-navy-deep active:bg-navy-deep`;
export const buttonSecondary = `${buttonBase} border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 active:bg-gray-100`;
export const buttonDanger = `${buttonBase} bg-red-600 px-4 py-2 text-white hover:bg-red-700 active:bg-red-800`;
export const buttonDangerOutline = `${buttonBase} border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50 active:bg-red-100`;
// No color baked in on purpose: Tailwind resolves conflicting utility
// classes by their order in the generated stylesheet, not by call-site
// string order, so a caller appending its own color class after this one
// can't reliably override a color already set here.
export const buttonGhost = `${buttonBase} px-2 py-1`;

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
      {hint && <p className={hintClass}>{hint}</p>}
    </div>
  );
}
