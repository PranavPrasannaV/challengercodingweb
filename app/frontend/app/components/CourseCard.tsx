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
}: {
  course: Course;
  cta?: string;
}) {
  const mark = TRACKS.find((t) => t.id === course.track)?.mark;
  const weeks = weeksIn(course);

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
