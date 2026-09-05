"use client";

import { useRef, useState } from 'react';
import { Loader2, Play } from 'lucide-react';
import { pollRun, submitRun, type RunResult } from '@/src/lib/executionApi';

/**
 * The `currentUser` this reads is the same fake localStorage session
 * login/page.tsx sets — good enough for the engine's unchecked user_id, and
 * a stable per-browser id for anyone who never logs in.
 */
function currentUserId(): string {
    if (typeof window === 'undefined') return 'anonymous';
    const existing = localStorage.getItem('currentUser');
    if (existing) return existing;
    const key = 'executionAnonId';
    let anon = localStorage.getItem(key);
    if (!anon) {
        anon = `anon-${crypto.randomUUID()}`;
        localStorage.setItem(key, anon);
    }
    return anon;
}

export default function CodeRunner({
    language,
    initialCode,
    exerciseId,
    onFinished,
}: {
    language: string;
    initialCode?: string;
    exerciseId?: string;
    /** Called with every terminal run result — lets a caller (e.g. a lesson's
     * expected-output check) react to stdout without re-implementing run/poll. */
    onFinished?: (result: RunResult) => void;
}) {
    const [code, setCode] = useState(initialCode ?? '');
    const [running, setRunning] = useState(false);
    const [result, setResult] = useState<RunResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const abortRef = useRef<AbortController | null>(null);

    const run = async () => {
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        setRunning(true);
        setError(null);
        setResult(null);
        try {
            const { run_id } = await submitRun({
                language,
                code,
                user_id: currentUserId(),
                exercise_id: exerciseId,
            });
            const finished = await pollRun(run_id, { signal: controller.signal });
            setResult(finished);
            onFinished?.(finished);
        } catch (e) {
            if ((e as Error).name !== 'AbortError') {
                setError(e instanceof Error ? e.message : 'Something went wrong running your code.');
            }
        } finally {
            setRunning(false);
        }
    };

    return (
        <div className="border border-rule rounded-md overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-4 py-2 bg-paper-sunk border-b border-rule">
                <span className="label">{language}</span>
                <div className="flex items-center gap-4">
                    {initialCode !== undefined && code !== initialCode && (
                        <button
                            onClick={() => {
                                setCode(initialCode);
                                setResult(null);
                                setError(null);
                            }}
                            className="link-quiet text-small font-semibold"
                        >
                            Reset to starter code
                        </button>
                    )}
                    <button
                        onClick={run}
                        disabled={running}
                        className="btn btn-brand inline-flex items-center gap-1.5 !py-1.5 !px-3 text-small disabled:opacity-60"
                    >
                        {running ? (
                            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        ) : (
                            <Play className="w-4 h-4" aria-hidden="true" />
                        )}
                        Run
                    </button>
                </div>
            </div>

            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="w-full h-64 block font-mono text-small bg-code-bg text-code-fg p-4 resize-y focus:outline-none"
            />

            {(result || error) && (
                <div className="border-t border-rule px-4 py-3 bg-paper-sunk">
                    {error && <p className="text-small text-danger">{error}</p>}
                    {result && (
                        <>
                            <p role="status" className="text-small text-ink-muted mb-2">
                                {result.status}
                                {result.runtime_ms != null && ` — ${result.runtime_ms}ms`}
                                {result.passed != null && (result.passed ? ' — passed' : ' — did not match expected output')}
                            </p>
                            {result.stdout && (
                                <pre className="font-mono text-small text-ink whitespace-pre-wrap">{result.stdout}</pre>
                            )}
                            {result.stderr && (
                                <pre className="font-mono text-small text-danger whitespace-pre-wrap">{result.stderr}</pre>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
