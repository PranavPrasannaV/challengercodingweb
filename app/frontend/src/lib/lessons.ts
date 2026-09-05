/**
 * Server-side lesson content: fetches the flat lesson_blocks stream from the
 * app/backend API and regroups it into the LessonStep[] shape the site's
 * components render (src/data/lessons/blocks.ts) — the same shape the 46
 * static TS files used to export directly. This is the only place that
 * translation happens; everything downstream (LessonViewerClient,
 * app/components/lesson-blocks.tsx) is unaware content ever lived anywhere else.
 */
import { getLesson, listLessons } from './executionApi';
import type {
    LessonBlock,
    CalloutBodyBlockContent,
} from './executionApi';
import type { LessonContentBlock, CalloutBodyBlock, LessonStep } from '@/src/data/lessons/blocks';

function toCalloutBody(b: CalloutBodyBlockContent): CalloutBodyBlock {
    switch (b.type) {
        case 'paragraph':
            return { type: 'paragraph', text: b.text };
        case 'list':
            return { type: 'list', style: b.style, items: b.items };
        case 'code':
            return { type: 'code', code: b.code, language: b.language };
        case 'image':
            return { type: 'image', src: b.src, alt: b.alt, ...(b.caption ? { caption: b.caption } : {}) };
    }
}

function toContentBlock(block: LessonBlock): LessonContentBlock | null {
    switch (block.block_type) {
        case 'heading':
            return { type: 'heading', level: block.content.level, text: block.content.text };
        case 'paragraph':
            return { type: 'paragraph', text: block.content.text };
        case 'list':
            return { type: 'list', style: block.content.style, items: block.content.items };
        case 'code':
            return { type: 'code', code: block.content.code, ...(block.content.language ? { language: block.content.language } : {}) };
        case 'callout':
            return {
                type: 'callout',
                tone: block.content.tone,
                ...(block.content.title ? { title: block.content.title } : {}),
                body: block.content.body.map(toCalloutBody),
            };
        case 'table':
            return { type: 'table', headers: block.content.headers, rows: block.content.rows };
        case 'image':
            return {
                type: 'image',
                src: block.content.src,
                alt: block.content.alt,
                ...(block.content.caption ? { caption: block.content.caption } : {}),
            };
        case 'embed':
            return { type: 'embed', kind: block.content.kind, src: block.content.src };
        // 'step', 'quiz', 'exercise_ref' are structural/per-step metadata,
        // not renderable content blocks — handled in groupIntoSteps below.
        default:
            return null;
    }
}

function groupIntoSteps(blocks: LessonBlock[]): LessonStep[] {
    const steps: LessonStep[] = [];
    let current: LessonStep | null = null;

    for (const block of blocks) {
        if (block.block_type === 'step') {
            current = { title: block.content.title, blocks: [] };
            steps.push(current);
            continue;
        }
        if (!current) continue; // every export run emits a step marker first; defensive only

        if (block.block_type === 'quiz') {
            const { question, choices, answer_idx } = block.content;
            current.quiz = [
                ...(current.quiz ?? []),
                { question, options: choices, correctAnswer: choices[answer_idx]?.value ?? '' },
            ];
            continue;
        }
        if (block.block_type === 'exercise_ref') {
            current.initialCode = block.content.starter_code;
            current.expectedOutput = block.content.expected_output ?? undefined;
            current.showCompiler = true;
            current.showAutograder = block.content.expected_output != null;
            continue;
        }

        const contentBlock = toContentBlock(block);
        if (contentBlock) current.blocks.push(contentBlock);
    }

    return steps;
}

/** Null means "no such lesson" or "engine unreachable" — callers already
 *  treat an empty/missing lesson as a 404 (see app/lessons/.../page.tsx). */
export async function fetchLessonSteps(slug: string): Promise<LessonStep[] | null> {
    try {
        const lesson = await getLesson(slug);
        return groupIntoSteps(lesson.blocks);
    } catch {
        return null;
    }
}

/** Slugs with real content, for generateStaticParams — mirrors the old
 *  `lessonRegistry[key]?.length` guard against emitting empty routes. */
export async function fetchKnownLessonSlugs(): Promise<Set<string>> {
    try {
        const summaries = await listLessons();
        return new Set(summaries.map((s) => s.slug));
    } catch {
        return new Set();
    }
}
