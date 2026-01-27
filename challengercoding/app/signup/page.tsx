"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Signup() {
    return (
        <main className="bg-background min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-bold mb-1 text-center">Create an account</h1>
                    <p className="text-center text-muted-foreground text-sm mb-8">Start your coding journey today.</p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-3 border border-border rounded-lg bg-secondary/30 focus:bg-background focus:ring-2 focus:ring-black/5 outline-none transition-all"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-border rounded-lg bg-secondary/30 focus:bg-background focus:ring-2 focus:ring-black/5 outline-none transition-all"
                        />
                        <button className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-zinc-800 transition-colors">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center mt-6 text-sm text-muted-foreground">
                        Already have an account? <Link href="/login" className="text-black font-medium hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
