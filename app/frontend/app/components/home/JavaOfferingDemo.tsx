"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Play, Clipboard, CheckCircle2 } from "lucide-react";
import Blocks from "@/app/components/lesson-blocks";
import type { LessonContentBlock } from "@/src/data/lessons/blocks";

/**
 * A scripted, looping walkthrough of the REAL Java Week 1 page —
 * breadcrumb, sidebar of steps, header, step-progress bar, then step 2
 * ("My First Java Program")'s content, starter code and CodeRunner/
 * autograder chrome — same structure and classes as
 * app/lessons/[courseId]/[lessonId]/LessonViewerClient.tsx, scaled down.
 * Content verified against the lesson API (`curl localhost:8000/lessons/
 * java-1`) and its real groupIntoSteps() transform (src/lib/lessons.ts).
 * Step 2 is the active one here, not step 1 — the real "Lesson Overview"
 * step has no exercise at all (no code, no CodeRunner), so it's step 2
 * where the actual runnable program lives.
 *
 * Java's starter code already compiles and runs (it just prints the wrong
 * thing), so — unlike Python's from-scratch typing — this edits the one
 * line a real student edits: the string inside println(), then reruns it.
 */
const STEP_TITLES = [
  "Lesson Overview",
  "My First Java Program",
  "Syntax and Java Basics",
  "Debugging",
  "Quiz",
  "Weekly Project",
];
const ACTIVE_STEP = 1;

const LESSON_BLOCKS: LessonContentBlock[] = [
  { type: "heading", level: 2, text: "1. My First Java Program" },
  { type: "heading", level: 3, text: "Hello, Java!" },
  {
    type: "paragraph",
    text: 'Let\'s start by creating a simple Java program that prints "Hello, Java!" to the console.',
  },
  {
    type: "callout",
    tone: "info",
    title: "Try it Yourself",
    body: [
      {
        type: "paragraph",
        text: 'Modify the program to print "Welcome to Java class!" instead, then run it to check your work.',
      },
    ],
  },
];

const ORIGINAL_TEXT = "Hello, Java!";
const EXPECTED_OUTPUT = "Welcome to Java class!";
const LESSON_SCALE = 0.48;

const TIMINGS = { scroll: 2.8, hold1: 0.6, edit: 0.6, run: 0.3, hold2: 2.4, fade: 0.4 } as const;

export default function JavaOfferingDemo({ paused = false }: { paused?: boolean }) {
  const scrollFrameRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const literalRef = useRef<HTMLSpanElement>(null);
  const runBtnRef = useRef<HTMLButtonElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const stdoutRef = useRef<HTMLPreElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const scrollFrame = scrollFrameRef.current;
    const scrollContent = scrollContentRef.current;
    const fade = fadeRef.current;
    const literal = literalRef.current;
    const runBtn = runBtnRef.current;
    const result = resultRef.current;
    const stdout = stdoutRef.current;
    const status = statusRef.current;
    if (!scrollFrame || !scrollContent || !fade || !literal || !runBtn || !result || !stdout || !status) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      literal.textContent = EXPECTED_OUTPUT;
      gsap.set(result, { autoAlpha: 1, height: "auto" });
      gsap.set(status, { autoAlpha: 1 });
      return;
    }

    // Measure with the result panel at its expanded height — it's collapsed
    // to 0 at rest, and scrollHeight taken before that would undercount how
    // far the page needs to scroll once the panel opens.
    gsap.set(result, { autoAlpha: 1, height: "auto" });
    const scrollDistance = Math.max(20, scrollContent.scrollHeight - scrollFrame.clientHeight);

    gsap.set(result, { autoAlpha: 0, height: 0 });
    gsap.set(status, { autoAlpha: 0, y: 4 });
    gsap.set(runBtn, { scale: 1 });
    gsap.set(literal, { backgroundColor: "rgba(14,124,107,0)" });

    const tl = gsap.timeline({ repeat: -1 });
    tlRef.current = tl;

    tl.addLabel("start")
      .to(scrollContent, { y: -scrollDistance, duration: TIMINGS.scroll, ease: "power1.inOut" }, "start")
      .to({}, { duration: TIMINGS.hold1 })
      .to(literal, { opacity: 0.2, duration: TIMINGS.edit / 2 })
      .call(() => {
        literal.textContent = EXPECTED_OUTPUT;
      })
      .to(literal, { opacity: 1, backgroundColor: "rgba(14,124,107,0.35)", duration: TIMINGS.edit / 2 })
      .to(literal, { backgroundColor: "rgba(14,124,107,0)", duration: 0.5 }, "+=0.2")
      .to(runBtn, { scale: 0.92, duration: 0.1 }, "+=0.2")
      .to(runBtn, { scale: 1, duration: 0.15, ease: "back.out(2)" })
      .to(result, { autoAlpha: 1, height: "auto", duration: TIMINGS.run, ease: "power2.out" }, "-=0.05")
      .to(status, { autoAlpha: 1, y: 0, duration: 0.35 }, "+=0.15")
      .to({}, { duration: TIMINGS.hold2 })
      .to(fade, { autoAlpha: 0, duration: TIMINGS.fade, ease: "power1.inOut" })
      .call(() => {
        gsap.set(scrollContent, { y: 0 });
        literal.textContent = ORIGINAL_TEXT;
        gsap.set(literal, { backgroundColor: "rgba(14,124,107,0)" });
        gsap.set(result, { autoAlpha: 0, height: 0 });
        gsap.set(status, { autoAlpha: 0, y: 4 });
      })
      .to(fade, { autoAlpha: 1, duration: TIMINGS.fade, ease: "power1.inOut" });

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  // Hovering the sibling panel pauses this loop mid-frame rather than
  // resetting it, so it picks back up exactly where it left off.
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
          challengercoding.org/lessons/java/1
        </span>
      </div>

      <div ref={fadeRef} data-track="java" className="absolute inset-0 top-9 overflow-hidden bg-paper">
        <div
          className="relative origin-top-left"
          style={{ width: `${100 / LESSON_SCALE}%`, transform: `scale(${LESSON_SCALE})` }}
        >
          {/* Breadcrumb — same markup as the real page's <nav aria-label="Breadcrumb">. */}
          <nav className="px-5 pt-4 text-meta text-ink-meta">
            Courses <span className="mx-2">/</span> Java Programming
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
                        i === ACTIVE_STEP ? "font-semibold" : "border-transparent text-ink-muted"
                      }`}
                      style={i === ACTIVE_STEP ? { borderColor: "var(--track)", color: "var(--track)" } : undefined}
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
                <p className="eyebrow">Java Programming · Week 1</p>
                <h1 className="text-h1 mt-3 text-ink">Hello World</h1>
              </header>

              <div className="mt-6 flex items-center gap-4">
                <p className="tnum shrink-0 text-body text-ink">
                  Step <strong className="font-semibold">{ACTIVE_STEP + 1}</strong> of {STEP_TITLES.length}
                </p>
                <div className="flex flex-1 gap-1">
                  {STEP_TITLES.map((title, i) => (
                    <span
                      key={title}
                      className="h-1 flex-1"
                      style={{ backgroundColor: i <= ACTIVE_STEP ? "var(--track)" : "var(--color-rule-strong)" }}
                    />
                  ))}
                </div>
              </div>

              <div ref={scrollFrameRef} className="relative mt-6 h-[420px] overflow-hidden">
                <div ref={scrollContentRef} className="pt-2">
                  <Blocks blocks={LESSON_BLOCKS} />

                  {/* Starter code — same chrome as the real lesson's "Starter code" box. */}
                  <section className="mt-2 overflow-hidden rounded-md border border-rule">
                    <div className="flex items-center justify-between gap-4 border-b border-rule bg-paper-sunk px-4 py-2">
                      <span className="label text-[11px]">Starter code</span>
                      <Clipboard className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    </div>
                    <pre className="overflow-x-auto bg-code-bg px-4 py-3 font-mono text-[11px] leading-relaxed text-code-fg">
                      <code>{"public class HelloJava {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}"}</code>
                    </pre>
                  </section>

                  {/* Write your code here — the real CodeRunner, edited and run. */}
                  <section className="mt-6">
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4">
                      <h2 className="label text-[11px]">Write your code here</h2>
                      <p className="text-[11px] text-ink-muted">
                        Make it print <code className="font-mono text-ink">{EXPECTED_OUTPUT}</code>
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-md border border-rule">
                      <div className="flex items-center justify-between gap-4 border-b border-rule bg-paper-sunk px-4 py-2">
                        <span className="label text-[11px]">java</span>
                        <button
                          ref={runBtnRef}
                          tabIndex={-1}
                          className="btn btn-brand inline-flex items-center gap-1.5 !px-3 !py-1.5 text-[11px]"
                        >
                          <Play className="h-3 w-3" aria-hidden="true" />
                          Run
                        </button>
                      </div>
                      <pre className="whitespace-pre-wrap bg-code-bg px-4 py-3 font-mono text-[11.5px] leading-relaxed text-code-fg">
                        <code>
                          {"public class HelloJava {\n    public static void main(String[] args) {\n        System.out.println(\""}
                          <span ref={literalRef} className="rounded-sm">
                            {ORIGINAL_TEXT}
                          </span>
                          {"\");\n    }\n}"}
                        </code>
                      </pre>
                      <div ref={resultRef} className="overflow-hidden border-t border-rule bg-paper-sunk px-4 py-3">
                        <p className="mb-1.5 text-[11px] text-ink-muted">done — 118ms — passed</p>
                        <pre ref={stdoutRef} className="font-mono text-[12px] text-ink">
                          {EXPECTED_OUTPUT}
                        </pre>
                      </div>
                    </div>
                    <p ref={statusRef} className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-success">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      That&rsquo;s it.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
