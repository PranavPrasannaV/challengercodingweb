import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { courses, lessonConcept } from '@/src/data/courses';
import { lessonRegistry } from '@/src/data/lessons';
import { OG_IMAGE } from '@/src/site';
import LessonViewerClient from './LessonViewerClient';

type Params = { courseId: string; lessonId: string };

/** Strip HTML and collapse whitespace, for meta descriptions. */
function plain(html: string, max = 155) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length <= max) return text;
    return text.slice(0, text.lastIndexOf(' ', max)) + '…';
}

function resolve({ courseId, lessonId }: Params) {
    const course = courses.find((c) => c.id === courseId);
    const index = course?.lessons.findIndex((l) => l.id === lessonId) ?? -1;
    const lesson = index >= 0 ? course!.lessons[index] : undefined;
    const exercises = lessonRegistry[`${courseId}-${lessonId}`];
    if (!course || !lesson || !exercises?.length) return null;
    return { course, lesson, index, exercises };
}

export async function generateStaticParams() {
    const params: Params[] = [];
    for (const course of courses) {
        for (const lesson of course.lessons) {
            if (lesson.type !== 'guided') continue;
            // Only emit a route that has content behind it. A URL that
            // resolves to an empty page is worse than a 404.
            if (!lessonRegistry[`${course.id}-${lesson.id}`]?.length) continue;
            params.push({ courseId: course.id, lessonId: lesson.id });
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
    if (!found) return { title: 'Lesson not found' };
    const { course, lesson, exercises } = found;
    const concept = lessonConcept(lesson);
    const url = `/lessons/${course.id}/${lesson.id}/`;
    return {
        // Concept first: tabs truncate around twenty characters, and every
        // title starting "Week 4:" fails exactly when it is needed.
        title: `${concept} — ${course.title} lesson`,
        description: plain(exercises[0]?.content ?? course.description),
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            url,
            title: `${concept} — ${course.title}`,
            description: plain(exercises[0]?.content ?? course.description),
            images: [OG_IMAGE],
        },
    };
}

export default async function Page({ params }: { params: Promise<Params> }) {
    const found = resolve(await params);
    if (!found) notFound();
    const { course, lesson, index, exercises } = found;

    const prev = index > 0 ? course.lessons[index - 1] : undefined;
    const next =
        index < course.lessons.length - 1 ? course.lessons[index + 1] : undefined;

    const breadcrumbs = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Courses', item: '/tutorials/' },
            { '@type': 'ListItem', position: 2, name: course.title, item: `${course.link}/` },
            { '@type': 'ListItem', position: 3, name: lesson.title },
        ],
    };

    return (
        <>
            <LessonViewerClient
                key={`${course.id}-${lesson.id}`}
                course={course}
                lesson={lesson}
                exercises={exercises}
                prev={prev}
                next={next}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
            />
        </>
    );
}
