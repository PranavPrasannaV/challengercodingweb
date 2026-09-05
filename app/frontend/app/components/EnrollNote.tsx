import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ENROLL_URL } from '@/src/config';

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
}: {
    variant?: 'lesson' | 'quiet';
}) {
    if (variant === 'quiet') {
        // No rule of its own — the syllabus list above closes with one.
        return (
            <section className="mt-14">
                <p className="text-small text-ink-muted measure">
                    These lessons are free to read on your own. We also teach them live,
                    in free classes run by high school volunteers.{' '}
                    <Link
                        href={ENROLL_URL}
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
                href={ENROLL_URL}
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
