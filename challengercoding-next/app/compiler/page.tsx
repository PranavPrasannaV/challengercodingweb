"use client";

import React from 'react';
import { Terminal } from 'lucide-react';

// JDoodle embed used to match v2 repo (j-tang-59/challengercodingweb-v2)

export default function Compiler() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <Terminal className="w-8 h-8 text-primary mx-auto mb-1" />
                    <h1 className="text-h1 font-serif font-bold text-text text-center">
                        Online Compiler
                    </h1>
                    <p className="text-body text-text-secondary text-center max-w-2xl mx-auto">
                        Practice coding in real-time. Select your language below and start building your projects.
                    </p>
                </div>

                <div className="bg-surface hairline rounded-xl overflow-hidden max-w-7xl mx-auto">
                    {/* Embedded JDoodle Compiler */}
                    <div className="rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.jdoodle.com/online-java-compiler"
                            title="Online Compiler"
                            className="w-full h-[800px] border-none"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
