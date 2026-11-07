"use client";

import { PixelMark } from "@/components/pixel-mark";
import { FlagBR, FlagUS } from "@/components/flags";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "@/lib/locale-context";
import { Sun, Moon, ArrowDown, Download } from "lucide-react";

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/** Sticky top bar inside the page column: links, logo, language, theme, Contact. */
export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, t, toggleLocale } = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const link =
    "text-sm text-muted-foreground underline decoration-border decoration-dotted underline-offset-[6px] transition-colors hover:text-foreground hover:decoration-foreground";
  const round =
    "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-[48rem] grid-cols-[1fr_auto_1fr] items-center border-x border-border px-6 sm:px-8">
        <nav className="flex items-center gap-5" aria-label="Sections">
          <button type="button" className={`${link} hidden sm:block`} onClick={() => scrollToId("journey")}>
            {t.ui.journey}
          </button>
          <button type="button" className={link} onClick={() => scrollToId("projects")}>
            {t.nav.projects}
          </button>
        </nav>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-9 w-9 items-center justify-center"
          aria-label={t.nav.home}
        >
          <PixelMark />
        </button>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            className={round}
            aria-label={locale === "en" ? "Português" : "English"}
            title={locale === "en" ? "Português" : "English"}
          >
            {locale === "en" ? <FlagBR /> : <FlagUS />}
          </button>
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={round}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="/cv.pdf"
            download="cv.pdf"
            aria-label={t.contact.cv.title}
            title={t.contact.cv.title}
            className="group inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3 font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            <span className="hidden sm:inline">{t.contact.cv.short}</span>
          </a>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="contact-btn group relative inline-flex h-9 items-center gap-2 overflow-hidden rounded-full bg-foreground pl-4 pr-1 text-sm font-medium text-background transition-transform hover:scale-[1.04] active:scale-95"
          >
            <span className="relative z-10">{t.nav.contact}</span>
            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground transition-colors group-hover:bg-accent group-hover:text-background">
              <ArrowDown className="arrow-nudge h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
