'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { ENROLL_URL } from '@/src/config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tutorials', label: 'Courses' },
  { href: '/compiler', label: 'Playground' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Scroll lock, focus handoff and Escape belong to the same moment, so they
  // live in the same effect and can never fall out of step.
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      openRef.current?.focus();
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 bg-paper border-b transition-colors ${
          scrolled ? 'border-rule' : 'border-transparent'
        }`}
      >
        <div className="wrap h-full">
          <div className="flex items-center justify-between h-full gap-6">
            <Logo />

            <ul className="hidden md:flex items-center gap-1 text-small">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`block px-3 py-2 rounded-sm transition-colors ${
                      isActive(link.href)
                        ? 'text-brand font-semibold'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden md:inline-flex text-small py-2.5 px-5"
            >
              Enroll
            </Link>

            <button
              ref={openRef}
              onClick={() => setMobileOpen(true)}
              className="md:hidden -mr-2 p-2 text-ink rounded-sm"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* The scrim stays mounted and fades on the same clock as the panel, so
          opening and closing are symmetric. */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-ink/35 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        inert={!mobileOpen}
        className={`fixed top-0 right-0 h-full w-[19rem] max-w-[85vw] bg-card z-50 md:hidden
          flex flex-col shadow-[-8px_0_28px_-12px_rgb(27_25_23_/_0.25)]
          transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
          }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-rule">
          <Logo size="sm" as="text" />
          <button
            ref={closeRef}
            onClick={() => setMobileOpen(false)}
            className="-mr-2 p-2 text-ink rounded-sm"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col px-3 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`py-3 px-3 rounded-sm transition-colors ${
                isActive(link.href)
                  ? 'text-brand font-semibold'
                  : 'text-ink hover:bg-paper-sunk'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-6 pb-8">
          <Link
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            Enroll
          </Link>
        </div>
      </div>
    </>
  );
}
