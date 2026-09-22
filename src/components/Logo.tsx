type Tone = "dark" | "light";

const tones: Record<Tone, { mark: string; text: string }> = {
  dark: { mark: "#FFFFFF", text: "#FFFFFF" },
  light: { mark: "#0A0A12", text: "#0A0A12" },
};

/** Brand accent for the dot — the same lilac as the highlighted words on dark sections. */
const DOT = "#6E6EFF";

/**
 * The mark: a solid V with the dot above it.
 * Geometry in a 100×100 box; `size` is the rendered height in px.
 */
export function Emblem({
  tone = "dark",
  size = 28,
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
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 4H28L50 47.1L72 4H98L50 98Z" fill={c.mark} />
      <circle cx="50" cy="13" r="9" fill={DOT} />
    </svg>
  );
}

/** Mark + wordmark: "ad" medium, "vizier" bold, in Poppins. */
export function Logo({
  tone = "dark",
  size = 26,
  className = "",
}: {
  tone?: Tone;
  size?: number;
  className?: string;
}) {
  const c = tones[tone];
  const fontSize = Math.round(size * 1.2);
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: Math.round(size * 0.4) }}>
      <Emblem tone={tone} size={size} />
      <span
        className="font-wordmark tracking-[-0.02em]"
        style={{ color: c.text, fontSize, lineHeight: 1 }}
      >
        <span className="font-medium">ad</span>
        <span className="font-bold">vizier</span>
      </span>
    </span>
  );
}
