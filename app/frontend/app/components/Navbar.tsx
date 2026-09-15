'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/src/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tutorials', label: 'Courses' },
  { href: '/compiler', label: 'Playground' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Starts true on the homepage so server and first client paint agree (no
  // flash of the solid navbar before the scroll listener runs) — false
  // everywhere else, where there's no hero image for it to sit on top of.
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [overHero, setOverHero] = useState(isHome);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Transparent, glass navbar while the hero's #hero section is still behind
  // it; solid the moment the page scrolls past it (or on any other page,
  // which never sets overHero true to begin with).
  //
  // This used to be driven by a one-shot getBoundingClientRect() check,
  // re-run only on 'scroll'/'resize' events and a ResizeObserver on #hero
  // itself. That left a gap: anything that changed the *correct* answer
  // without firing one of those — a layout settle that isn't a hero resize,
  // a bfcache/tab resume, a slow first paint on a cold connection — left
  // overHero stuck wrong until the user happened to scroll. An
  // IntersectionObserver doesn't have that gap: the browser re-evaluates it
  // whenever the real geometry changes, for any reason, so there's no stale
  // state to get stuck in.
  useEffect(() => {
    if (!isHome) {
      setOverHero(false);
      return;
    }
    let raf = 0;
    let io: IntersectionObserver | null = null;
    let hero: HTMLElement | null = null;
    // rootMargin shrinks the viewport's top edge by 80px, so "intersecting"
    // is true exactly while hero's bottom edge is more than 80px from the
    // real top — the same threshold the old rect check used.
    const observe = () => {
      if (!hero) return;
      io?.disconnect();
      io = new IntersectionObserver(
        ([entry]) => setOverHero(entry.isIntersecting),
        { rootMargin: '-80px 0px 0px 0px' }
      );
      io.observe(hero);
    };
    // A client-side navigation to "/" can flip isHome before the home
    // page's own content — including #hero — has committed to the DOM, so
    // poll for it instead of trusting it's already there on the first run.
    const waitForHero = () => {
      hero = document.getElementById('hero');
      if (hero) {
        observe();
        return;
      }
      raf = requestAnimationFrame(waitForHero);
    };
    waitForHero();
    // A tab that sits backgrounded for a long stretch (the reported case:
    // left open for hours, then switched back to) can have its
    // IntersectionObserver callbacks throttled or dropped by the browser
    // while hidden, leaving `overHero` stuck on whatever it last delivered.
    // Recreating the observer on return forces a synchronous re-read of the
    // real geometry instead of trusting whatever stale entry is queued.
    // `pageshow` covers the bfcache/back-forward-restore version of the same
    // gap, which `visibilitychange` alone doesn't catch.
    const onVisible = () => {
      if (document.visibilityState === 'visible') observe();
    };
    const onPageShow = () => observe();
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('pageshow', onPageShow);
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, [isHome]);

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
        className={`fixed top-[calc(var(--announce-h)+0.625rem)] left-3 right-3 sm:left-6 sm:right-6 md:left-10 md:right-10 z-50 h-14 rounded-2xl border transition-colors duration-300 ${
          overHero
            ? 'border-white/15 bg-white/10 backdrop-blur-md'
            : 'border-rule bg-card shadow-[0_1px_3px_rgb(20_23_28_/_0.08)]'
        }`}
      >
        <div className="wrap h-full">
          <div className="flex items-center justify-between h-full gap-6">
            <Logo light={overHero} />

            <ul className="hidden md:flex items-center gap-1 text-small">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`block px-3 py-2 rounded-sm transition-colors ${
                      overHero
                        ? isActive(link.href)
                          ? 'text-white font-semibold'
                          : 'text-white/75 hover:text-white'
                        : isActive(link.href)
                          ? 'text-brand font-semibold'
                          : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center">
              <Link
                href={SITE.enrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn hidden md:inline-flex text-small py-2.5 px-5 ${
                  overHero
                    ? 'bg-white text-home-ink hover:bg-white/90'
                    : 'bg-home-teal text-white hover:bg-home-teal-deep'
                }`}
              >
                Enroll
              </Link>

              <button
                ref={openRef}
                onClick={() => setMobileOpen(true)}
                className={`md:hidden -mr-2 p-2 rounded-sm ${overHero ? 'text-white' : 'text-ink'}`}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
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
            href={SITE.enrollUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full bg-home-teal text-white hover:bg-home-teal-deep"
          >
            Enroll
          </Link>
        </div>
      </div>
    </>
  );
}
