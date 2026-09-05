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
        <main id="main" className="bg-home-bg text-home-ink">
          <div className="wrap section">
            <header className="border-b border-home-rule pb-6">
                <h1 className="font-sans text-4xl font-semibold tracking-tight text-home-ink">Playground</h1>
            </header>

            <p className="mt-8 max-w-[60ch] font-sans text-lg leading-relaxed text-home-ink-soft">
                Write and run code in the browser — nothing to install. This runs on
                the same execution engine used inside the lessons.
            </p>

            <PlaygroundClient />

            <p className="mt-4 text-sm text-home-ink-soft">
                Your code runs in an isolated container on our server. Nothing you
                type here is saved.
            </p>
          </div>
        </main>
    );
}
