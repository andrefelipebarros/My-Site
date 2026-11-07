"use client";

import { useLocale } from "@/lib/locale-context";
import { CloudSun, Code2, ExternalLink, Webhook } from "lucide-react";
import { techIcons } from "@/lib/tech-icons";
import { Reveal, SectionTitle } from "@/components/reveal";
import { Column } from "@/components/column";

/** Only the projects that matter most for backend-focused full stack roles, in this order. */
const FEATURED = [
  "store-api",
  "agenda-cultural-eventos-api",
  "Vava-API",
  "Little-Lemon-API",
];

const fallbackIcons: Record<string, typeof Code2> = {
  "REST API": Webhook,
  REST: Webhook,
  "Open-Meteo": CloudSun,
};

export function TechLogo({
  name,
  className = "h-7 w-7",
}: {
  name: string;
  className?: string;
}) {
  const icon = techIcons[name];

  if (!icon) {
    const Fallback = fallbackIcons[name] ?? Code2;
    return <Fallback className={`${className} text-accent`} strokeWidth={1.5} />;
  }

  if (icon.img) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={icon.src} alt="" className={className} />;
  }

  return (
    <span
      aria-hidden
      className={`block shrink-0 ${className}`}
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
  const items = FEATURED.map((name) =>
    t.projects.items.find((p) => p.name === name),
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="projects" className="scroll-mt-16">
      <Column>
        <div className="px-6 pb-6 pt-12 sm:px-8">
          <SectionTitle>{t.projects.title}</SectionTitle>
        </div>

        <div className="grid border-t border-border sm:grid-cols-2">
          {items.map((project, i) => {
            const techs = uniqueTechs(project.techs);
            const cover = techs[0];
            return (
              <Reveal
                key={project.name}
                delay={(i % 2) * 120}
                className="border-b border-border sm:odd:border-r"
              >
                <article className="group flex h-full flex-col">
                  {/* Cover area: big logos over a dotted panel */}
                  <div className="vitrine flex h-44 items-center justify-center gap-5 border-b border-border">
                    <span className="absolute left-4 top-3 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.tag && (
                      <span className="absolute right-4 top-3 rounded-sm border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                        {project.tag}
                      </span>
                    )}
                    {techs.slice(0, 3).map((tech, k) => (
                      <div
                        key={tech}
                        className={`relative transition-transform duration-500 group-hover:scale-110 ${
                          k === 0 ? "" : "opacity-70"
                        }`}
                      >
                        <TechLogo
                          name={tech}
                          className={k === 0 ? "h-16 w-16" : "h-9 w-9"}
                        />
                      </div>
                    ))}
                    {!cover && null}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl leading-tight text-card-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-muted/60 px-2 py-1 font-mono text-[11px] text-foreground/85"
                        >
                          <TechLogo name={tech} className="h-3 w-3" />
                          {techIcons[tech]?.label ?? tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-5">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-70"
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
                          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-70"
                        >
                          {t.projects.viewSite}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Column>
    </section>
  );
}
