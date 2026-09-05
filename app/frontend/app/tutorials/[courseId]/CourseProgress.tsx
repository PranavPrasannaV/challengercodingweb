"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Course } from '@/src/data/courses';
import { lessonOrdinal, lessonConcept } from '@/src/data/courses';
import { doneIn } from '@/src/lib/progress';

/**
 * The marks the lesson pages write, read back.
 *
 * These are client components, but they render on the server too — with an
 * empty history — so a crawler and a first-time visitor see the same complete
 * syllabus, and nothing shifts when the effect fires.
 */
function useDone(course: Course) {
    const [done, setDone] = useState<Set<string>>(new Set());
    useEffect(() => setDone(new Set(doneIn(course.id))), [course]);
    return done;
}

export function ResumeButton({ course, theme = 'site' }: { course: Course; theme?: 'site' | 'home' }) {
    const done = useDone(course);
    const first = course.lessons[0];
    const target = course.lessons.find((l) => !done.has(l.id)) ?? first;
    const index = course.lessons.findIndex((l) => l.id === target.id);
    const label = `${target.id === first.id ? 'Start' : 'Continue'} ${lessonOrdinal(target, index)}`;

    if (theme === 'home') {
        return (
            <Link
                href={target.link}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-home-teal px-6 py-3.5 font-sans font-semibold text-white transition-colors hover:bg-home-teal-deep"
            >
                {label}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
        );
    }

    return (
        <Link href={target.link} className="btn btn-brand mt-8">
            {label}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
    );
}

export function SyllabusList({ course, theme = 'site' }: { course: Course; theme?: 'site' | 'home' }) {
    const done = useDone(course);
    const finished = course.lessons.filter((l) => done.has(l.id)).length;

    if (theme === 'home') {
        return (
            <>
                <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h2 className="font-sans text-sm font-semibold text-home-ink">Week by week</h2>
                    {finished > 0 && (
                        <p className="font-mono text-sm tabular-nums text-home-ink-soft">
                            {finished} of {course.lessons.length} done — saved on this device.
                        </p>
                    )}
                </div>

                <ol className="mt-4 border-t border-home-rule">
                    {course.lessons.map((lesson, i) => {
                        const isProject = lesson.id === 'test';
                        const isDone = done.has(lesson.id);
                        return (
                            <li key={lesson.id} className="border-b border-home-rule">
                                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                                    <Link
                                        href={lesson.link}
                                        className="group -ml-3 flex min-w-0 flex-1 flex-wrap items-baseline gap-x-5 gap-y-1 rounded-sm py-4 pl-3 transition-colors hover:bg-home-teal-tint"
                                    >
                                        <span
                                            className={`w-32 shrink-0 whitespace-nowrap font-mono text-sm tabular-nums ${
                                                isProject
                                                    ? 'text-accent'
                                                    : isDone
                                                      ? 'text-home-teal'
                                                      : 'text-home-ink-soft group-hover:text-home-ink'
                                            }`}
                                        >
                                            {lessonOrdinal(lesson, i)}
                                            {isDone && <span className="sr-only"> — done</span>}
                                        </span>
                                        <span className="min-w-0 flex-1 text-home-ink transition-colors group-hover:text-home-teal">
                                            {lessonConcept(lesson)}
                                        </span>
                                    </Link>

                                    {lesson.notesLink && (
                                        <Link
                                            href={lesson.notesLink}
                                            className="-mr-3 shrink-0 px-3 py-4 text-sm font-semibold text-home-teal underline underline-offset-2 transition-colors hover:text-home-teal-deep"
                                        >
                                            Notes
                                        </Link>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mt-8">
                <h2 className="label">Week by week</h2>
                {/* Nothing to say to a student who has not started. */}
                {finished > 0 && (
                    <p className="font-mono text-small tnum text-ink-meta">
                        {finished} of {course.lessons.length} done — saved on this device.
                    </p>
                )}
            </div>

            <ol className="mt-4 border-t border-rule">
                {course.lessons.map((lesson, i) => {
                    const isProject = lesson.id === 'test';
                    const isDone = done.has(lesson.id);
                    return (
                        <li key={lesson.id} className="border-b border-rule">
                            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                                {/* The whole row is the target: a child told "go
                                    to week 4" aims at the words "Week 4", which
                                    used to be inert. */}
                                <Link
                                    href={lesson.link}
                                    className="group flex flex-1 min-w-0 flex-wrap items-baseline gap-x-5 gap-y-1 py-4 -ml-3 pl-3 rounded-sm hover:bg-paper-sunk transition-colors"
                                >
                                    <span
                                        className={`font-mono text-small tnum shrink-0 w-32 whitespace-nowrap ${
                                            isProject
                                                ? 'text-accent'
                                                : isDone
                                                  ? 'text-brand'
                                                  : 'text-ink-meta group-hover:text-ink'
                                        }`}
                                    >
                                        {lessonOrdinal(lesson, i)}
                                        {isDone && <span className="sr-only"> — done</span>}
                                    </span>
                                    <span className="flex-1 min-w-0 text-ink group-hover:text-brand transition-colors">
                                        {lessonConcept(lesson)}
                                    </span>
                                </Link>

                                {lesson.notesLink && (
                                    <Link
                                        href={lesson.notesLink}
                                        className="link-quiet text-small shrink-0 px-3 py-4 -mr-3"
                                    >
                                        Notes
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </>
    );
}
