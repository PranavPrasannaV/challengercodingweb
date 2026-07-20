'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/learn', label: 'Learn' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/about', label: 'About' },
  { href: '/compiler', label: 'Compiler' },
  { href: '/resources', label: 'Resources' },
];

const enrollHref =
  'https://forms.office.com/r/BnXvEhKGVs';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface hairline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-primary cursor-pointer"
            >
              Challenger Coding
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href={enrollHref}
                target="_blank"
                className="bg-cta hover:bg-cta-hover text-white px-6 py-2.5 rounded-lg font-semibold cursor-pointer transition-colors duration-200"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-text hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-surface z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <span className="font-serif text-lg font-bold text-primary">
            Challenger Coding
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-text hover:text-primary transition-colors duration-200 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 text-text hover:text-primary hover:bg-background rounded-lg font-sans font-medium transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="px-6 pb-8 mt-auto">
          <Link
            href={enrollHref}
            target="_blank"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-cta hover:bg-cta-hover text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </>
  );
}
