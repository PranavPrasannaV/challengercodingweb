"use client";

import Link from "next/link";

const footerLinks = [
    { name: "Scratch", href: "/tutorials/scratch" },
    { name: "Python", href: "/tutorials/python" },
    { name: "Java", href: "/tutorials/java" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="container-padded flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Challenger Coding.
                </div>

                <div className="flex gap-6">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-black transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
