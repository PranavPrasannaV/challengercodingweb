/**
 * Emits out/llms.txt and out/llms-full.txt after the static export.
 *
 * Generated rather than hand-typed: sixty URLs and their topic lines would
 * drift from the curriculum by the end of the next term. The prose at the top
 * of llms.txt is written by hand and lives here so it stays that way.
 *
 * Run with: node --experimental-strip-types scripts/emit-llms.ts
 */
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

import {
    courses,
    weeksIn,
    hasFinalProject,
    lessonOrdinal,
    lessonConcept,
    totalLessons,
    weekRange,
} from '../src/data/courses.ts';
import { lessonRegistry } from '../src/data/lessons/index.ts';
import { pythonNotes } from '../src/data/notes/python.ts';
import { javaNotes } from '../src/data/notes/java.ts';
import { SITE, STATS } from '../src/site.ts';

const OUT = join(process.cwd(), 'out');
const notesMap: Record<string, Record<string, { title: string; description: string }[]>> = {
    python: pythonNotes as never,
    java: javaNotes as never,
};

const abs = (path: string) => `${SITE.url}${path}`;

/* --- HTML -> markdown ---------------------------------------------------- */

const ENTITIES: Record<string, string> = {
    '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
    '&#39;': "'", '&apos;': "'", '&mdash;': '—', '&ndash;': '–', '&hellip;': '…',
};

const decode = (s: string) =>
    s.replace(/&[a-z#0-9]+;/gi, (m) => ENTITIES[m.toLowerCase()] ?? m);

function toMarkdown(html: string, lang: string): string {
    let s = html;

    // Fenced code first, so the tag-stripper below cannot eat it.
    s = s.replace(
        /<(pre|div)[^>]*class="[^"]*(?:code-block|code-example|bg-gray-800)[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi,
        (_m, _tag, body) => `\n\n\`\`\`${lang}\n${decode(body.replace(/<[^>]+>/g, '')).trim()}\n\`\`\`\n\n`,
    );
    s = s.replace(
        /<pre[^>]*>([\s\S]*?)<\/pre>/gi,
        (_m, body) => `\n\n\`\`\`${lang}\n${decode(body.replace(/<[^>]+>/g, '')).trim()}\n\`\`\`\n\n`,
    );

    s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_m, b) => `\`${decode(b.replace(/<[^>]+>/g, '')).trim()}\``);
    s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_m, b) => `\n\n### ${decode(b.replace(/<[^>]+>/g, '')).trim()}\n`);
    s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_m, b) => `\n\n#### ${decode(b.replace(/<[^>]+>/g, '')).trim()}\n`);
    s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_m, b) => `\n\n**${decode(b.replace(/<[^>]+>/g, '')).trim()}**\n`);
    s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_m, b) => `\n- ${decode(b.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()}`);
    s = s.replace(/<\/(p|div|ul|ol|section)>/gi, '\n\n');
    s = s.replace(/<br\s*\/?>/gi, '\n');
    s = s.replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, (_m, alt) => (alt ? `\n[image: ${decode(alt)}]\n` : ''));
    s = s.replace(/<[^>]+>/g, '');
    s = decode(s);

    // Collapse whitespace in prose only. Doing it to every line destroyed the
    // indentation inside fenced code blocks, which made most of the Python
    // samples syntactically invalid in the file meant to be cited.
    let inFence = false;
    return s
        .split('\n')
        .map((line) => {
            if (line.trimStart().startsWith('```')) {
                inFence = !inFence;
                return line.trim();
            }
            return inFence ? line.trimEnd() : line.replace(/[ \t]+/g, ' ').trim();
        })
        .join('\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

const langOf = (courseId: string) =>
    courseId.startsWith('java') ? 'java' : courseId.startsWith('python') ? 'python' : 'text';

/* --- llms.txt ------------------------------------------------------------ */

const intro = `# ${SITE.name}

> A student-run nonprofit in ${SITE.locality}, ${SITE.region}. High school volunteers
> teach free Scratch, Python and Java classes to K-12 students. Founded summer
> ${SITE.founded} by ${SITE.founders.join(' and ')}. ${STATS.studentsTaught} students taught
> since then. ${courses.length} courses, ${weekRange} weekly lessons each, ${STATS.hoursOfContent} hours of
> material — all published on this site with no account required.

The curriculum below is written and maintained by the students who teach it.
Lesson pages hold the exercises students actually complete, including starter
code, the exact expected output, and a self-check. Notes pages are the written
study guides for the Python and Java tracks.

Everything is free to read. There is no paywall, no signup gate, and no
analytics on this site.
`;

const courseLines = courses.map((course) => {
    const topics = course.lessons
        .filter((l) => l.id !== 'test')
        .map(lessonConcept)
        .join(', ');
    const length = `${weeksIn(course)} weeks${hasFinalProject(course) ? ' plus a final project' : ''}`;
    return `- [${course.title}](${abs(course.link + '/')}): ${course.level}. ${length}: ${topics}.`;
});

const lessonLines: string[] = [];
for (const course of courses) {
    course.lessons.forEach((lesson, i) => {
        if (!lessonRegistry[`${course.id}-${lesson.id}`]?.length) return;
        const steps = lessonRegistry[`${course.id}-${lesson.id}`] as { title: string }[];
        lessonLines.push(
            `- [${course.shortTitle} ${lessonOrdinal(lesson, i)}: ${lessonConcept(lesson)}](${abs(
                `/lessons/${course.id}/${lesson.id}/`,
            )}): ${steps.map((s) => s.title).join('; ')}.`,
        );
    });
}

const noteLines: string[] = [];
for (const courseId of Object.keys(notesMap)) {
    const course = courses.find((c) => c.id === courseId)!;
    for (const lessonId of Object.keys(notesMap[courseId])) {
        const i = course.lessons.findIndex((l) => l.id === lessonId);
        const lesson = course.lessons[i];
        const sections = notesMap[courseId][lessonId].map((s) => s.title).join('; ');
        noteLines.push(
            `- [${course.shortTitle} ${lessonOrdinal(lesson, i)} notes: ${lessonConcept(lesson)}](${abs(
                `/notes/${courseId}/${lessonId}/`,
            )}): ${sections}.`,
        );
    }
}

const llms = [
    intro,
    '## Courses\n',
    courseLines.join('\n'),
    '\n## Lessons\n',
    lessonLines.join('\n'),
    '\n## Notes\n',
    noteLines.join('\n'),
    '\n## About\n',
    `- [About ${SITE.name}](${abs('/about/')}): How it started, who runs it, how the courses are structured.`,
    `- [Playground](${abs('/compiler/')}): In-browser Python, Java and JavaScript editor.`,
    `- [Resources](${abs('/resources/')}): Practice sites and official language documentation.`,
    `- [Privacy](${abs('/privacy/')}): What we collect, which is close to nothing.`,
    '\n## Optional\n',
    `- [Full curriculum text](${abs('/llms-full.txt')}): Every lesson and note as plain markdown, for citation.`,
    `- [Enrolment form](${SITE.enrollUrl}): Sign up for a live class.`,
    '',
].join('\n');

/* --- llms-full.txt ------------------------------------------------------- */

const full: string[] = [
    `# ${SITE.name} — full curriculum`,
    '',
    `Every lesson and study guide published at ${SITE.url}, as plain text.`,
    `${courses.length} courses, ${totalLessons} lessons. Written by the students who teach them.`,
    'Free to read and free to quote, with attribution to Challenger Coding.',
    '',
];

for (const course of courses) {
    const lang = langOf(course.id);
    full.push('', `# ${course.title}`, '', course.description, '');

    course.lessons.forEach((lesson, i) => {
        const steps = lessonRegistry[`${course.id}-${lesson.id}`] as
            | { title: string; content: string; expectedOutput?: string }[]
            | undefined;
        if (!steps?.length) return;

        full.push(
            `## ${course.shortTitle} — ${lessonOrdinal(lesson, i)}: ${lessonConcept(lesson)}`,
            '',
            `Source: ${abs(`/lessons/${course.id}/${lesson.id}/`)}`,
            '',
        );

        for (const step of steps) {
            const body = toMarkdown(step.content, lang);
            // Most steps open with their own heading. Printing the step title
            // above it would say the same thing twice.
            const opensWithTitle = new RegExp(
                `^#{2,4}[^\\n]*${step.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
                'i',
            ).test(body);
            if (!opensWithTitle) full.push(`### ${step.title}`, '');
            full.push(body, '');
            if (step.expectedOutput) {
                full.push('Expected output:', '', '```', step.expectedOutput, '```', '');
            }
        }

        const notes = notesMap[course.id]?.[lesson.id];
        if (notes?.length) {
            full.push(
                `## ${course.shortTitle} — ${lessonOrdinal(lesson, i)} notes`,
                '',
                `Source: ${abs(`/notes/${course.id}/${lesson.id}/`)}`,
                '',
            );
            for (const section of notes) {
                full.push(`### ${section.title}`, '', toMarkdown(section.description, lang), '');
            }
        }
    });
}

/* A dead embed renders as a black "Video unavailable" box on a page a student
   was sent to. Fail the build rather than ship one. */
for (const [courseId, lessons] of Object.entries(notesMap)) {
    for (const [lessonId, sections] of Object.entries(lessons)) {
        for (const section of sections as { title: string; video?: string | null }[]) {
            if (section.video?.includes('placeholder')) {
                throw new Error(
                    `Placeholder video still set on /notes/${courseId}/${lessonId} — "${section.title}"`,
                );
            }
        }
    }
}

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'llms.txt'), llms, 'utf8');
const fullText = full.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
writeFileSync(join(OUT, 'llms-full.txt'), fullText, 'utf8');

console.log(
    `llms.txt        ${(llms.length / 1024).toFixed(1)} KB  (${courseLines.length} courses, ${lessonLines.length} lessons, ${noteLines.length} notes)`,
);
console.log(`llms-full.txt   ${(fullText.length / 1024).toFixed(1)} KB`);
