"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function Resources() {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="container-padded py-24">
                <h1 className="text-3xl font-bold mb-12">Resources</h1>

                <div className="space-y-16">
                    <ResourceSection title="Platforms">
                        <ResourceLink name="LeetCode" url="https://leetcode.com" />
                        <ResourceLink name="HackerRank" url="https://hackerrank.com" />
                        <ResourceLink name="CodingBat" url="https://codingbat.com" />
                    </ResourceSection>

                    <ResourceSection title="Documentation">
                        <ResourceLink name="MDN Web Docs" url="https://developer.mozilla.org" />
                        <ResourceLink name="Python Docs" url="https://docs.python.org" />
                        <ResourceLink name="Java Docs" url="https://docs.oracle.com/en/java/" />
                    </ResourceSection>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function ResourceSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {children}
            </div>
        </div>
    );
}

function ResourceLink({ name, url }: { name: string, url: string }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block p-6 border border-border rounded-xl hover:shadow-md transition-all group bg-card">
            <div className="flex justify-between items-start">
                <span className="font-medium">{name}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-black transition-colors" />
            </div>
        </a>
    );
}
