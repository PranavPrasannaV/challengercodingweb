"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

/**
 * One fade+slide-up moment per section, fired once as it crosses ~75% of the
 * viewport. Not a per-element scroll gimmick — wrap a whole section (or one
 * meaningful group within it), not every child.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduceMotion = useReducedMotion();
  const Component = (
    as === "section" ? motion.section : as === "li" ? motion.li : motion.div
  ) as typeof motion.div;

  return (
    <Component
      className={className}
      // Framer Motion resolves `initial` into an inline style on the client
      // but not during Next's server render, so the first client paint's
      // style attribute never matches the server HTML here — a known,
      // harmless SSR quirk; suppressHydrationWarning is the documented fix.
      suppressHydrationWarning
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0, 0, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
