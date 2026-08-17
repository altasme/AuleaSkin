import { Placeholder } from "./Placeholder";

type TrustItem = {
  title: string;
  description: string;
  placeholder?: string;
};

const items: TrustItem[] = [
  {
    title: "Full ingredient transparency",
    description:
      "[Complete INCI ingredient list per product, pending client input. Honest, plain-language descriptions of what each ingredient does.]",
  },
  {
    title: "Founder & formulation story",
    description:
      "[Why Aulea Skin exists and how the products are made — pending brand story from client intake.]",
  },
  {
    title: "Regulatory standing",
    description:
      "[FDA Cosmetic Product Notification (CPN) number(s) will display here once supplied. Cosmetics are notified, not \"approved\" — see docs/compliance-notes.md.]",
  },
  {
    title: "Real customer content",
    description:
      "[Embedded TikTok / Instagram content from real customers or the founder — pending UGC assets.]",
    placeholder: "UGC embed placeholder",
  },
  {
    title: "Marketplace proof",
    description:
      "[Rating badge and review count pulled from the brand's real Shopee / TikTok Shop / Lazada store, once linked.]",
    placeholder: "Marketplace rating badge",
  },
  {
    title: "Operational trust",
    description:
      "[Real contact details, transparent shipping timelines, and a returns policy matched to the product category — pending operations info.]",
  },
];

export function TrustStack() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-3">
          {item.placeholder && (
            <Placeholder label={item.placeholder} aspect="aspect-video" />
          )}
          <h3 className="font-serif text-lg text-ink">{item.title}</h3>
          <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
