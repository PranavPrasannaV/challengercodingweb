"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import AuthCard from '@/app/components/AuthCard';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Nothing here is asynchronous. The 800ms of manufactured "processing"
        // that used to sit around this read was latency invented for its own
        // sake, and it made a wrong password take a second to reject.
        // Profiles created before the keys were namespaced live under the bare
        // username. Read those too, and migrate on a successful login so the
        // flat key stops shadowing app state like `loggedIn`.
        let stored = localStorage.getItem(`profile:${username}`);
        if (stored === null) {
            const legacy = localStorage.getItem(username);
            if (legacy !== null && username !== 'loggedIn' && username !== 'currentUser') {
                stored = legacy;
                if (legacy === password) {
                    localStorage.setItem(`profile:${username}`, legacy);
                    localStorage.removeItem(username);
                }
            }
        }
        if (stored && stored === password) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('currentUser', username);
            router.push('/learn');
        } else {
            setError('That username and password do not match a profile on this device.');
        }
    };

    return (
        <AuthCard
            title="Log in"
            footer={
                <>
                    No profile yet?{' '}
                    <Link href="/signup" className="link-quiet font-semibold">
                        Create one
                    </Link>
                </>
            }
        >
            <form onSubmit={handleLogin} className="space-y-5 mt-6">
                <div>
                    <label htmlFor="login-username" className="text-small font-semibold text-ink">
                        Username
                    </label>
                    <input
                        id="login-username"
                        type="text"
                        required
                        autoComplete="username"
                        className="field mt-1.5"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="login-password" className="text-small font-semibold text-ink">
                        Password
                    </label>
                    <div className="field-wrap relative mt-1.5">
                        <input
                            id="login-password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            autoComplete="current-password"
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
                    Log in
                </button>
            </form>
        </AuthCard>
    );
}
