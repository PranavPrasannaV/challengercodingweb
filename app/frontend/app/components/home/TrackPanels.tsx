"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TRACKS, coursesInTrack } from "@/src/data/courses";

/**
 * Harvey's "For Law Firms" / "For In-House" hover panels, carrying the same
 * description/course-list content each track used to show in its own
 * standalone row — just laid out side by side on a textured backdrop
 * instead of stacked next to a plain white demo. The three grainy texture
 * downloads (see page.tsx's hero for where the eclipse photo landed) are
 * each panel's background. The live demos themselves live only in
 * OfferingCarousel now, not duplicated in here too.
 */
const PANELS = [
  { trackId: "scratch" as const, texture: "/assets/texture-scratch.png" },
  { trackId: "python" as const, texture: "/assets/texture-python.png" },
  { trackId: "java" as const, texture: "/assets/texture-java.png" },
];

/** Hovered panel's share of the row; the rest split what's left evenly. */
const ACTIVE_BASIS = 44;
const OTHER_BASIS = (100 - ACTIVE_BASIS) / (PANELS.length - 1);
const DEFAULT_BASIS = 100 / PANELS.length;

export default function TrackPanels() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [tapped, setTapped] = useState<number | null>(null);
  const activeIndex = hovered ?? tapped;

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {PANELS.map((panel, i) => {
        const track = TRACKS.find((t) => t.id === panel.trackId)!;
        const inTrack = coursesInTrack(panel.trackId);
        const first = inTrack[0];
        const isActive = activeIndex === i;
        const isOther = activeIndex !== null && activeIndex !== i;

        return (
          <div
            key={panel.trackId}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setTapped((t) => (t === i ? null : i))}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-home-rule transition-[flex-basis] duration-[350ms] ease-in-out"
            style={{
              backgroundImage: `url(${panel.texture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexBasis: `${isActive ? ACTIVE_BASIS : isOther ? OTHER_BASIS : DEFAULT_BASIS}%`,
            }}
          >
            {/* Dark scrim, constant — keeps the white text legible over the
                texture in every state. */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/35" />

            <div className="relative px-6 pb-8 pt-8 sm:px-8 sm:pt-10">
              <Image src={track.mark} alt="" width={36} height={36} className="h-9 w-auto object-contain" />
              <h3 className="mt-4 font-serif text-3xl font-medium text-white sm:text-4xl">{track.label}</h3>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-white/85 sm:text-base">
                {first.description}
              </p>
              <ul className="mt-5 max-w-[26rem] divide-y divide-white/15 border-t border-white/15">
                {inTrack.map((course) => (
                  <li key={course.id}>
                    <Link
                      href={course.link}
                      onClick={(e) => e.stopPropagation()}
                      className="group/link flex items-baseline justify-between gap-4 py-2.5 text-white/90 transition-colors hover:text-white"
                    >
                      <span>{course.shortTitle}</span>
                      <span className="shrink-0 font-mono text-xs text-white/60">{course.level}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* White wash — the panel keeps its color, it just fades under
                this (text and course list alike) as focus moves to its
                sibling, rather than losing all color to a grayscale
                filter. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-white transition-opacity duration-[350ms] ease-in-out"
              style={{ opacity: isOther ? 0.6 : 0 }}
            />
          </div>
        );
      })}
    </div>
  );
}
