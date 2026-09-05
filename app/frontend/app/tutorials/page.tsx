import type { Metadata } from "next";
import Image from "next/image";
import { TRACKS, coursesInTrack, courses, totalLessons } from "@/src/data/courses";
import CourseCard from "@/app/components/CourseCard";

export const metadata: Metadata = {
    title: "Courses",
    description:
        "Six free courses in Scratch, Python and Java, written and taught by high school volunteers. Every lesson is readable without an account.",
    alternates: { canonical: "/tutorials/" },
};

export default function TutorialsPage() {
    return (
        <main id="main" className="wrap section">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-rule pb-6">
                <h1 className="text-h1 text-ink">Courses</h1>
                <p className="text-small text-ink-meta">
                    {courses.length} courses &middot; {totalLessons} lessons &middot; free to read
                </p>
            </header>

            <p className="text-lead measure mt-8">
                Scratch first, for students who have not written code before. Then
                Python, then Java. Each track has a second course that continues
                where the first one stops.
            </p>

            {/* Grouped by language, so the ladder is visible. A flat grid of six
                hid the fact that three of them are continuations. */}
            <div className="mt-14 space-y-16">
                {TRACKS.map((track) => (
                    <section key={track.id}>
                        <div className="flex items-center gap-3 pb-4 border-b border-rule">
                            <Image
                                src={track.mark}
                                alt=""
                                width={32}
                                height={32}
                                className="h-8 w-auto object-contain"
                            />
                            <h2 className="text-h2 font-serif text-ink">{track.label}</h2>
                        </div>

                        <ul className="grid gap-6 md:grid-cols-2 mt-6">
                            {coursesInTrack(track.id).map((course) => (
                                <li key={course.id}>
                                    <CourseCard course={course} />
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}
