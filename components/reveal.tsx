"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Variant = "up" | "left" | "right" | "scale";

const hidden: Record<Variant, string> = {
  up: "translate-y-8 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
  scale: "scale-95 opacity-0",
};

/**
 * Fades an element in the first time it scrolls into view.
 * It also exposes `data-revealed` so children can animate through the named
 * Tailwind group `group/reveal` (e.g. `group-data-[revealed=true]/reveal:...`).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-revealed={revealed}
      className={`group/reveal transition-[opacity,transform] duration-700 ease-out will-change-transform ${
        revealed ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden[variant]
      } ${className}`}
      style={{ transitionDelay: revealed ? `${delay}ms` : "0ms", ...style }}
    >
      {children}
    </div>
  );
}

/** Section heading whose accent bar draws itself when it scrolls into view. */
export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="text-3xl font-bold text-foreground">{children}</h2>
      <div className="mt-2 h-1 w-16 origin-left scale-x-0 rounded-full bg-accent transition-transform delay-300 duration-700 ease-out group-data-[revealed=true]/reveal:scale-x-100" />
    </Reveal>
  );
}
