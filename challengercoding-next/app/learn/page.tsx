"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
            color: "#E67E22"
        },
        {
            id: "python",
            title: "Python Programming",
            level: "Intermediate",
            desc: "Learn the world's most popular language for AI and Data.",
            icon: Terminal,
            color: "#1A5C5C"
        },
        {
            id: "java",
            title: "Java Programming",
            level: "Advanced",
            desc: "Master object-oriented concepts for enterprise dev.",
            icon: Code2,
            color: "#C6694E"
        },
        {
            id: "scratch2",
            title: "Scratch Level 2",
            level: "Beginner +",
            desc: "Advanced logic and game mechanics.",
            icon: MonitorPlay,
            color: "#D35400"
        },
        {
            id: "python2",
            title: "Python Level 2",
            level: "Intermediate +",
            desc: "Data structures, algorithms, and more.",
            icon: Terminal,
            color: "#144A4A"
        },
        {
            id: "java2",
            title: "Java Level 2",
            level: "Advanced +",
            desc: "Deep dive into APIs and system design.",
            icon: Code2,
            color: "#B15840"
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                <div className="space-y-2">
                    <h1 className="text-h1 font-serif font-bold text-text">My Learning Dashboard</h1>
                    <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        <p className="text-body">Welcome back, <span className="font-semibold text-primary">{currentUser}</span>!</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary rounded-lg hover:bg-alt-bg transition-colors font-medium text-small"
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
                        className="bg-surface hairline rounded-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-md group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200" style={{ backgroundColor: `${course.color}18` }}>
                                <course.icon className="w-6 h-6" style={{ color: course.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-h3 font-bold text-text">{course.title}</h2>
                                <span className="text-xs font-medium px-2 py-0.5 bg-alt-bg text-text-secondary rounded mt-1 inline-block">
                                    {course.level}
                                </span>
                            </div>
                        </div>

                        <p className="text-small text-text-secondary leading-relaxed">
                            {course.desc}
                        </p>

                        <div className="mt-4 text-primary font-semibold text-small inline-flex items-center gap-1 transition-colors duration-200 group-hover:text-primary-hover">
                            Continue Learning <ChevronRight className="w-4 h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
