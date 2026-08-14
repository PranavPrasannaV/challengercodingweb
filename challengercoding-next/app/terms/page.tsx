import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | Challenger Coding',
    description:
        'The terms for using challengercoding.org and enrolling in Challenger Coding classes.',
};

const EMAIL = 'contact@challengercoding.com';
const UPDATED = 'August 14, 2026';

export default function Terms() {
    return (
        <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Legal
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
                Terms of Service
            </h1>
            <p className="mt-3 text-sm text-neutral-500">Last updated {UPDATED}</p>

            <div className="mt-10 border-y border-neutral-300 py-6">
                <p className="leading-relaxed text-neutral-700">
                    These terms cover challengercoding.org and the classes Challenger
                    Coding runs. Challenger Coding is a student-run nonprofit based in
                    Sammamish, Washington. Everything we offer is free, and it is put
                    together by high schoolers rather than a company with a support
                    department. Please read this page with that in mind. Using the site
                    means you accept these terms; if you do not, please do not use it.
                </p>
            </div>

            <Section title="Who may use this site">
                <p>
                    Anyone can read the lessons. If you are under 18, you should have a
                    parent or guardian&rsquo;s permission to use the site, and if you are
                    under 13, a parent or guardian should be the one enrolling you in a
                    class and communicating with us. By enrolling a student, you confirm
                    that you are that student&rsquo;s parent or guardian or that you have
                    their permission.
                </p>
            </Section>

            <Section title="What we provide">
                <p>
                    Free lessons, notes, practice material, and live classes taught by
                    student volunteers. We work hard on the curriculum, but we do not
                    promise that it is complete, error-free, or suited to any particular
                    goal, and it is not a substitute for formal schooling or professional
                    advice. Nothing here guarantees a grade, a certification, a job, or
                    admission anywhere.
                </p>
                <p>
                    We may change, pause, or retire any part of the site or the class
                    schedule. Class seats are limited, sessions can be rescheduled, and a
                    class may be cancelled if there are not enough volunteers to teach it.
                </p>
            </Section>

            <Section title="Site profiles">
                <p>
                    The optional profile you can create on this site lives entirely in
                    your own browser. It is a convenience feature, not a secure account.
                    We cannot see it, reset it, or recover it, and clearing your browser
                    data erases it. Do not use a password you use anywhere else, and do
                    not store anything in it you would mind losing. You are responsible
                    for what happens on a device you leave signed in.
                </p>
            </Section>

            <Section title="Acceptable use">
                <p>When you use this site or attend a class, you agree not to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li>Break the law, or use anything you learn here to harm, harass, or defraud other people.</li>
                    <li>Attempt to gain unauthorized access to the site, its hosting, or another person&rsquo;s device or accounts.</li>
                    <li>Interfere with the site or the services embedded in it, including scraping or automated requests heavy enough to degrade them for others.</li>
                    <li>Write, run, or distribute malicious code through the embedded editors.</li>
                    <li>Harass, bully, or disrupt other students, volunteers, or instructors in a class or over email.</li>
                    <li>Misrepresent yourself as speaking for Challenger Coding.</li>
                </ul>
                <p className="mt-4">
                    We can remove someone from a class or block access to the site if
                    these rules are ignored. For a live class, that decision rests with
                    the officers running the program.
                </p>
            </Section>

            <Section title="Third-party services">
                <p>
                    Parts of this site are provided by other companies: the online
                    compiler and the editors inside lessons are embedded from third-party
                    services, enrollment runs through Microsoft Forms, and the site is
                    hosted on GitHub Pages. Your use of those services is governed by
                    their terms and their privacy policies, not by ours. Code you type or
                    run in an embedded editor is sent to that provider. We do not control
                    those services and are not responsible for them.
                </p>
                <p>
                    The same goes for the outside sites we link to, including everything
                    on the resources page. A link is not an endorsement.
                </p>
            </Section>

            <Section title="Our materials">
                <p>
                    The lessons, notes, and written material on this site belong to
                    Challenger Coding or to the volunteers who wrote them. You are welcome
                    to use them to learn, to teach your own students, and to share them in
                    a classroom, as long as you do not sell them, remove attribution, or
                    present them as your own work. For anything beyond that, email us and
                    ask. We are usually happy to say yes.
                </p>
                <p>
                    Code examples in the lessons are yours to use in your own projects
                    freely. Third-party names, logos, and materials referenced on the site
                    belong to their respective owners.
                </p>
            </Section>

            <Section title="What you send us">
                <p>
                    If you send us feedback, a question, or a suggestion, we may act on it
                    and use it to improve the curriculum without owing you compensation.
                    Do not send us confidential information. Anything you write to us
                    should be your own, and should not infringe anyone else&rsquo;s
                    rights.
                </p>
            </Section>

            <Section title="No warranty">
                <p>
                    The site and the classes are provided &ldquo;as is&rdquo; and
                    &ldquo;as available,&rdquo; without warranties of any kind, express or
                    implied, including any implied warranty of merchantability, fitness
                    for a particular purpose, or non-infringement. We do not warrant that
                    the site will be uninterrupted, secure, or free of errors, or that the
                    material on it is accurate or current.
                </p>
            </Section>

            <Section title="Limitation of liability">
                <p>
                    To the fullest extent the law allows, Challenger Coding and its
                    volunteers, officers, and advisors are not liable for any indirect,
                    incidental, or consequential damages arising from your use of the site
                    or the classes, including lost data, lost work, or damage caused by a
                    third-party service embedded here. Because everything we offer is
                    free, our total liability for any claim relating to the site or a
                    class is limited to one hundred United States dollars.
                </p>
                <p>
                    Some jurisdictions do not allow certain limitations, so parts of this
                    section may not apply to you.
                </p>
            </Section>

            <Section title="Privacy">
                <p>
                    Our{' '}
                    <A href="/privacy" internal>
                        Privacy Policy
                    </A>{' '}
                    explains what we collect, which is very little, and forms part of
                    these terms.
                </p>
            </Section>

            <Section title="Changes to these terms">
                <p>
                    We may update these terms as the site changes. The date at the top
                    shows when they were last revised, and continuing to use the site
                    after a change means you accept the revision. If a change is
                    significant, we will try to say so on the site.
                </p>
            </Section>

            <Section title="Governing law">
                <p>
                    These terms are governed by the laws of the State of Washington,
                    without regard to its conflict of law rules. Any dispute that cannot
                    be resolved by talking to us belongs in the state or federal courts
                    located in King County, Washington.
                </p>
            </Section>

            <Section title="Contact">
                <p>
                    Questions about these terms? Email{' '}
                    <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
                </p>
            </Section>

            <div className="mt-16 border-t border-neutral-300 pt-6 text-sm text-neutral-600">
                See also our{' '}
                <A href="/privacy" internal>
                    Privacy Policy
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
