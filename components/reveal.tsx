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

/** Serif section heading, with an optional right-side slot. */
export function SectionTitle({
  children,
  right,
}: {
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <Reveal className="flex items-baseline justify-between gap-4">
      <h2 className="font-serif text-3xl leading-tight sm:text-4xl tracking-tight text-foreground">
        {children}
      </h2>
      {right}
    </Reveal>
  );
}
