"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

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

    return (
        <div className="flex min-h-screen bg-[#F5F7FA]">
            {/* Sidebar - Mobile toggle */}
            <button
                className="fixed bottom-4 right-4 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg md:hidden"
                onClick={toggleSidebar}
            >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-[90px] left-0 h-[calc(100vh-90px)] w-64 bg-[#1976D2] text-white p-4 transition-transform duration-300 z-40
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:sticky md:top-[90px]`}
            >
                <h2 className="text-xl font-bold mb-4 text-[#FFC107]">Course Catalog</h2>
                <ul className="space-y-2">
                    <li>
                        <Link href="/learn" className="block p-2 hover:bg-blue-600 rounded transition-colors">
                            Learning Menu
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tutorials/scratch"
                            className={`block p-2 rounded transition-colors ${isActive('/tutorials/scratch') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}
                        >
                            Scratch Programming
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tutorials/python"
                            className={`block p-2 rounded transition-colors ${isActive('/tutorials/python') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}
                        >
                            Python Programming
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tutorials/java"
                            className={`block p-2 rounded transition-colors ${isActive('/tutorials/java') ? 'bg-blue-600' : 'hover:bg-blue-600'}`}
                        >
                            Java Programming
                        </Link>
                    </li>
                    <li>
                        {/* Add other courses as links or placeholders */}
                        <span className="block p-2 text-gray-400 cursor-not-allowed">Advanced Scratch (Coming Soon)</span>
                    </li>
                    <li>
                        <span className="block p-2 text-gray-400 cursor-not-allowed">Advanced Python (Coming Soon)</span>
                    </li>
                    <li>
                        <span className="block p-2 text-gray-400 cursor-not-allowed">Advanced Java (Coming Soon)</span>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 w-full max-w-7xl mx-auto">
                {children}
            </main>
        </div>
    );
}
