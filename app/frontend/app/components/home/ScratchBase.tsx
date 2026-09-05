/**
 * Scene 3's full-bleed base layer: a block-editor layout filling the stage —
 * tab bar, block palette with category colours, and a dotted scripting
 * area. The mascot's stage (the focal centre) and the snapping blocks are
 * separate objects HeroDemo places on top; this is the room they sit in.
 *
 * Original visuals in the spirit of block editors — not Scratch's own
 * assets or its cat.
 */

const CATEGORIES = [
  { name: "Motion", color: "#4C97FF" },
  { name: "Looks", color: "#9966FF" },
  { name: "Sound", color: "#CF63CF" },
  { name: "Events", color: "#FFBF00" },
  { name: "Control", color: "#FFAB19" },
  { name: "Sensing", color: "#5CB1D6" },
  { name: "Operators", color: "#59C059" },
  { name: "Variables", color: "#FF8C1A" },
];

// Palette blocks (widths as % of the column) — Motion is the open category.
const PALETTE = [
  { w: 78, color: "#4C97FF" },
  { w: 66, color: "#4C97FF" },
  { w: 84, color: "#4C97FF" },
  { w: 58, color: "#4C97FF" },
  { w: 72, color: "#4C97FF" },
  { w: 62, color: "#4C97FF" },
];

export default function ScratchBase() {
  return (
    <div className="hero-base flex flex-col overflow-hidden rounded-xl border border-home-rule bg-white" aria-hidden="true">
      {/* tab bar */}
      <div className="flex items-center gap-1 border-b border-home-rule bg-home-bg px-3 py-1.5 font-sans text-[10px]">
        <span className="mr-2 inline-block h-3.5 w-3.5 rounded-[4px] bg-home-teal" />
        <span className="rounded-md bg-white px-2.5 py-1 font-semibold text-home-ink shadow-[0_1px_0_rgb(20_23_28_/_0.06)]">Code</span>
        <span className="px-2.5 py-1 text-home-ink-soft">Costumes</span>
        <span className="px-2.5 py-1 text-home-ink-soft">Sounds</span>
        <span className="ml-auto inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-[#59C059]" />
          <span className="inline-block h-3 w-3 rounded-[3px] bg-[#E0574A]" />
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* category rail */}
        <div className="w-[15%] shrink-0 border-r border-home-rule bg-home-bg/70 py-2 font-sans text-[7.5px] text-home-ink-soft">
          {CATEGORIES.map((c, i) => (
            <div key={c.name} className={`flex flex-col items-center gap-[2px] py-[5px] ${i === 0 ? "text-home-ink" : ""}`}>
              <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: c.color, opacity: i === 0 ? 1 : 0.55 }} />
              <span className="truncate">{c.name}</span>
            </div>
          ))}
        </div>

        {/* palette */}
        <div className="w-[26%] shrink-0 border-r border-home-rule bg-white p-2">
          <p className="mb-2 font-sans text-[9px] font-semibold text-home-ink">Motion</p>
          <div className="space-y-2">
            {PALETTE.map((b, i) => (
              <div key={i} className="flex items-center gap-1 rounded-[5px] px-1.5 py-1" style={{ width: `${b.w}%`, backgroundColor: b.color, opacity: 0.55 }}>
                <span className="h-1.5 w-4 rounded-full bg-white/70" />
                <span className="h-2 w-3 rounded-full bg-white/95" />
              </div>
            ))}
          </div>
        </div>

        {/* scripting area — dotted grid */}
        <div className="hero-scripts relative min-w-0 flex-1" />
      </div>
    </div>
  );
}
