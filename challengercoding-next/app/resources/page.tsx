"use client";


import React from 'react';
import Link from 'next/link';
import { BookOpen, ExternalLink, Download, Layout, Terminal, Code2 } from 'lucide-react';

export default function Resources() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto mb-16 text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-text-light font-semibold text-sm border border-blue-100">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Curated Materials
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-poppins text-secondary">
                    Links & <span className="text-primary">Resources</span>
                </h1>
                <p className="text-xl text-text-light max-w-2xl mx-auto">
                    Everything you need to enhance your coding knowledge, from practice platforms to documentation.
                </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-16">
                {/* Practice Platforms */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-secondary">Practice Platforms</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "CodingBat", url: "https://codingbat.com/", desc: "Immediate feedback in Python and Java." },
                            { name: "LeetCode", url: "https://leetcode.com/", desc: "Interview prep and technical assessments." },
                            { name: "HackerRank", url: "https://www.hackerrank.com/", desc: "Data structures, algorithms, and more." },
                            { name: "Codewars", url: "https://www.codewars.com/", desc: "Challenge yourself with community katas." }
                        ].map((item, i) => (
                            <Link key={i} href={item.url} target="_blank" className="group block h-full">
                                <div className="h-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">{item.name}</h3>
                                        <ExternalLink className="w-4 h-4 text-text-light group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Learning Resources */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-amber-100 rounded-xl">
                            <Layout className="w-6 h-6 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold text-secondary">Learning Courses</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Udemy", url: "https://www.udemy.com/courses/development/programming-languages/", desc: "Comprehensive courses on various languages." },
                            { name: "edX", url: "https://www.edx.org/learn/computer-programming", desc: "University-level courses in computer science." },
                            { name: "Codecademy", url: "https://www.codecademy.com", desc: "Interactive courses from scratch." },
                            { name: "W3Schools", url: "https://www.w3schools.com/", desc: "Web dev tutorials and references." }
                        ].map((item, i) => (
                            <Link key={i} href={item.url} target="_blank" className="group block h-full">
                                <div className="h-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-bold text-lg text-secondary group-hover:text-accent transition-colors">{item.name}</h3>
                                        <ExternalLink className="w-4 h-4 text-text-light group-hover:text-accent transition-colors" />
                                    </div>
                                    <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Documentation */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-green-100 rounded-xl">
                            <Terminal className="w-6 h-6 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-secondary">Docs & Installation</h2>
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
                                <div className="h-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4">
                                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                                        <Download className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary group-hover:text-primary transition-colors">{item.name}</h3>
                                        <p className="text-xs text-text-light mt-1">{item.desc}</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-300 ml-auto group-hover:text-primary transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
