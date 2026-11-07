"use client";

import { useLocale } from "@/lib/locale-context";
import { Reveal, SectionTitle } from "@/components/reveal";
import { Column } from "@/components/column";
import { OrgLogo } from "@/components/org-logo";

export function Certifications() {
  const { t } = useLocale();

  return (
    <section id="certifications" className="scroll-mt-16">
      <Column>
        <div className="px-6 pb-6 pt-12 sm:px-8">
          <SectionTitle>{t.certifications.title}</SectionTitle>
        </div>
        <div className="border-t border-border">
          {t.certifications.items.map((cert, i) => (
            <Reveal key={i} delay={(i % 4) * 50}>
              <div className="group flex items-center gap-4 border-b border-border px-6 py-4 transition-colors last:border-b-0 hover:bg-card/70 sm:px-8">
                <OrgLogo name={cert.issuer} className="h-11 w-11" />
                <div className="min-w-0 flex-1">
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base leading-snug text-foreground">
                    {cert.name}
                    {cert.inProgress && (
                      <span className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                        {t.certifications.inProgress}
                      </span>
                    )}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {cert.issuer}
                    {cert.note ? ` · ${cert.note}` : ""}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Column>
    </section>
  );
}
