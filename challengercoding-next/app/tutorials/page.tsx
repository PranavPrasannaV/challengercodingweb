"use client";

import Link from "next/link";
import { Code2, Terminal, MonitorPlay, ChevronRight } from "lucide-react";

const courses = [
    {
        id: "scratch",
        title: "Scratch Programming",
        level: "Beginner",
        desc: "Start your journey with visual block-based coding.",
        icon: MonitorPlay,
        accent: "#E67E22"
    },
    {
        id: "python",
        title: "Python Programming",
        level: "Intermediate",
        desc: "Learn the world's most popular language for AI and Data.",
        icon: Terminal,
        accent: "#1A5C5C"
    },
    {
        id: "java",
        title: "Java Programming",
        level: "Advanced",
        desc: "Master object-oriented concepts for enterprise dev.",
        icon: Code2,
        accent: "#C6694E"
    },
    {
        id: "scratch2",
        title: "Scratch Level 2",
        level: "Beginner +",
        desc: "Advanced logic and game mechanics.",
        icon: MonitorPlay,
        accent: "#D35400"
    },
    {
        id: "python2",
        title: "Python Level 2",
        level: "Intermediate +",
        desc: "Data structures, algorithms, and more.",
        icon: Terminal,
        accent: "#144A4A"
    },
    {
        id: "java2",
        title: "Java Level 2",
        level: "Advanced +",
        desc: "Deep dive into APIs and system design.",
        icon: Code2,
        accent: "#B15840"
    }
];

export default function TutorialsPage() {
    return (
        <div className="space-y-12">
            <div className="text-center space-y-4 pt-8">
                <h1 className="text-h1 font-serif font-bold text-text text-center">Course Catalog</h1>
                <p className="text-body text-text-secondary text-center max-w-2xl mx-auto">
                    Select a course to begin your learning journey. Each course includes video tutorials,
                    interactive exercises, and quizzes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                {courses.map((course) => (
                    <Link
                        key={course.id}
                        href={`/tutorials/${course.id}`}
                        className="bg-surface hairline rounded-lg overflow-hidden block transition-all duration-200 hover:shadow-md group"
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${course.accent}18` }}>
                                    <course.icon className="w-6 h-6" style={{ color: course.accent }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-h3 font-bold text-text">{course.title}</h2>
                                    <span className="text-xs font-medium text-text-secondary">{course.level}</span>
                                </div>
                            </div>

                            <p className="text-small text-text-secondary leading-relaxed">
                                {course.desc}
                            </p>

                            <div className="mt-4 text-primary font-semibold text-small inline-flex items-center gap-1 transition-colors duration-200 group-hover:text-primary-hover">
                                Start Course <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
