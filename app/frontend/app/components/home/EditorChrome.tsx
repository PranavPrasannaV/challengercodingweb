/**
 * Scene 1's full-bleed base layer: a mock code-editor filling the whole
 * stage behind the centred terminal — file tree with the real lesson
 * filenames, a second inactive tab, faint code, a status bar. Rendered at
 * reduced opacity/saturation (see .hero-base-editor) so the terminal stays
 * the focal point; this is set dressing, not a second focal object.
 */

const TREE: { name: string; depth: number; kind: "dir" | "file"; active?: boolean }[] = [
  { name: "lessons", depth: 0, kind: "dir" },
  { name: "week1.py", depth: 1, kind: "file", active: true },
  { name: "week2.py", depth: 1, kind: "file" },
  { name: "week3.py", depth: 1, kind: "file" },
  { name: "functions.py", depth: 1, kind: "file" },
  { name: "loops.py", depth: 1, kind: "file" },
  { name: "tests", depth: 0, kind: "dir" },
  { name: "test_week1.py", depth: 1, kind: "file" },
  { name: "test_functions.py", depth: 1, kind: "file" },
  { name: "README.md", depth: 0, kind: "file" },
];

// functions.py, the inactive tab — real-looking Python, not lorem.
const CODE: { t: string; c?: "kw" | "fn" | "str" | "cm" }[][] = [
  [{ t: "def ", c: "kw" }, { t: "greet", c: "fn" }, { t: "(name):" }],
  [{ t: "    ", }, { t: "return ", c: "kw" }, { t: 'f"hello, {name}!"', c: "str" }],
  [],
  [{ t: "def ", c: "kw" }, { t: "count_vowels", c: "fn" }, { t: "(word):" }],
  [{ t: "    total = 0" }],
  [{ t: "    " }, { t: "for ", c: "kw" }, { t: "ch " }, { t: "in ", c: "kw" }, { t: "word:" }],
  [{ t: "        " }, { t: "if ", c: "kw" }, { t: "ch " }, { t: "in ", c: "kw" }, { t: '"aeiou"', c: "str" }, { t: ":" }],
  [{ t: "            total += 1" }],
  [{ t: "    " }, { t: "return ", c: "kw" }, { t: "total" }],
  [],
  [{ t: "# Week 4 · try it with your own name", c: "cm" }],
  [{ t: "print", c: "fn" }, { t: "(greet(" }, { t: '"Sarah"', c: "str" }, { t: "))" }],
  [{ t: "print", c: "fn" }, { t: "(count_vowels(" }, { t: '"challenger"', c: "str" }, { t: "))" }],
];

const tone = { kw: "text-home-teal", fn: "text-home-ink", str: "text-home-ink-soft", cm: "text-home-ink/40" } as const;

export default function EditorChrome() {
  return (
    <div className="hero-base hero-base-editor flex flex-col overflow-hidden rounded-xl border border-home-rule bg-white" aria-hidden="true">
      {/* tabs */}
      <div className="flex items-stretch border-b border-home-rule bg-home-bg">
        <div className="flex items-center gap-1.5 px-3" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
        </div>
        <div className="flex items-center gap-2 border-x border-home-rule bg-white px-3 py-1.5 font-mono text-[10px] text-home-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-home-teal" />
          week1.py
          <span className="text-home-ink/30">×</span>
        </div>
        <div className="flex items-center px-3 py-1.5 font-mono text-[10px] text-home-ink-soft">functions.py</div>
        <div className="flex items-center px-3 py-1.5 font-mono text-[10px] text-home-ink-soft">test_week1.py</div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* file tree */}
        <div className="w-[31%] shrink-0 border-r border-home-rule bg-home-bg/60 py-2 font-mono text-[10px]">
          <p className="px-3 pb-1.5 text-[9px] font-semibold tracking-wide text-home-ink-soft">EXPLORER</p>
          {TREE.map((n) => (
            <div
              key={n.name}
              className={`flex items-center gap-1.5 py-[3px] pr-2 ${
                n.active ? "bg-home-teal-tint text-home-teal" : n.kind === "dir" ? "text-home-ink" : "text-home-ink-soft"
              }`}
              style={{ paddingLeft: 12 + n.depth * 12 }}
            >
              <span className={`inline-block h-2 w-2 rounded-[2px] ${n.kind === "dir" ? "bg-home-ink/25" : "border border-current/40"}`} />
              <span className="truncate">{n.name}</span>
            </div>
          ))}
        </div>

        {/* code */}
        <div className="relative min-w-0 flex-1 overflow-hidden bg-white">
          <div className="flex py-3 font-mono text-[10.5px] leading-[1.7]">
            <div className="select-none pl-3 pr-3 text-right text-home-ink/25">
              {CODE.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="min-w-0 flex-1 whitespace-pre">
              {CODE.map((line, i) => (
                <div key={i}>
                  {line.length === 0 ? " " : line.map((seg, j) => (
                    <span key={j} className={seg.c ? tone[seg.c] : "text-home-ink/80"}>
                      {seg.t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* right-hand minimap */}
          <div className="absolute inset-y-3 right-2 w-8 space-y-[3px] opacity-60">
            {CODE.map((line, i) => (
              <div key={i} className="h-[2px] rounded-full bg-home-ink/15" style={{ width: `${Math.min(100, 20 + line.reduce((a, s) => a + s.t.length, 0) * 2.4)}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* status bar */}
      <div className="flex items-center justify-between border-t border-home-rule bg-home-bg px-3 py-1 font-mono text-[9px] text-home-ink-soft">
        <span>Python 3.12.4 · UTF-8 · LF</span>
        <span>Ln 3, Col 31 · <span className="text-home-teal">✓ 12/13 tests</span></span>
      </div>
    </div>
  );
}
