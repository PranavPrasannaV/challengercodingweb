import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark-bg text-white/90 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-11 gap-12">
                    {/* Brand Column — 5/11 */}
                    <div className="md:col-span-5 space-y-4">
                        <h3 className="font-serif text-xl font-bold text-white">Challenger Coding</h3>
                        <p className="text-white/70 text-small leading-relaxed max-w-sm">
                            Empowering the next generation of developers with interactive tutorials,
                            hands-on projects, and real-world coding challenges.
                        </p>
                    </div>

                    {/* Quick Links — 3/11 */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-gold font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/learn" className="text-white/70 hover:text-white transition-colors">
                                    Learning Paths
                                </Link>
                            </li>
                            <li>
                                <Link href="/tutorials" className="text-white/70 hover:text-white transition-colors">
                                    Tutorials
                                </Link>
                            </li>
                            <li>
                                <Link href="/compiler" className="text-white/70 hover:text-white transition-colors">
                                    Online Compiler
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="text-white/70 hover:text-white transition-colors">
                                    Student Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us — 3/11 */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-gold font-semibold text-sm uppercase tracking-wider">Contact Us</h4>
                        <div className="flex items-center gap-3 text-white/70">
                            <Mail className="w-4 h-4 text-gold shrink-0" />
                            <a href="mailto:contact@challengercoding.com" className="hover:text-white transition-colors">
                                contact@challengercoding.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                            <Linkedin className="w-4 h-4 text-gold shrink-0" />
                            <a
                                href="https://www.linkedin.com/in/jaden-tang-0924b6279/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                            <MapPin className="w-4 h-4 text-gold shrink-0" />
                            <span>Sammamish, WA</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-12" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        &copy; {new Date().getFullYear()} Challenger Coding. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/50 hover:text-white transition-colors text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-white/50 hover:text-white transition-colors text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
