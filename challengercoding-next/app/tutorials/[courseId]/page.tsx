import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
    courses,
    getCourse,
    coursesInTrack,
    weeksIn,
    hasFinalProject,
    lessonConcept,
    TRACKS,
} from '@/src/data/courses';
import { SITE } from '@/src/site';
import { ResumeButton, SyllabusList } from './CourseProgress';

type Params = { courseId: string };

export async function generateStaticParams() {
    return courses.map((course) => ({ courseId: course.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { courseId } = await params;
    const course = getCourse(courseId);
    if (!course) return { title: 'Course not found' };
    const topics = course.lessons
        .filter((l) => l.id !== 'test')
        .map(lessonConcept)
        .join(', ');
    return {
        title: course.title,
        description: `${weeksIn(course)} weekly lessons: ${topics}. Free, from ${SITE.name}.`,
        alternates: { canonical: `${course.link}/` },
    };
}

export default async function CourseHub({ params }: { params: Promise<Params> }) {
    const { courseId } = await params;
    const course = getCourse(courseId);
    if (!course) notFound();

    const weeks = weeksIn(course);
    const prereq = course.prerequisite ? getCourse(course.prerequisite) : undefined;
    const mark = TRACKS.find((t) => t.id === course.track)?.mark;
    const siblings = coursesInTrack(course.track).filter((c) => c.id !== course.id);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.title,
        description: course.description,
        url: `${SITE.url}${course.link}/`,
        isAccessibleForFree: true,
        educationalLevel: course.level,
        inLanguage: 'en',
        teaches: course.lessons.filter((l) => l.id !== 'test').map(lessonConcept),
        provider: { '@id': `${SITE.url}/#organization` },
        ...(prereq ? { coursePrerequisites: prereq.title } : {}),
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: `P${weeks}W`,
        },
    };

    return (
        <main id="main" className="wrap section-sm" data-track={course.track}>
            <nav aria-label="Breadcrumb" className="text-meta text-ink-meta">
                <Link href="/tutorials" className="hover:text-ink transition-colors">
                    Courses
                </Link>
            </nav>

            <header className="mt-6 pb-6 border-b border-rule">
                <div className="flex items-center gap-4">
                    {mark && (
                        <Image
                            src={mark}
                            alt=""
                            width={48}
                            height={48}
                            className="h-12 w-auto object-contain"
                        />
                    )}
                    <p className="eyebrow">{course.level}</p>
                </div>

                <h1 className="text-h1 text-ink mt-5">{course.title}</h1>
                <p className="text-lead measure mt-5">{course.description}</p>

                {/* The length of this line varies by course. That is the point —
                    an intro course has two facts, a continuation has three. */}
                <p className="text-small text-ink-meta mt-6">
                    {weeks} weekly lessons
                    {hasFinalProject(course) && ' + a final project'}
                    {prereq && (
                        <>
                            {' '}&middot; do{' '}
                            <Link href={prereq.link} className="link-quiet">
                                {prereq.title}
                            </Link>{' '}
                            first
                        </>
                    )}
                </p>

                <ResumeButton course={course} />
            </header>

            <SyllabusList course={course} />

            {siblings.length > 0 && (
                <section className="mt-14">
                    <h2 className="label">Also in {course.track === 'java' ? 'Java' : course.track === 'python' ? 'Python' : 'Scratch'}</h2>
                    <ul className="mt-4 space-y-3">
                        {siblings.map((sibling) => (
                            <li key={sibling.id}>
                                <Link href={sibling.link} className="link-quiet">
                                    {sibling.title}
                                </Link>
                                <span className="text-small text-ink-meta"> — {sibling.blurb}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
