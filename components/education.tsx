"use client";

import { useLocale } from "@/lib/locale-context";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  const { t } = useLocale();

  const degrees = [
    {
      ...t.education.postgrad,
      icon: GraduationCap,
      inProgress: true,
    },
    {
      ...t.education.bachelor,
      icon: GraduationCap,
      inProgress: false,
    },
  ];

  return (
    <section id="education" className="px-6 py-24 lg:px-16">
      <h2 className="text-3xl font-bold text-foreground">
        {t.education.title}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {degrees.map((deg) => (
          <div
            key={deg.degree}
            className="relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            {deg.inProgress && (
              <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                {deg.status}
              </span>
            )}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <deg.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">
              {deg.degree}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {deg.school}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {deg.period}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {deg.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
