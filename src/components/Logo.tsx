type Tone = "dark" | "light";

const tones: Record<Tone, { line: string; text: string }> = {
  dark: { line: "#FFFFFF", text: "#FFFFFF" },
  light: { line: "#0A0A12", text: "#0A0A12" },
};

/** Brand accent for the dot — the same lilac as the highlighted words on dark sections. */
const DOT = "#6E6EFF";

/**
 * The mark: the crosshair with the interlocking A and V, in the heavy weight.
 * Geometry in a 600×600 box; `size` is the rendered box in px (the mark fills ~88% of it).
 */
export function Emblem({
  tone = "dark",
  size = 30,
  className = "",
  title,
}: {
  tone?: Tone;
  size?: number;
  className?: string;
  title?: string;
}) {
  const c = tones[tone];
  return (
    <svg
      viewBox="0 0 600 600"
      width={size}
      height={size}
      fill="none"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="300" cy="300" r="215" stroke={c.line} strokeWidth="18" />
      <path d="M300 37V80M300 520V563M37 300H80M520 300H563" stroke={c.line} strokeWidth="18" />
      <path
        d="M152 145L300 455L448 145"
        stroke={c.line}
        strokeWidth="38"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
      <path
        d="M152 455L300 145L448 455"
        stroke={c.line}
        strokeWidth="18"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
      <circle cx="300" cy="300" r="24" fill={DOT} />
    </svg>
  );
}

/** Mark + wordmark: "ad" in Poppins Light, "vizier" in Poppins Bold. */
export function Logo({
  tone = "dark",
  size = 30,
  className = "",
}: {
  tone?: Tone;
  size?: number;
  className?: string;
}) {
  const c = tones[tone];
  const fontSize = Math.round(size * 0.9);
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: Math.round(size * 0.3) }}>
      <Emblem tone={tone} size={size} />
      <span
        className="font-wordmark tracking-[-0.02em]"
        // Poppins' line box sits 0.077em above its x-height centre; nudge so the x-height centres on the mark.
        style={{ color: c.text, fontSize, lineHeight: 1, transform: "translateY(0.077em)" }}
      >
        <span className="font-light">ad</span>
        <span className="font-bold">vizier</span>
      </span>
    </span>
  );
}
