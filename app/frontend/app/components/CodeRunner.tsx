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
    theme = 'site',
}: {
    language: string;
    initialCode?: string;
    exerciseId?: string;
    /** Called with every terminal run result — lets a caller (e.g. a lesson's
     * expected-output check) react to stdout without re-implementing run/poll. */
    onFinished?: (result: RunResult) => void;
    /** "home" matches the redesigned homepage/playground look; "site"
     *  (default) is the original theme every lesson page still uses. */
    theme?: 'site' | 'home';
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

    const t =
        theme === 'home'
            ? {
                  border: 'border-home-rule',
                  headerBg: 'bg-home-teal-tint',
                  label: 'font-sans text-sm font-semibold text-home-ink',
                  reset: 'text-sm font-semibold text-home-teal underline underline-offset-2 transition-colors hover:text-home-teal-deep',
                  run: 'inline-flex items-center gap-1.5 rounded-md bg-home-teal px-3 py-1.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-home-teal-deep disabled:opacity-60',
                  status: 'mb-2 text-sm text-home-ink-soft',
                  stdout: 'font-mono text-sm text-home-ink whitespace-pre-wrap',
              }
            : {
                  border: 'border-rule',
                  headerBg: 'bg-paper-sunk',
                  label: 'label',
                  reset: 'link-quiet text-small font-semibold',
                  run: 'btn btn-brand inline-flex items-center gap-1.5 !py-1.5 !px-3 text-small disabled:opacity-60',
                  status: 'text-small text-ink-muted mb-2',
                  stdout: 'font-mono text-small text-ink whitespace-pre-wrap',
              };

    return (
        <div className={`border ${t.border} rounded-md overflow-hidden`}>
            <div className={`flex items-center justify-between gap-4 px-4 py-2 ${t.headerBg} border-b ${t.border}`}>
                <span className={t.label}>{language}</span>
                <div className="flex items-center gap-4">
                    {initialCode !== undefined && code !== initialCode && (
                        <button
                            onClick={() => {
                                setCode(initialCode);
                                setResult(null);
                                setError(null);
                            }}
                            className={t.reset}
                        >
                            Reset to starter code
                        </button>
                    )}
                    <button onClick={run} disabled={running} className={t.run}>
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
                <div className={`border-t ${t.border} px-4 py-3 ${t.headerBg}`}>
                    {error && <p className="text-small text-danger">{error}</p>}
                    {result && (
                        <>
                            <p role="status" className={t.status}>
                                {result.status}
                                {result.runtime_ms != null && ` — ${result.runtime_ms}ms`}
                                {result.passed != null && (result.passed ? ' — passed' : ' — did not match expected output')}
                            </p>
                            {result.stdout && <pre className={t.stdout}>{result.stdout}</pre>}
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
