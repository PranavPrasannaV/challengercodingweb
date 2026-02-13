"use client";

import Link from "next/link";
import { Code2, Terminal, MonitorPlay, ChevronRight, GraduationCap } from "lucide-react";

const courses = [
    {
        id: "scratch",
        title: "Scratch Programming",
        level: "Beginner",
        desc: "Start your journey with visual block-based coding.",
        icon: MonitorPlay,
        gradient: "from-orange-400 to-red-500"
    },
    {
        id: "python",
        title: "Python Programming",
        level: "Intermediate",
        desc: "Learn the world's most popular language for AI and Data.",
        icon: Terminal,
        gradient: "from-blue-400 to-indigo-500"
    },
    {
        id: "java",
        title: "Java Programming",
        level: "Advanced",
        desc: "Master object-oriented concepts for enterprise dev.",
        icon: Code2,
        gradient: "from-red-500 to-pink-600"
    },
    {
        id: "scratch2",
        title: "Scratch Level 2",
        level: "Beginner +",
        desc: "Advanced logic and game mechanics.",
        icon: MonitorPlay,
        gradient: "from-orange-600 to-red-700"
    },
    {
        id: "python2",
        title: "Python Level 2",
        level: "Intermediate +",
        desc: "Data structures, algorithms, and more.",
        icon: Terminal,
        gradient: "from-blue-600 to-indigo-700"
    },
    {
        id: "java2",
        title: "Java Level 2",
        level: "Advanced +",
        desc: "Deep dive into APIs and system design.",
        icon: Code2,
        gradient: "from-red-600 to-pink-700"
    }
];

export default function TutorialsPage() {
    return (
        <div className="space-y-12">
            <div className="text-center space-y-4 pt-8">
                <h1 className="text-4xl font-bold font-poppins text-secondary">Course Catalog</h1>
                <p className="text-text-light max-w-2xl mx-auto text-lg">
                    Select a course to begin your learning journey. Each course includes video tutorials,
                    interactive exercises, and quizzes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                {courses.map((course) => (
                    <Link
                        key={course.id}
                        href={`/tutorials/${course.id}`}
                        className="group relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block overflow-hidden"
                    >
                        <div className={`h-48 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6 relative overflow-hidden shadow-inner`}>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <course.icon className="w-20 h-20 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                        </div>

                        <div className="space-y-3 relative z-10">
                            <div className="flex justify-between items-start">
                                <h2 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{course.title}</h2>
                                <span className="text-xs font-semibold px-2.5 py-1 bg-gray-50 rounded-full text-text-light border border-gray-200">
                                    {course.level}
                                </span>
                            </div>

                            <p className="text-text-light text-sm leading-relaxed h-10 overflow-hidden text-ellipsis line-clamp-2">
                                {course.desc}
                            </p>

                            <div className="pt-4 flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                Start Course <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
