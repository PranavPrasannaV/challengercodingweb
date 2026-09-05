import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TRACKS, weeksIn, hasFinalProject, type Course } from "@/src/data/courses";

/**
 * The one course card. Its root is always a Link, which is what keeps the
 * catalog, the homepage and the 404 page from drifting into three different
 * cards with three different click behaviors.
 */
export default function CourseCard({
  course,
  cta = "View lessons",
  theme = "site",
}: {
  course: Course;
  cta?: string;
  /** "home" matches the redesigned homepage/courses-catalog look; "site"
   *  (default) is the original theme every lesson page still uses. */
  theme?: "site" | "home";
}) {
  const mark = TRACKS.find((t) => t.id === course.track)?.mark;
  const weeks = weeksIn(course);

  if (theme === "home") {
    return (
      <Link
        href={course.link}
        className="group flex h-full flex-col gap-4 rounded-xl border border-home-rule bg-white p-6 shadow-[0_1px_3px_rgb(20_23_28_/_0.06)] transition-shadow hover:shadow-[0_16px_32px_-16px_rgb(20_23_28_/_0.18)]"
      >
        <div className="flex items-start gap-4">
          {mark && (
            <Image
              src={mark}
              alt=""
              width={40}
              height={40}
              className="mt-0.5 h-9 w-auto shrink-0 object-contain"
            />
          )}
          <div className="min-w-0">
            <h3 className="font-sans text-lg font-semibold text-home-ink">
              {course.title}
              {course.stage === 2 && (
                <span className="ml-1.5 align-super font-mono text-[0.7em] text-home-teal">
                  II
                </span>
              )}
            </h3>
            <p className="mt-1.5 font-mono text-xs text-home-ink-soft">
              {course.level} &middot; {weeks} weeks
              {hasFinalProject(course) && " + project"}
            </p>
          </div>
        </div>

        <p className="text-sm text-home-ink-soft">{course.blurb}</p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-home-teal">
          {cta}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={course.link}
      className="card card-link group flex flex-col gap-4 p-6 h-full"
    >
      <div className="flex items-start gap-4">
        {mark && (
          <Image
            src={mark}
            alt=""
            width={40}
            height={40}
            className="h-9 w-auto object-contain shrink-0 mt-0.5"
          />
        )}
        <div className="min-w-0">
          <h3 className="text-h3 font-serif text-ink">
            {course.title}
            {course.stage === 2 && (
              <span className="font-mono text-brand text-[0.7em] align-super ml-1.5">
                II
              </span>
            )}
          </h3>
          <p className="eyebrow mt-1.5">
            {course.level} &middot; {weeks} weeks
            {hasFinalProject(course) && " + project"}
          </p>
        </div>
      </div>

      <p className="text-small text-ink-muted">{course.blurb}</p>

      <span className="mt-auto pt-1 text-small font-semibold text-brand inline-flex items-center gap-1.5">
        {cta}
        <ArrowRight
          className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
