/**
 * Shrinks a real site component down to satellite-card size by scaling its
 * natural layout and clipping the overflow — not by re-implementing its
 * markup at a smaller font size. Whatever renders inside stays pixel-
 * consistent with wherever else that component appears on the site.
 */
export default function Cutout({
  width,
  height,
  scale = 0.65,
  className = "",
  children,
}: {
  width: number;
  height: number;
  scale?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`hero-cutout overflow-hidden border border-home-rule bg-white shadow-[0_16px_32px_-14px_rgb(20_23_28_/_0.28)] ${className}`}
      style={{ width, height, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: width / scale }}>
        {children}
      </div>
    </div>
  );
}
