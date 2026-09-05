import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pythonNotes } from '@/src/data/notes/python';
import { javaNotes } from '@/src/data/notes/java';
import type { SubLesson, QuizQuestion } from '@/src/data/notes/types';
import { courses, lessonConcept, lessonOrdinal } from '@/src/data/courses';
import { OG_IMAGE } from '@/src/site';
import NotesQuiz from './NotesQuiz';

const notesMap: Record<string, Record<string, SubLesson[]>> = {
    python: pythonNotes,
    java: javaNotes,
};

type Params = { courseId: string; lessonId: string };

function plain(html: string, max = 155) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length <= max) return text;
    return text.slice(0, text.lastIndexOf(' ', max)) + '…';
}

const questionsOf = (sub: SubLesson): QuizQuestion[] =>
    !sub.quiz ? [] : Array.isArray(sub.quiz) ? sub.quiz : [sub.quiz];

function resolve({ courseId, lessonId }: Params) {
    const subLessons = notesMap[courseId]?.[lessonId];
    const course = courses.find((c) => c.id === courseId);
    const index = course?.lessons.findIndex((l) => l.id === lessonId) ?? -1;
    if (!subLessons?.length || !course || index < 0) return null;
    return { subLessons, course, lesson: course.lessons[index], index };
}

export async function generateStaticParams() {
    const params: Params[] = [];
    for (const courseId in notesMap) {
        for (const lessonId in notesMap[courseId]) {
            params.push({ courseId, lessonId });
        }
    }
    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const found = resolve(await params);
    if (!found) return { title: 'Notes not found' };
    const { course, lesson, subLessons } = found;
    const concept = lessonConcept(lesson);
    const url = `/notes/${course.id}/${lesson.id}/`;
    const description = plain(
        subLessons[0]?.description ?? `Written notes for ${course.title}.`,
    );
    return {
        title: `${concept} — ${course.title} notes`,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            url,
            title: `${concept} notes`,
            description,
            images: [OG_IMAGE],
        },
    };
}

export default async function Page({ params }: { params: Promise<Params> }) {
    const found = resolve(await params);
    if (!found) notFound();
    const { subLessons, course, lesson, index } = found;

    return (
        <main id="main" className="wrap section-sm" data-track={course.track}>
            <nav aria-label="Breadcrumb" className="text-meta text-ink-meta">
                <Link href="/tutorials" className="hover:text-ink transition-colors">
                    Courses
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <Link href={course.link} className="hover:text-ink transition-colors">
                    {course.title}
                </Link>
            </nav>

            <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                {/* Notes are a reference, not a slideshow — the rail is a table
                    of contents and every section has its own anchor, so a
                    teacher can link straight to one. */}
                <aside className="w-full lg:w-64 lg:shrink-0 lg:sticky lg:top-24">
                    <h2 className="label">On this page</h2>
                    <ol className="mt-4 text-small">
                        {subLessons.map((sub) => (
                            <li key={sub.id}>
                                <a
                                    href={`#${sub.id}`}
                                    className="block py-2.5 -mx-3 px-3 rounded-sm text-ink-muted hover:bg-paper-sunk hover:text-brand transition-colors"
                                >
                                    {sub.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                    <Link href={lesson.link} className="link-quiet inline-flex items-center min-h-11 mt-4 text-small -my-2.5 px-3 -mx-3">
                        Open the exercises for this week
                    </Link>
                </aside>

                <div className="flex-1 min-w-0">
                    <header className="pb-8 border-b border-rule">
                        <p className="eyebrow">
                            {course.title} &middot; {lessonOrdinal(lesson, index)} notes
                        </p>
                        <h1 className="text-h1 text-ink mt-3">{lessonConcept(lesson)}</h1>
                    </header>

                    {subLessons.map((sub) => (
                        <section
                            key={sub.id}
                            id={sub.id}
                            className="pt-12 scroll-mt-24 first:pt-10"
                        >
                            <h2 className="text-h2 font-serif text-ink">{sub.title}</h2>

                            {sub.video && (
                                <div className="mt-6 border border-rule rounded-md overflow-hidden">
                                    <iframe
                                        src={sub.video}
                                        title={`${sub.title} video`}
                                        loading="lazy"
                                        className="w-full aspect-video block"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}

                            <div
                                className="lesson-prose mt-6"
                                dangerouslySetInnerHTML={{ __html: sub.description }}
                            />

                            {questionsOf(sub).length > 0 && (
                                <NotesQuiz questions={questionsOf(sub)} />
                            )}
                        </section>
                    ))}

                    <div className="mt-14 pt-8 border-t border-rule">
                        <Link href={lesson.link} className="btn btn-brand">
                            Now try the exercises
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
