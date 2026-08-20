import type { MetadataRoute } from 'next';
import { courses } from '@/src/data/courses';
import { lessonRegistry } from '@/src/data/lessons';
import { pythonNotes } from '@/src/data/notes/python';
import { javaNotes } from '@/src/data/notes/java';
import { SITE } from '@/src/site';

/**
 * Every URL carries a trailing slash, because next.config.ts sets
 * trailingSlash: true — without it each entry would be a redirect.
 *
 * The three localStorage-profile routes are deliberately absent. A sitemap
 * that lists everything is generated; one that leaves things out was written.
 */
// Required under output: 'export' — the file is produced at build time.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const url = (path: string) => `${SITE.url}${path}`;

    const pages: MetadataRoute.Sitemap = [
        { url: url('/'), priority: 1, changeFrequency: 'monthly' },
        { url: url('/tutorials/'), priority: 0.9, changeFrequency: 'monthly' },
        { url: url('/about/'), priority: 0.7, changeFrequency: 'yearly' },
        { url: url('/resources/'), priority: 0.6, changeFrequency: 'yearly' },
        { url: url('/compiler/'), priority: 0.5, changeFrequency: 'yearly' },
        { url: url('/privacy/'), priority: 0.2, changeFrequency: 'yearly' },
    ];

    for (const course of courses) {
        pages.push({
            url: url(`${course.link}/`),
            priority: 0.9,
            changeFrequency: 'monthly',
        });

        for (const lesson of course.lessons) {
            if (lessonRegistry[`${course.id}-${lesson.id}`]?.length) {
                pages.push({
                    url: url(`/lessons/${course.id}/${lesson.id}/`),
                    priority: 0.8,
                    changeFrequency: 'yearly',
                });
            }
        }
    }

    const notes: Record<string, Record<string, unknown>> = {
        python: pythonNotes,
        java: javaNotes,
    };
    for (const courseId in notes) {
        for (const lessonId in notes[courseId]) {
            pages.push({
                url: url(`/notes/${courseId}/${lessonId}/`),
                priority: 0.7,
                changeFrequency: 'yearly',
            });
        }
    }

    return pages;
}
