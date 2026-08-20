"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    ArrowRight,
    AlertCircle,
    CheckCircle2,
    XCircle,
    Clipboard,
    Check,
} from 'lucide-react';
import type { Course, LessonSummary } from '@/src/data/courses';
import { lessonOrdinal, lessonConcept } from '@/src/data/courses';
import { markDone } from '@/src/lib/progress';

interface QuizOption { label: string; value: string }
interface QuizQuestion {
    question: string;
    options: QuizOption[];
    correctAnswer: string;
    explanation?: string;
}

export interface Exercise {
    title: string;
    content: string;
    initialCode?: string;
    expectedOutput?: string;
    showCompiler?: boolean;
    showAutograder?: boolean;
    quiz?: QuizQuestion[];
}

/** OneCompiler slug for the language a course is taught in. */
const embedFor = (courseId: string) =>
    courseId.startsWith('java') ? 'java' : 'python';

export default function LessonViewerClient({
    course,
    lesson,
    exercises,
    prev,
    next,
}: {
    course: Course;
    lesson: LessonSummary;
    exercises: Exercise[];
    prev?: LessonSummary;
    next?: LessonSummary;
}) {
    const [current, setCurrent] = useState(0);
    const index = course.lessons.findIndex((l) => l.id === lesson.id);

    const go = (i: number) => {
        setCurrent(i);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                {/* Steps ------------------------------------------------- */}
                <aside className="w-full lg:w-72 lg:shrink-0 lg:sticky lg:top-24">
                    <h2 className="label">Steps in this lesson</h2>
                    <ol className="mt-4 border-t border-rule">
                        {exercises.map((exercise, i) => (
                            <li key={i} className="border-b border-rule">
                                <button
                                    onClick={() => go(i)}
                                    aria-current={i === current ? 'step' : undefined}
                                    className={`w-full text-left flex gap-3 py-3 pl-3 text-small border-l-[3px] transition-colors ${
                                        i === current
                                            ? 'font-semibold'
                                            : 'border-transparent text-ink-muted hover:text-ink'
                                    }`}
                                    style={
                                        i === current
                                            ? { borderColor: 'var(--track)', color: 'var(--track)' }
                                            : undefined
                                    }
                                >
                                    <span className="font-mono text-ink-meta tnum shrink-0">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span>{exercise.title}</span>
                                </button>
                            </li>
                        ))}
                    </ol>

                    {lesson.notesLink && (
                        <Link
                            href={lesson.notesLink}
                            className="link-quiet inline-flex items-center min-h-11 mt-4 text-small -my-2.5 px-3 -mx-3"
                        >
                            Read the notes for this week
                        </Link>
                    )}
                </aside>

                {/* Content ----------------------------------------------- */}
                <div className="flex-1 min-w-0">
                    <header className="pb-8 border-b border-rule">
                        <p className="eyebrow">
                            {course.title} &middot; {lessonOrdinal(lesson, index)}
                        </p>
                        <h1 className="text-h1 text-ink mt-3">{lessonConcept(lesson)}</h1>
                    </header>

                    {/* Where the student is. Previously this was the smallest,
                        faintest text on a page whose h1 reaches 48px. The
                        sentence carries the meaning, so the segments are
                        decorative — and deliberately not a progressbar role,
                        which would claim a completion the app cannot vouch for. */}
                    <div className="sticky top-16 z-40 bg-paper border-b border-rule py-3 lg:static lg:border-0 lg:py-0 lg:mt-6">
                        <div className="flex items-center gap-4">
                            <p className="text-body text-ink tnum shrink-0">
                                Step <strong className="font-semibold">{current + 1}</strong> of{' '}
                                {exercises.length}
                            </p>
                            <div className="flex flex-1 gap-1" aria-hidden="true">
                                {exercises.map((_, i) => (
                                    <span
                                        key={i}
                                        className="h-1 flex-1"
                                        style={{
                                            backgroundColor:
                                                i <= current
                                                    ? 'var(--track)'
                                                    : 'var(--color-rule-strong)',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Every step is server-rendered, so a crawler and a
                        reader-mode extractor get the whole lesson. Only the
                        current one is visible; the rest are display:none, so
                        this is not a no-JavaScript fallback. */}
                    {exercises.map((exercise, i) => (
                        <ExercisePanel
                            key={i}
                            exercise={exercise}
                            step={i + 1}
                            total={exercises.length}
                            active={i === current}
                            embed={embedFor(course.id)}
                        />
                    ))}

                    <nav className="flex items-center justify-between gap-4 pt-8 mt-10 border-t border-rule">
                        <button
                            onClick={() => go(current - 1)}
                            disabled={current === 0}
                            className="btn btn-outline disabled:opacity-40"
                        >
                            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                            Previous
                        </button>

                        {current < exercises.length - 1 ? (
                            <button onClick={() => go(current + 1)} className="btn btn-brand">
                                Next step
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </button>
                        ) : next ? (
                            /* The loudest control on the last step used to link
                               backwards to the syllabus while the actual next
                               lesson sat below it in a quieter card. */
                            <Link
                                href={next.link}
                                onClick={() => markDone(course.id, lesson.id)}
                                className="btn btn-brand whitespace-normal text-left leading-snug"
                            >
                                Next: {lessonConcept(next)}
                                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                            </Link>
                        ) : (
                            <Link
                                href={course.link}
                                onClick={() => markDone(course.id, lesson.id)}
                                className="btn btn-brand"
                            >
                                Finish {lessonOrdinal(lesson, index)}
                            </Link>
                        )}
                    </nav>

                    {(prev || next) && current < exercises.length - 1 && (
                        <div className="grid gap-4 sm:grid-cols-2 mt-10">
                            {prev ? (
                                <Link href={prev.link} className="card card-link p-5">
                                    <span className="eyebrow">Previous</span>
                                    <span className="block text-ink mt-1.5">{lessonConcept(prev)}</span>
                                </Link>
                            ) : (
                                <span />
                            )}
                            {next && (
                                <Link href={next.link} className="card card-link p-5 sm:text-right">
                                    <span className="eyebrow">Next</span>
                                    <span className="block text-ink mt-1.5">{lessonConcept(next)}</span>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

/* -------------------------------------------------------------------------
   One step. State is local, so answers survive moving between steps.
   ------------------------------------------------------------------------- */

function ExercisePanel({
    exercise,
    step,
    total,
    active,
    embed,
}: {
    exercise: Exercise;
    step: number;
    total: number;
    active: boolean;
    embed: string;
}) {
    const [output, setOutput] = useState('');
    const [checked, setChecked] = useState<null | { ok: boolean; detail: string }>(null);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [graded, setGraded] = useState(false);
    const [missing, setMissing] = useState<number[]>([]);
    const [copied, setCopied] = useState(false);
    const frame = useRef<HTMLIFrameElement>(null);

    const starter = exercise.initialCode;
    // OneCompiler's Java runner requires the filename to match the public class.
    // A few Java snippets are bare statements with no class; populating those
    // would replace a runnable skeleton with code that cannot compile.
    const javaClass = starter?.match(/public\s+class\s+(\w+)/)?.[1];
    const canPopulate = Boolean(starter) && (embed !== 'java' || Boolean(javaClass));
    const fileName = embed === 'java' ? `${javaClass}.java` : 'main.py';

    const populate = () => {
        if (!canPopulate) return;
        frame.current?.contentWindow?.postMessage(
            {
                eventType: 'populateCode',
                language: embed,
                files: [{ name: fileName, content: starter }],
            },
            'https://onecompiler.com',
        );
    };
    // Once a step's editor has been shown, keep it mounted. Unmounting it on
    // navigation threw away whatever the student had typed.
    const [everActive, setEverActive] = useState(active);
    if (active && !everActive) setEverActive(true);

    const quiz = exercise.quiz ?? [];
    const score = quiz.filter((q, i) => answers[i] === q.correctAnswer).length;

    /* Exact string equality failed on a trailing space, on CRLF, and on any
       trailing whitespace, and reported all of them with the same sentence.
       Internal whitespace is preserved on purpose — some expected outputs are
       aligned grids where the runs are load-bearing. */
    const compare = () => {
        const norm = (t: string) =>
            t.split(/\r\n|\r|\n/).map((l) => l.trimEnd()).filter((l, i, a) => l !== '' || i < a.length - 1);
        const mine = norm(output);
        const want = norm(exercise.expectedOutput ?? '');

        while (mine.length && mine[mine.length - 1] === '') mine.pop();
        while (want.length && want[want.length - 1] === '') want.pop();

        if (mine.join('\n') === want.join('\n')) {
            setChecked({ ok: true, detail: "That's it." });
            return;
        }
        if (mine.length !== want.length) {
            setChecked({
                ok: false,
                detail: `You printed ${mine.length} line${mine.length === 1 ? '' : 's'}, expected ${want.length}.`,
            });
            return;
        }
        const i = mine.findIndex((l, n) => l !== want[n]);
        if (mine[i]?.toLowerCase() === want[i]?.toLowerCase()) {
            setChecked({
                ok: false,
                detail: `Right words, wrong capitals — line ${i + 1} should be "${want[i]}".`,
            });
            return;
        }
        setChecked({
            ok: false,
            detail: `Line ${i + 1}: you printed "${mine[i]}", expected "${want[i]}".`,
        });
    };

    const copy = (text: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => setCopied(false));
    };

    return (
        <article className={active ? 'pt-10' : 'hidden'} aria-hidden={!active}>
            <div
                className="lesson-prose"
                dangerouslySetInnerHTML={{ __html: exercise.content }}
            />

            {exercise.initialCode && (
                <section className="mt-10 border border-rule rounded-md overflow-hidden">
                    <div className="flex items-center justify-between gap-4 px-5 py-3 bg-paper-sunk border-b border-rule">
                        <span className="label">Starter code</span>
                        <button
                            onClick={() => copy(exercise.initialCode!)}
                            className="inline-flex items-center gap-1.5 min-h-11 -my-2.5 px-3 -mx-3 text-small font-semibold text-brand"
                        >
                            {copied ? (
                                <Check className="w-4 h-4" aria-hidden="true" />
                            ) : (
                                <Clipboard className="w-4 h-4" aria-hidden="true" />
                            )}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                    <pre className="bg-code-bg text-code-fg font-mono text-small leading-relaxed px-5 py-5 overflow-x-auto">
                        <code>{exercise.initialCode}</code>
                    </pre>
                </section>
            )}

            {exercise.showCompiler && (
                <section className="mt-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h2 className="label">Write your code here</h2>
                        {exercise.expectedOutput?.trim() && (
                            <p className="text-small text-ink-muted">
                                Make it print{' '}
                                <code className="font-mono text-ink">
                                    {exercise.expectedOutput}
                                </code>
                            </p>
                        )}
                        {canPopulate && (
                            <button
                                onClick={populate}
                                className="link-quiet text-small font-semibold"
                            >
                                Reset to starter code
                            </button>
                        )}
                    </div>
                    <div className="mt-3 border border-rule rounded-md overflow-hidden">
                        {/* Only the visible step mounts an editor. */}
                        {everActive ? (
                            <iframe
                                ref={frame}
                                src={`https://onecompiler.com/embed/${embed}?hideNew=true${
                                    canPopulate ? '&listenToEvents=true' : ''
                                }`}
                                title="Code editor"
                                loading="lazy"
                                // The embed documents no ready handshake, so the
                                // send is repeated across the boot window. The
                                // 1.2s cap is short enough that it cannot
                                // overwrite anything the student has typed.
                                onLoad={() => {
                                    populate();
                                    setTimeout(populate, 400);
                                    setTimeout(populate, 1200);
                                }}
                                className="w-full h-[clamp(380px,60vh,560px)] block"
                            />
                        ) : (
                            <div className="h-[clamp(380px,60vh,560px)]" />
                        )}
                    </div>
                </section>
            )}

            {exercise.showAutograder && exercise.expectedOutput?.trim() && (
                <section className="mt-8">
                    <h2 className="text-h3 font-sans font-bold text-ink">Did it work?</h2>

                    <p className="text-small text-ink-muted mt-4">
                        Your program should print this:
                    </p>
                    <pre className="bg-code-bg text-code-fg font-mono text-small px-4 py-3 rounded-md mt-2 overflow-x-auto">
                        <code>{exercise.expectedOutput}</code>
                    </pre>

                    <label
                        htmlFor={`output-${step}`}
                        className="block text-small text-ink-muted mt-6"
                    >
                        Paste what you got:
                    </label>
                    <textarea
                        id={`output-${step}`}
                        value={output}
                        onChange={(e) => {
                            setOutput(e.target.value);
                            setChecked(null);
                        }}
                        className="field font-mono text-small h-28 mt-2"
                    />

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <button onClick={compare} className="btn btn-brand">
                            Check my output
                        </button>

                        {checked !== null && (
                            <p
                                role="status"
                                className={`inline-flex items-start gap-2 text-small font-semibold ${
                                    checked.ok ? 'text-success' : 'text-danger'
                                }`}
                            >
                                {checked.ok ? (
                                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                                ) : (
                                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                                )}
                                {checked.detail}
                            </p>
                        )}
                    </div>
                </section>
            )}

            {quiz.length > 0 && (
                <section className="mt-10">
                    <h2 className="text-h3 font-sans font-bold text-ink">Quick check</h2>

                    <ol className="mt-6 space-y-8">
                        {quiz.map((q, qi) => (
                            <li key={qi}>
                                <p className="text-ink font-semibold">{q.question}</p>
                                <div className="grid gap-2 sm:grid-cols-2 mt-3">
                                    {q.options.map((option, oi) => {
                                        const selected = answers[qi] === option.value;
                                        const correct = option.value === q.correctAnswer;
                                        let tone = 'border-rule hover:border-field text-ink-muted';
                                        let mark = null;
                                        let sr = '';
                                        if (graded && correct) {
                                            tone = 'border-success bg-success-tint text-success';
                                            mark = <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />;
                                            sr = selected ? ' — correct, you chose this' : ' — correct answer';
                                        } else if (graded && selected) {
                                            tone = 'border-danger bg-danger-tint text-danger';
                                            mark = <XCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />;
                                            sr = ' — your answer, incorrect';
                                        } else if (graded) {
                                            tone = 'border-rule text-ink-meta';
                                        } else if (selected) {
                                            tone = 'border-brand bg-brand-tint text-brand';
                                        }

                                        return (
                                            <button
                                                key={oi}
                                                disabled={graded}
                                                onClick={() => {
                                                    setAnswers((a) => ({ ...a, [qi]: option.value }));
                                                    setMissing((m) => m.filter((i) => i !== qi));
                                                }}
                                                className={`flex items-start gap-2 text-left text-small border rounded-sm px-4 py-3 transition-colors ${tone}`}
                                            >
                                                {mark}
                                                <span>
                                                    {option.label}
                                                    <span className="sr-only">{sr}</span>
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {graded && q.explanation && (
                                    <p className="text-body text-ink bg-paper-sunk border-l-2 border-rule-strong rounded-sm px-4 py-3 mt-3">
                                        <strong className="font-semibold">Why: </strong>
                                        {q.explanation}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ol>

                    {!graded ? (
                        <>
                            <button
                                onClick={() => {
                                    const gaps = quiz
                                        .map((_, i) => i)
                                        .filter((i) => answers[i] === undefined);
                                    setMissing(gaps);
                                    if (!gaps.length) setGraded(true);
                                }}
                                className="btn btn-brand mt-8"
                            >
                                Check my answers
                            </button>
                            <p role="status" className="text-small text-ink-muted mt-3 min-h-5">
                                {missing.length
                                    ? `Question ${missing.map((i) => i + 1).join(' and ')} still needs an answer.`
                                    : ''}
                            </p>
                        </>
                    ) : (
                        <div className="mt-8 flex flex-wrap items-baseline gap-4">
                            <p className="text-h2 font-mono tracking-normal tnum text-ink">
                                {score} / {quiz.length}
                            </p>
                            <p className="text-small text-ink-muted">
                                You can try again as many times as you like.
                            </p>
                            <button
                                onClick={() => {
                                    setGraded(false);
                                    setAnswers({});
                                    setMissing([]);
                                }}
                                className="link-quiet text-small font-semibold"
                            >
                                Try again
                            </button>
                        </div>
                    )}
                </section>
            )}
        </article>
    );
}
