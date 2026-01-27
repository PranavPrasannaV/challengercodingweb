"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/learn" },
    { name: "Compiler", href: "/compiler" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
];

export function Sidebar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="md:hidden fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-background border-b border-border">
                <span className="font-bold tracking-tighter">CHALLENGER</span>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden">
                    <nav className="flex flex-col gap-6 text-2xl font-light">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(pathname === link.href ? "text-white" : "text-muted-foreground")}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/login" className="mt-8 text-sm uppercase tracking-widest border border-white px-4 py-2 w-fit">
                            Student Login
                        </Link>
                    </nav>
                </div>
            )}

            <aside className="hidden md:flex flex-col justify-between w-full h-full p-12">
                <div>
                    <Link href="/" className="block mb-12">
                        <h1 className="text-3xl font-bold tracking-tighter leading-none">
                            CHALLENGER<br />CODING<span className="text-muted-foreground">_</span>
                        </h1>
                    </Link>

                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-lg transition-colors hover:translate-x-2 duration-300 w-fit",
                                    pathname === link.href
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="space-y-6">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">
                        <p className="mb-2">Platform Status</p>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>Systems Online</span>
                        </div>
                    </div>

                    <Link href="/login" className="block w-full">
                        <button className="w-full py-4 border border-border hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                            Student Portal
                        </button>
                    </Link>
                </div>
            </aside>
        </>
    );
}
