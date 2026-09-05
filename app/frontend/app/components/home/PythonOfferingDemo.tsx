"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Play, Clipboard, CheckCircle2 } from "lucide-react";
import Blocks from "@/app/components/lesson-blocks";
import type { LessonContentBlock } from "@/src/data/lessons/blocks";

/**
 * A scripted, looping walkthrough of the REAL Python Week 1 · Exercise 1
 * ("Say hello") — same copy, same starter code, same expected output, and
 * the same starter-code / CodeRunner / autograder chrome the real lesson
 * page renders (see LessonViewerClient.tsx's ExercisePanel and
 * CodeRunner.tsx), not an invented mock-up. It scrolls the page, types the
 * fix, runs it, and shows the real "That's it." success message — the same
 * beats a student actually goes through.
 */
const LESSON_BLOCKS: LessonContentBlock[] = [
  { type: "heading", level: 2, text: "Exercise 1: Say hello" },
  {
    type: "paragraph",
    text: 'Welcome to your first Python programming exercise! Let\'s start with the classic "Hello, World" program.',
  },
  {
    type: "paragraph",
    text: 'In Python, we use the `print()` function to display text on the screen. Here\'s how you can print "Hello, World!":',
  },
  { type: "code", language: "python", code: "print('Hello, World!')" },
  { type: "paragraph", text: "Now it's your turn! Try printing the following statement:" },
  { type: "code", language: "python", code: "hello, world" },
  { type: "paragraph", text: "Type your code in the editor below, then hit the **Run** button to see if it works!" },
];

const STARTER_CODE = "# Write your code here to print 'hello, world'\n";
const SOLUTION_CODE = "print('hello, world')";
const EXPECTED_OUTPUT = "hello, world";
const LESSON_SCALE = 0.72;

const TIMINGS = { scroll: 2.8, hold1: 0.6, type: 1.1, run: 0.3, hold2: 2.4, fade: 0.4 } as const;

export default function PythonOfferingDemo() {
  const scrollFrameRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLSpanElement>(null);
  const runBtnRef = useRef<HTMLButtonElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const stdoutRef = useRef<HTMLPreElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const scrollFrame = scrollFrameRef.current;
    const scrollContent = scrollContentRef.current;
    const fade = fadeRef.current;
    const code = codeRef.current;
    const runBtn = runBtnRef.current;
    const result = resultRef.current;
    const stdout = stdoutRef.current;
    const status = statusRef.current;
    if (!scrollFrame || !scrollContent || !fade || !code || !runBtn || !result || !stdout || !status) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      code.textContent = SOLUTION_CODE;
      gsap.set(result, { autoAlpha: 1, height: "auto" });
      gsap.set(status, { autoAlpha: 1 });
      return;
    }

    // Measure with the result panel at its expanded height — it's collapsed
    // to 0 at rest, and scrollHeight taken before that would undercount how
    // far the page needs to scroll once the panel opens.
    gsap.set(result, { autoAlpha: 1, height: "auto" });
    const scrollDistance = Math.max(20, scrollContent.scrollHeight - scrollFrame.clientHeight);
    const typeState = { n: 0 };

    gsap.set(result, { autoAlpha: 0, height: 0 });
    gsap.set(status, { autoAlpha: 0, y: 4 });
    gsap.set(runBtn, { scale: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    tl.addLabel("start")
      .to(scrollContent, { y: -scrollDistance, duration: TIMINGS.scroll, ease: "power1.inOut" }, "start")
      .to({}, { duration: TIMINGS.hold1 })
      .call(() => {
        typeState.n = 0;
        code.textContent = "";
      })
      .to(typeState, {
        n: SOLUTION_CODE.length,
        duration: TIMINGS.type,
        ease: "none",
        onUpdate: () => {
          code.textContent = SOLUTION_CODE.slice(0, Math.round(typeState.n));
        },
      })
      .to(runBtn, { scale: 0.92, duration: 0.1 }, "+=0.15")
      .to(runBtn, { scale: 1, duration: 0.15, ease: "back.out(2)" })
      .to(result, { autoAlpha: 1, height: "auto", duration: TIMINGS.run, ease: "power2.out" }, "-=0.05")
      .to(status, { autoAlpha: 1, y: 0, duration: 0.35 }, "+=0.15")
      .to({}, { duration: TIMINGS.hold2 })
      .to(fade, { autoAlpha: 0, duration: TIMINGS.fade, ease: "power1.inOut" })
      .call(() => {
        gsap.set(scrollContent, { y: 0 });
        code.textContent = "";
        gsap.set(result, { autoAlpha: 0, height: 0 });
        gsap.set(status, { autoAlpha: 0, y: 4 });
      })
      .to(fade, { autoAlpha: 1, duration: TIMINGS.fade, ease: "power1.inOut" });

    return () => {
      tl.kill();
    };
  }, []);

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
          challengercoding.org/lessons/python/1
        </span>
      </div>

      <div ref={fadeRef} className="absolute inset-0 top-9 flex flex-col">
        <div ref={scrollFrameRef} className="relative min-h-0 flex-1 overflow-hidden px-5 pb-4 pt-4">
          <div
            ref={scrollContentRef}
            className="relative origin-top-left"
            style={{ width: `${100 / LESSON_SCALE}%`, transform: `scale(${LESSON_SCALE})` }}
          >
            <Blocks blocks={LESSON_BLOCKS} />

            {/* Starter code — same chrome as the real lesson's "Starter code" box. */}
            <section className="mt-2 overflow-hidden rounded-md border border-rule">
              <div className="flex items-center justify-between gap-4 border-b border-rule bg-paper-sunk px-4 py-2">
                <span className="label text-[11px]">Starter code</span>
                <Clipboard className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              </div>
              <pre className="overflow-x-auto bg-code-bg px-4 py-3 font-mono text-[11px] leading-relaxed text-code-fg">
                <code>{STARTER_CODE}</code>
              </pre>
            </section>

            {/* Write your code here — the real CodeRunner, typed and run. */}
            <section className="mt-6">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4">
                <h2 className="label text-[11px]">Write your code here</h2>
                <p className="text-[11px] text-ink-muted">
                  Make it print <code className="font-mono text-ink">{EXPECTED_OUTPUT}</code>
                </p>
              </div>
              <div className="overflow-hidden rounded-md border border-rule">
                <div className="flex items-center justify-between gap-4 border-b border-rule bg-paper-sunk px-4 py-2">
                  <span className="label text-[11px]">python</span>
                  <button
                    ref={runBtnRef}
                    tabIndex={-1}
                    className="btn btn-brand inline-flex items-center gap-1.5 !px-3 !py-1.5 text-[11px]"
                  >
                    <Play className="h-3 w-3" aria-hidden="true" />
                    Run
                  </button>
                </div>
                <div className="bg-code-bg px-4 py-3 font-mono text-[12px] leading-relaxed text-code-fg">
                  <span ref={codeRef} />
                  <span className="home-cursor align-middle" />
                </div>
                <div ref={resultRef} className="overflow-hidden border-t border-rule bg-paper-sunk px-4 py-3">
                  <p className="mb-1.5 text-[11px] text-ink-muted">done — 42ms — passed</p>
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
  );
}
