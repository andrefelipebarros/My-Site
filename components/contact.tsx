"use client";

import { useLocale } from "@/lib/locale-context";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="px-6 py-24 lg:px-16">
      <h2 className="text-3xl font-bold text-foreground">
        {t.contact.title}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

      <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
        {t.contact.subtitle}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="mailto:andrefelipe.barros@outlook.com"
          className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-card-foreground transition-colors hover:border-primary/40"
        >
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">{t.contact.email}</span>
        </a>
        <a
          href="https://www.linkedin.com/in/andrefelipebarros/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-card-foreground transition-colors hover:border-primary/40"
        >
          <Linkedin className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">{t.contact.linkedin}</span>
        </a>
        <a
          href="https://github.com/andrefelipebarros/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-card-foreground transition-colors hover:border-primary/40"
        >
          <Github className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">{t.contact.github}</span>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">{t.contact.footer}</p>
      </div>
    </section>
  );
}
