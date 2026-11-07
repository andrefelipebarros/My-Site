"use client";

import { Briefcase, Code2, GraduationCap } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { Reveal, SectionTitle } from "@/components/reveal";
import { Column, Eyebrow } from "@/components/column";
import { OrgLogo } from "@/components/org-logo";

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted/60 text-muted-foreground">
      {children}
    </span>
  );
}

function Chips({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span
          key={s}
          className="rounded-sm border border-border bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-foreground/85"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function Heading({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-border px-6 py-4 text-muted-foreground sm:px-8">
      {icon}
      <Eyebrow>{label}</Eyebrow>
    </div>
  );
}

export function Journey() {
  const { t } = useLocale();

  const degrees = [
    { ...t.education.postgrad, inProgress: true, extra: null },
    { ...t.education.bachelor, inProgress: false, extra: t.education.monitor },
  ];

  return (
    <section id="journey" className="scroll-mt-16">
      <Column>
        <div className="px-6 pb-6 pt-12 sm:px-8">
          <SectionTitle>{t.ui.journey}</SectionTitle>
        </div>

        <div className="grid border-t border-border md:grid-cols-2">
          {/* Experience */}
          <div className="border-b border-border md:border-b-0 md:border-r">
            <Heading
              icon={<Briefcase className="h-4 w-4" strokeWidth={1.5} />}
              label={t.ui.experienceLabel}
            />
            {t.experience.jobs.map((job, i) => (
              <Reveal key={i}>
                <article className="border-b border-border px-6 py-6 last:border-b-0 sm:px-8">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <OrgLogo name={job.company} className="h-9 w-9" />
                      <p className="text-base font-semibold text-foreground">
                        {job.company}
                      </p>
                    </div>
                    <p className="shrink-0 text-right font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {job.location}
                      {job.mode ? ` (${job.mode})` : ""}
                    </p>
                  </div>
                  <div className="ml-3 mt-4 flex gap-3 border-l border-border pl-5">
                    <IconBox>
                      <Code2 className="h-3.5 w-3.5" />
                    </IconBox>
                    <div className="min-w-0">
                      <p className="text-sm text-foreground">{job.title}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        {job.type && (
                          <>
                            <span className="text-foreground/80">{job.type}</span>
                            {" | "}
                          </>
                        )}
                        {job.period} · {job.duration}
                      </p>
                      <Chips items={job.skills} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Education */}
          <div>
            <Heading
              icon={<GraduationCap className="h-4 w-4" strokeWidth={1.5} />}
              label={t.ui.educationLabel}
            />
            {degrees.map((deg) => (
              <Reveal key={deg.degree}>
                <article className="border-b border-border px-6 py-6 last:border-b-0 sm:px-8">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <OrgLogo name={deg.school} className="h-9 w-9" />
                      <p className="text-base font-semibold text-foreground">
                        {deg.school}
                      </p>
                    </div>
                    <p className="flex shrink-0 items-center gap-2 text-right font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {deg.location}
                      {deg.inProgress && (
                        <span className="h-2 w-2 rounded-full bg-accent" />
                      )}
                    </p>
                  </div>
                  <div className="ml-3 mt-4 flex gap-3 border-l border-border pl-5">
                    <IconBox>
                      <GraduationCap className="h-3.5 w-3.5" />
                    </IconBox>
                    <div className="min-w-0">
                      <p className="text-sm text-foreground">{deg.degree}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        {deg.status} · {deg.period}
                      </p>
                    </div>
                  </div>
                  {deg.extra && (
                    <div className="ml-3 mt-5 flex gap-3 border-l border-border pl-5">
                      <IconBox>
                        <Code2 className="h-3.5 w-3.5" />
                      </IconBox>
                      <div className="min-w-0">
                        <p className="text-sm text-foreground">{deg.extra.role}</p>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">
                          {deg.extra.period}
                        </p>
                        <Chips items={deg.extra.tags} />
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Column>
    </section>
  );
}
