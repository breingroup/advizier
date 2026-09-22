"use client";

import { useRef, type ReactNode } from "react";

/**
 * A bordered tile whose edge lights up around the cursor and gains a soft blue glow on hover.
 * Styling lives in globals.css (.glow-card); this only feeds the pointer position in.
 */
export function GlowCard({
  tone = "light",
  elevated = false,
  className = "",
  children,
}: {
  tone?: "light" | "dark";
  /** For cards floating on a dark section: keeps the deep drop shadow under the glow. */
  elevated?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      data-tone={tone}
      data-elevated={elevated ? "true" : undefined}
      onPointerMove={onPointerMove}
      className={`glow-card ${className}`}
    >
      {children}
    </div>
  );
}
