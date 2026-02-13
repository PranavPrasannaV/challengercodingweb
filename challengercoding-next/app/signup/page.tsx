"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { UserPlus, User, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

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
        <main className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
                <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-2xl overflow-hidden">
                    <div className="p-8 md:p-12 space-y-8">
                        {/* Header */}
                        <div className="text-center space-y-2">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-4">
                                <UserPlus className="w-8 h-8" />
                            </div>
                            <h1 className="text-3xl font-bold text-secondary font-poppins">Join Us!</h1>
                            <p className="text-text-light">Create your free account today</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSignup} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary ml-1">Choose Username</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="e.g. coder_pro"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Min. 6 characters"
                                        required
                                        className="w-full pl-12 pr-12 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                <div className="flex items-center gap-1.5 mt-1 ml-1">
                                    <ShieldCheck className="w-3.5 h-3.5 text-text-light" />
                                    <span className="text-[10px] text-text-light uppercase tracking-wider font-semibold">Secure Encryption</span>
                                </div>
                            </div>

                            {/* Notifications */}
                            {error && (
                                <div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    {error}
                                </div>
                            )}

                            {message && (
                                <div className="p-4 rounded-2xl bg-green-50 border border-green-100 flex items-center gap-3 text-green-600 text-sm animate-in fade-in slide-in-from-top-2">
                                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                                    {message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-secondary text-white rounded-2xl font-bold shadow-lg shadow-secondary/25 hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Create Account
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="pt-4 text-center">
                            <p className="text-text-light">
                                Already have an account?{' '}
                                <Link href="/login" className="text-primary font-bold hover:underline transition-colors">
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Link */}
                <div className="mt-8 text-center">
                    <Link href="/" className="text-sm font-medium text-text-light hover:text-primary transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}
