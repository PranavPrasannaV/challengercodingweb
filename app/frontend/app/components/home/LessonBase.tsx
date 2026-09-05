import type { Course } from "@/src/data/courses";

/**
 * Scene 2's full-bleed base layer: the lesson page filling the stage edge
 * to edge, mirroring the real /lessons layout — breadcrumb, step-list
 * sidebar, "Step N of M" bar, then the content column, which the timeline
 * auto-scrolls. `children` is the real Blocks renderer output; nothing in
 * the content column is mocked.
 */

const STEPS = [
  { title: "Your first program", state: "done" },
  { title: "Classes and main", state: "done" },
  { title: "Variables", state: "current" },
  { title: "Types and casting", state: "todo" },
  { title: "Reading input", state: "todo" },
  { title: "Practice", state: "todo" },
  { title: "Quick check", state: "todo" },
] as const;

export default function LessonBase({ course, children }: { course: Course; children: React.ReactNode }) {
  return (
    <div className="hero-base flex flex-col overflow-hidden rounded-xl border border-home-rule bg-white" aria-hidden="true">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-home-rule bg-home-bg px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
        </div>
        <div className="flex-1 truncate rounded-full bg-white px-3 py-1 font-mono text-[9.5px] text-home-ink-soft">
          challengercoding.org/lessons/java/1
        </div>
      </div>

      <div className="px-4 pt-3 font-sans text-[9.5px] text-home-ink-soft">
        Courses <span className="mx-1">/</span> {course.title} <span className="mx-1">/</span>{" "}
        <span className="font-semibold text-home-ink">Week 1</span>
      </div>

      <div className="flex min-h-0 flex-1 gap-4 px-4 pb-3 pt-2">
        {/* step list, like the real page's sticky aside */}
        <aside className="w-[31%] shrink-0 font-sans">
          <p className="mb-1.5 text-[9px] font-semibold tracking-wide text-home-ink-soft">7 STEPS</p>
          <ol className="space-y-[3px]">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className={`flex items-center gap-1.5 rounded-md px-1.5 py-[3px] text-[9.5px] ${
                  s.state === "current" ? "bg-home-teal-tint text-home-teal" : s.state === "done" ? "text-home-ink" : "text-home-ink-soft"
                }`}
              >
                <span
                  className={`inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full text-[7px] ${
                    s.state === "done"
                      ? "bg-home-teal text-white"
                      : s.state === "current"
                        ? "border border-home-teal text-home-teal"
                        : "border border-home-ink/20"
                  }`}
                >
                  {s.state === "done" ? "✓" : i + 1}
                </span>
                <span className="truncate">{s.title}</span>
              </li>
            ))}
          </ol>
        </aside>

        {/* content column */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-2 flex items-center justify-between border-b border-home-rule pb-1.5 font-sans text-[9.5px] text-home-ink-soft">
            <span>
              Step <strong className="font-semibold text-home-ink">3</strong> of 7
            </span>
            <span className="text-home-teal">Next: Types and casting →</span>
          </div>
          <div data-hero="scrollFrame" className="relative min-h-0 flex-1 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
