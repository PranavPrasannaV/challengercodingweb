"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Play, Clipboard, CheckCircle2 } from "lucide-react";
import Blocks from "@/app/components/lesson-blocks";
import type { LessonContentBlock } from "@/src/data/lessons/blocks";

/**
 * A scripted, looping walkthrough of the REAL Java Week 1 · Exercise 1 ("My
 * First Java Program") — same copy, same starter code, same expected
 * output, same starter-code / CodeRunner / autograder chrome the real
 * lesson page renders. Java's starter code already compiles and runs (it
 * just prints the wrong thing), so — unlike Python's from-scratch typing —
 * this edits the one line a real student edits: the string inside
 * println(), then reruns it.
 */
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
const LESSON_SCALE = 0.72;

const TIMINGS = { scroll: 2.8, hold1: 0.6, edit: 0.6, run: 0.3, hold2: 2.4, fade: 0.4 } as const;

export default function JavaOfferingDemo() {
  const scrollFrameRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const literalRef = useRef<HTMLSpanElement>(null);
  const runBtnRef = useRef<HTMLButtonElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const stdoutRef = useRef<HTMLPreElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

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
          challengercoding.org/lessons/java/1
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
  );
}
