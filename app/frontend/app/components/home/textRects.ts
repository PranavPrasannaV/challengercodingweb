/**
 * Text inside each scene's base layer, as rects relative to the base's
 * top-left corner (canvas px). MEASURED from the rendered DOM — every
 * non-empty text node's bounding box, taken with the timeline parked
 * mid-scene — not guessed. Regenerate whenever a base layer's markup or
 * type sizes change (see the note in stage.ts).
 */
export interface TextRect { x: number; y: number; w: number; h: number; t: string }

export const TEXT_RECTS: Record<"python" | "lesson", TextRect[]> = {
  // EditorChrome now shows the real Playground page (heading, description,
  // language tabs) rather than a fake file tree — a handful of short lines
  // near the top-left, easily cleared by the satellites' existing corner
  // placements. Approximate rather than DOM-measured (see the note above);
  // regenerate if satellites ever start reading close to this scene's text.
  python: [
    { x: 20, y: 45, w: 110, h: 22, t: "Playground" },
    { x: 20, y: 70, w: 220, h: 30, t: "Write and run code" },
    { x: 20, y: 105, w: 130, h: 16, t: "Python Java" },
  ],
  lesson: [
    { x: 69, y: 15, w: 200, h: 13, t: "challengercoding.o" },
    { x: 17, y: 55, w: 34, h: 14, t: "Courses" },
    { x: 55, y: 55, w: 3, h: 14, t: "/" },
    { x: 64, y: 55, w: 75, h: 14, t: "Java Programming" },
    { x: 145, y: 55, w: 3, h: 14, t: "/" },
    { x: 154, y: 55, w: 29, h: 14, t: "Week 1" },
    { x: 17, y: 79, w: 33, h: 13, t: "7 STEPS" },
    { x: 26, y: 105, w: 6, h: 10, t: "✓" },
    { x: 41, y: 103, w: 71, h: 14, t: "Your first program" },
    { x: 26, y: 129, w: 6, h: 10, t: "✓" },
    { x: 41, y: 127, w: 68, h: 14, t: "Classes and main" },
    { x: 28, y: 154, w: 4, h: 10, t: "3" },
    { x: 42, y: 152, w: 36, h: 14, t: "Variables" },
    { x: 28, y: 179, w: 4, h: 10, t: "4" },
    { x: 42, y: 177, w: 70, h: 14, t: "Types and casting" },
    { x: 28, y: 203, w: 4, h: 10, t: "5" },
    { x: 42, y: 201, w: 55, h: 14, t: "Reading input" },
    { x: 28, y: 228, w: 4, h: 10, t: "6" },
    { x: 42, y: 226, w: 32, h: 14, t: "Practice" },
    { x: 28, y: 253, w: 4, h: 10, t: "7" },
    { x: 42, y: 251, w: 48, h: 14, t: "Quick check" },
    { x: 190, y: 79, w: 20, h: 14, t: "Step" },
    { x: 210, y: 79, w: 5, h: 14, t: "3" },
    { x: 215, y: 79, w: 16, h: 14, t: "of 7" },
    { x: 421, y: 78, w: 104, h: 14, t: "Next: Types and ca" },
    { x: 190, y: 80, w: 137, h: 35, t: "Java · Week 1" },
    { x: 191, y: 121, w: 318, h: 36, t: "Every Java program" },
    { x: 202, y: 183, w: 296, h: 87, t: "public class Main " },
    { x: 191, y: 303, w: 94, h: 34, t: "Variables" },
    { x: 191, y: 344, w: 309, h: 17, t: "A variable stores " },
    { x: 202, y: 386, w: 268, h: 51, t: "int age = 12;" },
    { x: 191, y: 462, w: 256, h: 36, t: "Try changing the n" },
  ],
};
