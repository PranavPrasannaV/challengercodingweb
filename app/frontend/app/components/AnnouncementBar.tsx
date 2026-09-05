import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Fixed strip above the navbar, site-wide. Height is reserved once via
 * --announce-h (globals.css), which the navbar's own top offset and the
 * body's padding-top both read — so nothing here needs to know about
 * anything below it.
 */
export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-[var(--announce-h)] bg-home-teal-deep">
      <Link
        href="/compiler"
        className="flex h-full items-center justify-center gap-2 px-4 text-center font-sans text-[13px] font-medium text-white transition-colors hover:text-white/85"
      >
        <span>
          <span className="font-semibold">New:</span> in-browser code execution engine
        </span>
        <span className="inline-flex items-center gap-1 font-semibold underline underline-offset-2">
          See it now
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </Link>
    </div>
  );
}
