"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/** Shared hover/tap pop for every homepage CTA — the one micro-interaction
 *  every button on the page shares, so clicking anything feels alive. */
export default function MotionCta({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  // Always pass whileHover/whileTap (never swap in `undefined` based on
  // reduced-motion) — that would make the props' shape differ between the
  // server render and the client's post-hydration reduced-motion check,
  // which Framer Motion reflects as a tabindex attribute, causing a
  // hydration mismatch. Keep the prop, just make it a no-op instead.
  const reduceMotion = Boolean(useReducedMotion());
  const hover = { scale: reduceMotion ? 1 : 1.03 };
  const tap = { scale: reduceMotion ? 1 : 0.97 };

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={hover}
        whileTap={tap}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={hover} whileTap={tap} className="inline-block">
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
