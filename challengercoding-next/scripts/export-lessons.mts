/**
 * One-time backfill export: reads the ~40 static lesson TS files through the
 * same module graph the site itself uses (courses.ts + lessonRegistry) and
 * writes a single JSON file the execution engine's Python backfill script
 * (code-execution-engine/infra/backfill_lessons.py) consumes.
 *
 * This script only reads and reshapes content — no DB writes happen here.
 * The DB is written by the Python script so there's one process, in one
 * language, that owns writes to the shared Postgres instance.
 *
 * Run with:
 *   node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./scripts/ts-resolve.mjs scripts/export-lessons.mts [out-path]
 */
import { writeFileSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';

import { courses } from '../src/data/courses.ts';
import { lessonRegistry } from '../src/data/lessons/index.ts';

/** Matches LessonViewerClient's embedFor(): java tracks compile, everything else runs as Python. */
const languageFor = (courseId: string) => (courseId.startsWith('java') ? 'java' : 'python');

/**
 * A step's starter code is either a full compilable program (has its own
 * `public class ...`) or a bare snippet meant to be dropped into a driver.
 * Mirrors worker/assembly.py's two lanes: write_class submits the code
 * as-is, free_run wraps it in the same Main/main() shell the engine already
 * uses for bare cells with no exercise template.
 */
const JAVA_FREE_RUN_TEMPLATE =
    'public class Main {\n' +
    '    public static void main(String[] args) throws Exception {\n' +
    '{{code}}\n' +
    '    }\n' +
    '}\n';

function exerciseShapeFor(language: string, starterCode: string) {
    if (language === 'java' && !/public\s+(?:final\s+|abstract\s+)?class\s+\w+/.test(starterCode)) {
        return { kind: 'free_run', template: JAVA_FREE_RUN_TEMPLATE };
    }
    return { kind: 'write_class', template: '{{code}}' };
}

interface QuizOptionSrc { label: string; value: string }
interface QuizQuestionSrc { question: string; options: QuizOptionSrc[]; correctAnswer: string; explanation?: string }
interface ExerciseStepSrc {
    title: string;
    content: string;
    initialCode?: string;
    expectedOutput?: string | null;
    showCompiler?: boolean;
    showAutograder?: boolean;
    quiz?: QuizQuestionSrc[];
}

type BlockExport =
    | { block_type: 'prose'; content: { html: string; step_title: string } }
    | { block_type: 'quiz'; content: { question: string; choices: { label: string; value: string }[]; answer_idx: number } }
    | {
          block_type: 'exercise_ref';
          content: {
              title: string;
              language: string;
              kind: string;
              template: string;
              starter_code: string;
              expected_output: string | null;
              match_mode: string;
              // Every one of these exercises is already shown openly in the
              // current UI ("Make it print `X`") — reveal_expected mirrors
              // that, it isn't a new disclosure.
              reveal_expected: boolean;
          };
      };

interface LessonExport {
    slug: string;
    title: string;
    track: string;
    order_index: number;
    blocks: BlockExport[];
}

const lessons: LessonExport[] = [];
const warnings: string[] = [];
// Unlike `warnings` (informational), an entry here fails the export: a
// showCompiler step with no initialCode gets classified as free_run by
// exerciseShapeFor() (it has no code to detect a `public class` in), which
// silently wraps whatever the student types in a hidden Main class. If the
// step's own prose teaches "write a full class" (as early Java lessons do),
// that wrapping produces a class declaration nested inside a method body —
// a compile error for a student who followed the lesson correctly. That's
// not a case to warn-and-ship; the step needs a real initialCode starter
// (which also self-corrects the kind detection) before it can export.
const errors: string[] = [];

for (const course of courses) {
    course.lessons.forEach((lesson, index) => {
        if (lesson.type !== 'guided') return;
        const key = `${course.id}-${lesson.id}`;
        const steps = lessonRegistry[key] as ExerciseStepSrc[] | undefined;
        if (!steps?.length) return;

        const blocks: BlockExport[] = [];
        const language = languageFor(course.id);

        for (const step of steps) {
            blocks.push({
                block_type: 'prose',
                content: { html: step.content ?? '', step_title: step.title },
            });

            if (step.showCompiler) {
                const starter = step.initialCode ?? '';
                const { kind, template } = exerciseShapeFor(language, starter);
                if (!starter) {
                    errors.push(`${key}: step "${step.title}" has showCompiler but no initialCode`);
                }
                blocks.push({
                    block_type: 'exercise_ref',
                    content: {
                        title: step.title,
                        language,
                        kind,
                        template,
                        starter_code: starter,
                        expected_output:
                            step.showAutograder && step.expectedOutput ? step.expectedOutput : null,
                        match_mode: 'trimmed',
                        reveal_expected: true,
                    },
                });
            }

            for (const q of step.quiz ?? []) {
                const answer_idx = q.options.findIndex((o) => o.value === q.correctAnswer);
                if (answer_idx === -1) {
                    warnings.push(`${key}: step "${step.title}" quiz question has no matching correctAnswer`);
                }
                blocks.push({
                    block_type: 'quiz',
                    content: {
                        question: q.question,
                        choices: q.options.map((o) => ({ label: o.label, value: o.value })),
                        answer_idx: Math.max(answer_idx, 0),
                    },
                });
            }
        }

        lessons.push({
            slug: key,
            title: lesson.title,
            track: course.track,
            order_index: index,
            blocks,
        });
    });
}

if (errors.length) {
    console.error(`${errors.length} error(s) — refusing to write export:`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
}

const outPath = resolvePath(process.cwd(), process.argv[2] ?? 'lessons-export.json');
writeFileSync(outPath, JSON.stringify({ lessons }, null, 2));

console.log(`Wrote ${lessons.length} lessons (${lessons.reduce((n, l) => n + l.blocks.length, 0)} blocks) to ${outPath}`);
if (warnings.length) {
    console.warn(`\n${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
}
