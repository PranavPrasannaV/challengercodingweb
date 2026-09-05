import Mascot from "./Mascot";

/**
 * A quiet, looping preview for the "Our Offerings" section — a sprite
 * drifting across the stage while two blocks periodically snap together.
 * Purely decorative (the block's own text carries the course information),
 * so it's hidden from assistive tech rather than narrated.
 */
export default function ScratchOfferingDemo() {
  return (
    <div
      aria-hidden="true"
      className="relative h-64 overflow-hidden rounded-xl border border-home-rule bg-white shadow-[0_1px_3px_rgb(20_23_28_/_0.06)] sm:h-72"
    >
      <div className="flex items-center justify-between border-b border-home-rule bg-home-bg px-4 py-2">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
        </span>
        <span className="font-mono text-[10px] text-home-ink-soft">Stage · 480 × 360</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-9" style={{ backgroundColor: "var(--color-home-stage)" }}>
        <div
          className="absolute inset-x-0 bottom-0 h-11"
          style={{ backgroundColor: "var(--color-home-stage-floor)" }}
        />
        <div className="offering-scratch-sprite absolute bottom-12 left-10">
          <Mascot className="h-14 w-14" />
        </div>
      </div>

      <div className="absolute bottom-5 right-5 flex flex-col items-end gap-1.5">
        <div className="flex items-center gap-1.5 rounded-md bg-[#FFBF00] px-2.5 py-1.5 font-sans text-[10px] font-semibold text-home-ink shadow-sm">
          when 🏳 clicked
        </div>
        <div className="offering-scratch-block-2 flex items-center gap-1.5 rounded-md bg-[#4C97FF] px-2.5 py-1.5 font-sans text-[10px] font-semibold text-white shadow-sm">
          move 10 steps
        </div>
      </div>
    </div>
  );
}
