import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { courses, weekRange, totalLessons } from '@/src/data/courses';
import { SITE, STATS } from '@/src/site';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Challenger Coding was started in the summer of 2023 by Jaden Tang in Sammamish, Washington. It is still planned, written and taught by students.',
    alternates: { canonical: '/about/' },
};

/* Every one of these is checkable against src/data/courses.ts or the repo
   history. Nothing here is an aspiration. */
const facts = [
    { term: 'Founded', detail: `Summer ${SITE.founded}, by ${SITE.founders.join(' and ')}` },
    { term: 'Where', detail: `${SITE.locality}, ${SITE.region}` },
    { term: 'Students', detail: `${STATS.studentsTaught} taught since ${SITE.founded}` },
    { term: 'Courses', detail: `${courses.length}, across Scratch, Python and Java` },
    { term: 'Length', detail: `${weekRange} weekly lessons each` },
    { term: 'Cost', detail: `Free. All ${totalLessons} lessons readable without an account.` },
    { term: 'Run by', detail: 'Four students, named below' },
];

const leadership = [
    {
        name: 'Aadi Saraf',
        role: 'Co-founder and President',
        initials: 'AS',
        desc: "Leads Challenger Coding's curriculum, strategic expansion, and partnerships, helping grow our impact while maintaining a high-quality learning experience.",
    },
    {
        name: 'Pranav Prasanna Venkatesh',
        role: 'Vice President',
        initials: 'PV',
        desc: 'Supports leadership across every program and helps coordinate our instructional initiatives.',
    },
    {
        name: 'Jeswanth Battula',
        role: 'Public Relations',
        initials: 'JB',
        desc: 'Manages outreach and communications, building partnerships with schools, families, and sponsors.',
    },
    {
        name: 'Miheer Pandya',
        role: 'Webmaster',
        initials: 'MP',
        desc: 'Maintains the website and the digital platforms that deliver our lessons and resources.',
    },
];

export default function About() {
    return (
        <main id="main">
            <section className="wrap section">
                <h1 className="text-h1 text-ink measure">
                    Founded in {SITE.founded}. Still planned, written and taught by students.
                </h1>
            </section>

            <section className="border-y border-rule">
                <div className="wrap section-sm">
                    <div className="grid gap-12 md:grid-cols-12">
                        <div className="md:col-span-7">
                            <h2 className="text-h2 text-ink">Why we started</h2>
                            <div className="measure mt-6 space-y-4 text-ink-muted">
                                <p>
                                    Challenger Coding started in the summer of {SITE.founded} as a
                                    weekly Scratch class for younger students in {SITE.locality}.
                                    It is still taught entirely by high schoolers.
                                </p>
                                <p>
                                    There are now {courses.length} courses — Scratch, Python and
                                    Java, each with a second level — running {weekRange} weeks, and
                                    the Python and Java tracks end with a project students build
                                    themselves. All of it is on this site, free, with no account
                                    needed.
                                </p>
                            </div>
                        </div>

                        <dl className="md:col-span-5 md:col-start-8 border-t border-rule">
                            {facts.map((fact) => (
                                <div
                                    key={fact.term}
                                    className="flex gap-6 py-3 border-b border-rule text-small"
                                >
                                    <dt className="eyebrow w-24 shrink-0 pt-0.5">{fact.term}</dt>
                                    <dd className="text-ink-muted">{fact.detail}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            {/* Founder --------------------------------------------------- */}
            <section className="wrap section">
                <div className="grid gap-10 md:grid-cols-12 md:gap-14">
                    <div className="md:col-span-4">
                        <div className="relative aspect-[3/4] bg-paper-sunk rounded-md overflow-hidden border border-rule">
                            <Image
                                src="/jaden.jpg"
                                alt="Jaden Tang"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-7 md:col-start-6">
                        <p className="eyebrow">Co-founder, {SITE.founded}</p>
                        <h2 className="text-h2 font-serif text-ink mt-2">Jaden Tang</h2>

                        <div className="measure mt-6 space-y-4 text-ink-muted">
                            <p>
                                Jaden and Aadi Saraf started Challenger Coding in the summer of{' '}
                                {SITE.founded}, after looking for coding lessons aimed at younger
                                learners and finding almost nothing written for them. Jaden started
                                coding in third grade, with Scratch.
                            </p>
                            <p>
                                He has since learned several languages, earned the Microsoft Intro
                                to Java Programming certification, scored a 5 on the AP Computer
                                Science A exam, and worked on AI research.
                            </p>
                            <p>
                                With extensive tutoring experience, Jaden is dedicated to breaking
                                down barriers of educational access. Outside Challenger Coding he
                                plays soccer and piano.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mt-8 pt-6 border-t border-rule">
                            <span
                                aria-hidden="true"
                                className="w-10 h-10 shrink-0 rounded-md bg-paper-sunk border border-rule flex items-center justify-center font-serif text-brand"
                            >
                                AS
                            </span>
                            <span>
                                <span className="block text-small text-ink-meta">
                                    Co-founder and President
                                </span>
                                <span className="block text-ink font-semibold">Aadi Saraf</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership ------------------------------------------------ */}
            <section className="bg-paper-sunk">
                <div className="wrap section">
                    <h2 className="text-h2 text-ink">Who runs it now</h2>

                    <ul className="mt-8 border-t border-rule">
                        {leadership.map((person) => (
                            <li
                                key={person.name}
                                className="flex gap-5 py-6 border-b border-rule"
                            >
                                <span
                                    aria-hidden="true"
                                    className="w-11 h-11 shrink-0 rounded-md bg-paper border border-rule flex items-center justify-center font-serif text-brand"
                                >
                                    {person.initials}
                                </span>
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                                        <h3 className="text-h3 font-serif text-ink">
                                            {person.name}
                                        </h3>
                                        <p className="text-small text-ink-meta">{person.role}</p>
                                    </div>
                                    <p className="text-small text-ink-muted measure mt-1.5">
                                        {person.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <p className="text-small text-ink-meta mt-8">
                        Want to teach a section?{' '}
                        <a href={`mailto:${SITE.email}`} className="link-quiet">
                            Email us
                        </a>
                        , or{' '}
                        <Link href="/tutorials" className="link-quiet">
                            read a course first
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </main>
    );
}
