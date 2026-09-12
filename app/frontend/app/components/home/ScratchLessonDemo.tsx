"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Blocks from "@/app/components/lesson-blocks";
import type { LessonContentBlock } from "@/src/data/lessons/blocks";

/**
 * A scripted, looping scroll through the REAL Scratch Week 2 lesson page —
 * not just its content, but the page itself: the breadcrumb, the sidebar of
 * steps, the header, the step-progress bar, then the current step's
 * content. Same structure and Tailwind classes as
 * app/lessons/[courseId]/[lessonId]/LessonViewerClient.tsx, scaled down —
 * verify against that file before changing either. Content is copied
 * verbatim from the lesson API (`curl localhost:8000/lessons/scratch-2`),
 * step 0 of 5 ("Lesson Overview and Review").
 *
 * Real Scratch lessons never render a "Starter code" / CodeRunner / quiz
 * section (no lesson in the scratch track sets initialCode, showCompiler,
 * or a quiz) — so unlike PythonOfferingDemo/JavaOfferingDemo, there is
 * nothing past the Blocks content to replay here. The sidebar stays static
 * (it's lg:sticky on the real page — it doesn't scroll with the content
 * either); only the content column scrolls.
 */
const STEP_TITLES = [
  "Lesson Overview and Review",
  "Understanding the Coordinate Plane",
  "Moving Sprites with Coordinates",
  'Exploring "Move" and "Glide"',
  "Fun Projects and Homework",
];

const LESSON_BLOCKS: LessonContentBlock[] = [
  { type: "heading", level: 2, text: "Lesson 2 Overview Coordinate Planes and Sprite Movement" },
  { type: "heading", level: 2, text: "Welcome to Your Scratch Adventure!" },
  {
    type: "paragraph",
    text: "Today, we're going to learn how to make our Scratch sprites move around the stage like pros! We'll explore the magical world of coordinates and discover some cool new blocks that will bring our projects to life.",
  },
  {
    type: "callout",
    tone: "info",
    title: "In this lesson, you'll learn:",
    body: [
      {
        type: "list",
        style: "bullet",
        items: [
          "What a coordinate plane is and how it works in Scratch",
          "How to move sprites to specific locations on the stage",
          'The difference between "move" and "glide" blocks',
          "How to create fun projects using these new skills",
        ],
      },
    ],
  },
  { type: "heading", level: 3, text: "New Scratch Blocks We'll Use Today:" },
  { type: "image", src: "/goto.png", alt: "Go to X: _ Y: _" },
  { type: "paragraph", text: "This block teleports your sprite to a specific spot on the stage." },
  { type: "image", src: "/changex.png", alt: "Change X by _" },
  { type: "paragraph", text: "This block moves your sprite left or right." },
  { type: "image", src: "/changey.png", alt: "Change Y by _" },
  { type: "paragraph", text: "This block moves your sprite up or down." },
  { type: "image", src: "/glide.png", alt: "Glide _ secs to X: _ Y: _" },
  { type: "paragraph", text: "This block makes your sprite smoothly move to a specific spot." },
  {
    type: "image",
    src: "/assets/scratch-glide-random-position.svg",
    alt: 'The blue Motion block reading "glide 1 secs to random position", with random position in a dropdown.',
  },
  { type: "paragraph", text: "This block makes your sprite glide to a surprise location!" },
];

const LESSON_SCALE = 0.48;
const TIMINGS = { hold1: 0.6, scroll: 6.5, hold2: 1.8, fade: 0.4 } as const;

export default function ScratchLessonDemo({ paused = false }: { paused?: boolean }) {
  const scrollFrameRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const scrollFrame = scrollFrameRef.current;
    const scrollContent = scrollContentRef.current;
    const fade = fadeRef.current;
    if (!scrollFrame || !scrollContent || !fade) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(scrollContent, { y: 0 });
      return;
    }

    const scrollDistance = Math.max(20, scrollContent.scrollHeight - scrollFrame.clientHeight);

    const tl = gsap.timeline({ repeat: -1 });
    tlRef.current = tl;

    tl.addLabel("start")
      .to({}, { duration: TIMINGS.hold1 })
      .to(scrollContent, { y: -scrollDistance, duration: TIMINGS.scroll, ease: "power1.inOut" })
      .to({}, { duration: TIMINGS.hold2 })
      .to(fade, { autoAlpha: 0, duration: TIMINGS.fade, ease: "power1.inOut" })
      .call(() => gsap.set(scrollContent, { y: 0 }))
      .to(fade, { autoAlpha: 1, duration: TIMINGS.fade, ease: "power1.inOut" });

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (paused) tlRef.current?.pause();
    else tlRef.current?.play();
  }, [paused]);

  return (
    <div
      aria-hidden="true"
      className="relative h-80 overflow-hidden rounded-xl border border-home-rule bg-paper shadow-[0_1px_3px_rgb(20_23_28_/_0.06)] sm:h-96"
    >
      {/* Browser chrome — persists across the loop, unlike the page below it. */}
      <div className="flex items-center gap-2 border-b border-rule bg-paper-sunk px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="ml-1 flex-1 truncate rounded-full bg-paper px-3 py-1 font-mono text-[9.5px] text-ink-meta">
          challengercoding.org/lessons/scratch/2
        </span>
      </div>

      <div ref={fadeRef} data-track="scratch" className="absolute inset-0 top-9 overflow-hidden bg-paper">
        <div
          className="relative origin-top-left"
          style={{ width: `${100 / LESSON_SCALE}%`, transform: `scale(${LESSON_SCALE})` }}
        >
          {/* Breadcrumb — same markup as the real page's <nav aria-label="Breadcrumb">. */}
          <nav className="px-5 pt-4 text-meta text-ink-meta">
            Courses <span className="mx-2">/</span> Scratch Programming
          </nav>

          <div className="mt-6 flex items-start gap-8 px-5">
            {/* Steps sidebar — lg:sticky on the real page, so it doesn't
                scroll with the content there either; it's outside the
                scrolling frame below for the same reason. */}
            <aside className="w-56 shrink-0">
              <h2 className="label">Steps in this lesson</h2>
              <ol className="mt-4 border-t border-rule">
                {STEP_TITLES.map((title, i) => (
                  <li key={title} className="border-b border-rule">
                    <div
                      className={`flex gap-3 py-3 pl-3 text-small border-l-[3px] ${
                        i === 0 ? "font-semibold" : "border-transparent text-ink-muted"
                      }`}
                      style={i === 0 ? { borderColor: "var(--track)", color: "var(--track)" } : undefined}
                    >
                      <span className="font-mono text-ink-meta tnum shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span>{title}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Content column — header and progress bar are static (they
                don't scroll on the real page either, thanks to the sticky
                step-progress bar); only the step content below scrolls. */}
            <div className="min-w-0 flex-1">
              <header className="border-b border-rule pb-6">
                <p className="eyebrow">Scratch Programming · Week 2</p>
                <h1 className="text-h1 mt-3 text-ink">XY Coordinate Plane</h1>
              </header>

              <div className="mt-6 flex items-center gap-4">
                <p className="tnum shrink-0 text-body text-ink">
                  Step <strong className="font-semibold">1</strong> of {STEP_TITLES.length}
                </p>
                <div className="flex flex-1 gap-1">
                  {STEP_TITLES.map((title, i) => (
                    <span
                      key={title}
                      className="h-1 flex-1"
                      style={{ backgroundColor: i <= 0 ? "var(--track)" : "var(--color-rule-strong)" }}
                    />
                  ))}
                </div>
              </div>

              <div ref={scrollFrameRef} className="relative mt-6 h-[420px] overflow-hidden">
                <div ref={scrollContentRef} className="pt-2">
                  <Blocks blocks={LESSON_BLOCKS} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
