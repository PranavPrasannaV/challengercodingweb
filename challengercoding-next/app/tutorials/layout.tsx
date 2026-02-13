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

    const navItems = [
        { href: '/tutorials', label: 'All Courses', icon: BookOpen },
        { href: '/tutorials/scratch', label: 'Scratch', icon: MonitorPlay },
        { href: '/tutorials/python', label: 'Python', icon: Terminal },
        { href: '/tutorials/java', label: 'Java', icon: Code2 },
    ];

    return (
        <div className="flex min-h-screen bg-background pt-[80px]"> {/* Add padding top for fixed navbar */}
            {/* Mobile toggle */}
            <button
                className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-lg md:hidden hover:bg-primary-dark transition-colors"
                onClick={toggleSidebar}
            >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Backdrop for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-[80px] left-0 h-[calc(100vh-80px)] w-72 bg-white border-r border-border p-6 transition-transform duration-300 z-40 overflow-y-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:sticky md:top-[80px]`}
            >
                <div className="mb-8">
                    <h2 className="text-xs font-bold text-text-light uppercase tracking-wider mb-4">Learning Menu</h2>
                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                                    ${isActive(item.href) && (item.href !== '/tutorials' || pathname === '/tutorials')
                                        ? 'bg-primary/10 text-primary font-semibold'
                                        : 'text-text hover:bg-gray-50'
                                    }`}
                            >
                                <item.icon size={20} className={isActive(item.href) && (item.href !== '/tutorials' || pathname === '/tutorials') ? 'text-primary' : 'text-text-light group-hover:text-primary transition-colors'} />
                                <span>{item.label}</span>
                                {isActive(item.href) && (item.href !== '/tutorials' || pathname === '/tutorials') && (
                                    <ChevronRight size={16} className="ml-auto" />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="pt-6 border-t border-border">
                    <h2 className="text-xs font-bold text-text-light uppercase tracking-wider mb-4">Advanced (Coming Soon)</h2>
                    <div className="space-y-2 opacity-50">
                        <div className="flex items-center gap-3 px-4 py-2 text-sm text-text-light">
                            <MonitorPlay size={16} /> Scratch Level 2
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 text-sm text-text-light">
                            <Terminal size={16} /> Python Level 2
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 text-sm text-text-light">
                            <Code2 size={16} /> Java Level 2
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-12">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {children}
                </div>
            </main>
        </div>
    );
}
