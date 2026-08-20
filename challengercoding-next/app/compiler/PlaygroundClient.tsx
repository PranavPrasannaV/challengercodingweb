"use client";

import { useState } from 'react';

const LANGUAGES = [
    { id: 'python', label: 'Python' },
    { id: 'java', label: 'Java' },
    { id: 'javascript', label: 'JavaScript' },
];

export default function PlaygroundClient() {
    const [lang, setLang] = useState('python');
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="border border-rule rounded-md overflow-hidden mt-8">
            <div
                role="tablist"
                aria-label="Language"
                className="flex gap-1 px-3 py-2 bg-paper-sunk border-b border-rule"
            >
                {LANGUAGES.map((option) => (
                    <button
                        key={option.id}
                        role="tab"
                        aria-selected={lang === option.id}
                        onClick={() => {
                            if (option.id === lang) return;
                            setLoaded(false);
                            setLang(option.id);
                        }}
                        className={`px-3 py-1.5 rounded-sm text-small font-semibold transition-colors ${
                            lang === option.id
                                ? 'bg-card text-brand'
                                : 'text-ink-muted hover:text-ink'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            {/* The editor is the only genuinely slow thing on the site, so it
                gets the loading state — reserved box, no layout shift. */}
            <div className="relative h-[640px] bg-paper-sunk">
                {!loaded && (
                    <p className="absolute inset-0 flex items-center justify-center text-small text-ink-meta">
                        Loading the editor…
                    </p>
                )}
                <iframe
                    key={lang}
                    src={`https://onecompiler.com/embed/${lang}?hideNew=true&hideTitle=true`}
                    title={`${lang} editor`}
                    onLoad={() => setLoaded(true)}
                    className={`w-full h-full block relative transition-opacity duration-300 ${
                        loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            </div>
        </div>
    );
}
