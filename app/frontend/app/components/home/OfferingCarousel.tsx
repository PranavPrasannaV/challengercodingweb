"use client";

import { useEffect, useRef, useState } from "react";
import ScratchLessonDemo from "./ScratchLessonDemo";
import PythonOfferingDemo from "./PythonOfferingDemo";
import JavaOfferingDemo from "./JavaOfferingDemo";

/**
 * Replaces the old "Scratch description beside its own demo" row — the same
 * total width now shows one demo carousel cycling through all three tracks.
 * Each track's actual description/course-list still lives in TrackPanels
 * below; this is the flashy summary up top, not a replacement for that
 * detail.
 */
const TABS = [
  { id: "scratch", label: "Scratch", Demo: ScratchLessonDemo },
  { id: "python", label: "Python", Demo: PythonOfferingDemo },
  { id: "java", label: "Java", Demo: JavaOfferingDemo },
] as const;

const CYCLE_MS = 7000;

// Same "glide, don't snap" language as the hero's intro title card: fade +
// lift out, swap, fade + settle in. FADE_OUT/FADE_IN are the CSS transition
// durations; the demo itself only actually swaps once the old one has
// fully faded, not before.
const FADE_OUT_MS = 550;
const FADE_IN_MS = 850;

export default function OfferingCarousel() {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [entered, setEntered] = useState(true);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  const swapTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Cross-fade the demo itself when the active tab changes: fade + lift the
  // outgoing one out, only THEN swap which demo is mounted, then fade + lift
  // the new one in. A bare key-swap on tab change used to replace it
  // instantly — the same "just spawns" complaint the hero's own intro card
  // had before it got this same treatment.
  useEffect(() => {
    if (active === displayed) return;
    swapTimers.current.forEach(clearTimeout);
    swapTimers.current = [];
    setEntered(false);
    swapTimers.current.push(
      setTimeout(() => {
        setDisplayed(active);
        requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
      }, FADE_OUT_MS),
    );
    return () => {
      swapTimers.current.forEach(clearTimeout);
      swapTimers.current = [];
    };
  }, [active, displayed]);

  // Drives each tab's own fill bar directly (rather than a CSS transition
  // triggered on tab change), so hovering to pause the loop pauses the fill
  // exactly in place instead of needing to freeze/resume a running
  // transition — and advancing tabs is just "this reached 100%", the same
  // clock as what's on screen.
  useEffect(() => {
    setProgress(0);
    let last = performance.now();
    let elapsed = 0;
    let raf = 0;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current) {
        elapsed += dt;
        setProgress(Math.min(100, (elapsed / CYCLE_MS) * 100));
        if (elapsed >= CYCLE_MS) {
          setActive((a) => (a + 1) % TABS.length);
          return; // effect cleans up and reruns for the new active tab
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const DisplayedDemo = TABS[displayed].Demo;

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Three separate bars, not one shared pill — each track's label sits
          above its own fill track, empty until it's the active one. */}
      <div className="flex items-center justify-center gap-6 sm:gap-10">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActive(i)}
            aria-current={i === active ? "true" : undefined}
            className="flex w-24 flex-col items-center gap-2.5 sm:w-32"
          >
            <span
              className={`font-sans text-xs font-semibold uppercase tracking-wide transition-colors ${
                i === active ? "text-home-ink" : "text-home-ink-soft hover:text-home-ink"
              }`}
            >
              {tab.label}
            </span>
            <span className="h-1 w-full overflow-hidden rounded-full bg-home-rule">
              <span
                className="block h-full rounded-full bg-home-teal"
                style={{ width: `${i === active ? progress : 0}%` }}
              />
            </span>
          </button>
        ))}
      </div>

      {/* key forces a remount on swap, so whichever demo becomes active
          always replays its own loop from the start. Opacity/transform
          animate the cross-fade; the swap itself (which Demo is mounted)
          only happens once the fade-out above has finished. */}
      <div
        className="mt-6 ease-in-out"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(18px)",
          transitionProperty: "opacity, transform",
          transitionDuration: `${entered ? FADE_IN_MS : FADE_OUT_MS}ms`,
        }}
      >
        <DisplayedDemo key={TABS[displayed].id} />
      </div>
    </div>
  );
}
