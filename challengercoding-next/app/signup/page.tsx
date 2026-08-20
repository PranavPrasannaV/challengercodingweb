"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import AuthCard from '@/app/components/AuthCard';

export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Please use at least six characters.');
            return;
        }
        if (
            localStorage.getItem(`profile:${username}`) !== null ||
            // also reject names taken under the pre-namespace scheme
            (localStorage.getItem(username) !== null &&
                username !== 'loggedIn' &&
                username !== 'currentUser' &&
                username !== 'userCount')
        ) {
            setError('That username is already used on this device.');
            return;
        }

        // Namespaced, so a username like "loggedIn" can no longer overwrite the
        // app's own keys.
        localStorage.setItem(`profile:${username}`, password);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', username);
        // Straight to the destination. Making someone retype credentials they
        // chose four seconds ago is not a confirmation step.
        router.push('/learn');
    };

    return (
        <AuthCard
            title="Create a profile"
            footer={
                <>
                    Already have one?{' '}
                    <Link href="/login" className="link-quiet font-semibold">
                        Log in
                    </Link>
                </>
            }
        >
            <p className="text-small text-ink-muted mt-4">
                This saves a name in this browser so the course list can greet you.
                It is not a real account — nothing is sent to a server, and nothing
                on this site is hidden behind it.{' '}
                <strong className="text-ink font-semibold">
                    Please do not reuse a password from anywhere else.
                </strong>
            </p>

            <form onSubmit={handleSignup} className="space-y-5 mt-6">
                <div>
                    <label htmlFor="signup-username" className="text-small font-semibold text-ink">
                        Username
                    </label>
                    <input
                        id="signup-username"
                        type="text"
                        required
                        autoComplete="username"
                        className="field mt-1.5"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="signup-password" className="text-small font-semibold text-ink">
                        Password
                    </label>
                    <div className="field-wrap relative mt-1.5">
                        <input
                            id="signup-password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            autoComplete="new-password"
                            aria-describedby="signup-password-hint"
                            className="field pr-11"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-meta hover:text-ink transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                    <p id="signup-password-hint" className="text-small text-ink-meta mt-1.5">
                        At least six characters.
                    </p>
                </div>

                {error && (
                    <p
                        role="status"
                        className="flex items-start gap-2 text-small text-danger bg-danger-tint border border-danger/25 rounded-sm px-3 py-2.5"
                    >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                        {error}
                    </p>
                )}

                <button type="submit" className="btn btn-brand w-full">
                    Create profile
                </button>
            </form>
        </AuthCard>
    );
}
