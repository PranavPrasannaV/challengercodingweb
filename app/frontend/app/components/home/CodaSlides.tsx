import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { courses, coursesInTrack, TRACKS, totalLessons, weeksIn } from "@/src/data/courses";
import Image from "next/image";

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

/** Mirrors app/tutorials/page.tsx: grouped by track, each track's real
 *  courses shown as their own compact cards — not one card per track. */
function CoursesSlide() {
  return (
    <Window url="challengercoding.org/tutorials">
      <div className="px-6 py-5 font-sans">
        <div className="flex items-end justify-between border-b border-home-rule pb-2">
          <p className="font-serif text-[16px] text-home-ink">Courses</p>
          <p className="font-mono text-[7px] text-home-ink-soft">
            {courses.length} courses · {totalLessons} lessons
          </p>
        </div>
        <div className="mt-3 space-y-3">
          {TRACKS.map((track) => (
            <div key={track.id}>
              <div className="flex items-center gap-1.5">
                <Image src={track.mark} alt="" width={14} height={14} className="h-3.5 w-auto object-contain" />
                <p className="text-[9px] font-semibold text-home-ink">{track.label}</p>
              </div>
              <div className="mt-1.5 grid grid-cols-2 gap-2">
                {coursesInTrack(track.id).map((c) => (
                  <div key={c.id} className="border border-home-rule bg-white p-1.5">
                    <p className="text-[8px] font-semibold leading-tight text-home-ink">
                      {c.shortTitle}
                      {c.stage === 2 && <sup className="text-home-teal">II</sup>}
                    </p>
                    <p className="mt-0.5 text-[6.5px] text-home-ink-soft">
                      {c.level} · {weeksIn(c)}w
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

/** Mirrors app/resources/page.tsx: all four real directories (Practice,
 *  Other courses, Install, Reference) with their actual item names — the
 *  old version invented "Resources" as the title and dropped two of the
 *  four sections entirely. */
const DIRECTORIES = [
  ["Practice", ["CodingBat", "Codewars", "HackerRank", "LeetCode"]],
  ["Other courses", ["Codecademy", "edX", "Udemy", "W3Schools"]],
  ["Install", ["Visual Studio Code", "Python", "Java JDK"]],
  ["Reference", ["Python standard library", "Java SE 8 API", "MDN HTML reference"]],
] as const;

function ResourcesSlide() {
  return (
    <Window url="challengercoding.org/resources">
      <div className="px-6 py-5 font-sans">
        <p className="font-serif text-[16px] text-home-ink">Links and resources</p>
        <p className="mt-1 text-[8px] leading-snug text-home-ink-soft">
          Places we point students for more practice, and the official docs.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
          {DIRECTORIES.map(([title, items]) => (
            <div key={title}>
              <p className="border-b border-home-rule pb-1 text-[9px] font-semibold text-home-ink">{title}</p>
              <ul>
                {items.map((name) => (
                  <li key={name} className="flex items-center justify-between border-b border-home-rule py-1">
                    <span className="text-[7.5px] font-medium text-home-ink">{name}</span>
                    <ArrowUpRight className="h-2 w-2 text-home-ink-soft" aria-hidden="true" />
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
    <Window url="challengercoding.org/lessons/java/1">
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
