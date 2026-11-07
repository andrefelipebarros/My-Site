"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

/** Vertical scroll indicator fixed on the right edge: label, progress line and percentage. */
export function ScrollProgress() {
  const fill = useRef<HTMLSpanElement>(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fill.current) fill.current.style.height = `${p * 100}%`;
      setPct(Math.round(p * 100));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
    >
      <span
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        style={{ writingMode: "vertical-rl" }}
      >
        scroll
      </span>
      <span className="relative block h-32 w-px bg-border">
        <span ref={fill} className="absolute left-0 top-0 block w-px bg-accent" style={{ height: 0 }} />
        <span
          className="absolute -left-[3px] h-[7px] w-[7px] bg-accent"
          style={{ top: `calc(${pct}% - 3px)` }}
        />
      </span>
      <span className="font-mono text-[10px] tabular-nums text-foreground">
        {String(pct).padStart(2, "0")}
      </span>
      <ChevronDown
        className={`h-3.5 w-3.5 text-accent transition-opacity ${pct > 96 ? "opacity-0" : "animate-bounce"}`}
      />
    </div>
  );
}
