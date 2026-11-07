import type { ReactNode } from "react";

/** The tall page column with hairlines on both sides. */
export function Column({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[48rem] border-x border-border ${className}`}
    >
      {children}
    </div>
  );
}

/** Full-width diagonal hatch band between sections. */
export function Hatch() {
  return <div aria-hidden className="hatch h-6 border-y border-border" />;
}

/** Small mono uppercase label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </p>
  );
}
