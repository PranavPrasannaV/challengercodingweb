import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    Challenger Coding
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 font-medium text-text">
                    <li>
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link href="/learn" className="hover:text-primary transition-colors">Learn</Link>
                    </li>
                    <li>
                        <Link href="/tutorials" className="hover:text-primary transition-colors">Tutorials</Link>
                    </li>

                    <li>
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    </li>
                    <li>
                        <Link href="/compiler" className="hover:text-primary transition-colors">Compiler</Link>
                    </li>
                    <li>
                        <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
                    </li>
                </ul>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="https://forms.office.com/r/BnXvEhKGVs"
                        target="_blank"
                        className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5"
                    >
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Menu Button (Placeholder for functionality) */}
                <button className="md:hidden p-2 text-text hover:bg-gray-100 rounded-lg">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}
