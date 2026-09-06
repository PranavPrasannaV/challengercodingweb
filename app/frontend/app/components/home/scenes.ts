/**
 * The hero demo's script. One master GSAP timeline plays these three scenes
 * in order; `duration` is the on-screen budget for each (sub-animation time
 * + a hold beat) so pacing can be retuned here without hunting through the
 * timeline builder for hardcoded delays.
 *
 * Budgets are sized so that, after a scene's back-to-front panel entrance
 * (~1.6s: 5 panels × 0.26s stagger + a 0.53s reveal each) and its own
 * action beat, there's still a comfortable ~2.5–4s pause with everything
 * settled before the whole scene is swept away by the next page-turn.
 */
export interface SceneConfig {
  id: "terminal" | "lesson";
  duration: number;
}

export const SCENES: SceneConfig[] = [
  { id: "terminal", duration: 7000 },
  { id: "lesson", duration: 6800 },
];

/** The coda: quiet product screenshots after Scene 3 (see CodaSlides). */
export const CODA = { slideIn: 0.4, hold: 2.0, crossfade: 0.3 } as const;

export const STARTER_CODE = [
  'name = "coder"',
  'print(f"hello, {name}!")',
  'print("let\'s build something.")',
].join("\n");

export const CANNED_OUTPUT_LINES = ["hello, coder!", "let's build something."];
