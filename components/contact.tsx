"use client";

import { useLocale } from "@/lib/locale-context";
import { ArrowUpRight, Download, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/reveal";
import { Column } from "@/components/column";

export function Contact() {
  const { t } = useLocale();

  const links = [
    {
      label: t.contact.github,
      href: "https://github.com/andrefelipebarros/",
      icon: Github,
      external: true,
    },
    {
      label: t.contact.linkedin,
      href: "https://www.linkedin.com/in/andrefelipebarros/",
      icon: Linkedin,
      external: true,
    },
    {
      label: t.contact.email,
      href: "mailto:andre.felipebarros@outlook.com",
      icon: Mail,
      external: false,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-16">
      <Column>
        <div className="px-6 pb-8 pt-12 sm:px-8">
          <SectionTitle>{t.contact.title}</SectionTitle>
          <Reveal delay={80}>
            <a
              href="mailto:andre.felipebarros@outlook.com"
              className="group mt-4 flex items-center justify-between gap-3 font-serif text-2xl text-foreground underline decoration-border decoration-dotted underline-offset-[6px] hover:decoration-foreground"
            >
              andre.felipebarros@outlook.com
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="group flex items-center gap-4 border-t border-border px-6 py-5 transition-colors hover:bg-card/70 sm:px-8"
          >
            <span className="vitrine relative flex h-14 w-11 shrink-0 items-center justify-center rounded-sm border border-border bg-card transition-transform duration-300 group-hover:-rotate-3">
              <FileText className="relative h-5 w-5 text-foreground" strokeWidth={1.5} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-xl leading-tight text-foreground">
                {t.contact.cv.title}
              </span>
              <span className="mt-1 block font-mono text-xs text-muted-foreground">
                {t.contact.cv.file}
              </span>
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:scale-110">
              <Download className="arrow-nudge h-4 w-4" />
            </span>
          </a>
        </Reveal>

        <div className="grid grid-cols-1 border-t border-border sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center justify-between gap-2 border-b border-border px-6 py-5 font-mono text-xs sm:px-8 uppercase tracking-wider text-muted-foreground transition-colors hover:bg-card/70 hover:text-foreground sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <span className="flex items-center gap-2">
                <link.icon className="h-4 w-4" />
                {link.label}
              </span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border px-6 py-4 font-mono text-xs sm:px-8 text-muted-foreground">
          <span>{t.contact.footer}</span>
        </div>
      </Column>
    </section>
  );
}
