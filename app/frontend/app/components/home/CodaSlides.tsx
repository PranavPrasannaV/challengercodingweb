import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { courses, TRACKS } from "@/src/data/courses";
import Image from "next/image";
import { Bar } from "./skeletons";

/**
 * The coda: three quiet product screenshots that play after the three
 * choreographed scenes and before the loop turns back to Scene 1. By
 * design these get none of the corner-dot / 3D-panel / ambient treatment —
 * each is one flat "browser window" card that fades and scales in, holds,
 * and crossfades to the next. Calm on purpose; the eye rests here.
 *
 * Content is read from the same course data the real pages use, so the
 * slides stay in step with the catalogue.
 */

function Window({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-home-rule bg-white shadow-[0_30px_60px_-24px_rgb(20_23_28_/_0.35)]">
      <div className="flex items-center gap-2 border-b border-home-rule bg-home-bg px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
        </div>
        <div className="flex-1 truncate rounded-full bg-white px-3 py-1 font-mono text-[9.5px] text-home-ink-soft">{url}</div>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function CoursesSlide() {
  const shown = TRACKS.map((t) => courses.find((c) => c.track === t.id)).filter((c) => c !== undefined);
  return (
    <Window url="challengercoding.com/learn">
      <div className="px-6 py-5 font-sans">
        <p className="font-serif text-[18px] text-home-ink">Your courses</p>
        <p className="mt-1 text-[9.5px] text-home-ink-soft">Every course is open. Pick up wherever you left off.</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {shown.map((c) => {
            const mark = TRACKS.find((t) => t.id === c.track)?.mark;
            return (
              <div key={c.id} className="flex flex-col gap-2 border border-home-rule bg-white p-3">
                <div className="flex items-start gap-2">
                  {mark && <Image src={mark} alt="" width={24} height={24} className="h-6 w-auto shrink-0 object-contain" />}
                  <p className="font-serif text-[11px] leading-tight text-home-ink">{c.title}</p>
                </div>
                <Bar w="90%" h={4} tone="soft" />
                <Bar w="70%" h={4} tone="soft" />
                <span className="mt-1 inline-flex items-center gap-1 text-[8.5px] font-semibold text-home-teal">
                  View lessons <ArrowUpRight className="h-2.5 w-2.5" aria-hidden="true" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Window>
  );
}

const RESOURCES = [
  ["Practice", ["CodingBat", "Codewars", "HackerRank", "LeetCode"]],
  ["Install", ["Visual Studio Code", "Python", "Java JDK"]],
] as const;

function ResourcesSlide() {
  return (
    <Window url="challengercoding.com/resources">
      <div className="px-6 py-5 font-sans">
        <p className="font-serif text-[18px] text-home-ink">Resources</p>
        <p className="mt-1 text-[9.5px] text-home-ink-soft">Practice sites we point students to, and the official docs.</p>
        <div className="mt-4 grid grid-cols-2 gap-x-8">
          {RESOURCES.map(([title, items]) => (
            <div key={title}>
              <p className="border-b border-home-rule pb-1.5 font-serif text-[12px] text-home-ink">{title}</p>
              <ul>
                {items.map((name) => (
                  <li key={name} className="flex items-center justify-between border-b border-home-rule py-2">
                    <span className="text-[9.5px] font-semibold text-home-ink">{name}</span>
                    <ArrowUpRight className="h-2.5 w-2.5 text-home-ink-soft" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

const STEPS = ["Hello, world", "Variables", "Types and casting", "Conditionals", "Loops", "Functions", "Wrap-up"];

function CompletedSlide() {
  return (
    <Window url="challengercoding.com/lessons/java-1">
      <div className="flex h-full font-sans">
        <aside className="w-[34%] shrink-0 border-r border-home-rule px-4 py-4">
          <p className="mb-2 text-[8.5px] font-semibold tracking-wide text-home-ink-soft">JAVA · WEEK 1</p>
          <ol className="space-y-1.5">
            {STEPS.map((s) => (
              <li key={s} className="flex items-center gap-1.5 text-[9.5px] text-home-ink">
                <CheckCircle2 className="h-3 w-3 shrink-0 text-home-teal" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ol>
        </aside>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-home-teal-tint">
            <CheckCircle2 className="h-7 w-7 text-home-teal" aria-hidden="true" />
          </span>
          <p className="font-serif text-[18px] text-home-ink">Week 1 complete</p>
          <p className="text-[9.5px] text-home-ink-soft">7 of 7 steps · all tests passed</p>
          <span className="btn bg-home-teal text-white !py-1.5 !px-3 text-[9.5px] pointer-events-none">Start Week 2</span>
        </div>
      </div>
    </Window>
  );
}

export const CODA_SLIDES = [CoursesSlide, ResourcesSlide, CompletedSlide];

export default function CodaSlides() {
  return (
    <>
      {CODA_SLIDES.map((Slide, i) => (
        <div key={i} data-hero={`slide${i}`} className="hero-slide" aria-hidden="true">
          <Slide />
        </div>
      ))}
    </>
  );
}
