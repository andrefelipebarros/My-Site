"use client";

import { useLocale } from "@/lib/locale-context";
// Import do Briefcase removido pois não será mais usado

export function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" className="px-6 py-24 lg:px-16">
      <h2 className="text-3xl font-bold text-foreground">
        {t.experience.title}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

      <div className="mt-10 space-y-8">
        {t.experience.jobs.map((job, i) => (
          // Adicionei a classe 'group' aqui. 
          // Isso permite detectar o hover em todo esse bloco para animar a bolinha.
          <div key={i} className="group relative pl-8">
            
            {/* Timeline line */}
            {i < t.experience.jobs.length - 1 && (
              <div className="absolute left-[13px] top-10 h-[calc(100%+2rem)] w-px bg-border" />
            )}

            {/* Timeline dot (A Bolinha) */}
            <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent bg-background transition-colors">
              {/* Esta é a bolinha interna.
                  - scale-0 opacity-0: Começa invisível e pequena.
                  - group-hover: Aparece quando passa o mouse no job.
                  - transition-all duration-300: Faz o efeito de fade/zoom suave.
              */}
              <div className="h-3 w-3 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </div>

            <div className="rounded-xl p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {job.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {job.company}
                  </p>
                </div>
                <span className="rounded-full bg-muted px-3 py-0.5 font-mono text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {job.description.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}