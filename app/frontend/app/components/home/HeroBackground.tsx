import Image from "next/image";

/**
 * The hero photo export reads flat/washed-out on its own — measured against
 * the original (grainier) source it's noticeably brighter and less
 * saturated. This CSS color grade pulls it back toward that richer look;
 * GrainOverlay (mounted alongside this in page.tsx) restores the texture.
 */
const HERO_SATURATE = 1.45;
const HERO_BRIGHTNESS = 0.82;
const HERO_CONTRAST = 1.1;

export default function HeroBackground() {
  return (
    <Image
      src="/assets/hero-eclipse.png"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover"
      style={{
        filter: `saturate(${HERO_SATURATE}) brightness(${HERO_BRIGHTNESS}) contrast(${HERO_CONTRAST})`,
      }}
    />
  );
}
