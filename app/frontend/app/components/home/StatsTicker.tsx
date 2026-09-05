"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { courses } from "@/src/data/courses";
import { SITE, STATS } from "@/src/site";

/**
 * A stock-ticker-style strip of headline numbers, running under the hero.
 * Two identical copies of the same row sit end to end in one flex track;
 * animating the track exactly -50% loops it seamlessly, so it reads as an
 * infinite stream rather than a strip that snaps back. Each number counts
 * up from 0 via IntersectionObserver every time it crosses into view — on
 * the first pass and on every loop after, since the observer re-fires as
 * the same node scrolls back into the viewport.
 */
type Stat =
  | { kind: "number"; value: number; label: string; prefix?: string; suffix?: string }
  | { kind: "caption"; text: string };

const parseCount = (s: string) => Number(s.replace(/[^0-9]/g, ""));

const TICKER_STATS: Stat[] = [
  { kind: "number", value: parseCount(STATS.studentsTaught), suffix: "+", label: `Students taught since ${SITE.founded}` },
  { kind: "number", value: parseCount(STATS.hoursOfContent), suffix: "+", label: "Hours of lessons" },
  { kind: "number", value: STATS.exercises, label: "Exercises" },
  { kind: "number", value: courses.length, label: "Courses" },
  { kind: "caption", text: "Official LWSD after school program" },
  { kind: "number", value: parseCount(STATS.schools), suffix: "+", label: "Schools" },
  { kind: "number", value: parseCount(STATS.dailyActiveUsers), suffix: "+", label: "Daily active users" },
  { kind: "number", value: parseCount(STATS.retentionRate), prefix: ">", suffix: "%", label: "Per-semester retention" },
];

const formatNumber = (n: number) => Math.round(n).toLocaleString("en-US");

function TickerNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${prefix}${formatNumber(value)}${suffix}`;
      return;
    }
    const state = { n: 0 };
    let tween: gsap.core.Tween | null = null;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (countedRef.current) return;
          countedRef.current = true;
          tween?.kill();
          state.n = 0;
          tween = gsap.to(state, {
            n: value,
            duration: 1.1,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${prefix}${formatNumber(state.n)}${suffix}`;
            },
          });
        } else {
          countedRef.current = false;
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      tween?.kill();
    };
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {0}
      {suffix}
    </span>
  );
}

function TickerItem({ stat }: { stat: Stat }) {
  if (stat.kind === "caption") {
    return (
      <div className="flex shrink-0 items-center gap-2 px-5 sm:px-6">
        <span className="whitespace-nowrap font-sans text-[10px] uppercase tracking-wide text-home-ink-soft">
          {stat.text}
        </span>
        <span className="text-home-rule" aria-hidden="true">
          •
        </span>
      </div>
    );
  }
  return (
    <div className="flex shrink-0 items-baseline gap-2 px-5 sm:px-6">
      <span className="font-sans text-sm font-semibold text-home-ink sm:text-base">
        <TickerNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
      </span>
      <span className="whitespace-nowrap font-sans text-[10px] uppercase tracking-wide text-home-ink-soft">
        {stat.label}
      </span>
      <span className="text-home-rule" aria-hidden="true">
        •
      </span>
    </div>
  );
}

export default function StatsTicker() {
  return (
    <section className="overflow-hidden border-y border-home-rule bg-home-bg py-1.5" aria-label="Challenger Coding, by the numbers">
      <div className="stats-ticker-track flex w-max items-center">
        <div className="flex items-center">
          {TICKER_STATS.map((s, i) => (
            <TickerItem key={i} stat={s} />
          ))}
        </div>
        <div className="ticker-copy-dup flex items-center" aria-hidden="true">
          {TICKER_STATS.map((s, i) => (
            <TickerItem key={i} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
