"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function item(reduceMotion: boolean): Variants {
  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0, 0, 1] } },
  };
}

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-md bg-home-teal px-6 py-3.5 font-sans font-semibold text-white transition-colors hover:bg-home-teal-deep";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-md border border-home-ink/15 px-6 py-3.5 font-sans font-semibold text-home-ink transition-colors hover:bg-home-ink/[0.04]";

export default function HeroIntro({
  enrollUrl,
}: {
  enrollUrl: string;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const v = item(reduceMotion);

  // Framer Motion doesn't resolve `initial`/`variants` styles during Next's
  // server render, so the client's first paint carries inline styles the
  // server HTML didn't — React uses the (correct) client version regardless,
  // but flags the diff. suppressHydrationWarning on each animated element is
  // the documented way to silence that specific, harmless mismatch.
  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <motion.h1
        variants={v}
        suppressHydrationWarning
        className="font-sans text-[clamp(2.5rem,1.9rem+2.8vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-home-ink"
      >
        Digital fluency for all students.
      </motion.h1>

      <motion.p
        variants={v}
        suppressHydrationWarning
        className="mt-4 max-w-[36ch] font-sans text-xl font-medium leading-snug text-home-ink"
      >
        Free programming courses, taught by high schoolers.
      </motion.p>

      <motion.div variants={v} suppressHydrationWarning className="mt-7 flex flex-wrap gap-3">
        <motion.a
          href={enrollUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: reduceMotion ? 1 : 1.03 }}
          whileTap={{ scale: reduceMotion ? 1 : 0.97 }}
          className={btnPrimary}
        >
          Enroll in a class
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </motion.a>
        <motion.div whileHover={{ scale: reduceMotion ? 1 : 1.03 }} whileTap={{ scale: reduceMotion ? 1 : 0.97 }}>
          <Link href="/tutorials" className={btnOutline}>
            See all the courses
          </Link>
        </motion.div>
      </motion.div>

      <motion.p
        variants={v}
        suppressHydrationWarning
        className="mt-8 max-w-[42ch] font-sans text-sm text-home-ink-soft"
      >
        New here? Start with{" "}
        <Link href="/lessons/scratch/1" className="font-semibold text-home-teal underline underline-offset-2">
          Scratch Week 1
        </Link>
        ,{" "}
        <Link href="/lessons/python/1" className="font-semibold text-home-teal underline underline-offset-2">
          Python Week 1
        </Link>{" "}
        or{" "}
        <Link href="/lessons/java/1" className="font-semibold text-home-teal underline underline-offset-2">
          Java Week 1
        </Link>
        . Every lesson is free to read, no account needed.
      </motion.p>
    </motion.div>
  );
}
