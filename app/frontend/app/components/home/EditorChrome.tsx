/**
 * Scene 1's full-bleed base layer: the real Playground page filling the
 * stage behind the centred, runnable code box — mirroring the actual
 * /compiler layout (heading, description, language tabs) rather than an
 * invented IDE. Rendered at reduced opacity/saturation (see
 * .hero-base-editor) so the floating code box stays the focal point; this
 * is set dressing, not a second focal object.
 */
const LANGUAGES = [
  { id: "python", label: "Python", active: true },
  { id: "java", label: "Java", active: false },
];

export default function EditorChrome() {
  return (
    <div className="hero-base hero-base-editor flex flex-col overflow-hidden rounded-xl border border-home-rule bg-white" aria-hidden="true">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-home-rule bg-home-bg px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
          <span className="h-2 w-2 rounded-full bg-home-ink/15" />
        </div>
        <div className="flex-1 truncate rounded-full bg-white px-3 py-1 font-mono text-[9.5px] text-home-ink-soft">
          challengercoding.org/compiler
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-5 pt-4">
        <p className="font-sans text-lg font-semibold tracking-tight text-home-ink">Playground</p>
        <p className="mt-1.5 max-w-[32ch] font-sans text-[11px] leading-snug text-home-ink-soft">
          Write and run code in the browser — nothing to install.
        </p>

        <div className="mt-3 flex gap-1">
          {LANGUAGES.map((lang) => (
            <span
              key={lang.id}
              className={`rounded-sm px-2 py-1 font-sans text-[10px] font-semibold ${
                lang.active ? "bg-white text-home-teal" : "text-home-ink-soft"
              }`}
            >
              {lang.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
