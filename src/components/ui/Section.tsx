import type { ReactNode } from "react";

type Tone = "dark" | "light";

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
  /** Draw a hairline at the top (used between two light sections). */
  line?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const base =
    tone === "dark"
      ? "bg-ground text-white"
      : "bg-white text-ink";
  const rasterClass = raster ? (tone === "dark" ? "raster-dark" : "raster-light") : "";
  const glowClass = glow === "left" ? "glow-left" : glow === "right" ? "glow-right" : "";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${base} ${rasterClass} ${glowClass} ${className}`}
    >
      {line ? (
        <div className="mx-auto max-w-[1248px] px-6">
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
