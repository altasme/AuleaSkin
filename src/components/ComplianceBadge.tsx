export function ComplianceBadge({ note }: { note?: string }) {
  return (
    <div className="inline-flex items-start gap-2 rounded-sm border border-gold/60 bg-gold/10 px-3 py-2 text-xs text-ink-soft">
      <span aria-hidden="true">⚠</span>
      <span>
        <span className="font-medium text-ink">Compliance hold — not cleared to publish.</span>{" "}
        {note ?? "Regulated claim pending CPN and written substantiation (spec §27)."}
      </span>
    </div>
  );
}
