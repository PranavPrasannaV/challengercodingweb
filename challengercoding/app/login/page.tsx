"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({ user: "", pass: "" });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", formData.user);
        router.push("/learn");
    };

    return (
        <main className="bg-background min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-bold mb-1 text-center">Welcome back</h1>
                    <p className="text-center text-muted-foreground text-sm mb-8">Enter your credentials to access your account.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full p-3 border border-border rounded-lg bg-secondary/30 focus:bg-background focus:ring-2 focus:ring-black/5 outline-none transition-all"
                                onChange={(e) => setFormData({ ...formData, user: e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-3 border border-border rounded-lg bg-secondary/30 focus:bg-background focus:ring-2 focus:ring-black/5 outline-none transition-all"
                                onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
                            />
                        </div>
                        <button className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-zinc-800 transition-colors">
                            Sign In
                        </button>
                    </form>

                    <p className="text-center mt-6 text-sm text-muted-foreground">
                        No account? <Link href="/signup" className="text-black font-medium hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
