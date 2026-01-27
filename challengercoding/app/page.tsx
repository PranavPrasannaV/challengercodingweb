"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Terminal, Code2, Cpu, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Minimal Hero */}
      <section className="container-padded py-24 md:py-32 border-b border-border">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-8 leading-[1.1]">
            Learn to code. <br />
            <span className="text-muted-foreground">Build the future.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed md:max-w-xl mb-10">
            Interactive tutorials for Scratch, Python, and Java.
            Designed for clarity, built for mastery. Free for everyone.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/signup" className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center gap-2">
              Start Learning <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/learn" className="px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-all">
              View Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container-padded py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Focus on what matters.</h2>
          <p className="text-muted-foreground">No distractions. Just clean, effective learning paths.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code2 className="w-6 h-6" />}
            title="Visual Logic"
            desc="Start with Scratch to understand flow, loops, and logic without syntax errors."
          />
          <FeatureCard
            icon={<Terminal className="w-6 h-6" />}
            title="Python Scripting"
            desc="Transition to text-based coding with the world's most popular language."
          />
          <FeatureCard
            icon={<Cpu className="w-6 h-6" />}
            title="Java Systems"
            desc="Master object-oriented programming for enterprise-grade applications."
          />
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="bg-secondary py-24 border-y border-border">
        <div className="container-padded grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">1,000+</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Students Enrolled</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Free</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Forever Access</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">3</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Core Tracks</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-padded py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Join thousands of others on the path to technical fluency.
          Create your account in seconds.
        </p>
        <Link href="/signup" className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-zinc-800 transition-all">
          Create Free Account
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 border border-border rounded-2xl hover:shadow-sm transition-shadow bg-card">
      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 text-black">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
