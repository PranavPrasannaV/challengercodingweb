import type { Metadata } from 'next';
import PlaygroundClient from './PlaygroundClient';

export const metadata: Metadata = {
    title: 'Playground',
    description:
        'Write and run Python, Java or JavaScript in the browser. The same editor students use inside our lessons.',
    alternates: { canonical: '/compiler/' },
};

export default function Compiler() {
    return (
        <main id="main" className="wrap section">
            <header className="border-b border-rule pb-6">
                <h1 className="text-h1 text-ink">Playground</h1>
            </header>

            <p className="text-lead measure mt-8">
                Write and run code in the browser — nothing to install. This is the
                same editor that appears inside the lessons.
            </p>

            <PlaygroundClient />

            <p className="text-small text-ink-meta mt-4">
                The editor is provided by OneCompiler. Nothing you type here is
                saved.
            </p>
        </main>
    );
}
