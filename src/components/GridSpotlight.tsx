"use client";

import { useEffect, useRef } from "react";

/**
 * Lights up the background grid around the cursor. Tracks the pointer on the nearest <section>
 * and writes the position into CSS variables (--mx/--my) that the .raster-spot layer reads.
 * Pointer-only: hidden on touch devices via CSS.
 */
export function GridSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    const host = layer?.closest("section");
    if (!layer || !host) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      host.style.setProperty("--mx", `${x}px`);
      host.style.setProperty("--my", `${y}px`);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = host.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      host.dataset.spot = "on";
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      host.dataset.spot = "off";
    };

    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className="raster-spot" />;
}
