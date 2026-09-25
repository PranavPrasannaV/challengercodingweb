import Link from "next/link";

/** viewBox of public/logo-mark.svg. */
const MARK_VIEWBOX = "0 0 1285.5 1523.8";

/**
 * The wordmark, both words at the same full weight, optionally with the drawn
 * CC-and-rocket mark beside it. The navbar shows the wordmark alone.
 *
 * The mark is referenced from public/logo-mark.svg rather than inlined, so its
 * traced outline is fetched once and cached instead of repeated in every
 * page's HTML. It fills with currentColor, so one file serves both the dark
 * and the light lockup; the window keeps its gold either way.
 */
export default function Logo({
  size = "md",
  href = "/",
  as = "link",
  light = false,
  mark = false,
}: {
  size?: "md" | "sm";
  href?: string;
  as?: "link" | "text";
  /** White wordmark, for dark grounds: the navbar over the hero image, the footer. */
  light?: boolean;
  /** Show the drawn mark before the wordmark. */
  mark?: boolean;
}) {
  const scale = size === "sm" ? "text-[1.25rem]" : "text-[1.4rem]";
  const markHeight = size === "sm" ? "h-7" : "h-8";

  const inner = (
    <span
      className={`inline-flex items-center gap-2.5 ${light ? "text-white" : "text-brand"}`}
    >
      {mark && (
        <svg
          viewBox={MARK_VIEWBOX}
          className={`${markHeight} w-auto shrink-0`}
          aria-hidden="true"
          focusable="false"
        >
          <use href="/logo-mark.svg#mark" />
        </svg>
      )}
      <span
        className={`font-sans font-bold ${scale} leading-none tracking-[-0.015em] whitespace-nowrap`}
      >
        Challenger Coding
      </span>
    </span>
  );

  if (as === "text") return inner;

  return (
    <Link href={href} className="inline-flex items-center rounded-sm">
      {inner}
    </Link>
  );
}
