"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { CloudSun, Code2, ExternalLink, FolderGit2, Webhook } from "lucide-react";
import { techIcons } from "@/lib/tech-icons";

/** Scrolling (in viewport heights) needed to move the track by one card. */
const VH_PER_STEP = 45;
/** Gap between cards in px (matches gap-6). */
const GAP = 24;

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/** Holds each card for a moment, then eases to the next one. */
function withDwell(pos: number) {
  const i = Math.floor(pos);
  const t = clamp((pos - i - 0.15) / 0.7);
  return i + t * t * (3 - 2 * t);
}

const fallbackIcons: Record<string, typeof Code2> = {
  "REST API": Webhook,
  REST: Webhook,
  "Open-Meteo": CloudSun,
};

function TechLogo({ name }: { name: string }) {
  const icon = techIcons[name];

  if (!icon) {
    const Fallback = fallbackIcons[name] ?? Code2;
    return <Fallback className="h-7 w-7 text-accent" strokeWidth={1.5} />;
  }

  if (icon.img) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={icon.src} alt="" className="h-7 w-7" />;
  }

  return (
    <span
      aria-hidden
      className="block h-7 w-7"
      style={{
        backgroundColor: icon.color ?? "currentColor",
        WebkitMaskImage: `url(${icon.src})`,
        maskImage: `url(${icon.src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/** Drops techs that would repeat the same logo (keeps the first one). */
function uniqueTechs(techs: readonly string[]) {
  const seen = new Set<string>();
  return techs.filter((tech) => {
    const key = techIcons[tech]?.src ?? tech;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function Projects() {
  const { t } = useLocale();
  const items = t.projects.items;
  const count = items.length;

  const wrapperRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLElement>(null);

  // step: distance between two cards; maxShift: how far the track can move
  // before the last card touches the right edge (no empty space on the right).
  const [metrics, setMetrics] = useState({ step: 1, maxShift: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const measure = () => {
      const stage = stageRef.current;
      const card = firstCardRef.current;
      if (!stage || !card) return;
      const step = card.offsetWidth + GAP;
      const pad = card.offsetLeft;
      const contentWidth = pad * 2 + count * step - GAP;
      setMetrics({
        step,
        maxShift: Math.max(0, contentWidth - stage.clientWidth),
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [count, items]);

  const steps = Math.ceil(metrics.maxShift / metrics.step);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = wrapperRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      setProgress(clamp(-el.getBoundingClientRect().top / total));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [steps]);

  const shift = Math.min(
    withDwell(progress * steps) * metrics.step,
    metrics.maxShift,
  );
  const pos = shift / metrics.step; // how many cards have moved past the start

  return (
    <section
      id="projects"
      ref={wrapperRef}
      style={{ height: `calc(100svh + ${steps * VH_PER_STEP}svh)` }}
      className="relative"
    >
      <div
        ref={stageRef}
        className="sticky top-0 flex h-svh flex-col justify-center gap-8 overflow-hidden pt-14 lg:pt-0"
        style={
          {
            "--card-w": "min(28rem, 78vw)",
            "--step": "calc(var(--card-w) + 1.5rem)",
          } as React.CSSProperties
        }
      >
        <div className="px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-foreground">
            {t.projects.title}
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-accent" />
        </div>

        <div className="relative h-[32rem] sm:h-[24rem]">
          {items.map((project, i) => {
            const d = i - pos; // 0 = at the start position, negative = left of it
            const leaving = clamp(-d);
            const isLead = d > -0.5 && d <= 0.5;

            return (
              <article
                key={project.name}
                ref={i === 0 ? firstCardRef : undefined}
                className={`absolute left-6 top-0 flex h-full w-[var(--card-w)] flex-col rounded-xl border bg-card p-6 will-change-transform lg:left-16 ${
                  isLead ? "border-primary/40" : "border-border"
                }`}
                style={{
                  transform: `translateX(calc(var(--step) * ${i} - ${shift}px))`,
                  opacity: 1 - leaving * 0.9,
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <FolderGit2 className="h-5 w-5 text-accent" />
                    </div>
                    {project.tag && (
                      <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                        {project.tag}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.url || project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label={`${project.url ? t.projects.viewCode : t.projects.viewSite} - ${project.name}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-card-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.projects.techLabel}
                </p>
                <div className="mt-3 grid grid-cols-4 gap-x-2 gap-y-3 text-card-foreground sm:grid-cols-6">
                  {uniqueTechs(project.techs).map((tech) => (
                    <div
                      key={tech}
                      className="flex flex-col items-center gap-1.5 text-center"
                    >
                      <TechLogo name={tech} />
                      <span className="text-[11px] font-medium leading-tight">
                        {techIcons[tech]?.label ?? tech}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                    >
                      {t.projects.viewCode}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                    >
                      {t.projects.viewSite}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Progress bar */}
        {metrics.maxShift > 0 && (
          <div className="px-6 lg:px-16" aria-hidden>
            <div className="h-1 w-32 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${(shift / metrics.maxShift) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
