"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="border-b border-border bg-background sticky top-0 z-50">
            <div className="container-padded h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight">
                    Challenger<span className="text-muted-foreground font-light">Coding</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-black",
                                pathname === link.href ? "text-black" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/login" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors">
                        Sign In
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/login" className="bg-black text-white text-center py-2 rounded-md text-sm font-medium">
                        Sign In
                    </Link>
                </div>
            )}
        </nav>
    );
}
