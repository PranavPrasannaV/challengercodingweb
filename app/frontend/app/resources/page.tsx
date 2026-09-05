import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Resources',
    description:
        'Practice sites we point students to, and the official documentation for Scratch, Python and Java.',
    alternates: { canonical: '/resources/' },
};

interface Item {
    name: string;
    url: string;
    desc: string;
}

const host = (url: string) => new URL(url).hostname.replace(/^www\./, '');

const practice: Item[] = [
    { name: 'CodingBat', url: 'https://codingbat.com/', desc: 'Short Python and Java problems that grade themselves.' },
    { name: 'Codewars', url: 'https://www.codewars.com/', desc: 'Puzzles set by other people learning, ranked by difficulty.' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/', desc: 'Longer problems on data structures and algorithms.' },
    { name: 'LeetCode', url: 'https://leetcode.com/', desc: 'Interview-style questions. Useful much later than you think.' },
];

const courses: Item[] = [
    { name: 'Codecademy', url: 'https://www.codecademy.com', desc: 'Interactive lessons if you want a second explanation.' },
    { name: 'edX', url: 'https://www.edx.org/learn/computer-programming', desc: 'University courses, free to audit.' },
    { name: 'Udemy', url: 'https://www.udemy.com/courses/development/programming-languages/', desc: 'Paid video courses, frequently discounted.' },
    { name: 'W3Schools', url: 'https://www.w3schools.com/', desc: 'Quick syntax lookups for web languages.' },
];

const install: Item[] = [
    { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/docs/setup/setup-overview', desc: 'The editor we use in class. Start here.' },
    { name: 'Python', url: 'https://www.python.org/downloads/', desc: 'Download and install Python 3.' },
    { name: 'Java JDK', url: 'https://www.oracle.com/java/technologies/javase-downloads.html', desc: 'Needed before you can compile Java.' },
];

const reference: Item[] = [
    { name: 'Python standard library', url: 'https://docs.python.org/3/library/index.html', desc: 'Everything Python can already do without installing anything.' },
    { name: 'Java SE 8 API', url: 'https://docs.oracle.com/javase/8/docs/api/', desc: 'The official class reference.' },
    { name: 'MDN HTML reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', desc: 'The reliable source for anything web.' },
];

function Directory({ title, items, note }: { title: string; items: Item[]; note?: string }) {
    return (
        <section className="mt-14 first:mt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 border-b border-rule">
                <h2 className="text-h2 font-serif text-ink">{title}</h2>
                {note && <p className="text-small text-ink-meta">{note}</p>}
            </div>

            {/* A directory, not fourteen cards. Every link is legible in
                roughly the space four cards used to take. */}
            <ul className="sm:grid sm:grid-cols-2 sm:gap-x-12">
                {items.map((item) => (
                    <li key={item.url} className="border-b border-rule">
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block py-4"
                        >
                            <span className="flex items-baseline justify-between gap-4">
                                <span className="text-ink group-hover:text-brand transition-colors inline-flex items-center gap-1">
                                    {item.name}
                                    <ArrowUpRight
                                        className="w-3.5 h-3.5 text-ink-meta"
                                        aria-hidden="true"
                                    />
                                </span>
                                <span className="font-mono text-small text-ink-meta shrink-0">
                                    {host(item.url)}
                                </span>
                            </span>
                            <span className="block text-small text-ink-muted mt-1">
                                {item.desc}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function Resources() {
    return (
        <main id="main" className="wrap section">
            <header className="border-b border-rule pb-6">
                <h1 className="text-h1 text-ink">Links and resources</h1>
            </header>

            <p className="text-lead measure mt-8">
                Places we point students when they want more practice, and the
                official documentation for the three languages we teach.
            </p>

            <div className="mt-14">
                <Directory title="Practice" items={practice} note="Problems that grade themselves" />
                <Directory title="Other courses" items={courses} note="If you want a second explanation" />
                <Directory title="Install" items={install} note="Set up your own machine" />
                <Directory title="Reference" items={reference} note="Official documentation" />
            </div>
        </main>
    );
}
