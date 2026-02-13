import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 mt-20 rounded-t-3xl">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-poppins">Challenger Coding</h3>
                        <p className="text-gray-300 leading-relaxed max-w-sm">
                            Empowering the next generation of developers with interactive tutorials,
                            hands-on projects, and real-world coding challenges.
                        </p>
                    </div>

                    {/* Rapid Links */}
                    <div className="space-y-4">
                        <h4 className="text-accent font-semibold text-lg">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/learn" className="hover:text-white transition-colors">Learning Paths</Link></li>
                            <li><Link href="/tutorials" className="hover:text-white transition-colors">Tutorials</Link></li>
                            <li><Link href="/compiler" className="hover:text-white transition-colors">Online Compiler</Link></li>
                            <li><Link href="/resources" className="hover:text-white transition-colors">Student Resources</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-accent font-semibold text-lg">Contact Us</h4>
                        <div className="flex items-center gap-3 text-gray-300">
                            <Mail className="w-5 h-5 text-accent" />
                            <a href="mailto:contact@challengercoding.com" className="hover:text-white transition-colors">
                                contact@challengercoding.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <Linkedin className="w-5 h-5 text-accent" />
                            <a href="https://www.linkedin.com/in/jaden-tang-0924b6279/" target="_blank" className="hover:text-white transition-colors">
                                LinkedIn
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <MapPin className="w-5 h-5 text-accent" />
                            <span>San Jose, CA</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Challenger Coding. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
