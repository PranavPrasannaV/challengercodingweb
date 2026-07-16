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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-hero font-serif font-bold text-text leading-tight">
              Code with Confidence.
            </h1>
            <p className="text-body text-text-secondary max-w-xl leading-relaxed">
              Master programming through interactive tutorials, real-world projects, and expert mentorship.
              Start your journey from absolute beginner to confident developer today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
              >
                Start Your Coding Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/tutorials"
                className="inline-flex items-center justify-center gap-2 hairline bg-surface text-text hover:bg-alt-bg px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
              >
                Explore Our Courses
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

          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm aspect-square hairline bg-surface rounded-lg flex items-center justify-center p-12 relative">
              <div className="absolute top-6 left-6 w-8 h-0.5 bg-gold"></div>
              <p className="font-serif text-2xl text-text text-center italic leading-relaxed">
                &ldquo;Everyone can code&rdquo;
              </p>
              <div className="absolute bottom-6 right-6 w-8 h-0.5 bg-gold"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-alt-bg hairline rounded-lg p-6 hover:bg-background transition-colors duration-200">
              <Users className="w-8 h-8 text-primary mb-4" />
              <div className="text-h2 font-bold text-text">1,000+</div>
              <div className="text-text-secondary font-medium">Active Students</div>
            </div>
            <div className="bg-alt-bg hairline rounded-lg p-6 hover:bg-background transition-colors duration-200">
              <MonitorPlay className="w-8 h-8 text-primary mb-4" />
              <div className="text-h2 font-bold text-text">50+</div>
              <div className="text-text-secondary font-medium">Hours of Content</div>
            </div>
            <div className="bg-alt-bg hairline rounded-lg p-6 hover:bg-background transition-colors duration-200">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <div className="text-h2 font-bold text-text">6</div>
              <div className="text-text-secondary font-medium">Comprehensive Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-dark-bg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-h1 font-serif font-bold text-white">
            Empowering the Next Generation
          </h2>
          <p className="text-body text-white/80 leading-relaxed max-w-3xl mx-auto">
            &ldquo;At Challenger Coding, we believe coding is a superpower. We empower students of all ages to embrace technology,
            providing the tools and mentorship needed to thrive in a digital world.&rdquo;
          </p>
          <div className="pt-4">
            <Link
              href="/about"
              className="text-gold hover:text-white font-semibold inline-flex items-center gap-2 transition-colors duration-200"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-h1 font-serif font-bold text-text text-center">
              Our Course Offerings
            </h2>
            <p className="text-body text-text-secondary text-center max-w-2xl mx-auto">
              From visual block-building to object-oriented programming, we have a path for every learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Scratch Programming", level: "Beginner", desc: "Start your journey with visual block-based coding.", color: "#E67E22" },
              { title: "Python Programming", level: "Intermediate", desc: "Learn the world's most popular language for AI and Data.", color: "#1A5C5C" },
              { title: "Java Programming", level: "Advanced", desc: "Master object-oriented concepts for enterprise dev.", color: "#C6694E" },
              { title: "Scratch Level 2", level: "Beginner +", desc: "Advanced game mechanics and interactive storytelling.", color: "#D35400" },
              { title: "Python Level 2", level: "Intermediate +", desc: "Data structures, algorithms, and complex logic.", color: "#144A4A" },
              { title: "Java Level 2", level: "Advanced +", desc: "Deep dive into APIs, libraries, and system design.", color: "#B15840" }
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-surface hairline rounded-lg p-6 border-l-4"
                style={{ borderLeftColor: course.color }}
              >
                <Code2
                  className="w-10 h-10 mb-4"
                  style={{ color: course.color }}
                />
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-h3 font-bold text-text">{course.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-alt-bg text-text-secondary rounded whitespace-nowrap">
                    {course.level}
                  </span>
                </div>
                <p className="text-small text-text-secondary mb-4">{course.desc}</p>
                <Link
                  href="/tutorials"
                  className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline"
                >
                  Begin This Path
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h1 font-serif font-bold text-text text-center mb-16">
            Trusted by Parents & Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "My child has learned so much. The patience and creativity of the instructors are unmatched!", author: "Parent" },
              { quote: "Jaden was very easygoing and patient. The study materials were simple and self-explanatory!", author: "Parent" },
              { quote: "An amazing instructor, he brings such good energy and positivity. The kids really appreciate that!", author: "Parent" }
            ].map((t, i) => (
              <div
                key={i}
                className="hairline bg-background rounded-lg p-8 border-l-4 border-gold"
              >
                <p className="text-text-secondary italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="font-bold text-text">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-h1 font-serif font-bold text-white">
            Ready to Start Coding?
          </h2>
          <p className="text-body text-white/80">
            Join thousands of students learning to code with confidence.
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
