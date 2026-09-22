type Tone = "dark" | "light";

const tones: Record<Tone, { line: string; dot: string; text: string }> = {
  // On dark backgrounds: white lines, accent dot
  dark: { line: "#FFFFFF", dot: "#6E6EFF", text: "#FFFFFF" },
  // On light backgrounds: ink lines, blue dot
  light: { line: "#0A0A12", dot: "#0606EA", text: "#0A0A12" },
};

export function Emblem({
  tone = "dark",
  size = 36,
  className = "",
  title,
}: {
  tone?: Tone;
  size?: number;
  className?: string;
  title?: string;
}) {
  const c = tones[tone];
  // Thin lines get heavier at small sizes so the mark stays legible.
  const thin = size >= 64 ? 7 : size >= 40 ? 9 : 11;
  const thick = thin * 2.15;
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
      <circle cx="300" cy="300" r="215" stroke={c.line} strokeWidth={thin} />
      <path d="M300 37V80M300 520V563M37 300H80M520 300H563" stroke={c.line} strokeWidth={thin} />
      <path
        d="M152 145L300 455L448 145"
        stroke={c.line}
        strokeWidth={thick}
        strokeLinejoin="miter"
        strokeMiterlimit={10}
      />
      <path
        d="M152 455L300 145L448 455"
        stroke={c.line}
        strokeWidth={thin}
        strokeLinejoin="miter"
        strokeMiterlimit={10}
      />
      <circle cx="300" cy="300" r={size >= 64 ? 15 : 20} fill={c.dot} />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  size = 36,
  className = "",
}: {
  tone?: Tone;
  size?: number;
  className?: string;
}) {
  const c = tones[tone];
  const fontSize = Math.round(size * 0.47);
  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <Emblem tone={tone} size={size} />
      <span
        className="font-wordmark tracking-[0.3em]"
        style={{ color: c.text, fontSize, lineHeight: 1 }}
      >
        ADVIZIER
      </span>
    </span>
  );
}
