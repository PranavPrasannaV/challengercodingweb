import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SITE } from '@/src/site';

/**
 * The way from reading a lesson to sitting in one.
 *
 * The enrollment form used to exist only in the header and on the home page,
 * so a student who landed on a lesson from search had no route to the class
 * the lesson comes from. This sits after the work and never over it — no
 * sticky bar, no dialog — and it borrows --track, so the rule stays orange
 * on Scratch and teal everywhere else. The color is only ever a rule:
 * #FF8C1A is 2.2:1 on paper and can never carry words.
 *
 * Both variants say where the link goes in the same words, in visible text.
 * No aria-describedby: the sentence follows the link in reading order, so a
 * screen reader would announce it as the description and then again as prose.
 */
export default function EnrollNote({
    variant = 'lesson',
    theme = 'site',
}: {
    variant?: 'lesson' | 'quiet';
    /** "home" matches the redesigned homepage/courses-catalog look; "site"
     *  (default) is the original theme every lesson page still uses. */
    theme?: 'site' | 'home';
}) {
    if (variant === 'quiet') {
        // No rule of its own — the syllabus list above closes with one.
        if (theme === 'home') {
            return (
                <section className="mt-14">
                    <p className="max-w-[60ch] text-sm text-home-ink-soft">
                        These lessons are free to read on your own. We also teach them live,
                        in free classes run by high school volunteers.{' '}
                        <Link
                            href={SITE.enrollUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-home-teal underline underline-offset-2 transition-colors hover:text-home-teal-deep"
                        >
                            Enroll in a live class
                            <ArrowUpRight
                                className="ml-1 inline h-4 w-4 align-[-0.15em]"
                                aria-hidden="true"
                            />
                        </Link>
                    </p>
                    <p className="mt-2 max-w-[60ch] text-xs text-home-ink-soft">
                        Opens the sign-up form on forms.office.com in a new tab.
                    </p>
                </section>
            );
        }
        return (
            <section className="mt-14">
                <p className="text-small text-ink-muted measure">
                    These lessons are free to read on your own. We also teach them live,
                    in free classes run by high school volunteers.{' '}
                    <Link
                        href={SITE.enrollUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-quiet font-semibold"
                    >
                        Enroll in a live class
                        <ArrowUpRight
                            className="inline w-4 h-4 ml-1 align-[-0.15em]"
                            aria-hidden="true"
                        />
                    </Link>
                </p>
                <p className="text-meta text-ink-meta measure mt-2">
                    Opens the sign-up form on forms.office.com in a new tab.
                </p>
            </section>
        );
    }

    if (theme === 'home') {
        return (
            <aside className="mt-12 border-l-[3px] border-home-teal py-1 pl-5">
                <h2 className="font-sans text-sm font-semibold text-home-ink">Live classes</h2>
                <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-home-ink-soft">
                    These lessons are free to read on your own. We also teach them live, in
                    free classes run by high school volunteers. Signing up takes one form.
                </p>
                <Link
                    href={SITE.enrollUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-md border border-home-ink/15 px-6 py-3.5 font-sans font-semibold text-home-ink transition-colors hover:bg-home-ink/[0.04]"
                >
                    Enroll in a live class
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <p className="mt-3 text-xs text-home-ink-soft">
                    Opens the sign-up form on forms.office.com in a new tab.
                </p>
            </aside>
        );
    }

    return (
        <aside
            className="mt-12 border-l-[3px] pl-5 py-1"
            style={{ borderColor: 'var(--track)' }}
        >
            <h2 className="label">Live classes</h2>
            <p className="text-body text-ink-muted measure mt-2">
                These lessons are free to read on your own. We also teach them live, in
                free classes run by high school volunteers. Signing up takes one form.
            </p>
            <Link
                href={SITE.enrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-5"
            >
                Enroll in a live class
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <p className="text-meta text-ink-meta mt-3">
                Opens the sign-up form on forms.office.com in a new tab.
            </p>
        </aside>
    );
}
