import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  courses,
  coursesInTrack,
  totalLessons,
  TRACKS,
} from "@/src/data/courses";
import { pythonLesson1 } from "@/src/data/lessons/python/lesson1";
import { ENROLL_URL } from "@/src/config";
import { SITE, STATS } from "@/src/site";

/* The hero shows the real first exercise of Python Week 1, derived from the
   lesson data so it can never drift from what a student is actually asked
   to write. */
const firstExercise = pythonLesson1[0] as { expectedOutput: string };
const heroCode = `print('${firstExercise.expectedOutput}')`;

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

export default function Home() {
  return (
    <main id="main">
      {/* ---------------------------------------------------------------- */}
      <section className="wrap section-lg">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-7">
            <h1 className="text-display text-ink">
              Free coding classes, taught by high schoolers.
            </h1>

            <p className="text-lead measure mt-7">
              Challenger Coding is a student-run nonprofit in Sammamish,
              Washington. We have been teaching Scratch, Python and Java to
              K&#8211;12 students since the summer of {SITE.founded}, and we have
              never charged for a class.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              <Link
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enroll in a class
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link href="/tutorials" className="btn btn-outline">
                See all the courses
              </Link>
            </div>

            <p className="text-body text-ink-muted measure mt-7">
              New here? Start with{" "}
              <Link href="/lessons/scratch/1" className="link-quiet font-semibold">
                Scratch Week 1
              </Link>
              ,{" "}
              <Link href="/lessons/python/1" className="link-quiet font-semibold">
                Python Week 1
              </Link>{" "}
              or{" "}
              <Link href="/lessons/java/1" className="link-quiet font-semibold">
                Java Week 1
              </Link>
              . Every lesson is free to read, with no account needed.
            </p>
          </div>

          {/* The panel is the real week-one exercise, and it is the front
              door to it — not a picture of one. */}
          <div className="lg:col-span-5 space-y-5">
            {/* Scratch is the entry course for half the catalogue and had no
                door above the fold. Real block screenshots, unframed — a block
                in a border reads as a picture of a block, not as a block. */}
            <Link
              href="/lessons/scratch/1"
              className="card card-link group block overflow-hidden"
            >
              <div className="px-5 py-3 border-b border-rule">
                <span className="eyebrow">Scratch &middot; Week 1</span>
              </div>
              <div className="px-5 py-6 flex flex-col items-start gap-1.5">
                <Image src="/greenflag.png" alt="when green flag clicked block" width={141} height={71} className="h-9 w-auto" />
                <Image src="/movesteps.png" alt="move 10 steps block" width={135} height={55} className="h-8 w-auto" />
              </div>
              <div className="px-5 py-4 border-t border-rule flex items-center justify-between gap-4">
                <span className="text-small text-ink-muted">
                  Drag two blocks. The cat moves.
                </span>
                <ArrowRight
                  className="w-4 h-4 text-brand shrink-0 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>

            <Link
              href="/lessons/python/1"
              className="card card-link group block overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-rule">
                <span className="font-mono text-small text-ink-meta">week1.py</span>
                <span className="eyebrow">Python &middot; Week 1</span>
              </div>

              <pre className="bg-code-bg text-code-fg font-mono text-small leading-relaxed px-5 py-5 overflow-x-auto">
                <code>{heroCode}</code>
              </pre>

              <div className="px-5 py-4 border-t border-rule">
                <p className="eyebrow">Output</p>
                <p className="font-mono text-small text-ink mt-1.5">
                  {firstExercise.expectedOutput}
                </p>
              </div>

              <div className="px-5 py-4 border-t border-rule flex items-center justify-between gap-4">
                <span className="text-small text-ink-muted">
                  The first thing every Python student writes.
                </span>
                <ArrowRight
                  className="w-4 h-4 text-brand shrink-0 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-rule">
        <div className="wrap section-sm">
          <dl className="grid gap-10 md:grid-cols-12 md:gap-0">
            <div className="md:col-span-4">
              <dd className="text-display tnum text-ink leading-none">
                {STATS.studentsTaught}
              </dd>
              <dt className="eyebrow mt-3">Students taught since {SITE.founded}</dt>
            </div>
            <div className="md:col-span-3 md:border-l md:border-rule md:pl-10">
              <dd className="text-display tnum text-ink leading-none">
                {STATS.hoursOfContent}
              </dd>
              <dt className="eyebrow mt-3">Hours of lessons</dt>
            </div>
            <div className="md:col-span-3 md:border-l md:border-rule md:pl-10">
              <dd className="text-display tnum text-ink leading-none">
                {totalLessons}
              </dd>
              <dt className="eyebrow mt-3">Lessons, all free to read</dt>
            </div>
            <div className="md:col-span-2 md:border-l md:border-rule md:pl-10">
              <dd className="text-display tnum text-ink leading-none">
                {courses.length}
              </dd>
              <dt className="eyebrow mt-3">Courses</dt>
            </div>
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="bg-brand-deep text-paper">
        <div className="wrap section-lg">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-h1 text-paper">
                It started with one summer class
              </h2>
              <p className="text-lead text-paper/75 measure mt-6">
                Jaden Tang and Aadi Saraf started Challenger Coding in the summer
                of {SITE.founded}, after looking for coding lessons aimed at
                younger students and finding almost nothing written for them. It
                is still planned, written and taught by students, and it is still
                free.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-sand font-semibold hover:text-paper transition-colors"
              >
                Read our story
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <p className="font-mono text-small text-paper/60 leading-loose">
                Founded {SITE.founded}
                <br />
                {SITE.locality}, {SITE.region}
                <br />
                Run by students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="wrap section">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-rule pb-6">
          <h2 className="text-h1 text-ink">Three languages, two levels each</h2>
          <p className="text-small text-ink-meta">
            Scratch first, then Python, then Java.
          </p>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {TRACKS.map((track) => {
            const inTrack = coursesInTrack(track.id);
            const first = inTrack[0];
            return (
              <li key={track.id} className="flex flex-col">
                <Image
                  src={track.mark}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-auto object-contain self-start"
                />
                <h3 className="text-h2 font-serif text-ink mt-5">{track.label}</h3>
                <p className="text-small text-ink-muted mt-3 measure-tight">
                  {first.blurb}
                </p>
                <ul className="mt-5 md:mt-auto md:pt-5 divide-y divide-rule border-t border-rule">
                  {inTrack.map((course) => (
                    <li key={course.id}>
                      <Link
                        href={course.link}
                        className="flex items-baseline justify-between gap-4 py-3 group"
                      >
                        <span className="text-ink group-hover:text-brand transition-colors">
                          {course.shortTitle}
                        </span>
                        <span className="text-small text-ink-meta shrink-0">
                          {course.level}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <Link
          href="/tutorials"
          className="link-quiet inline-flex items-center gap-1.5 mt-10 font-semibold"
        >
          See all {courses.length} courses
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="bg-paper-sunk">
        <div className="wrap section">
          <h2 className="text-h2 text-ink">What parents tell us</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-14">
            <figure className="md:col-span-2">
              <blockquote className="text-h3 font-serif italic font-normal text-ink measure">
                {testimonials[0].quote}
              </blockquote>
              <figcaption className="eyebrow mt-4">
                {testimonials[0].source}
              </figcaption>
            </figure>

            <div className="space-y-8">
              {testimonials.slice(1).map((t) => (
                <figure key={t.quote}>
                  <blockquote className="text-ink-muted">{t.quote}</blockquote>
                  <figcaption className="eyebrow mt-3">{t.source}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section className="bg-brand text-paper">
        <div className="wrap section-lg text-center">
          <h2 className="text-h1 text-paper measure mx-auto">
            Start with the first lesson
          </h2>
          <p className="text-lead text-paper/75 measure mx-auto mt-6">
            Every lesson is free and open — no account needed to read them.
            Enrollment for live classes runs through the form below.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <Link
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Enroll in a class
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/lessons/scratch/1"
              className="btn text-paper border border-paper/35 hover:bg-paper/10"
            >
              Open Scratch Week 1
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
