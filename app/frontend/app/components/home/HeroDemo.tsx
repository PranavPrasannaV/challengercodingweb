"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import gsap from "gsap";
import { submitRun, pollRun } from "@/src/lib/executionApi";
import { getCourse } from "@/src/data/courses";
import CourseCard from "@/app/components/CourseCard";
import { SyllabusList, ResumeButton } from "@/app/tutorials/[courseId]/CourseProgress";
import Blocks from "@/app/components/lesson-blocks";
import type { LessonContentBlock } from "@/src/data/lessons/blocks";
import { SCENES, CODA, STARTER_CODE, CANNED_OUTPUT_LINES, type SceneConfig } from "./scenes";
import { STAGE_W, STAGE_H, STAGE_MAX_W, satellitesFor, entranceOrder, entranceAt, type SatelliteId, type SceneId } from "./stage";
import { setPanelHidden, setPanelShown, startAmbient, buildPanelEntrance, ENTRANCE_DUR } from "./panelMotion";
import Panel from "./Panel";
import Cutout from "./Cutout";
import EditorChrome from "./EditorChrome";
import LessonBase from "./LessonBase";
import CodaSlides, { CODA_SLIDES } from "./CodaSlides";
import { ActivityCard, TestsCard, ProgressCard, StreakCard, QuizCard } from "./skeletons";

function anonId(): string {
  if (typeof window === "undefined") return "anonymous";
  const key = "executionAnonId";
  let id = localStorage.getItem(key);
  if (!id) {
    id = `anon-${crypto.randomUUID()}`;
    localStorage.setItem(key, id);
  }
  return id;
}

const sceneDuration = (id: SceneConfig["id"]) =>
  (SCENES.find((s) => s.id === id)?.duration ?? 4400) / 1000;

// Real course records — the same data every course card/syllabus/enroll flow
// on the site reads from. Fixed ids that exist in src/data/courses.ts.
const pythonCourse = getCourse("python")!;
const javaCourse = getCourse("java")!;

// Used only when the execution engine can't be reached at request time (see
// page.tsx), so Scene 2 still has something to show — the same degradation
// every real lesson page falls back to.
const FALLBACK_JAVA_BLOCKS: LessonContentBlock[] = [
  { type: "heading", level: 2, text: "Java · Week 1" },
  {
    type: "paragraph",
    text: "Every Java program starts with a class and a main method — the entry point Java looks for first.",
  },
  {
    type: "code",
    language: "java",
    code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("hello, coder!");\n    }\n}',
  },
  { type: "heading", level: 2, text: "Variables" },
  { type: "paragraph", text: "A variable stores a value so your program can use it again later." },
  { type: "code", language: "java", code: "int age = 12;\nString name = \"Sarah\";\nSystem.out.println(name + \" is \" + age);" },
  { type: "paragraph", text: "Try changing the number and running it again — the output follows." },
];

/** Scene 2's lesson content renders at this scale inside the content column. */
const LESSON_SCALE = 0.7;

/**
 * Page-turn timing (s). Deliberately asymmetric: the outgoing scene — base
 * layer, centre object and every panel, as one rigid page — is swept away
 * fast and decisively (power3.in, 0.55s), while the incoming page arrives
 * slow-fast-slow (power2.inOut, 1.2s). With those eases the outgoing page
 * is edge-on (90° of its 100°) at ~96% of its duration and the incoming
 * one leaves edge-on at ~19% of its own, so a 0.3s offset has the second
 * page emerge just as the first vanishes. `push` is how far the whole
 * assembly recedes (translateZ) at the crossover so the turn reads as a
 * volume swinging through depth, not a card spinning on a turntable.
 * Scene B's panels start building at ~70% of B's turn.
 */
const TURN = { out: 0.55, inDelay: 0.3, in: 1.2, push: 150 } as const;
const TURN_CROSS = TURN.out * 0.96; // outgoing page edge-on
const TURN_LANDED = TURN.inDelay + TURN.in; // when the incoming page is flat
const TURN_PANELS_AT = TURN.inDelay + TURN.in * 0.7;

const q = (root: HTMLElement | null, name: string) =>
  root?.querySelector<HTMLElement>(`[data-hero="${name}"]`) ?? null;

export default function HeroDemo({ javaBlocks }: { javaBlocks: LessonContentBlock[] | null }) {
  const [mode, setMode] = useState<"script" | "live">("script");
  const [code, setCode] = useState(STARTER_CODE);
  const [running, setRunning] = useState(false);
  const [stdout, setStdout] = useState<string | null>(null);
  const [stderr, setStderr] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);
  const pythonPageRef = useRef<HTMLDivElement>(null);
  const lessonPageRef = useRef<HTMLDivElement>(null);
  const codaPageRef = useRef<HTMLDivElement>(null);

  // Scene 1 terminal internals the script drives directly.
  const codeDisplayRef = useRef<HTMLSpanElement>(null);
  const runBtnRef = useRef<HTMLButtonElement>(null);
  const outputPanelRef = useRef<HTMLDivElement>(null);
  const outputLine1Ref = useRef<HTMLDivElement>(null);
  const outputLine2Ref = useRef<HTMLDivElement>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const focusOnLiveRef = useRef(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const driftTweenRef = useRef<gsap.core.Tween | null>(null);
  const ambientRef = useRef<gsap.core.Tween[]>([]);

  // Keep the design canvas scaled to the stage's real width — the whole
  // composition resizes as one unit, never a per-panel reflow.
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const fit = () => stage.style.setProperty("--stage-scale", String(stage.clientWidth / STAGE_W));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  /* The master timeline: two scenes joined by 3D page turns, looping
     forever like a promo video — hovering never pauses it. Only real input
     (a click into the terminal, or Run) stops the loop and hands the
     terminal over live (see jumpToLive). Sub-durations are literals; each
     scene's hold beat derives from SCENES[].duration so overall pacing
     stays adjustable from one config array. */
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const drift = driftRef.current;
    const pages: Record<SceneId, HTMLDivElement | null> = {
      python: pythonPageRef.current,
      lesson: lessonPageRef.current,
    };
    const coda = codaPageRef.current;
    if (!canvas || !drift || !coda || !pages.python || !pages.lesson) return;
    const slides = CODA_SLIDES.map((_, i) => q(coda, `slide${i}`));

    const panels: Partial<Record<SatelliteId, HTMLElement>> = {};
    canvas.querySelectorAll<HTMLElement>("[data-panel]").forEach((el) => {
      panels[el.dataset.panel as SatelliteId] = el;
    });
    const eachPanel = (scene: SceneId, fn: (el: HTMLElement, id: SatelliteId) => void) =>
      satellitesFor(scene).forEach((id) => {
        const el = panels[id];
        if (el) fn(el, id);
      });

    // Scene 2 internals
    const scrollFrame = q(pages.lesson, "scrollFrame");
    const scrollContent = q(pages.lesson, "scrollContent");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      // Instant cut to the settled, interactive end state. No script, no
      // builds, no page turns, no drift.
      gsap.set([pages.lesson, coda], { display: "none" });
      gsap.set(pages.python, { autoAlpha: 1, rotationY: 0 });
      eachPanel("python", setPanelShown);
      eachPanel("lesson", setPanelHidden);
      setMode("live");
      return;
    }

    // ------------------------------------------------------------ initial
    gsap.set(pages.python, { autoAlpha: 1, rotationY: 0 });
    gsap.set(pages.lesson, { autoAlpha: 0, rotationY: 100 });
    gsap.set(coda, { autoAlpha: 0, rotationY: 0 });
    gsap.set(slides, { autoAlpha: 0, scale: 0.97 });
    (Object.keys(panels) as SatelliteId[]).forEach((id) => setPanelHidden(panels[id]!, id));

    gsap.set(outputPanelRef.current, { height: 0, opacity: 0, overflow: "hidden" });
    gsap.set([outputLine1Ref.current, outputLine2Ref.current], { autoAlpha: 0, y: 4 });
    gsap.set(runBtnRef.current, { scale: 1 });
    gsap.set(scrollContent, { y: 0 });

    // Stage-level idle drift — one shared, slow motion on the drift wrapper.
    // Panels themselves stay flat and straight: no per-panel oscillation and
    // no depth parallax rotation (see startAmbient, now a no-op).
    ambientRef.current = (Object.keys(panels) as SatelliteId[])
      .map((id) => startAmbient(panels[id]!, id))
      .filter((t): t is gsap.core.Tween => t !== null);

    gsap.set(drift, { rotationX: -1, rotationY: -0.5, z: 0 });
    driftTweenRef.current = gsap.to(drift, {
      rotationX: "+=2",
      rotationY: "+=1",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const typeState = { n: 0 };
    const tl = gsap.timeline({ repeat: -1 });
    tlRef.current = tl;
    // Dev-only: lets a screenshot script pause and seek to a label.
    if (process.env.NODE_ENV !== "production") (window as unknown as { __heroTl?: gsap.core.Timeline }).__heroTl = tl;

    /** Corner-dot builds for a scene's panels, back to front by depth. */
    const buildPanels = (scene: SceneId, label: string) =>
      eachPanel(scene, (el, id) => buildPanelEntrance(el, tl, `${label}+=${entranceAt(id)}`));
    /** Total time for a scene's panels to finish building after `label`. */
    const panelsSettled = (scene: SceneId) => entranceAt(entranceOrder(scene).at(-1)!) + ENTRANCE_DUR;
    /**
     * 3D page turn. Scene A — its base layer, centre object and every panel,
     * front and behind, all children of one preserve-3d page — snaps into
     * the rotation together and is swept away fast (power3.in), then B
     * arrives slowly from the other side. The thin depth sliver near the
     * 90° crossover is the point: panels behind the base sweep out in front
     * of it and vice versa. No cross-fade — visibility flips instantly at
     * the ends. While the pages turn, the whole assembly (the drift
     * wrapper, so the pages AND their panels' depth) recedes to
     * translateZ(-push) at the crossover and comes back as B lands. Once A
     * is out of sight its panels are reset to hidden so they can build
     * again if the page comes back around. `dir` flips which way the turn
     * swings (1 = the outgoing page swings left, -1 = right) — consecutive
     * turns alternate direction so the loop doesn't read as one page
     * flipping the same way round and round.
     */
    const pageTurn = (
      fromScene: SceneId | null,
      from: HTMLElement,
      to: HTMLElement,
      label: string,
      flatIn = false,
      dir: 1 | -1 = 1,
    ) => {
      tl.addLabel(label)
        .to(from, { rotationY: -100 * dir, duration: TURN.out, ease: "power3.in" }, label)
        .set(from, { autoAlpha: 0 }, `${label}+=${TURN.out}`)
        .to(drift, { z: -TURN.push, duration: TURN_CROSS, ease: "power2.in" }, label);
      if (fromScene) tl.call(() => eachPanel(fromScene, setPanelHidden), [], `${label}+=${TURN.out}`);
      if (flatIn) {
        // The coda's flat page simply appears once the old scene is gone;
        // its slides do their own fade/scale entrance.
        tl.set(to, { autoAlpha: 1, rotationY: 0 }, `${label}+=${TURN.out}`)
          .to(drift, { z: 0, duration: 0.5, ease: "power2.out" }, `${label}+=${TURN_CROSS}`);
      } else {
        tl.set(to, { autoAlpha: 1, rotationY: 100 * dir }, label)
          .to(to, { rotationY: 0, duration: TURN.in, ease: "power2.inOut" }, `${label}+=${TURN.inDelay}`)
          .to(drift, { z: 0, duration: TURN_LANDED - TURN_CROSS, ease: "power2.out" }, `${label}+=${TURN_CROSS}`);
      }
    };
    const landed = TURN_LANDED;

    // ============================================================= Scene 1
    // Typing + run + output take ~2.6s; panels start at 2.3 and settle at
    // 2.3 + panelsSettled. The hold is whatever's left of the budget.
    const panels1At = 2.3;
    const hold1 = Math.max(1.5, sceneDuration("terminal") - (panels1At + panelsSettled("python")));

    tl.addLabel("scene1")
      // Loop seam: the previous cycle left the terminal full; clear it.
      .call(() => {
        if (codeDisplayRef.current) codeDisplayRef.current.textContent = "";
      }, [], "scene1")
      .to(
        typeState,
        {
          n: STARTER_CODE.length,
          duration: 1.6,
          ease: "none",
          onUpdate: () => {
            if (codeDisplayRef.current) {
              codeDisplayRef.current.textContent = STARTER_CODE.slice(0, Math.round(typeState.n));
            }
          },
        },
        "scene1+=0.3",
      )
      .to(runBtnRef.current, { scale: 0.92, duration: 0.12, ease: "power1.out" }, "+=0.15")
      .to(runBtnRef.current, { scale: 1, duration: 0.18, ease: "back.out(2)" })
      .to(outputPanelRef.current, { height: 72, opacity: 1, duration: 0.4, ease: "power2.out" }, "+=0.05")
      .to([outputLine1Ref.current, outputLine2Ref.current], { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.08 }, "<0.1");

    tl.addLabel("panels1", `scene1+=${panels1At}`);
    buildPanels("python", "panels1");

    tl.to({}, { duration: hold1 }).addLabel("turn2");
    pageTurn("python", pages.python, pages.lesson, "turn2");

    // ============================================================= Scene 2
    // The real lesson content decides how far there is to scroll — measured
    // from the rendered Blocks tree, not guessed.
    const frameH = scrollFrame?.clientHeight ?? 300;
    const contentH = (scrollContent?.scrollHeight ?? 400) * LESSON_SCALE;
    const scrollDistance = Math.max(40, contentH - frameH);
    const codeEl = scrollContent?.querySelector<HTMLElement>("pre") ?? null;

    tl.addLabel("scene2", `turn2+=${landed}`);
    tl.addLabel("panels2", `turn2+=${TURN_PANELS_AT}`);
    buildPanels("lesson", "panels2");

    const scrollDur = 2.8;
    tl.to(scrollContent, { y: -scrollDistance, duration: scrollDur, ease: "power1.inOut" }, "scene2+=0.2");

    if (codeEl) {
      // Highlight the code block as its middle crosses the frame's middle.
      const codeMid = (codeEl.offsetTop + codeEl.offsetHeight / 2) * LESSON_SCALE;
      const f = Math.min(1, Math.max(0, (codeMid - frameH / 2) / scrollDistance));
      const tCross = 0.2 + f * scrollDur;
      tl.to(codeEl, { boxShadow: "0 0 0 3px rgba(14,124,107,0.45)", duration: 0.25 }, `scene2+=${Math.max(0.4, tCross - 0.3)}`)
        .to(codeEl, { boxShadow: "0 0 0 0px rgba(14,124,107,0)", duration: 0.4 }, `scene2+=${Math.max(0.9, tCross + 0.5)}`);
    }

    const hold2 = Math.max(1.5, sceneDuration("lesson") - (0.2 + scrollDur));
    tl.to({}, { duration: hold2 }, `scene2+=${0.2 + scrollDur}`).addLabel("turnCoda");

    // ================================================================ Coda
    // Scene 2 is swept away like the others; the coda page is already flat,
    // so its slides just fade/scale in one after another and crossfade —
    // no page turn, no dots, no ambient motion. A quiet beat before the
    // loop closes.
    pageTurn("lesson", pages.lesson, coda, "turnCoda", true, -1);
    tl.addLabel("coda", `turnCoda+=${TURN.out}`);
    let t = 0;
    slides.forEach((slide) => {
      if (!slide) return;
      tl.to(slide, { autoAlpha: 1, scale: 1, duration: CODA.slideIn, ease: "power2.out" }, `coda+=${t}`);
      const outAt = t + CODA.slideIn + CODA.hold;
      tl.to(slide, { autoAlpha: 0, duration: CODA.crossfade, ease: "power1.inOut" }, `coda+=${outAt}`);
      // The next slide starts fading in as this one starts fading out.
      t = outAt;
    });
    // Once hidden, every slide resets its scale, ready for the next loop.
    tl.set(slides, { scale: 0.97 }, `coda+=${t + CODA.crossfade}`);

    // The Python page comes back around bare (its panels were reset when it
    // left), so the loop seam is the same cold open as the first play:
    // page lands, terminal types, panels build. The coda page turns away
    // exactly like a full scene does.
    tl.addLabel("turnHome", `coda+=${t}`);
    pageTurn(null, coda, pages.python, "turnHome", false, 1);
    tl.to({}, { duration: 0.3 }, `turnHome+=${landed}`);

    return () => {
      tl.kill();
      driftTweenRef.current?.kill();
      ambientRef.current.forEach((t) => t.kill());
    };
  }, []);

  // Once settled live, the canned scripted output makes way for the real one.
  useEffect(() => {
    if (mode !== "live") return;
    gsap.set(outputPanelRef.current, { height: 0, opacity: 0 });
    gsap.set([outputLine1Ref.current, outputLine2Ref.current], { autoAlpha: 0, y: 4 });
    // A click into the terminal mid-loop lands the caret in the editable
    // field it just became — never on load (reduced-motion starts live).
    if (focusOnLiveRef.current) {
      focusOnLiveRef.current = false;
      textareaRef.current?.focus();
    }
  }, [mode]);


  async function runLive(source: string) {
    setRunning(true);
    setErrorMsg(null);
    setStdout(null);
    setStderr(null);
    try {
      const { run_id } = await submitRun({ language: "python", code: source, user_id: anonId() });
      const result = await pollRun(run_id);
      setStdout(result.stdout);
      setStderr(result.stderr);
      if (result.status !== "done") setErrorMsg("The run didn't finish cleanly.");
    } catch (e) {
      setErrorMsg(
        e instanceof Error && e.message.includes("not set")
          ? "Execution engine isn't configured for this build."
          : "Couldn't reach the execution engine right now.",
      );
    } finally {
      setRunning(false);
    }
  }

  function jumpToLive() {
    // Real input beats the script — cut straight to Scene 1's settled,
    // interactive state instead of fighting for control. Hover alone never
    // gets here; only a click into the terminal or on Run does.
    if (mode === "live") return;
    focusOnLiveRef.current = true;
    tlRef.current?.kill();
    const canvas = canvasRef.current;
    if (driftRef.current) gsap.set(driftRef.current, { z: 0 });
    gsap.set(lessonPageRef.current, { autoAlpha: 0, rotationY: 100 });
    gsap.set(codaPageRef.current, { autoAlpha: 0 });
    gsap.set(pythonPageRef.current, { autoAlpha: 1, rotationY: 0 });
    canvas?.querySelectorAll<HTMLElement>("[data-panel]").forEach((el) => {
      const id = el.dataset.panel as SatelliteId;
      if (satellitesFor("python").includes(id)) setPanelShown(el, id);
      else setPanelHidden(el, id);
    });
    setMode("live");
  }

  function handleRunClick() {
    if (mode === "script") {
      jumpToLive();
      setCode(STARTER_CODE);
      void runLive(STARTER_CODE);
      return;
    }
    void runLive(code);
  }

  const showLiveOutput = mode === "live" && (stdout || stderr || errorMsg);

  return (
    <div className="hero-stage-frame">
      <div className="hero-stage-wrap" style={{ maxWidth: STAGE_MAX_W }}>
        <div ref={stageRef} className="hero-stage" style={{ aspectRatio: `${STAGE_W} / ${STAGE_H}` }}>
          <div ref={canvasRef} className="hero-stage-canvas" style={{ width: STAGE_W, height: STAGE_H }}>
            <div ref={driftRef} className="hero-stage-drift">
              {/* ================================================ Scene 1: Playground */}
              <div ref={pythonPageRef} className="scene-page">
                <EditorChrome />

                {/* Centre object: the real Playground's CodeRunner (scripted, then live) — same
                    chrome as CodeRunner.tsx: label + Run button, bg-code-bg editor, bg-paper-sunk
                    result panel. */}
                <div
                  data-hero="terminal"
                  onPointerDown={jumpToLive}
                  className="absolute left-1/2 top-1/2 w-[360px] max-w-[92%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-rule shadow-[0_34px_60px_-18px_rgb(20_23_28_/_0.35)]"
                >
                  <div className="flex items-center justify-between gap-4 border-b border-rule bg-paper-sunk px-4 py-2">
                    <span className="label text-[11px]">python</span>
                    <button
                      ref={runBtnRef}
                      onClick={handleRunClick}
                      disabled={running}
                      className="btn btn-brand inline-flex items-center gap-1.5 !px-3 !py-1.5 text-[11px] disabled:opacity-60"
                    >
                      <Play className="h-3 w-3" aria-hidden="true" />
                      {running ? "Running…" : "Run"}
                    </button>
                  </div>

                  {mode === "script" ? (
                    <div className="min-h-[5.75rem] whitespace-pre-wrap bg-code-bg px-4 py-4 font-mono text-[13px] leading-relaxed text-code-fg">
                      <span ref={codeDisplayRef} />
                      <span className="home-cursor align-middle" aria-hidden="true" />
                    </div>
                  ) : (
                    <textarea
                      ref={textareaRef}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      spellCheck={false}
                      rows={4}
                      aria-label="Python code to run"
                      className="w-full resize-none bg-code-bg px-4 py-4 font-mono text-[13px] leading-relaxed text-code-fg focus:outline-none"
                    />
                  )}

                  {/* Scripted, canned output — never touches the execution API */}
                  <div ref={outputPanelRef} className="border-t border-rule bg-paper-sunk">
                    <div className="px-4 py-3">
                      <p className="mb-1.5 text-[11px] text-ink-muted">done — passed</p>
                      <div ref={outputLine1Ref} className="font-mono text-[12px] text-ink">
                        {CANNED_OUTPUT_LINES[0]}
                      </div>
                      <div ref={outputLine2Ref} className="font-mono text-[12px] text-ink">
                        {CANNED_OUTPUT_LINES[1]}
                      </div>
                    </div>
                  </div>

                  {/* Live output — real API result, only in response to the visitor's own Run */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      showLiveOutput ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-rule bg-paper-sunk px-4 py-3">
                        {errorMsg && <p className="font-mono text-[12px] text-danger">{errorMsg}</p>}
                        {stdout && <pre className="whitespace-pre-wrap font-mono text-[12px] text-ink">{stdout}</pre>}
                        {stderr && <pre className="whitespace-pre-wrap font-mono text-[12px] text-danger">{stderr}</pre>}
                      </div>
                    </div>
                  </div>
                </div>

                <Panel id="activity">
                  <ActivityCard text="Sarah completed Python Week 2" when="2 min ago" />
                </Panel>
                <Panel id="courseCard">
                  <Cutout width={188} height={100} scale={0.56}>
                    <CourseCard course={pythonCourse} />
                  </Cutout>
                </Panel>
                <Panel id="enroll">
                  <Link
                    href="#"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="btn bg-home-teal text-white hover:bg-home-teal-deep !py-2 !px-4 text-small pointer-events-none"
                  >
                    Enroll
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </Panel>
                <Panel id="tests">
                  <TestsCard />
                </Panel>
                <Panel id="syllabus">
                  <Cutout width={208} height={104} scale={0.56}>
                    <SyllabusList course={pythonCourse} />
                  </Cutout>
                </Panel>
              </div>

              {/* ================================================ Scene 2: Java lesson */}
              <div ref={lessonPageRef} className="scene-page">
                <LessonBase course={javaCourse}>
                  {/* The real lesson-block renderer, scaled down — not a mock-up. */}
                  <div
                    data-hero="scrollContent"
                    className="relative origin-top-left"
                    style={{ width: `${100 / LESSON_SCALE}%`, transform: `scale(${LESSON_SCALE})` }}
                  >
                    <Blocks blocks={javaBlocks ?? FALLBACK_JAVA_BLOCKS} />
                  </div>
                </LessonBase>

                <Panel id="progress">
                  <ProgressCard />
                </Panel>
                <Panel id="streak">
                  <StreakCard />
                </Panel>
                <Panel id="quiz">
                  <QuizCard />
                </Panel>
                <Panel id="resume">
                  <Cutout width={168} height={58} scale={0.82}>
                    <ResumeButton course={javaCourse} />
                  </Cutout>
                </Panel>
              </div>

              {/* ================================================ Coda: quiet screenshots */}
              <div ref={codaPageRef} className="scene-page">
                <CodaSlides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
