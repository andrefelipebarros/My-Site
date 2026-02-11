"use client";

import { useLocale } from "@/lib/locale-context";
import { Award } from "lucide-react";

export function Certifications() {
  const { t } = useLocale();

  return (
    <section id="certifications" className="px-6 py-24 lg:px-16">
      <h2 className="text-3xl font-bold text-foreground">
        {t.certifications.title}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.certifications.items.map((cert, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Award className="h-4 w-4 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-card-foreground">
                {cert.name}
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
