"use client";

import { useState } from 'react';
import CodeRunner from '@/app/components/CodeRunner';

// Matches the execution engine's VALID_LANGUAGES — no JavaScript runner
// exists yet (see code-execution-engine's IMAGES dict in worker/pool.py).
const LANGUAGES = [
    { id: 'python', label: 'Python' },
    { id: 'java', label: 'Java' },
];

export default function PlaygroundClient() {
    const [lang, setLang] = useState('python');

    return (
        <div className="mt-8">
            <div role="tablist" aria-label="Language" className="flex gap-1 px-1 pb-2">
                {LANGUAGES.map((option) => (
                    <button
                        key={option.id}
                        role="tab"
                        aria-selected={lang === option.id}
                        onClick={() => setLang(option.id)}
                        className={`px-3 py-1.5 rounded-sm font-sans text-sm font-semibold transition-colors ${
                            lang === option.id ? 'bg-white text-home-teal' : 'text-home-ink-soft hover:text-home-ink'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
            <CodeRunner key={lang} language={lang} initialCode="" theme="home" />
        </div>
    );
}
