import type { ReactNode } from "react";

type Tone = "dark" | "light";

/**
 * Decorative background layers. Only the hero and the closing CTA carry the grid + glow;
 * every other section is a flat ground or white surface, so the page alternates cleanly.
 */
export function Backdrop({
  tone,
  raster = false,
  glow,
}: {
  tone: Tone;
  raster?: boolean;
  glow?: "left" | "right";
}) {
  if (!raster && !glow) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {glow ? (
        <div
          className={`glow-blue absolute -top-80 ${glow === "right" ? "-right-64" : "-left-[26rem]"}`}
        />
      ) : null}
      {raster ? (
        <div
          className={`raster-fade absolute inset-0 ${tone === "dark" ? "raster-dark" : "raster-light"}`}
        />
      ) : null}
    </div>
  );
}

export function Section({
  id,
  tone,
  raster = false,
  glow,
  line = false,
  className = "",
  children,
}: {
  id?: string;
  tone: Tone;
  raster?: boolean;
  glow?: "left" | "right";
  /** Hairline at the top, for the rare case two light sections touch. */
  line?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const base = tone === "dark" ? "bg-ground text-white" : "bg-white text-ink";

  return (
    <section id={id} className={`relative ${base} ${className}`}>
      <Backdrop tone={tone} raster={raster} glow={glow} />
      {line ? (
        <div className="relative mx-auto max-w-[1248px] px-6">
          <div className="h-px bg-line" />
        </div>
      ) : null}
      <div className="relative mx-auto max-w-[1248px] px-6 py-24 md:py-32">{children}</div>
    </section>
  );
}

/**
 * The two-line heading pattern used across the page:
 * first line in the base text colour, second line in blue (light) or accent (dark),
 * with a small label underneath.
 */
export function SectionHeading({
  title,
  accent,
  label,
  tone,
  as: Tag = "h2",
  className = "",
}: {
  title: string;
  accent: string;
  label?: string;
  tone: Tone;
  as?: "h1" | "h2";
  className?: string;
}) {
  const accentColor = tone === "dark" ? "text-accent" : "text-blue";
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <Tag className="font-heading text-[40px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[56px]">
        {title}
        <br />
        <span className={accentColor}>{accent}</span>
      </Tag>
      {label ? (
        <div className={`text-[12px] font-semibold uppercase tracking-[0.16em] ${accentColor}`}>
          {label}
        </div>
      ) : null}
    </div>
  );
}
