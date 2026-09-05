import gsap from "gsap";
import { SATELLITES, type SatelliteId } from "./stage";

// Square corners: no `round` on the inset.
const CLIP_CLOSED = "inset(50% 50% 50% 50%)";
const CLIP_OPEN = "inset(0% 0% 0% 0%)";

/* Entrance timing (s). The body's clip-path reveal is bound to its own
   opacity ramp so the panel is never fully opaque while still small:
   opacity starts rising at 30% of the reveal and reaches 1 at 85%. */
const BODY_AT = 0.03;
const BODY_DUR = 0.5;
const BODY_OPACITY_FROM = 0.3; // fraction of BODY_DUR
const BODY_OPACITY_TO = 0.85;
/** Total wall time of one panel's entrance, for pacing the scene holds. */
export const ENTRANCE_DUR = BODY_AT + BODY_DUR;

function parts(panel: HTMLElement) {
  return {
    inner: panel.querySelector<HTMLElement>(".hero-panel-inner"),
    body: panel.querySelector<HTMLElement>(".hero-panel-body"),
  };
}

/**
 * Park a panel at its rest position/tilt with its body hidden so the
 * timeline can build it. Outer element: centre-anchored position, depth,
 * and a neutral parallax rotateY. Inner element: the rest tilt that the
 * ambient oscillation later wanders around.
 */
export function setPanelHidden(panel: HTMLElement, id: SatelliteId) {
  const s = SATELLITES[id];
  const { inner, body } = parts(panel);
  gsap.set(panel, { xPercent: -50, yPercent: -50, z: s.depth, rotationY: 0 });
  if (inner) gsap.set(inner, { rotationX: s.restRotateX, rotationY: s.restRotateY, rotation: s.restRotateZ });
  if (body) gsap.set(body, { clipPath: CLIP_CLOSED, opacity: 0 });
}

/** The reduced-motion / settled state: everything simply present. */
export function setPanelShown(panel: HTMLElement, id: SatelliteId) {
  setPanelHidden(panel, id);
  const { body } = parts(panel);
  if (body) gsap.set(body, { clipPath: CLIP_OPEN, opacity: 1 });
}

/**
 * Panels no longer rotate on their own — they stay flat and straight at
 * their rest position for as long as they're mounted. Kept as a hook (it
 * returns no tween) so callers don't need to change.
 */
export function startAmbient(_panel: HTMLElement, _id: SatelliteId): gsap.core.Tween | null {
  return null;
}

/**
 * Panel entrance. The body reveals from its own centre outward, slow-fast-
 * slow. Runs inside the panel's applied 3D tilt.
 */
export function buildPanelEntrance(panel: HTMLElement, tl: gsap.core.Timeline, position: gsap.Position) {
  const { body } = parts(panel);
  const sub = gsap.timeline();
  if (body) {
    sub
      .to(body, { clipPath: CLIP_OPEN, duration: BODY_DUR, ease: "power2.inOut" }, BODY_AT)
      .to(
        body,
        { opacity: 1, duration: BODY_DUR * (BODY_OPACITY_TO - BODY_OPACITY_FROM), ease: "power1.inOut" },
        BODY_AT + BODY_DUR * BODY_OPACITY_FROM,
      );
  }
  tl.add(sub, position);
  return tl;
}
