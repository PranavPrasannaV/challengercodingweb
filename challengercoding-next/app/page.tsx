"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, GraduationCap, Users, CheckCircle2, MonitorPlay } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-hero font-serif font-bold text-text leading-tight">
              Free Coding Education, <br />For Every Student.
            </h1>
            <p className="text-body text-text-secondary max-w-xl leading-relaxed">
              Challenger Coding offers interactive tutorials in Scratch, Python, and Java for students of all backgrounds.
              No matter your family&apos;s circumstances, your child deserves a path into technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/tutorials"
                className="inline-flex items-center justify-center gap-2 hairline bg-surface text-text hover:bg-alt-bg px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
              >
                Explore Free Tutorials
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sage" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sage" />
                <span>No Credit Card</span>
              </div>
            </div>
          </div>

          {/* Visual composition — styled exactly like the provided image */}
            <div className="flex items-center justify-center group relative py-8 select-none">
            {/* Glowing background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-primary/10 via-transparent to-transparent blur-2xl -z-10 pointer-events-none" />

              <div className="relative w-full max-w-[520px] aspect-[16/9] flex items-center justify-center">
              {/* Main Code Editor Window */}
                <div className="relative w-full bg-white hairline rounded-2xl px-8 py-6 shadow-xl rotate-3 group-hover:rotate-1 group-hover:scale-[1.02] transition-all duration-500 ease-out z-0">
                {/* Windows-style top dots */}
                  <div className="flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                {/* Code Snippet */}
                <div className="space-y-2.5 font-mono text-sm leading-relaxed text-text">
                  <div className="flex">
                    <span className="text-cta font-bold">function</span>
                    <span className="text-primary ml-2 font-semibold">startJourney</span>
                    <span className="text-text-secondary">()</span>
                    <span className="text-text-secondary ml-1">{"{"}</span>
                  </div>
                  <div className="pl-5">
                    <span className="text-cta font-bold">const</span>
                    <span className="text-text ml-2">skills</span>
                    <span className="text-text-secondary ml-2">=</span>
                    <span className="text-text-secondary ml-2">[</span>
                    <span className="text-emerald-700">&quot;Python&quot;</span>
                    <span className="text-text-secondary">,</span>
                    <span className="text-emerald-700 ml-2">&quot;Java&quot;</span>
                    <span className="text-text-secondary">,</span>
                    <span className="text-emerald-700 ml-2">&quot;Scratch&quot;</span>
                    <span className="text-text-secondary">];</span>
                  </div>
                  <div className="pl-5">
                    <span className="text-cta font-bold">return</span>
                    <span className="text-text ml-2">skills</span>
                    <span className="text-text-secondary">.</span>
                    <span className="text-primary">map</span>
                    <span className="text-text-secondary">(</span>
                    <span className="text-text">skill</span>
                    <span className="text-gold ml-1.5 font-bold">=&gt;</span>
                    <span className="text-cta ml-1.5 font-bold">new</span>
                    <span className="text-primary ml-2 font-semibold">Future</span>
                    <span className="text-text-secondary">(</span>
                    <span className="text-text">skill</span>
                    <span className="text-text-secondary">)</span>
                    <span className="text-text-secondary">);</span>
                  </div>
                  <div className="text-text-secondary">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section — varied visual treatment */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-alt-bg rounded-lg p-8 flex items-start gap-5 transition-colors duration-200">
            <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-1">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="text-h2 font-bold text-text">3,000+</div>
              <div className="text-text-secondary text-small">Active students learning with us</div>
            </div>
          </div>
          <div className="bg-alt-bg rounded-lg p-8 flex items-start gap-5 transition-colors duration-200 md:translate-y-4">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-1">
              <MonitorPlay className="w-7 h-7 text-gold" />
            </div>
            <div>
              <div className="text-h2 font-bold text-text">50+</div>
              <div className="text-text-secondary text-small">Hours of course content</div>
            </div>
          </div>
          <div className="bg-alt-bg rounded-lg p-8 flex items-start gap-5 transition-colors duration-200">
            <div className="w-14 h-14 rounded-full bg-cta/15 flex items-center justify-center shrink-0 mt-1">
              <GraduationCap className="w-7 h-7 text-cta" />
            </div>
            <div>
              <div className="text-h2 font-bold text-text">6</div>
              <div className="text-text-secondary text-small">Comprehensive courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-dark-bg relative overflow-hidden">
        {/* Decorative code pattern */}
        <div className="absolute inset-0 opacity-[0.04] select-none pointer-events-none font-mono text-xs leading-relaxed text-white overflow-hidden">
          <pre className="p-12">{Array.from({ length: 30 }, () => 'if (student.curious) { empower(student); } else { inspire(student); }').join('\n')}</pre>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="accent-line mx-auto" />
          <h2 className="text-h1 font-serif font-bold text-white">
            Coding Should Be for <span className="text-gold">Everyone</span>
          </h2>
          <p className="text-body text-white/80 leading-relaxed max-w-3xl mx-auto">
            At Challenger Coding, we break down barriers — financial, geographic, and social —
            so every student gets the same chance to discover the power of programming.
            No matter their background, every child deserves a path into technology.
          </p>
          <div className="pt-4">
            <Link
              href="/about"
              className="text-gold hover:text-white font-semibold inline-flex items-center gap-2 transition-colors duration-200 border-b border-gold/30 hover:border-white pb-0.5"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-6 bg-background relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="accent-line mb-6" />
            <h2 className="text-h1 font-serif font-bold text-text">
              Our Course Offerings
            </h2>
            <p className="text-body text-text-secondary mt-4">
              From visual block-building to object-oriented programming, we have a path for every learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Scratch Programming", level: "Beginner", desc: "Start your journey with visual block-based coding.", color: "#E67E22", tag: "Visual" },
              { title: "Python Programming", level: "Intermediate", desc: "Learn the world's most popular language for AI and Data.", color: "#1A5C5C", tag: "Text-based" },
              { title: "Java Programming", level: "Advanced", desc: "Master object-oriented concepts for enterprise dev.", color: "#C6694E", tag: "OOP" },
              { title: "Scratch Level 2", level: "Beginner +", desc: "Advanced game mechanics and interactive storytelling.", color: "#D35400", tag: "Visual" },
              { title: "Python Level 2", level: "Intermediate +", desc: "Data structures, algorithms, and complex logic.", color: "#144A4A", tag: "Text-based" },
              { title: "Java Level 2", level: "Advanced +", desc: "Deep dive into APIs, libraries, and system design.", color: "#B15840", tag: "OOP" }
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-surface hairline rounded-lg overflow-hidden transition-colors duration-200 hover:bg-alt-bg group"
              >
                <div className="h-2" style={{ backgroundColor: course.color }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${course.color}18` }}>
                      <Code2 className="w-6 h-6" style={{ color: course.color }} />
                    </div>
                    <div>
                      <h3 className="text-h3 font-bold text-text">{course.title}</h3>
                      <span className="text-xs font-medium text-text-secondary">{course.tag}</span>
                    </div>
                  </div>
                  <p className="text-small text-text-secondary mb-5 leading-relaxed">{course.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2.5 py-1 bg-alt-bg text-text-secondary rounded">
                      {course.level}
                    </span>
                    <Link
                      href="/tutorials"
                      className="text-primary font-semibold text-sm inline-flex items-center gap-1 transition-colors duration-200 hover:text-primary-hover"
                    >
                      Begin This Path
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-surface relative overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-8 gap-4 p-8">
            {Array.from({ length: 64 }, (_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-dark-bg" />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-h2 font-serif font-bold text-text mb-16">
            <span className="text-gold">/</span> What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "My child has learned so much. The patience and creativity of the instructors are unmatched!", author: "Parent" },
              { quote: "Jaden was very easygoing and patient. The study materials were simple and self-explanatory!", author: "Parent" },
              { quote: "An amazing instructor, he brings such good energy and positivity. The kids really appreciate that!", author: "Parent" }
            ].map((t, i) => (
              <div
                key={i}
                className="bg-background hairline rounded-lg p-8"
              >
                <div className="text-gold text-4xl font-serif leading-none mb-2">&ldquo;</div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="w-10 h-0.5 bg-gold/50 mb-4" />
                <div className="font-bold text-text text-small">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-h1 font-serif font-bold text-white">
            Every Child Deserves to Code
          </h2>
          <p className="text-body text-white/80">
            No cost. No barriers. Just a supportive community and a path into technology for every student who wants one.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-cta hover:bg-cta-hover text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </main>
  );
}
