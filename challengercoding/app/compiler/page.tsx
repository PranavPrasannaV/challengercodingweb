"use client";

import Navbar from "@/components/Navbar";

export default function Compiler() {
    return (
        <main className="h-screen flex flex-col bg-background">
            <Navbar />
            <div className="flex-1 bg-secondary p-6">
                <div className="bg-white w-full h-full rounded-xl border border-border shadow-sm overflow-hidden">
                    <iframe
                        src="https://www.jdoodle.com/embed/v0/"
                        className="w-full h-full border-none"
                        title="Online Code Compiler"
                    />
                </div>
            </div>
        </main>
    );
}
