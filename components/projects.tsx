"use client";

import { useLocale } from "@/lib/locale-context";
import { ExternalLink, FolderGit2 } from "lucide-react";

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="px-6 py-24 lg:px-16">
      <h2 className="text-3xl font-bold text-foreground">
        {t.projects.title}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <FolderGit2 className="h-5 w-5 text-accent" />
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label={`${t.projects.viewCode} - ${project.name}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <h3 className="text-lg font-semibold text-card-foreground">
              {project.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              {t.projects.viewCode}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
