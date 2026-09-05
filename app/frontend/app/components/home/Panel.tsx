import { SATELLITES, type Satellite, type SatelliteId } from "./stage";

/**
 * A floating panel on the hero stage, as a two-level transform hierarchy:
 *
 *   .hero-panel        position (%), depth (translateZ), parallax rotateY
 *     .hero-panel-inner  rest tilt + its own ambient oscillation
 *       .hero-panel-shadow  drop-shadow filter — a LEAF of the 3D chain, so
 *                           the filter's flattening can't reach anything
 *                           that carries a 3D transform
 *         .hero-panel-body  clip-path revealed by the entrance build
 */
export default function Panel({ id, children }: { id: SatelliteId; children: React.ReactNode }) {
  const s: Satellite = SATELLITES[id];
  return (
    <div
      data-panel={id}
      className={`hero-panel${s.dropOnSmall ? " max-sm:hidden" : ""}`}
      style={{ left: `${s.x}%`, top: `${s.y}%` }}
    >
      <div className="hero-panel-inner">
        <div className="hero-panel-shadow">
          <div className="hero-panel-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
