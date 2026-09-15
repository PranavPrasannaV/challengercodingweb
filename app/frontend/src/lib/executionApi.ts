/**
 * Client for the code-app/backend API (lessons, exercises, and code
 * runs). Lesson reads happen at build time (see src/lib/lessons.ts, called
 * from Server Components while the site is exported to static files); run
 * submission/polling stays client-side since it's inherently per-visitor,
 * interactive state.
 *
 * Unset NEXT_PUBLIC_EXECUTION_API_URL means "no engine configured yet": every
 * export here returns null/throws in a way callers are expected to treat as
 * "fall back to the old behavior" (see PlaygroundClient's iframe fallback).
 */

export const EXECUTION_API_URL = process.env.NEXT_PUBLIC_EXECUTION_API_URL ?? null;

export interface LessonSummary {
    id: string;
    slug: string;
    title: string;
    track: string;
    order_index: number;
}

// Mirrors app/backend/api/app/schemas.py's block content models —
// see src/data/lessons/blocks.ts for the frontend-side render types these
// map onto (src/lib/lessons.ts does the mapping).
export interface StepBlockContent { title: string }
export interface HeadingBlockContent { level: 2 | 3 | 4; text: string }
export interface ParagraphBlockContent { text: string }
export interface ListBlockContent { style: 'bullet' | 'number'; items: string[] }
export interface CodeBlockContent { code: string; language?: string }
export type CalloutBodyBlockContent =
    | ({ type: 'paragraph' } & ParagraphBlockContent)
    | ({ type: 'list' } & ListBlockContent)
    | ({ type: 'code' } & CodeBlockContent)
    | ({ type: 'image' } & ImageBlockContent);
export interface CalloutBlockContent {
    tone: 'info' | 'tip' | 'warning' | 'success' | 'danger';
    title?: string;
    body: CalloutBodyBlockContent[];
}
export interface TableBlockContent { headers: string[]; rows: string[][] }
export interface ImageBlockContent { src: string; alt: string; caption?: string }
export interface EmbedBlockContent { kind: 'youtube' | 'scratch' | 'iframe'; src: string }

export interface QuizChoice { label: string; value: string }
export interface QuizBlockContent {
    question: string;
    choices: QuizChoice[];
    answer_idx: number;
}

export interface ExerciseRefBlockContent {
    exercise_id: string;
    title: string;
    language: string;
    starter_code: string;
    expected_output: string | null;
}

export type LessonBlock =
    | { id: string; position: number; block_type: 'step'; version: number; content: StepBlockContent }
    | { id: string; position: number; block_type: 'heading'; version: number; content: HeadingBlockContent }
    | { id: string; position: number; block_type: 'paragraph'; version: number; content: ParagraphBlockContent }
    | { id: string; position: number; block_type: 'list'; version: number; content: ListBlockContent }
    | { id: string; position: number; block_type: 'code'; version: number; content: CodeBlockContent }
    | { id: string; position: number; block_type: 'callout'; version: number; content: CalloutBlockContent }
    | { id: string; position: number; block_type: 'table'; version: number; content: TableBlockContent }
    | { id: string; position: number; block_type: 'image'; version: number; content: ImageBlockContent }
    | { id: string; position: number; block_type: 'embed'; version: number; content: EmbedBlockContent }
    | { id: string; position: number; block_type: 'quiz'; version: number; content: QuizBlockContent }
    | { id: string; position: number; block_type: 'exercise_ref'; version: number; content: ExerciseRefBlockContent };

export interface Lesson {
    id: string;
    slug: string;
    title: string;
    track: string;
    order_index: number;
    current_version: number;
    blocks: LessonBlock[];
}

export interface RunResult {
    id: string;
    exercise_id: string | null;
    user_id: string;
    language: string;
    status: 'pending' | 'running' | 'done' | 'error' | 'timeout';
    stdout: string | null;
    stderr: string | null;
    exit_code: number | null;
    passed: boolean | null;
    runtime_ms: number | null;
    created_at: string | null;
}

function requireApiUrl(): string {
    if (!EXECUTION_API_URL) {
        throw new Error(
            'NEXT_PUBLIC_EXECUTION_API_URL is not set — the execution engine is not configured for this build.',
        );
    }
    return EXECUTION_API_URL;
}

/** A throttled (429) or failing (5xx) response is worth another try; any
 *  other status is the real answer. */
const isTransient = (status: number) => status === 429 || status >= 500;

const backoff = (attempt: number) =>
    new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt * (0.5 + Math.random())));

/** `revalidate` is a Next.js-only fetch extension — ignored by browsers, so
 *  the same helper works for the client-side run calls below. `retries`
 *  re-sends a dropped or transiently failed request, with jittered backoff. */
async function apiFetch<T>(
    path: string,
    { retries = 0, ...init }: RequestInit & { next?: { revalidate?: number }; retries?: number } = {},
): Promise<T> {
    const url = `${requireApiUrl()}${path}`;
    for (let attempt = 0; ; attempt++) {
        const lastAttempt = attempt >= retries;
        let res: Response;
        try {
            res = await fetch(url, {
                ...init,
                // A signal opts a retry out of Next's per-render fetch dedupe,
                // which would otherwise replay the response that just failed.
                ...(attempt > 0 ? { signal: AbortSignal.timeout(20_000) } : {}),
                headers: { 'Content-Type': 'application/json', ...init.headers },
            });
        } catch (err) {
            if (lastAttempt) throw err;
            await backoff(attempt);
            continue;
        }
        if (res.ok) return res.json() as Promise<T>;
        if (!lastAttempt && isTransient(res.status)) {
            await backoff(attempt);
            continue;
        }
        const body = await res.text().catch(() => '');
        throw new Error(`${init.method ?? 'GET'} ${path} -> ${res.status}: ${body}`);
    }
}

// Lesson reads happen at build time, dozens of pages at once, against an API
// whose AWS account allows 10 concurrent Lambda executions in total. A burst
// gets throttled (503), so these retry rather than export a lesson as a 404.
const LESSON_READ_RETRIES = 5;

export const listLessons = () =>
    apiFetch<LessonSummary[]>('/lessons', { next: { revalidate: 300 }, retries: LESSON_READ_RETRIES });

/** Five minutes in Next's fetch cache, so every page of a build that reads
 *  the same lesson shares one request. */
export const getLesson = (slug: string) =>
    apiFetch<Lesson>(`/lessons/${encodeURIComponent(slug)}`, {
        next: { revalidate: 300 },
        retries: LESSON_READ_RETRIES,
    });

export const submitRun = (body: {
    language: string;
    code: string;
    user_id: string;
    exercise_id?: string;
}) => apiFetch<{ run_id: string }>('/run', { method: 'POST', body: JSON.stringify(body) });

export const checkRun = (runId: string) => apiFetch<RunResult>(`/check/${runId}`);

const TERMINAL_STATUSES = new Set(['done', 'error', 'timeout']);

/**
 * Polls /check/{run_id} until the run reaches a terminal status, an abort
 * signal fires, or the run simply takes too long (the container pool has its
 * own execution timeout, but a dropped SQS message or a dead worker would
 * otherwise poll forever).
 */
export async function pollRun(
    runId: string,
    { intervalMs = 700, maxWaitMs = 20_000, signal }: { intervalMs?: number; maxWaitMs?: number; signal?: AbortSignal } = {},
): Promise<RunResult> {
    const deadline = Date.now() + maxWaitMs;
    while (true) {
        if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
        const result = await checkRun(runId);
        if (TERMINAL_STATUSES.has(result.status)) return result;
        if (Date.now() > deadline) {
            throw new Error(`Run ${runId} did not finish within ${maxWaitMs}ms`);
        }
        await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
}
