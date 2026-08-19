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
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">{title}</h2>
      {description && (
        <p className="mt-3 text-ink/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
