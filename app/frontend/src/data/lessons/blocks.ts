/**
 * Structured lesson content. Replaces raw HTML strings — every field here is
 * plain data with no markup, rendered by app/components/lesson-blocks.tsx.
 * Mirrors the block_type/content shape the app/backend API already
 * uses for quiz/exercise_ref (see app/backend/api/app/schemas.py),
 * extended to cover prose.
 */

export interface HeadingBlock { type: 'heading'; level: 2 | 3 | 4; text: string }

/** `text` is a small inline markdown subset: **bold**, *italic*, `code`, [text](url). */
export interface ParagraphBlock { type: 'paragraph'; text: string }

export interface ListBlock { type: 'list'; style: 'bullet' | 'number'; items: string[] }

export interface CodeBlock { type: 'code'; code: string; language?: string }

export type CalloutTone = 'info' | 'tip' | 'warning' | 'success' | 'danger';
/** A callout's body is prose, so it can hold anything a paragraph can — a
 *  bulleted checklist inside a "Try it yourself" box is common — but never
 *  another callout or a heading. */
export type CalloutBodyBlock = ParagraphBlock | ListBlock | CodeBlock | ImageBlock;
export interface CalloutBlock {
    type: 'callout';
    tone: CalloutTone;
    title?: string;
    body: CalloutBodyBlock[];
}

export interface ImageBlock { type: 'image'; src: string; alt: string; caption?: string }

export interface EmbedBlock { type: 'embed'; kind: 'youtube' | 'scratch' | 'iframe'; src: string }

export interface TableBlock { type: 'table'; headers: string[]; rows: string[][] }

export type LessonContentBlock =
    | HeadingBlock
    | ParagraphBlock
    | ListBlock
    | CodeBlock
    | CalloutBlock
    | ImageBlock
    | EmbedBlock
    | TableBlock;

export interface LessonQuizOption { label: string; value: string }
export interface LessonQuizQuestion {
    question: string;
    options: LessonQuizOption[];
    correctAnswer: string;
    explanation?: string;
}

/** One step of a lesson. Replaces the old `{ title, content: string, ... }` shape. */
export interface LessonStep {
    title: string;
    blocks: LessonContentBlock[];
    initialCode?: string;
    expectedOutput?: string | null;
    showCompiler?: boolean;
    showAutograder?: boolean;
    quiz?: LessonQuizQuestion[];
}
