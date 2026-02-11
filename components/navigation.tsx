"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "@/lib/locale-context";
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Award,
  FolderGit2,
  Mail,
  Sun,
  Moon,
  Monitor,
  Globe,
  Menu,
  X,
} from "lucide-react";

const sectionIds = [
  "home",
  "about",
  "education",
  "experience",
  "certifications",
  "projects",
  "contact",
] as const;

const sectionIcons = {
  home: Home,
  about: User,
  education: GraduationCap,
  experience: Briefcase,
  certifications: Award,
  projects: FolderGit2,
  contact: Mail,
};

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale, t, toggleLocale } = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const themeIcon = mounted ? (
    theme === "light" ? (
      <Sun className="h-4 w-4" />
    ) : theme === "dark" ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Monitor className="h-4 w-4" />
    )
  ) : (
    <Monitor className="h-4 w-4" />
  );

  const themeLabel = mounted
    ? theme === "system"
      ? locale === "pt"
        ? "Sistema"
        : "System"
      : theme === "light"
        ? locale === "pt"
          ? "Claro"
          : "Light"
        : locale === "pt"
          ? "Escuro"
          : "Dark"
    : "";

  const navLabels: Record<(typeof sectionIds)[number], string> = {
    home: t.nav.home,
    about: t.nav.about,
    education: t.nav.education,
    experience: t.nav.experience,
    certifications: t.nav.certifications,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <span className="font-mono text-sm font-semibold tracking-wider text-primary">
          {"</>"}
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={cycleTheme}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {themeIcon}
          </button>
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1 rounded-md px-2 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "en" ? "EN" : "PT"}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 pt-16 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col items-center gap-1 p-6">
            {sectionIds.map((id) => {
              const Icon = sectionIcons[id];
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className={`flex w-full max-w-xs items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {navLabels[id]}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col border-r border-border bg-background lg:flex">
        {/* Logo */}
        <div className="px-6 pt-8 pb-6">
          <span className="font-mono text-lg font-bold tracking-wider text-primary">
            {"</>"}
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-0.5 px-3">
          {sectionIds.map((id) => {
            const Icon = sectionIcons[id];
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {navLabels[id]}
              </button>
            );
          })}
        </nav>

        {/* Footer controls */}
        <div className="border-t border-border px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={cycleTheme}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {themeIcon}
              <span className="text-xs">{themeLabel}</span>
            </button>
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale === "en" ? "PT" : "EN"}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
