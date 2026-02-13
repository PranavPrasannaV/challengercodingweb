"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Code2, Terminal, MonitorPlay, ChevronRight, LogOut, User } from "lucide-react";

export default function Learn() {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const loggedIn = localStorage.getItem('loggedIn');
        const user = localStorage.getItem('currentUser');

        if (!loggedIn || !user) {
            router.push('/login');
        } else {
            setCurrentUser(user);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('currentUser');
        router.push('/login');
    };

    if (!mounted) return null;

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

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold font-poppins text-secondary">My Learning Dashboard</h1>
                    <div className="flex items-center gap-2 text-text-light">
                        <User className="w-5 h-5 text-primary" />
                        <p className="text-lg">Welcome back, <span className="font-semibold text-primary">{currentUser}</span>!</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-6 py-2.5 bg-red-50 text-red-600 border border-red-100 rounded-xl hover:bg-red-100 transition-colors font-medium"
                >
                    <LogOut className="w-4 h-4" />
                    Log Out
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        onClick={() => router.push(`/tutorials/${course.id}`)}
                        className="group relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                    >
                        <div className={`h-40 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <course.icon className="w-16 h-16 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <h2 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{course.title}</h2>
                                <span className="text-xs font-semibold px-2.5 py-1 bg-gray-50 rounded-full text-text-light border border-gray-200">
                                    {course.level}
                                </span>
                            </div>

                            <p className="text-text-light text-sm leading-relaxed h-10 overflow-hidden text-ellipsis line-clamp-2">
                                {course.desc}
                            </p>

                            <div className="pt-4 flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                Continue Learning <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
