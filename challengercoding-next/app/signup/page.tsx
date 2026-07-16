"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { UserPlus, User, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setIsSubmitting(true);

        // Simulate processing delay
        setTimeout(() => {
            if (password.length < 6) {
                setError("Password must be at least 6 characters.");
                setIsSubmitting(false);
                return;
            }

            if (localStorage.getItem(username)) {
                setError("Username already taken.");
                setIsSubmitting(false);
                return;
            }

            localStorage.setItem(username, password);

            let userCount = parseInt(localStorage.getItem('userCount') || '0', 10);
            userCount++;
            localStorage.setItem('userCount', userCount.toString());

            setMessage(`Sign up successful! Welcome to the community.`);

            setTimeout(() => {
                router.push('/login');
            }, 1500);
        }, 800);
    };

    return (
        <main className="min-h-screen bg-background flex items-center justify-center px-6 py-24">
            <div className="w-full max-w-md">
                <div className="bg-surface hairline rounded-xl max-w-md w-full p-8 md:p-10 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <UserPlus className="w-8 h-8 text-cta mx-auto mb-3" />
                        <h1 className="text-h2 font-serif font-bold text-text">Join Us!</h1>
                        <p className="text-small text-text-secondary">Create your free account today</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSignup} className="space-y-5">
                        <div className="space-y-1.5">
                            <label htmlFor="signup-username" className="text-small font-semibold text-text mb-1.5 ml-1">
                                Choose Username
                            </label>
                            <div className="hairline rounded-lg flex items-center gap-3 px-4 py-3 bg-surface focus-within:border-primary transition-colors">
                                <User className="text-text-secondary w-5 h-5 shrink-0" />
                                <input
                                    id="signup-username"
                                    type="text"
                                    placeholder="e.g. coder_pro"
                                    required
                                    autoComplete="username"
                                    className="flex-1 bg-transparent border-none outline-none text-text placeholder:text-text-secondary/50"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="signup-password" className="text-small font-semibold text-text mb-1.5 ml-1">
                                Password
                            </label>
                            <div className="hairline rounded-lg flex items-center gap-3 px-4 py-3 bg-surface focus-within:border-primary transition-colors">
                                <Lock className="text-text-secondary w-5 h-5 shrink-0" />
                                <input
                                    id="signup-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Min. 6 characters"
                                    required
                                    autoComplete="new-password"
                                    className="flex-1 bg-transparent border-none outline-none text-text placeholder:text-text-secondary/50"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-text-secondary hover:text-primary transition-colors shrink-0"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Notifications */}
                        {error && (
                            <div className="bg-error/10 border border-error/20 text-error rounded-lg p-4 text-small flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        {message && (
                            <div className="bg-sage/10 border border-sage/20 text-sage rounded-lg p-4 text-small flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 shrink-0" />
                                <span>{message}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="text-center text-small text-text-secondary">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary font-semibold hover:underline">
                            Log In
                        </Link>
                    </div>
                </div>

                {/* Back Link */}
                <div className="mt-8 text-center">
                    <Link href="/" className="text-small text-text-secondary hover:text-primary transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}
