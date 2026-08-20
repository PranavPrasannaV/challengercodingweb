import Link from "next/link";

/**
 * The wordmark, set once.
 *
 * It sits off the heading scale deliberately — a fixed optical size and its
 * own tracking — so it reads as a mark rather than as another h2. The weight
 * shift between the two words is the whole device; there is no glyph, because
 * a drawn mark should be drawn by a person and this org has students who can.
 */
export default function Logo({
  size = "md",
  href = "/",
  as = "link",
}: {
  size?: "md" | "sm";
  href?: string;
  as?: "link" | "text";
}) {
  const scale = size === "sm" ? "text-[1.25rem]" : "text-[1.4rem]";

  const inner = (
    <span
      className={`font-serif ${scale} leading-none tracking-[-0.015em] text-brand whitespace-nowrap`}
    >
      <span className="font-semibold">Challenger</span>{" "}
      <span className="font-normal">Coding</span>
    </span>
  );

  if (as === "text") return inner;

  return (
    <Link href={href} className="inline-flex items-center rounded-sm">
      {inner}
    </Link>
  );
}
