/**
 * Film-grain texture for the hero section, replacing the old baked-in
 * eclipse-photo grain with a dynamic one: an SVG feTurbulence/feColorMatrix
 * filter blended over the section via mix-blend-mode, so it reacts to
 * whatever's underneath (gradient, photo, the demo card) instead of being
 * static image content.
 *
 * Scoped to whichever positioned container it's mounted in (position:
 * absolute; inset: 0) rather than the whole viewport — it was originally
 * mounted globally via position:fixed in the root layout, but that put
 * grain over every page, including things like the About page's profile
 * photo, which isn't a texture that should have this look. Mount it inside
 * a `relative overflow-hidden` section (see the hero section in page.tsx).
 *
 * Tunables below are the "starting point" values — adjust freely, nothing
 * else in the app depends on their exact numbers.
 */

// Noise shape. Lower baseFrequency = bigger, chunkier grain clumps; more
// octaves = more fine detail layered on top of that base clump size.
const GRAIN_BASE_FREQUENCY = 0.5;
const GRAIN_NUM_OCTAVES = 4;

// Pushes the noise's mid-gray toward black/white before it hits the blend
// mode, so clumps read as dense dark grain and bright specks instead of a
// flat gray wash — this is what actually gives it the eclipse photo's
// dramatic, high-contrast grain rather than a subtle texture.
const GRAIN_CONTRAST_SLOPE = 1.8;
const GRAIN_CONTRAST_INTERCEPT = -0.4;

// How the noise sits on top of the page.
const GRAIN_OPACITY = 0.4;
const GRAIN_BLEND_MODE: "overlay" | "soft-light" = "overlay";

// Flicker: feTurbulence's seed is cycled through discrete values on a timer
// (real film grain is a new random frame every exposure, not a texture that
// slides around), producing the "dynamic, moving" grain the static PNG
// couldn't do. Pattern below is fixed, not random-per-render, so the SSR and
// client markup match.
const GRAIN_SEEDS = [2, 47, 13, 91, 28, 6, 64, 35, 79, 21, 53, 8];
const GRAIN_FRAME_SECONDS = 0.12;
const GRAIN_ANIMATION_SECONDS = GRAIN_SEEDS.length * GRAIN_FRAME_SECONDS;

export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 40,
        mixBlendMode: GRAIN_BLEND_MODE,
        opacity: GRAIN_OPACITY,
      }}
    >
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <filter id="grain-overlay-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={GRAIN_BASE_FREQUENCY}
            numOctaves={GRAIN_NUM_OCTAVES}
            stitchTiles="stitch"
            seed={GRAIN_SEEDS[0]}
            result="noise"
          >
            <animate
              attributeName="seed"
              values={`${GRAIN_SEEDS.join(";")};${GRAIN_SEEDS[0]}`}
              dur={`${GRAIN_ANIMATION_SECONDS}s`}
              calcMode="discrete"
              repeatCount="indefinite"
            />
          </feTurbulence>
          {/* Collapses the noise's RGB channels to a single grayscale
              luminance value (so overlay/soft-light read pure grain, not
              color speckle) and pins alpha to a flat 1 — feTurbulence's own
              alpha channel is noisy too, and left alone it reads as drifting
              cloudy patches instead of fine grain. Intensity is controlled
              entirely by the wrapper's opacity below. */}
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0.33 0.33 0.33 0 0
                    0    0    0    0 1"
            result="grayscale"
          />
          {/* Steepens the noise's tonal curve (slope > 1, negative
              intercept) so mid-gray clumps get crushed toward black/white
              instead of staying a flat, low-contrast gray — the difference
              between "subtle texture" and the eclipse photo's dramatic
              grain. */}
          <feComponentTransfer in="grayscale">
            <feFuncR
              type="linear"
              slope={GRAIN_CONTRAST_SLOPE}
              intercept={GRAIN_CONTRAST_INTERCEPT}
            />
            <feFuncG
              type="linear"
              slope={GRAIN_CONTRAST_SLOPE}
              intercept={GRAIN_CONTRAST_INTERCEPT}
            />
            <feFuncB
              type="linear"
              slope={GRAIN_CONTRAST_SLOPE}
              intercept={GRAIN_CONTRAST_INTERCEPT}
            />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-overlay-filter)" />
      </svg>
    </div>
  );
}
