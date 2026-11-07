"use client";

import { useEffect, useRef } from "react";

const TRAIL = [
  { size: 10, ease: 0.3, opacity: 0.85 },
  { size: 8, ease: 0.22, opacity: 0.65 },
  { size: 6, ease: 0.16, opacity: 0.45 },
  { size: 5, ease: 0.11, opacity: 0.3 },
  { size: 4, ease: 0.08, opacity: 0.18 },
];

/**
 * Pointer effects made of dots, with the normal system cursor kept:
 *  1. a trail of brown dots that follows the pointer;
 *  2. a small burst of dots on click;
 *  3. --px/--py for the dotted `.vitrine` panels.
 * Only with a fine pointer (mouse); touch screens get none of it.
 */
export function PixelCursor() {
  const trail = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const target = { x: -200, y: -200 };
    const pos = TRAIL.map(() => ({ x: -200, y: -200 }));
    let frame = 0;
    let started = false;

    const draw = () => {
      frame = 0;
      let moving = false;
      TRAIL.forEach((t, i) => {
        const p = pos[i];
        p.x += (target.x - p.x) * t.ease;
        p.y += (target.y - p.y) * t.ease;
        if (Math.abs(target.x - p.x) > 0.3 || Math.abs(target.y - p.y) > 0.3)
          moving = true;
        const node = trail.current[i];
        if (node)
          node.style.transform = `translate(${p.x - t.size / 2}px, ${p.y - t.size / 2}px)`;
      });
      if (moving) frame = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      if (!started) {
        started = true;
        pos.forEach((p) => {
          p.x = e.clientX;
          p.y = e.clientY;
        });
      }
      target.x = e.clientX;
      target.y = e.clientY;

      const panel = (e.target as Element | null)?.closest?.(
        ".vitrine",
      ) as HTMLElement | null;
      if (panel) {
        const r = panel.getBoundingClientRect();
        panel.style.setProperty("--px", `${e.clientX - r.left}px`);
        panel.style.setProperty("--py", `${e.clientY - r.top}px`);
      }
      if (!frame && !reduce) frame = requestAnimationFrame(draw);
    };

    const onDown = (e: PointerEvent) => {
      if (reduce || e.pointerType === "touch") return;
      const n = 8;
      for (let i = 0; i < n; i++) {
        const d = document.createElement("span");
        const size = 4 + (i % 3) * 2;
        Object.assign(d.style, {
          position: "fixed",
          left: `${e.clientX - size / 2}px`,
          top: `${e.clientY - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "9999px",
          background: "hsl(var(--accent))",
          pointerEvents: "none",
          zIndex: "100",
        });
        document.body.appendChild(d);
        const a = (Math.PI * 2 * i) / n;
        const dist = 26 + (i % 2) * 14;
        d.animate(
          [
            { transform: "translate(0,0) scale(1)", opacity: 0.9 },
            {
              transform: `translate(${Math.cos(a) * dist}px, ${Math.sin(a) * dist}px) scale(0.2)`,
              opacity: 0,
            },
          ],
          { duration: 550, easing: "cubic-bezier(.2,.7,.3,1)" },
        ).onfinish = () => d.remove();
      }
    };

    const hide = () => {
      target.x = -200;
      target.y = -200;
      if (!frame && !reduce) frame = requestAnimationFrame(draw);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", hide);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] hidden [@media(pointer:fine)]:block"
    >
      {TRAIL.map((t, i) => (
        <span
          key={i}
          ref={(n) => {
            trail.current[i] = n;
          }}
          className="absolute left-0 top-0 rounded-full bg-accent motion-reduce:hidden"
          style={{
            width: t.size,
            height: t.size,
            opacity: t.opacity,
            transform: "translate(-200px,-200px)",
          }}
        />
      ))}
    </div>
  );
}
