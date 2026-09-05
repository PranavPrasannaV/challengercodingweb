"use client";

import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { QuizQuestion, QuizOption } from '@/src/data/notes/types';

const valueOf = (opt: string | QuizOption) =>
    typeof opt === 'string' ? opt : opt.value;
const labelOf = (opt: string | QuizOption) =>
    typeof opt === 'string' ? opt : opt.label;

function isCorrect(question: QuizQuestion, answer: string) {
    if (typeof question.correctAnswer === 'number' && question.options) {
        const i = question.options.findIndex((o) => valueOf(o) === answer);
        return i === question.correctAnswer;
    }
    return (
        answer.trim().toLowerCase() ===
        String(question.correctAnswer).trim().toLowerCase()
    );
}

export default function NotesQuiz({ questions }: { questions: QuizQuestion[] }) {
    return (
        <div className="mt-10 pt-8 border-t border-rule">
            <h3 className="text-h3 font-sans font-bold text-ink">Quick check</h3>
            <ol className="mt-6 space-y-8">
                {questions.map((question, i) => (
                    <li key={i}>
                        <Question question={question} index={i} />
                    </li>
                ))}
            </ol>
        </div>
    );
}

function Question({ question, index }: { question: QuizQuestion; index: number }) {
    const [answer, setAnswer] = useState('');
    // A boolean, not a sentence. Grading used to be decided by searching the
    // feedback copy for the word "Fantastic", which meant any wording change
    // silently broke it.
    const [result, setResult] = useState<null | boolean>(null);
    const [nudge, setNudge] = useState('');

    const options = question.options ?? [];
    const inputId = `note-answer-${index}`;

    return (
        <>
            <p className="text-ink font-semibold">{question.question}</p>

            {options.length > 0 ? (
                <div className="grid gap-2 mt-3">
                    {options.map((option, oi) => {
                        const value = valueOf(option);
                        const selected = answer === value;
                        return (
                            <button
                                key={oi}
                                onClick={() => {
                                    setAnswer(value);
                                    setResult(null);
                                }}
                                className={`text-left text-small border rounded-sm px-4 py-3 transition-colors ${
                                    selected
                                        ? 'border-brand bg-brand-tint text-brand'
                                        : 'border-rule hover:border-field text-ink-muted'
                                }`}
                            >
                                {labelOf(option)}
                            </button>
                        );
                    })}
                </div>
            ) : (
                <>
                    <label htmlFor={inputId} className="sr-only">
                        Your answer
                    </label>
                    <input
                        id={inputId}
                        type="text"
                        placeholder="Your answer"
                        className="field mt-3"
                        value={answer}
                        onChange={(e) => {
                            setAnswer(e.target.value);
                            setResult(null);
                        }}
                    />
                </>
            )}

            <div className="flex flex-wrap items-center gap-4 mt-4">
                <button
                    onClick={() => {
                        if (!answer) {
                            setNudge(options.length ? 'Pick an answer first.' : 'Type your answer first.');
                            return;
                        }
                        setNudge('');
                        setResult(isCorrect(question, answer));
                    }}
                    className="btn btn-brand"
                >
                    Check my answer
                </button>

                {result !== null && (
                    <p
                        role="status"
                        className={`inline-flex items-center gap-2 text-small font-semibold ${
                            result ? 'text-success' : 'text-danger'
                        }`}
                    >
                        {result ? (
                            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                        ) : (
                            <XCircle className="w-4 h-4" aria-hidden="true" />
                        )}
                        {result ? 'Correct.' : 'Not quite. Review the notes and try again.'}
                    </p>
                )}
            </div>

            <p role="status" className="text-small text-ink-muted mt-2 min-h-5">
                {nudge}
            </p>

            {/* Shown after any attempt. On a wrong answer the explanation is
                the entire point of asking. */}
            {question.explanation && result !== null && (
                <p className="text-body text-ink bg-paper-sunk border-l-2 border-rule-strong rounded-sm px-4 py-3 mt-4">
                    <strong className="text-ink font-semibold">Why: </strong>
                    {question.explanation}
                </p>
            )}
        </>
    );
}
