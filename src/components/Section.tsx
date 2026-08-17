export function Section({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`px-6 py-16 sm:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl text-ink">{title}</h2>
      {description && (
        <p className="mt-3 text-ink-soft leading-relaxed">{description}</p>
      )}
    </div>
  );
}
