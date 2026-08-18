import Image from "next/image";

// Real vector-sourced logo lockup (spec B2: "do not redesign the logo").
// Two color variants: the supplied navy/gold artwork for light (Cream/
// Mist/Cream Deep) surfaces, and a flat cream silhouette, generated from
// the same artwork's alpha channel, not redrawn, for the Navy Deep
// footer where the navy version would be unreadable.
const LOCKUP_ASPECT = 1200 / 266;

export function Logo({
  className = "",
  onDark = false,
  height = 32,
}: {
  className?: string;
  onDark?: boolean;
  height?: number;
}) {
  return (
    <Image
      src={onDark ? "/images/logo/aulea-lockup-cream.png" : "/images/logo/aulea-lockup.png"}
      alt="Auléa Skin: A Better You."
      width={Math.round(height * LOCKUP_ASPECT)}
      height={height}
      className={className}
      priority
    />
  );
}
