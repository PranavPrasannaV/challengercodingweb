"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn, User, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setIsSubmitting(true);

        // Simulate a small delay for better UX
        setTimeout(() => {
            const storedPassword = localStorage.getItem(username);
            if (storedPassword && storedPassword === password) {
                setMessage('Login successful! Redirecting...');
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('currentUser', username);
                setTimeout(() => {
                    router.push('/learn');
                }, 1500);
            } else {
                setError('Invalid username or password.');
                setIsSubmitting(false);
            }
        }, 800);
    };

    return (
        <main className="min-h-screen bg-background flex items-center justify-center px-6 py-24">
            <div className="w-full max-w-md">
                <div className="bg-surface hairline rounded-xl max-w-md w-full p-8 md:p-12 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <LogIn className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h1 className="text-h2 font-serif font-bold text-text">Welcome Back!</h1>
                        <p className="text-small text-text-secondary">Enter your details to access your account</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="login-username" className="text-small font-semibold text-text mb-1.5 ml-1">Username</label>
                            <div className="hairline rounded-lg flex items-center gap-3 px-4 py-3 bg-surface focus-within:border-primary transition-colors">
                                <User className="text-text-secondary w-5 h-5 shrink-0" />
                                <input
                                    id="login-username"
                                    type="text"
                                    placeholder="Enter your username"
                                    required
                                    autoComplete="username"
                                    className="flex-1 bg-transparent border-none outline-none text-text placeholder:text-text-secondary/50"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="login-password" className="text-small font-semibold text-text mb-1.5 ml-1">Password</label>
                            <div className="hairline rounded-lg flex items-center gap-3 px-4 py-3 bg-surface focus-within:border-primary transition-colors">
                                <Lock className="text-text-secondary w-5 h-5 shrink-0" />
                                <input
                                    id="login-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    required
                                    autoComplete="current-password"
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
                                {error}
                            </div>
                        )}

                        {message && (
                            <div className="bg-sage/10 border border-sage/20 text-sage rounded-lg p-4 text-small flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 shrink-0" />
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Log In
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="pt-4 text-center">
                        <p className="text-small text-text-secondary">
                            Don&apos;t have an account?{' '}
                            <Link href="/signup" className="text-primary font-semibold hover:underline">
                                Sign Up
                            </Link>
                        </p>
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
