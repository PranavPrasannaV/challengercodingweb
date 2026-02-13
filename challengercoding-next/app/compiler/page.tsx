"use client";

import React from 'react';
import { Terminal, Code2 } from 'lucide-react';

export default function Compiler() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Terminal className="w-4 h-4" />
                        Live Code Editor
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins text-secondary">
                        Online Compiler
                    </h1>
                    <p className="text-lg text-text-light max-w-2xl mx-auto">
                        Practice coding in real-time. Select your language below and start building your projects.
                    </p>
                </div>

                <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    {/* Embedded JDoodle Compiler */}
                    <div className="rounded-2xl overflow-hidden border border-gray-100">
                        <iframe
                            src="https://www.jdoodle.com/embed/v0/"
                            title="JDoodle Compiler"
                            className="w-full h-[800px] border-none bg-gray-50"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
