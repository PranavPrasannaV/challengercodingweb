import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  courses,
  coursesInTrack,
  TRACKS,
  type Track,
} from "@/src/data/courses";
import { ENROLL_URL } from "@/src/config";
import { fetchLessonSteps } from "@/src/lib/lessons";
import HeroDemo from "./components/home/HeroDemo";
import HeroIntro from "./components/home/HeroIntro";
import MotionCta from "./components/home/MotionCta";
import Reveal from "./components/home/Reveal";
import StatsTicker from "./components/home/StatsTicker";
import ScratchOfferingDemo from "./components/home/ScratchOfferingDemo";
import PythonOfferingDemo from "./components/home/PythonOfferingDemo";
import JavaOfferingDemo from "./components/home/JavaOfferingDemo";

/** One looping preview per track, shown beside its description in "Our Offerings". */
const OFFERING_DEMOS: Record<Track, () => React.JSX.Element> = {
  scratch: ScratchOfferingDemo,
  python: PythonOfferingDemo,
  java: JavaOfferingDemo,
};

/* Quoted verbatim from the previous site, which attributed all three to
   "Current Parent" and nothing more. Splitting them by course or year would
   mean inventing a source, which is the failure this rebuild exists to fix.
   If the people who ran the classes can attribute them, use what they say. */
const testimonials = [
  {
    quote:
      "My child has learned so much through Challenger Coding. The patience and creativity of the instructors are unmatched!",
    source: "Parent",
  },
  {
    quote:
      "Jaden was very easygoing and patient. The study materials were simple and self-explanatory!",
    source: "Parent",
  },
  {
    quote:
      "Jaden is an amazing instructor, he brings such good energy and positivity. The kids really appreciate that!",
    source: "Parent",
  },
];

export default async function Home() {
  // Scene 2 of the hero demo renders this lesson's real content through the
  // real Blocks renderer — not a mock-up. Null only when the execution
  // engine is unreachable; HeroDemo falls back to a static approximation in
  // that case (see its FALLBACK_JAVA_BLOCKS), same as any other lesson page
  // degrades when the engine is down.
  const javaWeek1 = await fetchLessonSteps("java-1");
  const javaBlocks = javaWeek1?.[0]?.blocks ?? null;

  return (
    <main id="main" className="bg-home-bg text-home-ink">
      {/* ---------------------------------------------------------------- */}
      <section className="wrap pt-8 pb-6 md:pt-12 md:pb-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-5">
            <HeroIntro enrollUrl={ENROLL_URL} />
          </div>

          {/* Live, runnable demo — not a screenshot. It plays itself once on
              load, then you can edit the code and hit Run yourself. */}
          <div className="lg:col-span-7">
            <HeroDemo javaBlocks={javaBlocks} />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <StatsTicker />

      {/* ---------------------------------------------------------------- */}
      <section className="wrap section-sm">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="max-w-[48ch] font-sans text-xl font-medium leading-snug text-home-ink sm:text-2xl">
                Challenger Coding is a student-run nonprofit based in
                Sammamish, Washington, teaching Scratch, Python, and Java to
                K&#8211;12 students both in person and online. Founded in
                June 2023, we operate as an official after-school program of
                the Lake Washington School District.
              </p>
              <MotionCta
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-sans font-semibold text-home-teal transition-colors hover:text-home-teal-deep"
              >
                Read our story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MotionCta>
            </div>
            <div className="flex flex-col items-center text-center md:col-span-4 md:col-start-9">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border border-home-rule bg-home-teal-tint">
                <Image
                  src="/jaden-headshot.jpg"
                  alt="Jaden Tang"
                  fill
                  className="object-cover object-center"
                  sizes="6rem"
                />
              </div>
              <p className="mt-4 font-sans text-sm font-semibold text-home-ink">Jaden Tang</p>
              <p className="mt-0.5 font-sans text-sm text-home-ink-soft">Founder</p>
              <p className="mt-1 font-mono text-sm text-home-ink-soft">CS @ Georgia Tech</p>
              <a
                href="https://jadentang.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 rounded-full border border-home-rule px-3 py-1 font-sans text-xs font-semibold text-home-teal transition-colors hover:bg-home-teal-tint"
              >
                Website
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="wrap section">
        <Reveal>
          <div className="flex flex-col gap-3 border-b border-home-rule pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-home-ink">
              Our Offerings
            </h2>
            <p className="font-mono text-sm text-home-ink-soft">
              Scratch, Python and Java — two levels each.
            </p>
          </div>

          <div className="mt-14 space-y-16 md:space-y-24">
            {TRACKS.map((track, i) => {
              const inTrack = coursesInTrack(track.id);
              const first = inTrack[0];
              const reversed = i % 2 === 1;
              const Demo = OFFERING_DEMOS[track.id];
              return (
                <Reveal key={track.id} as="div" className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
                  <div className={reversed ? "md:order-2" : undefined}>
                    <Image
                      src={track.mark}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-auto object-contain"
                    />
                    <h3 className="mt-4 font-sans text-2xl font-semibold text-home-ink">{track.label}</h3>
                    <p className="mt-3 max-w-[46ch] font-sans text-base leading-relaxed text-home-ink-soft">
                      {first.description}
                    </p>
                    <ul className="mt-6 max-w-[26rem] divide-y divide-home-rule border-t border-home-rule">
                      {inTrack.map((course) => (
                        <li key={course.id}>
                          <Link
                            href={course.link}
                            className="group flex items-baseline justify-between gap-4 py-3"
                          >
                            <span className="text-home-ink transition-colors group-hover:text-home-teal">
                              {course.shortTitle}
                            </span>
                            <span className="shrink-0 font-mono text-xs text-home-ink-soft">
                              {course.level}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reversed ? "md:order-1" : undefined}>
                    <Demo />
                  </div>
                </Reveal>
              );
            })}
          </div>

          <MotionCta
            href="/tutorials"
            className="mt-14 inline-flex items-center gap-1.5 font-sans font-semibold text-home-teal"
          >
            See all {courses.length} courses
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </MotionCta>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="wrap section">
        <Reveal>
          <div className="flex flex-col gap-3 border-b border-home-rule pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-home-ink">
              What parents tell us
            </h2>
            <p className="font-mono text-sm text-home-ink-soft">
              Quoted, not paraphrased.
            </p>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.quote}
                as="li"
                delay={i * 0.08}
                className="flex flex-col rounded-xl border border-home-rule bg-white p-6 shadow-[0_1px_3px_rgb(20_23_28_/_0.06)]"
              >
                <figure className="flex flex-1 flex-col">
                  <blockquote className="flex-1 font-sans text-base leading-relaxed text-home-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-home-rule pt-3 font-mono text-sm text-home-ink-soft">
                    {t.source}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="bg-home-teal text-white">
        <Reveal className="wrap section text-center" as="section">
          <h2 className="mx-auto max-w-[22ch] font-sans text-3xl font-semibold tracking-tight text-white">
            Start with the first lesson
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] font-sans text-base leading-relaxed text-white/80">
            Every lesson is free and open — no account needed to read them.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <MotionCta
              href={ENROLL_URL}
              external
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 font-sans font-semibold text-home-teal-deep transition-colors hover:bg-white/90"
            >
              Enroll in a class
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </MotionCta>
            <MotionCta
              href="/lessons/scratch/1"
              className="font-sans text-sm font-semibold text-white/80 underline underline-offset-2 transition-colors hover:text-white"
            >
              Or open Scratch Week 1 →
            </MotionCta>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
