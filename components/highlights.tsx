"use client";

import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { Reveal } from "@/components/reveal";
import { TechLogo } from "@/components/projects";

/**
 * Two highlights above Journey. The row is wider than the page column, so it
 * "breaks out" of the hairlines. To use your own pictures, put them in
 * /public/highlights and set them in IMAGES below (e.g. "/highlights/sabio.png").
 */
const IMAGES: Record<string, string | undefined> = {
  "Sábio Diário": "/highlights/sabio-diario.gif",
  "techflow-api": "/highlights/techflow-api.gif",
};

export function Highlights() {
  const { t } = useLocale();

  return (
    <section aria-label={t.highlights.title} className="relative z-10 bg-background">
      <div className="mx-auto w-full max-w-[66rem] border-x border-border">
        <div className="grid sm:grid-cols-2">
          {t.highlights.items.map((item, i) => {
            const project = t.projects.items.find((p) => p.name === item.project);
            if (!project) return null;
            const href = project.demo || project.url || undefined;
            const image = IMAGES[project.name];
            const techs = project.techs.slice(0, 5);
            const Wrapper = href ? "a" : "div";
            return (
              <Reveal
                key={project.name}
                delay={i * 120}
                className="border-b border-border sm:border-b-0 sm:odd:border-r"
              >
                <Wrapper
                  {...(href
                    ? { href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col transition-colors hover:bg-card/60"
                >
                  <div className="vitrine relative flex aspect-video items-center justify-center gap-6 overflow-hidden border-b border-border">
                    {image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={image}
                        alt={project.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      project.techs.slice(0, 3).map((tech, k) => (
                        <TechLogo
                          key={tech}
                          name={tech}
                          className={`relative ${k === 0 ? "h-20 w-20" : "h-10 w-10 opacity-70"}`}
                        />
                      ))
                    )}
                    <span className="absolute left-4 top-3 rounded-sm border border-border bg-card px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5 sm:px-6 sm:py-5">
                    <p className="flex items-start justify-between gap-2 font-serif text-xl leading-tight text-foreground">
                      {project.name}
                      {href && (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      )}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-1">
                      {techs.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-border bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-foreground/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
