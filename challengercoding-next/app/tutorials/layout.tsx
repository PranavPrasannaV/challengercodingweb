"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen, Terminal, Code2, MonitorPlay, ChevronRight } from 'lucide-react';

export default function TutorialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/');

    const beginnerCourses = [
        { href: '/tutorials', label: 'All Courses', icon: BookOpen },
        { href: '/tutorials/scratch', label: 'Scratch', icon: MonitorPlay },
        { href: '/tutorials/python', label: 'Python', icon: Terminal },
        { href: '/tutorials/java', label: 'Java', icon: Code2 },
    ];

    const advancedCourses = [
        { href: '/tutorials/scratch2', label: 'Scratch 2', icon: MonitorPlay },
        { href: '/tutorials/python2', label: 'Python 2', icon: Terminal },
        { href: '/tutorials/java2', label: 'Java 2', icon: Code2 },
    ];

    return (
        <div className="flex min-h-screen bg-background pt-20">
            {/* Mobile toggle */}
            <button
                className="fixed bottom-6 right-6 z-50 p-4 bg-cta hover:bg-cta-hover text-white rounded-full md:hidden transition-colors"
                onClick={toggleSidebar}
            >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Backdrop for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-20 left-0 h-[calc(100vh-80px)] w-72 bg-surface hairline border-r-0 p-6 transition-transform duration-300 z-40 overflow-y-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:sticky md:top-20`}
            >
                <div className="mb-8">
                    <h2 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">Learning Menu</h2>
                    <nav className="space-y-2">
                        {beginnerCourses.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 group
                                    ${isActive(item.href) && (item.href !== '/tutorials' || pathname === '/tutorials')
                                        ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary'
                                        : 'text-text hover:bg-alt-bg'
                                    }`}
                            >
                                <item.icon size={20} className={isActive(item.href) && (item.href !== '/tutorials' || pathname === '/tutorials') ? 'text-primary' : 'text-text-secondary group-hover:text-primary transition-colors'} />
                                <span>{item.label}</span>
                                {isActive(item.href) && (item.href !== '/tutorials' || pathname === '/tutorials') && (
                                    <ChevronRight size={16} className="ml-auto" />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="pt-6 border-t border-border">
                    <h2 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">Advanced Courses</h2>
                    <nav className="space-y-2">
                        {advancedCourses.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 group
                                    ${isActive(item.href)
                                        ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary'
                                        : 'text-text hover:bg-alt-bg'
                                    }`}
                            >
                                <item.icon size={20} className={isActive(item.href) ? 'text-primary' : 'text-text-secondary group-hover:text-primary transition-colors'} />
                                <span>{item.label}</span>
                                {isActive(item.href) && (
                                    <ChevronRight size={16} className="ml-auto" />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-12">
                {children}
            </main>
        </div>
    );
}
