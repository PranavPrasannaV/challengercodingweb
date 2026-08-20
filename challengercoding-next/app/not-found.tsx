import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/src/data/courses";

export const metadata: Metadata = {
    title: "Page not found",
    description:
        "That page does not exist. Browse the full list of free Challenger Coding courses instead.",
};

export default function NotFound() {
    return (
        <main id="main" className="wrap section">
            <h1 className="text-h1 text-ink">That page doesn&rsquo;t exist</h1>
            <p className="text-lead measure mt-6">
                It may have moved when we reorganized the courses. Everything we
                teach is below.
            </p>

            <ul className="mt-10 border-t border-rule measure">
                {courses.map((course) => (
                    <li key={course.id} className="border-b border-rule">
                        <Link
                            href={course.link}
                            className="flex items-baseline justify-between gap-4 py-3.5 group"
                        >
                            <span className="text-ink group-hover:text-brand transition-colors">
                                {course.title}
                            </span>
                            <span className="text-small text-ink-meta shrink-0">
                                {course.level}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="text-small text-ink-meta mt-8">
                Or go back to the{" "}
                <Link href="/" className="link-quiet">
                    home page
                </Link>
                .
            </p>
        </main>
    );
}
