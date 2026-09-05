/**
 * Original friendly mascot for the Scratch scene — not the Scratch cat,
 * which is MIT Media Lab's trademark. A simple rounded body, dot eyes, a
 * curved smile and an antenna, built from the same teal/ink palette as the
 * rest of the page.
 */
export default function Mascot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Friendly sprite mascot"
    >
      <line x1="32" y1="6" x2="32" y2="14" stroke="#0A5F52" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="5" r="3.5" fill="#0E7C6B" />
      <rect x="8" y="12" width="48" height="42" rx="16" fill="#0E7C6B" />
      <rect x="14" y="30" width="36" height="20" rx="10" fill="#E5F2EF" />
      <circle cx="24" cy="28" r="3.5" fill="#14171C" />
      <circle cx="40" cy="28" r="3.5" fill="#14171C" />
      <path
        d="M24 38c2.5 3 11.5 3 14 0"
        stroke="#14171C"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
