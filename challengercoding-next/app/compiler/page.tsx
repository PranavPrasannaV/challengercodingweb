import type { Metadata } from 'next';
import PlaygroundClient from './PlaygroundClient';

export const metadata: Metadata = {
    title: 'Playground',
    description:
        'Write and run Python or Java in the browser. The same execution engine that runs code inside our lessons.',
    alternates: { canonical: '/compiler/' },
};

export default function Compiler() {
    return (
        <main id="main" className="wrap section">
            <header className="border-b border-rule pb-6">
                <h1 className="text-h1 text-ink">Playground</h1>
            </header>

            <p className="text-lead measure mt-8">
                Write and run code in the browser — nothing to install. This runs on
                the same execution engine used inside the lessons.
            </p>

            <PlaygroundClient />

            <p className="text-small text-ink-meta mt-4">
                Your code runs in an isolated container on our server. Nothing you
                type here is saved.
            </p>
        </main>
    );
}
