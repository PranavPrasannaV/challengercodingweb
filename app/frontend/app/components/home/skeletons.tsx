/**
 * Skeleton/abstract cards for concepts that don't map to one literal screen
 * in the app — grey bars for text, plain circles for avatars, a coloured
 * status dot with a specific label. The label carries the realism ("Week 4
 * · Functions · 92% passed"), the bars stand in for everything around it.
 */

export function Bar({ w, h = 6, tone = "mid" }: { w: number | string; h?: number; tone?: "mid" | "soft" | "teal" }) {
  const bg =
    tone === "teal" ? "bg-home-teal/60" : tone === "soft" ? "bg-home-ink/[0.06]" : "bg-home-ink/[0.11]";
  return <span className={`block rounded-full ${bg}`} style={{ width: w, height: h }} aria-hidden="true" />;
}

export function Dot({ tone = "teal", size = 7 }: { tone?: "teal" | "amber" | "ink"; size?: number }) {
  const bg = tone === "amber" ? "bg-amber-400" : tone === "ink" ? "bg-home-ink/40" : "bg-home-teal";
  return <span className={`inline-block shrink-0 rounded-full ${bg}`} style={{ width: size, height: size }} aria-hidden="true" />;
}

export function Avatar({ size = 18 }: { size?: number }) {
  return <span className="inline-block shrink-0 rounded-full bg-home-ink/[0.12]" style={{ width: size, height: size }} aria-hidden="true" />;
}

export function SkeletonCard({
  width,
  title,
  status,
  statusTone = "teal",
  children,
}: {
  width: number;
  title?: string;
  status?: string;
  statusTone?: "teal" | "amber" | "ink";
  children?: React.ReactNode;
}) {
  return (
    <div
      className="border border-home-rule bg-white px-3 py-2.5 font-sans"
      style={{ width }}
      aria-hidden="true"
    >
      {(title || status) && (
        <div className="mb-2 flex items-center justify-between gap-2">
          {title && <span className="truncate text-[10px] font-semibold text-home-ink">{title}</span>}
          {status && (
            <span className="flex shrink-0 items-center gap-1 text-[9px] font-semibold tracking-wide text-home-ink-soft">
              {status}
              <Dot tone={statusTone} size={6} />
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- Cards */

export function ActivityCard({ text, when }: { text: string; when: string }) {
  return (
    <SkeletonCard width={196}>
      <div className="flex items-start gap-2">
        <Avatar />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] leading-snug text-home-ink">{text}</p>
          <p className="mt-0.5 text-[9px] text-home-ink-soft">{when}</p>
        </div>
      </div>
    </SkeletonCard>
  );
}

export function TestsCard() {
  return (
    <SkeletonCard width={196} title="Week 4 · Functions" status="TESTS PASSED">
      <p className="mb-2 font-mono text-[9px] text-home-ink-soft">12 / 13 · 92% passed</p>
      <div className="space-y-1.5">
        {[
          [88, true], [64, true], [76, true], [52, false],
        ].map(([w, ok], i) => (
          <div key={i} className="flex items-center gap-2">
            <Dot tone={ok ? "teal" : "amber"} size={5} />
            <Bar w={`${w}%`} h={5} tone={ok ? "mid" : "soft"} />
          </div>
        ))}
      </div>
    </SkeletonCard>
  );
}

export function ProgressCard() {
  return (
    <SkeletonCard width={184} title="Java · Week 1" status="STEP 3 OF 7">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-home-ink/[0.07]">
        <div className="h-full rounded-full bg-home-teal" style={{ width: "43%" }} />
      </div>
      <div className="mt-2 space-y-1.5">
        <Bar w="72%" h={5} />
        <Bar w="48%" h={5} tone="soft" />
      </div>
    </SkeletonCard>
  );
}

export function StreakCard() {
  return (
    <SkeletonCard width={150} title="This week" status="STREAK" statusTone="amber">
      <p className="mb-2 text-[10px] text-home-ink">5 lessons · 3 days in a row</p>
      <div className="flex items-end gap-1" aria-hidden="true">
        {[0.4, 0.7, 1, 0.55, 0.85, 0.3, 0.6].map((h, i) => (
          <span
            key={i}
            className={`w-3 rounded-sm ${i < 5 ? "bg-home-teal/70" : "bg-home-ink/[0.08]"}`}
            style={{ height: 6 + h * 18 }}
          />
        ))}
      </div>
    </SkeletonCard>
  );
}

export function QuizCard() {
  return (
    <SkeletonCard width={172} title="Quick check" status="3 / 3 CORRECT">
      <div className="space-y-1.5">
        {[true, false, false].map((picked, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full border ${
                picked ? "border-home-teal bg-home-teal" : "border-home-ink/20"
              }`}
            />
            <Bar w={picked ? "78%" : i === 1 ? "56%" : "66%"} h={5} tone={picked ? "mid" : "soft"} />
          </div>
        ))}
      </div>
    </SkeletonCard>
  );
}

export function SpriteCard() {
  return (
    <SkeletonCard width={160} title="Sprite1" status="SHOW">
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 font-mono text-[9px] text-home-ink-soft">
        <span>x <span className="text-home-ink">96</span></span>
        <span>y <span className="text-home-ink">0</span></span>
        <span>size <span className="text-home-ink">100</span></span>
        <span>dir <span className="text-home-ink">90</span></span>
      </div>
      <div className="mt-2 flex gap-1.5" aria-hidden="true">
        <span className="h-6 w-6 rounded-md bg-home-teal/80" />
        <span className="h-6 w-6 rounded-md bg-home-ink/[0.08]" />
        <span className="h-6 w-6 rounded-md bg-home-ink/[0.08]" />
      </div>
    </SkeletonCard>
  );
}
