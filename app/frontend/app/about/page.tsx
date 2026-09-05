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
        <main id="main" className="bg-home-bg text-home-ink">
            <section className="wrap section">
                <h1 className="max-w-[24ch] font-sans text-4xl font-semibold tracking-tight text-home-ink sm:text-5xl">
                    Founded in {SITE.founded}. Still planned, written and taught by students.
                </h1>
            </section>

            <section className="border-y border-home-rule">
                <div className="wrap section-sm">
                    <div className="grid gap-12 md:grid-cols-12">
                        <div className="md:col-span-7">
                            <h2 className="font-sans text-2xl font-semibold tracking-tight text-home-ink">Why we started</h2>
                            <div className="mt-6 max-w-[60ch] space-y-4 text-base leading-relaxed text-home-ink-soft">
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

                        <dl className="border-t border-home-rule md:col-span-5 md:col-start-8">
                            {facts.map((fact) => (
                                <div
                                    key={fact.term}
                                    className="flex gap-6 border-b border-home-rule py-3 text-sm"
                                >
                                    <dt className="w-24 shrink-0 pt-0.5 font-sans text-xs font-semibold uppercase tracking-wide text-home-ink-soft">
                                        {fact.term}
                                    </dt>
                                    <dd className="text-home-ink-soft">{fact.detail}</dd>
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
                        <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-home-rule bg-home-teal-tint">
                            <Image
                                src="/jaden-headshot.jpg"
                                alt="Jaden Tang"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-7 md:col-start-6">
                        <p className="font-sans text-xs font-semibold uppercase tracking-wide text-home-ink-soft">
                            Co-founder, {SITE.founded}
                        </p>
                        <h2 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-home-ink">Jaden Tang</h2>

                        <div className="mt-6 max-w-[60ch] space-y-4 text-base leading-relaxed text-home-ink-soft">
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

                        <div className="mt-8 flex items-center gap-3 border-t border-home-rule pt-6">
                            <span
                                aria-hidden="true"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-home-rule bg-home-teal-tint font-sans font-semibold text-home-teal"
                            >
                                AS
                            </span>
                            <span>
                                <span className="block text-sm text-home-ink-soft">
                                    Co-founder and President
                                </span>
                                <span className="block font-semibold text-home-ink">Aadi Saraf</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership ------------------------------------------------ */}
            <section className="bg-home-teal-tint">
                <div className="wrap section">
                    <h2 className="font-sans text-2xl font-semibold tracking-tight text-home-ink">Who runs it now</h2>

                    <ul className="mt-8 border-t border-home-rule">
                        {leadership.map((person) => (
                            <li
                                key={person.name}
                                className="flex gap-5 border-b border-home-rule py-6"
                            >
                                <span
                                    aria-hidden="true"
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-home-rule bg-white font-sans font-semibold text-home-teal"
                                >
                                    {person.initials}
                                </span>
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                                        <h3 className="font-sans text-lg font-semibold text-home-ink">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm text-home-ink-soft">{person.role}</p>
                                    </div>
                                    <p className="mt-1.5 max-w-[60ch] text-sm text-home-ink-soft">
                                        {person.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 text-sm text-home-ink-soft">
                        Want to teach a section?{' '}
                        <a
                            href={`mailto:${SITE.email}`}
                            className="font-semibold text-home-teal underline underline-offset-2 transition-colors hover:text-home-teal-deep"
                        >
                            Email us
                        </a>
                        , or{' '}
                        <Link
                            href="/tutorials"
                            className="font-semibold text-home-teal underline underline-offset-2 transition-colors hover:text-home-teal-deep"
                        >
                            read a course first
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </main>
    );
}
