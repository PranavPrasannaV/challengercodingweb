/**
 * The hero demo's stage geometry.
 *
 * Everything is laid out on a fixed design canvas (STAGE_W × STAGE_H px) that
 * .hero-stage-canvas scales as one unit via --stage-scale (set from a
 * ResizeObserver in HeroDemo). Panels are placed by %-of-canvas centre
 * coordinates here, never viewport px, so the composition — centred hero
 * object, satellites at the corners/edges — holds its shape at every width.
 *
 * The canvas is wider than the centre objects (which are fixed-px, not
 * %-of-canvas) so satellites have room to sit BESIDE the terminal / stage
 * card rather than crowding into it. The 7/12 hero column is ~620px at the
 * widest breakpoint, so on desktop the canvas renders at roughly 0.9×.
 */
export const STAGE_W = 660;
export const STAGE_H = 580;

/** Never upscale past this; on very wide screens the demo holds its size. */
export const STAGE_MAX_W = 700;

import { TEXT_RECTS } from "./textRects";

export type SceneId = "python" | "lesson" | "scratch";

export interface Satellite {
  scene: SceneId;
  /** Centre of the panel, % of stage width / height. */
  x: number;
  y: number;
  /** Rendered size on the design canvas, px — used by the overlap check. */
  w: number;
  h: number;
  /** Rest tilt. All three stay at 0 — panels sit flat and square to the
   *  camera, with no independent spin of their own. */
  restRotateX: number;
  restRotateY: number;
  restRotateZ: number;
  /** translateZ, px on the design canvas, relative to the base layer at 0:
   *  positive = in front of the IDE, negative = behind it. Also weights the
   *  parallax response (closer panels swing further with stage tilt) and
   *  decides entrance order — far panels build first (see entranceOrder). */
  depth: number;
  /** Hidden below the `sm` breakpoint so a dense scene isn't reflowed. */
  dropOnSmall?: boolean;
}

/**
 * The base layer (IDE / browser / Scratch editor) is one more object in the
 * scene's 3D space, at translateZ(0), inset from the canvas edges so panels
 * BEHIND it (negative depth) can stick out past its edges. Mirrored by
 * .hero-base { inset } in globals.css.
 */
export const BASE_INSET = { x: 9, y: 13 } as const; // % of canvas
export const BASE: { x: number; y: number; w: number; h: number } = {
  x: (BASE_INSET.x / 100) * STAGE_W,
  y: (BASE_INSET.y / 100) * STAGE_H,
  w: STAGE_W * (1 - (2 * BASE_INSET.x) / 100),
  h: STAGE_H * (1 - (2 * BASE_INSET.y) / 100),
};

/**
 * Text the base layers actually render, measured from the DOM (see
 * textRects.ts). Everything below the chrome bar (tabs / URL bar, the top
 * CHROME_H px of the base) counts as important: a front panel must not
 * block any of it. Regenerate the measurements whenever a base layer's
 * markup changes: park the timeline, walk the base's text nodes, record
 * each bounding box in canvas px relative to the base's top-left.
 */
export const CHROME_H = 40;
export const importantText = (scene: SceneId): Rect[] =>
  TEXT_RECTS[scene]
    .filter((r) => r.y >= CHROME_H)
    .map((r) => ({ x: BASE.x + r.x, y: BASE.y + r.y, w: r.w, h: r.h, t: r.t }));

/** Each scene's central hero object, as a rect on the canvas (px). Panels
 *  are tucked just outside these silhouettes, never over readable content. */
export const FOCAL: Partial<Record<SceneId, { x: number; y: number; w: number; h: number }>> = {
  // Terminal: 360px wide, centred; ~236px tall once the canned output is open.
  python: { x: STAGE_W / 2 - 180, y: 172, w: 360, h: 236 },
  // Mascot stage card: 320px wide at (54%, 44%); 176px stage + 30px footer.
  scratch: { x: STAGE_W * 0.54 - 160, y: 152, w: 320, h: 206 },
};

/**
 * Depth is signed: positive panels float in front of the base layer,
 * negative ones sit behind it and show only where they stick out past its
 * edges (or through the editor base's 62% opacity). Roughly half and half
 * per scene, so a page turn sweeps panels from behind the base to in front
 * of it and depth resolves itself through the rotation. Behind-panels are
 * pushed to the canvas edges so enough of them peeks out to read.
 */
export const SATELLITES = {
  // ------------------------------------------------------------ Scene 1
  activity: {
    scene: "python", x: 17, y: 8.5, w: 196, h: 46,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: 60, dropOnSmall: true,
  },
  courseCard: {
    scene: "python", x: 84, y: 18.5, w: 188, h: 100,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: 44,
  },
  enroll: {
    scene: "python", x: 41, y: 75.5, w: 108, h: 36,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: 72,
  },
  tests: {
    scene: "python", x: 14, y: 92, w: 196, h: 100,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: -28,
  },
  syllabus: {
    scene: "python", x: 87, y: 93, w: 208, h: 104,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: -40,
  },

  // ------------------------------------------------------------ Scene 2
  progress: {
    scene: "lesson", x: 16, y: 8.5, w: 184, h: 78,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: 56,
  },
  streak: {
    scene: "lesson", x: 86, y: 10.5, w: 150, h: 78,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: 52,
  },
  quiz: {
    scene: "lesson", x: 14, y: 92, w: 172, h: 84,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: -44, dropOnSmall: true,
  },
  resume: {
    scene: "lesson", x: 86, y: 91.5, w: 168, h: 58,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: -36,
  },

  // ------------------------------------------------------------ Scene 3
  activity3: {
    scene: "scratch", x: 17, y: 8.5, w: 196, h: 46,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: 56, dropOnSmall: true,
  },
  sprite: {
    scene: "scratch", x: 89, y: 10.5, w: 160, h: 90,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: -44,
  },
  blocks: {
    scene: "scratch", x: 18, y: 79, w: 168, h: 100,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: 60,
  },
  enrollNote: {
    scene: "scratch", x: 85, y: 92, w: 216, h: 92,
    restRotateX: 0, restRotateY: 0, restRotateZ: 0, depth: -36,
  },
} satisfies Record<string, Satellite>;

export type SatelliteId = keyof typeof SATELLITES;

export const satellitesFor = (scene: SceneId): SatelliteId[] =>
  (Object.keys(SATELLITES) as SatelliteId[]).filter((k) => SATELLITES[k].scene === scene);

/**
 * Entrance order is depth order: the panel furthest from the camera (lowest
 * translateZ) builds first, the nearest last, so a nearer panel never
 * animates into existence over a farther one that hasn't settled. Each
 * panel starts ENTRANCE_STAGGER after the one behind it.
 */
export const ENTRANCE_STAGGER = 0.26;
export const entranceOrder = (scene: SceneId): SatelliteId[] =>
  [...satellitesFor(scene)].sort((a, b) => SATELLITES[a].depth - SATELLITES[b].depth);
export const entranceAt = (id: SatelliteId): number =>
  entranceOrder(SATELLITES[id].scene).indexOf(id) * ENTRANCE_STAGGER;

/* ------------------------------------------------------------------------
   Overlap check. Run with
     npx tsx app/components/home/stage.ts
   Limits: no two panels overlap by more than 15% of the smaller panel's
   area; no panel covers more than 15% of its own area of the scene's focal
   object; a FRONT panel covers no more than FRONT_COVER_LIMIT of its own
   area of the base layer's readable content (behind-panels are occluded by
   the base, so that check doesn't apply to them); and every behind-panel
   must have at least PEEK_MIN of its area outside the base, or it's
   invisible.

   Each panel's footprint is the axis-aligned bounds of its four corners
   AFTER the panel's real transform: rotateX/rotateY/rotateZ about its
   centre (worst case — rest tilt plus the ambient oscillation amplitude),
   translateZ(depth), then the stage's perspective projection about the
   canvas centre. A tilted panel occupies more of the canvas than its flat
   width × height, so the flat rect would pass pairs that visibly touch.
   ------------------------------------------------------------------------ */
export const OVERLAP_LIMIT = 0.15;
/** A front panel may cover at most this fraction of any one important
 *  text rect (a word or line) — i.e. it must not block text. */
export const TEXT_COVER_LIMIT = 0.2;
/** A behind-panel must keep at least this much of its area clear of the
 *  base layer (and of the focal object) at rest, or it's effectively hidden. */
export const PEEK_MIN = 0.55;
/** How far a panel may hang past the canvas edge (into the frame padding). */
export const SPILL_MAX = 14;
/** Front panels sit as snug to the focal object as the text rule allows;
 *  the CLI reports the gap so it can be tightened by hand. */
/** Must match .hero-stage { perspective } in globals.css. */
export const STAGE_PERSPECTIVE = 1100;
/** ± swing of the per-panel ambient oscillation on rotateX/rotateZ (deg). */
export const AMBIENT_AMP = 1.5;

interface Rect { x: number; y: number; w: number; h: number; t?: string }
type V3 = [number, number, number];

const rad = (deg: number) => (deg * Math.PI) / 180;
const rotX = ([x, y, z]: V3, a: number): V3 => [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
const rotY = ([x, y, z]: V3, a: number): V3 => [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)];
const rotZ = ([x, y, z]: V3, a: number): V3 => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a), z];
/** Push a tilt away from zero by the ambient amplitude (worst-case footprint). */
const worst = (deg: number, amp: number) => deg + Math.sign(deg || 1) * amp;

/** The panel's four corners projected onto the canvas plane, canvas px. */
export function projectedCorners(s: Satellite): [number, number][] {
  const cx = (s.x / 100) * STAGE_W;
  const cy = (s.y / 100) * STAGE_H;
  const ax = rad(worst(s.restRotateX, AMBIENT_AMP));
  const ay = rad(s.restRotateY);
  const az = rad(worst(s.restRotateZ, AMBIENT_AMP));
  const corners: V3[] = [
    [-s.w / 2, -s.h / 2, 0],
    [s.w / 2, -s.h / 2, 0],
    [s.w / 2, s.h / 2, 0],
    [-s.w / 2, s.h / 2, 0],
  ];
  return corners.map((c) => {
    // CSS `rotateX(a) rotateY(b) rotateZ(c)` applies Z first to the point.
    const [x, y, z] = rotX(rotY(rotZ(c, az), ay), ax);
    const px = cx + x;
    const py = cy + y;
    const pz = z + s.depth;
    // Perspective about the canvas centre (perspective-origin 50% 50%).
    const k = STAGE_PERSPECTIVE / (STAGE_PERSPECTIVE - pz);
    return [STAGE_W / 2 + (px - STAGE_W / 2) * k, STAGE_H / 2 + (py - STAGE_H / 2) * k];
  });
}

/** Axis-aligned bounds of the projected corners. */
const rectOf = (s: Satellite): Rect => {
  const pts = projectedCorners(s);
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, w: Math.max(...xs) - x, h: Math.max(...ys) - y };
};

const intersection = (a: Rect, b: Rect) => {
  const w = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
  const h = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
  return w > 0 && h > 0 ? w * h : 0;
};

export interface OverlapIssue { a: string; b: string; ratio: number }

/** Fraction of a behind-panel's rect that nothing in front covers at rest:
 *  outside the base layer AND outside the focal object (which sits at z 0). */
const peek = (r: Rect, scene: SceneId) => {
  const focal = FOCAL[scene];
  const covered = intersection(r, BASE) + (focal ? intersection(r, focal) - intersection(r, intersection2(focal, BASE)) : 0);
  return 1 - covered / (r.w * r.h);
};
const intersection2 = (a: Rect, b: Rect): Rect => {
  const x = Math.max(a.x, b.x);
  const y = Math.max(a.y, b.y);
  return { x, y, w: Math.max(0, Math.min(a.x + a.w, b.x + b.w) - x), h: Math.max(0, Math.min(a.y + a.h, b.y + b.h) - y) };
};

/** How far (px) a rect hangs past the nearest canvas edge. */
const spill = (r: Rect) => Math.max(0, -r.x, -r.y, r.x + r.w - STAGE_W, r.y + r.h - STAGE_H);

/** Edge-to-edge distance between two rects (0 if they touch or overlap). */
const gap = (a: Rect, b: Rect) => {
  const dx = Math.max(0, Math.max(a.x, b.x) - Math.min(a.x + a.w, b.x + b.w));
  const dy = Math.max(0, Math.max(a.y, b.y) - Math.min(a.y + a.h, b.y + b.h));
  return Math.hypot(dx, dy);
};

export function checkOverlaps(): OverlapIssue[] {
  const issues: OverlapIssue[] = [];
  const scenes: SceneId[] = ["python", "lesson", "scratch"];
  for (const scene of scenes) {
    const ids = satellitesFor(scene);
    for (let i = 0; i < ids.length; i++) {
      const A = SATELLITES[ids[i]] as Satellite;
      const ra = rectOf(A);
      const focal = FOCAL[scene];
      if (focal) {
        const ratio = intersection(ra, focal) / (ra.w * ra.h);
        if (ratio > OVERLAP_LIMIT) issues.push({ a: ids[i], b: `${scene} focal`, ratio });
      }
      if (A.depth >= 0) {
        for (const t of importantText(scene)) {
          const ratio = intersection(ra, t) / (t.w * t.h);
          if (ratio > TEXT_COVER_LIMIT) issues.push({ a: ids[i], b: `text "${t.t}"`, ratio });
        }
      } else {
        const clear = peek(ra, scene);
        if (clear < PEEK_MIN) issues.push({ a: ids[i], b: `${scene} base (hidden behind)`, ratio: clear });
      }
      const sp = spill(ra);
      if (sp > SPILL_MAX) issues.push({ a: ids[i], b: "canvas edge (spill px/100)", ratio: sp / 100 });
      for (let j = i + 1; j < ids.length; j++) {
        const B = SATELLITES[ids[j]] as Satellite;
        const rb = rectOf(B);
        const ratio = intersection(ra, rb) / Math.min(ra.w * ra.h, rb.w * rb.h);
        if (ratio > OVERLAP_LIMIT) issues.push({ a: ids[i], b: ids[j], ratio });
      }
    }
  }
  return issues;
}

// CLI entry: report every pair, flag the ones over the limit.
if (typeof process !== "undefined" && process.argv?.[1]?.endsWith("stage.ts")) {
  const scenes: SceneId[] = ["python", "lesson", "scratch"];
  for (const scene of scenes) {
    const ids = satellitesFor(scene);
    const focal = FOCAL[scene];
    console.log(`\n${scene}`);
    for (const id of ids) {
      const sat = SATELLITES[id] as Satellite;
      const r = rectOf(sat);
      const grow = ((r.w * r.h) / (sat.w * sat.h) - 1) * 100;
      const sp = spill(r);
      const off = sp > 0 ? `, spills ${sp.toFixed(0)}px` : "";
      const focal = FOCAL[scene];
      const gFocal = focal && sat.depth >= 0 ? `, ${gap(r, focal).toFixed(0)}px from focal` : "";
      const nearest = Math.min(...ids.filter((o) => o !== id).map((o) => gap(r, rectOf(SATELLITES[o] as Satellite))));
      const blocked = importantText(scene).filter((t) => intersection(r, t) / (t.w * t.h) > TEXT_COVER_LIMIT).map((t) => t.t);
      const layer =
        sat.depth >= 0
          ? `front z${sat.depth}, blocks ${blocked.length ? blocked.map((t) => `"${t}"`).join(" ") : "no text"}`
          : `behind z${sat.depth}, ${(peek(r, scene) * 100).toFixed(0)}% clear`;
      console.log(
        `  ${id}: ${sat.w}×${sat.h} → ${r.w.toFixed(0)}×${r.h.toFixed(0)} (+${grow.toFixed(0)}%) — ${layer}${gFocal}, nearest panel ${nearest.toFixed(0)}px${off}`,
      );
    }
    for (let i = 0; i < ids.length; i++) {
      const ra = rectOf(SATELLITES[ids[i]] as Satellite);
      if (focal) {
        const r = intersection(ra, focal) / (ra.w * ra.h);
        if (r > 0) console.log(`  ${ids[i]} × focal: ${(r * 100).toFixed(1)}%${r > OVERLAP_LIMIT ? "  <-- OVER" : ""}`);
      }
      for (let j = i + 1; j < ids.length; j++) {
        const rb = rectOf(SATELLITES[ids[j]] as Satellite);
        const r = intersection(ra, rb) / Math.min(ra.w * ra.h, rb.w * rb.h);
        if (r > 0) console.log(`  ${ids[i]} × ${ids[j]}: ${(r * 100).toFixed(1)}%${r > OVERLAP_LIMIT ? "  <-- OVER" : ""}`);
      }
    }
  }
  const issues = checkOverlaps();
  console.log(issues.length ? `\n${issues.length} over the ${OVERLAP_LIMIT * 100}% limit` : `\nAll pairs within the ${OVERLAP_LIMIT * 100}% limit`);
}
