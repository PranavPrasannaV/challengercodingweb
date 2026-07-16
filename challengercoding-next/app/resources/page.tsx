"use client";

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Download, Layout, Terminal, Code2 } from 'lucide-react';

export default function Resources() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto mb-16 text-center space-y-4">
                <h1 className="text-h1 font-serif font-bold text-text">
                    Links & Resources
                </h1>
                <p className="text-body text-text-secondary max-w-2xl mx-auto">
                    Everything you need to enhance your coding knowledge, from practice platforms to documentation.
                </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-16">
                {/* Practice Platforms */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="accent-line-left" />
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-h2 font-serif font-bold text-text">Practice Platforms</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "CodingBat", url: "https://codingbat.com/", desc: "Immediate feedback in Python and Java." },
                            { name: "LeetCode", url: "https://leetcode.com/", desc: "Interview prep and technical assessments." },
                            { name: "HackerRank", url: "https://www.hackerrank.com/", desc: "Data structures, algorithms, and more." },
                            { name: "Codewars", url: "https://www.codewars.com/", desc: "Challenge yourself with community katas." }
                        ].map((item, i) => (
                            <Link key={i} href={item.url} target="_blank" className="group block h-full">
                                <div className="h-full bg-surface hairline rounded-lg p-6 block hover:bg-alt-bg transition-colors duration-200">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-bold text-text">{item.name}</h3>
                                        <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors duration-200" />
                                    </div>
                                    <p className="text-small text-text-secondary">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Learning Courses */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="accent-line-left" />
                        <div className="p-3 bg-gold/10 rounded-lg">
                            <Layout className="w-6 h-6 text-gold" />
                        </div>
                        <h2 className="text-h2 font-serif font-bold text-text">Learning Courses</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Udemy", url: "https://www.udemy.com/courses/development/programming-languages/", desc: "Comprehensive courses on various languages." },
                            { name: "edX", url: "https://www.edx.org/learn/computer-programming", desc: "University-level courses in computer science." },
                            { name: "Codecademy", url: "https://www.codecademy.com", desc: "Interactive courses from scratch." },
                            { name: "W3Schools", url: "https://www.w3schools.com/", desc: "Web dev tutorials and references." }
                        ].map((item, i) => (
                            <Link key={i} href={item.url} target="_blank" className="group block h-full">
                                <div className="h-full bg-surface hairline rounded-lg p-6 block hover:bg-alt-bg transition-colors duration-200">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-bold text-text">{item.name}</h3>
                                        <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors duration-200" />
                                    </div>
                                    <p className="text-small text-text-secondary">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Docs & Installation */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="accent-line-left" />
                        <div className="p-3 bg-sage/10 rounded-lg">
                            <Terminal className="w-6 h-6 text-sage" />
                        </div>
                        <h2 className="text-h2 font-serif font-bold text-text">Docs & Installation</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "VS Code Setup", url: "https://code.visualstudio.com/docs/setup/setup-overview", desc: "Step-by-step guide to install VS Code." },
                            { name: "Java JDK", url: "https://www.oracle.com/java/technologies/javase-downloads.html", desc: "Download the Java Development Kit." },
                            { name: "Python", url: "https://www.python.org/downloads/", desc: "Official Python download guide." },
                            { name: "Java SE 8 Docs", url: "https://docs.oracle.com/javase/8/docs/api/", desc: "Official Java SE 8 API documentation." },
                            { name: "HTML MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", desc: "Comprehensive HTML guide by MDN." },
                            { name: "Python Std Lib", url: "https://docs.python.org/3/library/index.html", desc: "Python standard library documentation." }
                        ].map((item, i) => (
                            <Link key={i} href={item.url} target="_blank" className="group block h-full">
                                <div className="h-full bg-surface hairline rounded-lg p-6 block hover:bg-alt-bg transition-colors duration-200 flex items-center gap-4">
                                    <div className="p-3 bg-sage/10 rounded-lg group-hover:bg-sage/20 transition-colors duration-200 shrink-0">
                                        <Download className="w-5 h-5 text-sage" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-text">{item.name}</h3>
                                        <p className="text-small text-text-secondary mt-1">{item.desc}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors duration-200 shrink-0" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
