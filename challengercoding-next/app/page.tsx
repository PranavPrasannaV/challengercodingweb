"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, GraduationCap, Users, Play, CheckCircle2, Terminal, MonitorPlay } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-100/50 to-transparent rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary font-semibold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              New Courses Available
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-poppins leading-tight text-secondary">
              Code with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Confidence.</span>
            </h1>

            <p className="text-lg text-text-light max-w-xl leading-relaxed">
              Master programming through interactive tutorials, real-world projects, and expert mentorship.
              Start your journey from absolute beginner to confident developer today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent/20 transition-all hover:-translate-y-1"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/tutorials"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all"
              >
                View Courses
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8 text-sm font-medium text-text-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>No Credit Card</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Abstract Code Visualization */}
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative glass p-8 rounded-2xl shadow-2xl border border-white/50 rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3 font-mono text-sm text-secondary">
                  <div className="flex">
                    <span className="text-purple-600">function</span>
                    <span className="text-blue-600 ml-2">startJourney</span>
                    <span className="text-gray-500">()</span>
                    <span className="text-gray-500 ml-2">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-primary">const</span>
                    <span className="text-gray-700 ml-2">skills</span>
                    <span className="text-gray-500 ml-2">=</span>
                    <span className="text-gray-500 ml-2">[</span>
                    <span className="text-green-600">"Python"</span>,
                    <span className="text-green-600 ml-2">"Java"</span>,
                    <span className="text-green-600 ml-2">"Scratch"</span>
                    <span className="text-gray-500">];</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-600">return</span>
                    <span className="text-blue-600 ml-2">skills</span>.
                    <span className="text-yellow-600">map</span>
                    <span className="text-gray-500">(</span>
                    <span className="text-gray-700">skill</span>
                    <span className="text-purple-600 ml-2">=&gt;</span>
                    <span className="text-gray-500 ml-2">new</span>
                    <span className="text-yellow-600 ml-2">Future</span>
                    <span className="text-gray-500">(</span>
                    <span className="text-gray-700">skill</span>
                    <span className="text-gray-500">)</span>
                    <span className="text-gray-500">);</span>
                  </div>
                  <div className="text-gray-500">{"}"}</div>
                </div>

                {/* Floating Elements on top of code block */}
                <div className="absolute -right-12 top-20 glass-dark p-4 rounded-xl shadow-xl animate-bounce">
                  <Terminal className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-xl animate-pulse">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-secondary mb-2">1,000+</div>
              <div className="text-text-light font-medium">Active Students</div>
            </div>
            <div className="p-8 rounded-3xl bg-amber-50 border border-amber-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <MonitorPlay className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-text-light font-medium">Hours of Content</div>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
              <GraduationCap className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-secondary mb-2">6</div>
              <div className="text-text-light font-medium">Comprehensive Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10" />

        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins">Empowering the Next Generation</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            "At Challenger Coding, we believe coding is a superpower. We empower students of all ages to embrace technology,
            providing the tools and mentorship needed to thrive in a digital world."
          </p>
          <div className="pt-8">
            <Link href="/about" className="text-accent hover:text-white font-semibold flex items-center justify-center gap-2 group">
              Read Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-secondary">Our Course Offerings</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              From visual blocking building to object-oriented programming, we have a path for every learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Scratch Programming", level: "Beginner", desc: "Start your journey with visual block-based coding.", color: "bg-orange-500" },
              { title: "Python Programming", level: "Intermediate", desc: "Learn the world's most popular language for AI and Data.", color: "bg-blue-500" },
              { title: "Java Programming", level: "Advanced", desc: "Master object-oriented concepts for enterprise dev.", color: "bg-red-500" },
              { title: "Scratch Level 2", level: "Beginner +", desc: "Advanced game mechanics and interactive storytelling.", color: "bg-orange-600" },
              { title: "Python Level 2", level: "Intermediate +", desc: "Data structures, algorithms, and complex logic.", color: "bg-blue-600" },
              { title: "Java Level 2", level: "Advanced +", desc: "Deep dive into APIs, libraries, and system design.", color: "bg-red-600" }
            ].map((course, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-2 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`h-40 rounded-2xl ${course.color} flex items-center justify-center mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  <Code2 className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="px-6 pb-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-secondary">{course.title}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded-md text-gray-600">{course.level}</span>
                  </div>
                  <p className="text-text-light text-sm">{course.desc}</p>
                  <Link href="/tutorials" className="block w-full py-3 text-center rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-secondary">Trusted by Parents & Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "My child has learned so much. The patience and creativity of the instructors are unmatched!", author: "Parent" },
              { quote: "Jaden was very easygoing and patient. The study materials were simple and self-explanatory!", author: "Parent" },
              { quote: "An amazing instructor, he brings such good energy and positivity. The kids really appreciate that!", author: "Parent" }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-accent text-4xl font-serif mb-4">"</div>
                <p className="text-text-light italic mb-6">{t.quote}</p>
                <div className="font-bold text-secondary">- {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Coding?</h2>
          <p className="text-xl text-blue-100">Join thousands of students learning to code with confidence.</p>
          <button onClick={() => window.location.href = '/signup'} className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl">
            Create Free Account
          </button>
        </div>
      </section>
    </main>
  );
}
