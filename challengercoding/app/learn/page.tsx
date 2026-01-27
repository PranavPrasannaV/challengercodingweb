"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

const courses = [
    { title: "Scratch", desc: "Introductory logic", href: "/tutorials/scratch" },
    { title: "Python", desc: "Data & scripting", href: "/tutorials/python" },
    { title: "Java", desc: "Object-oriented systems", href: "/tutorials/java" },
    { title: "Scratch II", desc: "Advanced concepts", href: "/tutorials/scratch2" },
    { title: "Python II", desc: "Advanced scripting", href: "/tutorials/python2" },
    { title: "Java II", desc: "Algorithms & structures", href: "/tutorials/java2" },
];

export default function Learn() {
    return (
        <main className="bg-background min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1 container-padded py-24">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Curriculum</h1>
                    <p className="text-muted-foreground">Select a module to begin.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((c) => (
                        <Link key={c.href} href={c.href} className="group block h-full">
                            <div className="h-full p-8 border border-border rounded-xl hover:border-black transition-colors bg-card">
                                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-6">
                                    <Code className="w-5 h-5 text-zinc-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    {c.title}
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </h3>
                                <p className="text-muted-foreground">{c.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
