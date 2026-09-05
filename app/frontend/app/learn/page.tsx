"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { TRACKS, coursesInTrack } from '@/src/data/courses';
import CourseCard from '@/app/components/CourseCard';

export default function Learn() {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState<string | null>(null);

    useEffect(() => {
        setCurrentUser(localStorage.getItem('currentUser'));
    }, []);

    const logOut = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('currentUser');
        router.push('/');
    };

    return (
        <main id="main" className="wrap section">
            {/* The page renders at full size from the first paint. Only the
                greeting waits on localStorage, so nothing jumps. */}
            <header className="flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-6">
                <div>
                    <h1 className="text-h1 text-ink">Your courses</h1>
                    <p className="text-small text-ink-meta mt-2 min-h-[1.5em]">
                        {currentUser ? (
                            <>Signed in as {currentUser} on this device.</>
                        ) : (
                            <>
                                Not signed in.{' '}
                                <Link href="/signup" className="link-quiet">
                                    Create a profile
                                </Link>{' '}
                                — though every course below is open either way.
                            </>
                        )}
                    </p>
                </div>

                {currentUser && (
                    <button onClick={logOut} className="btn btn-outline text-small py-2.5 px-4">
                        <LogOut className="w-4 h-4" aria-hidden="true" />
                        Log out
                    </button>
                )}
            </header>

            <div className="mt-12 space-y-14">
                {TRACKS.map((track) => (
                    <section key={track.id}>
                        <h2 className="label pb-3 border-b border-rule">{track.label}</h2>
                        <ul className="grid gap-6 md:grid-cols-2 mt-6">
                            {coursesInTrack(track.id).map((course) => (
                                <li key={course.id}>
                                    <CourseCard course={course} cta="Continue" />
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}
