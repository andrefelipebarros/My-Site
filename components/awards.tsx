"use client";

import { Trophy } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { Reveal, SectionTitle } from "@/components/reveal";
import { Column } from "@/components/column";
import { OrgLogo } from "@/components/org-logo";

export function Awards() {
  const { t } = useLocale();

  return (
    <section id="awards" className="scroll-mt-16">
      <Column>
        <div className="px-6 pb-6 pt-12 sm:px-8">
          <SectionTitle>{t.awards.title}</SectionTitle>
        </div>
        <div className="border-t border-border">
          {t.awards.items.map((award, i) => (
            <Reveal key={i}>
              <div className="flex gap-4 border-b border-border px-6 py-5 last:border-b-0 sm:px-8">
                <OrgLogo name={award.issuer} className="h-11 w-11" />
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-2 text-base leading-snug text-foreground">
                    <Trophy className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                    {award.name}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {award.issuer}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {award.description}
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
