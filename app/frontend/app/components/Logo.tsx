import Link from "next/link";

/**
 * The wordmark, set once: both words at the same full weight, no glyph —
 * a drawn mark should be drawn by a person, and this org has students who can.
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
      className={`font-sans font-bold ${scale} leading-none tracking-[-0.015em] text-brand whitespace-nowrap`}
    >
      Challenger Coding
    </span>
  );

  if (as === "text") return inner;

  return (
    <Link href={href} className="inline-flex items-center rounded-sm">
      {inner}
    </Link>
  );
}
