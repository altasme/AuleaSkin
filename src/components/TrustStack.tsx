import { siteConfig } from "@/lib/site-config";

type TrustItem = {
  title: string;
  description: string;
};

const items: TrustItem[] = [
  {
    title: "Full ingredient transparency",
    description:
      "[Ingredients taken from photos of the actual product labels, pending client input. Honest, plain-language descriptions — nothing invented.]",
  },
  {
    title: "Founder story",
    description:
      "Aulea started from the founder's own experience with sensitive skin — not a generic brand story. Read more on the About page.",
  },
  {
    title: "Regulatory standing",
    description: siteConfig.cpnStatus,
  },
  {
    title: "Operational trust",
    description:
      "Real contact details, nationwide shipping with named couriers, and a returns policy matched to the cosmetics category — see FAQ and Policies.",
  },
];

export function TrustStack() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-3">
          <h3 className="font-display text-lg text-ink">{item.title}</h3>
          <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
