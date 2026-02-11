"use client";

import { useLocale } from "@/lib/locale-context";
import { TechIconColumn } from "@/components/tech-icon-column";
import { ArrowUpRight, Mail } from "lucide-react";

const techPills = [
  "Java",
  "Spring Boot",
  "Quarkus",
  "Python",
  "SQL",
  "AWS",
  "Docker",
];

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-16 lg:px-16 lg:pt-0"
    >
      <div className="flex w-full items-center justify-center gap-12">
        {/* Left content */}
        <div className="max-w-xl">
          <p className="mb-4 font-mono text-sm tracking-[0.25em] text-accent">
            {t.hero.label}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Andre Felipe
            <br />
            de Barros A. N.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.hero.subtitle}
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>

          {/* Tech pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-card-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {t.hero.viewProjects}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
            >
              {t.hero.getInTouch}
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right: scrolling tech icons */}
        <TechIconColumn />
      </div>
    </section>
  );
}
