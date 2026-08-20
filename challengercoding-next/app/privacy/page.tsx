import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/src/site';

export const metadata: Metadata = {
    title: 'Privacy Policy | Challenger Coding',
    description:
        'What Challenger Coding collects and what it does not: no analytics, no advertising trackers, and no cookies of our own.',
};

const EMAIL = SITE.email;
const UPDATED = 'August 14, 2026';

export default function Privacy() {
    return (
        <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Legal
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
                Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-neutral-500">Last updated {UPDATED}</p>

            <div className="mt-10 border-y border-neutral-300 py-6">
                <p className="leading-relaxed text-neutral-700">
                    Challenger Coding is a student-run nonprofit in Sammamish, Washington
                    that teaches free coding classes. This site is a set of static pages.
                    There is no server behind it that stores your information, no
                    analytics, no advertising trackers, and no cookies of our own. The
                    two places information does change hands are the enrollment form and
                    the third-party tools we embed, and both are described below.
                </p>
            </div>

            <Section title="What we do not collect">
                <p>We do not run analytics or advertising software on this site. We do not set cookies, build profiles of visitors, or sell or rent information to anyone. We have no way to identify you from a page view.</p>
            </Section>

            <Section title="Information you choose to give us">
                <p>
                    Enrolling in a class goes through a form hosted on Microsoft Forms.
                    That form asks for a student name, a parent or guardian email
                    address, and which course you want. We read those responses to place
                    students in classes and to email you about the class you signed up
                    for. Nothing else.
                </p>
                <p>
                    If you email us, we keep the message so we can reply and follow up.
                </p>
            </Section>

            <Section title="Information kept in your browser">
                <p>
                    The site has an optional profile you can create from the signup page.
                    The username and password you type are written to your own
                    browser&rsquo;s local storage and stay on your device. They are never
                    sent to us, because there is nothing to send them to.
                </p>
                <p>Three things follow from that, and they matter:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>
                        A browser profile is not a secure account. Do not reuse a
                        password you use anywhere else.
                    </li>
                    <li>
                        We cannot see, reset, or recover it. Clearing your browser data
                        deletes it permanently.
                    </li>
                    <li>
                        You do not need one. Every lesson and resource on this site is
                        readable without signing up.
                    </li>
                </ul>
            </Section>

            <Section title="Services we rely on">
                <p>
                    A few third parties are involved in running the site. Each has its
                    own privacy policy, and information handled by them is governed by
                    that policy rather than this one.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>
                        <strong className="font-semibold text-neutral-900">GitHub Pages</strong>{' '}
                        hosts the site. Like any web host, GitHub receives the requests
                        your browser makes, including your IP address, and keeps server
                        logs.
                    </li>
                    <li>
                        <strong className="font-semibold text-neutral-900">Microsoft Forms</strong>{' '}
                        collects enrollment responses.
                    </li>
                    <li>
                        <strong className="font-semibold text-neutral-900">
                            Embedded code editors
                        </strong>{' '}
                        power the{' '}
                        <A href="/compiler" internal>
                            compiler
                        </A>{' '}
                        page and the editors inside lessons. We currently embed{' '}
                        <A href="https://onecompiler.com/privacy">OneCompiler</A> and{' '}
                        <A href="https://www.jdoodle.com/terms">JDoodle</A>. Code you type
                        or run in one of those windows is sent to that provider, not to
                        us, and they may set their own cookies.
                    </li>
                </ul>
                <p className="mt-4">
                    Our resources page links out to other sites. Once you follow a link,
                    you are on someone else&rsquo;s site under their rules.
                </p>
            </Section>

            <Section title="Children’s privacy">
                <p>
                    We teach K&ndash;12 students, so some of the people using this site
                    are under 13. We do not knowingly collect personal information from a
                    child through this website. There is no account system on our end, no
                    comment section, and no place for a student to upload anything to us.
                </p>
                <p>
                    Enrollment forms should be filled out by a parent or guardian, and we
                    ask for a parent or guardian email rather than a student one. If you
                    are a parent or guardian and believe we have information about your
                    child that you would like to see or have deleted, email{' '}
                    <A href={`mailto:${EMAIL}`}>{EMAIL}</A> and we will handle it.
                </p>
            </Section>

            <Section title="How long we keep things">
                <p>
                    Enrollment responses are kept while a student is taking classes with
                    us and for a reasonable period afterward so we can run the following
                    term. Email threads are kept until they stop being useful. Ask us to
                    delete either and we will.
                </p>
            </Section>

            <Section title="Your choices">
                <p>
                    Write to <A href={`mailto:${EMAIL}`}>{EMAIL}</A>{' '}
                    to ask what we hold about you, to correct it, or to have it deleted.
                    Anything living in your own browser&rsquo;s local storage is yours to
                    clear at any time through your browser settings.
                </p>
            </Section>

            <Section title="Security">
                <p>
                    Keeping almost nothing is the main protection here. There is no
                    database of ours to breach. That said, no method of transmitting or
                    storing information over the internet is completely secure, and we
                    cannot guarantee the security of services we do not run.
                </p>
            </Section>

            <Section title="Changes to this policy">
                <p>
                    If the site starts doing something this page does not describe, we
                    will update the page and change the date at the top. Continuing to
                    use the site after a change means you accept the updated policy.
                </p>
            </Section>

            <Section title="Contact">
                <p>
                    Challenger Coding, Sammamish, Washington.{' '}
                    <A href={`mailto:${EMAIL}`}>{EMAIL}</A>
                </p>
            </Section>

            <div className="mt-16 border-t border-neutral-300 pt-6 text-sm text-neutral-600">
                See also our{' '}
                <A href="/terms" internal>
                    Terms of Service
                </A>
                .
            </div>
        </main>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-12">
            <h2 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
                {title}
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-neutral-700">
                {children}
            </div>
        </section>
    );
}

function A({
    href,
    internal,
    children,
}: {
    href: string;
    internal?: boolean;
    children: React.ReactNode;
}) {
    const className =
        'underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-neutral-800';
    if (internal) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }
    return (
        <a
            href={href}
            className={className}
            {...(href.startsWith('mailto:')
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' })}
        >
            {children}
        </a>
    );
}
