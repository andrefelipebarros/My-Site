"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { Column, Eyebrow } from "@/components/column";
import { Mail } from "lucide-react";
import { brandPaths } from "@/lib/brand-icons";

const GITHUB_USER = "andrefelipebarros";

// Handles for Instagram, X and Reddit are guesses: edit the hrefs below.
const socials: {
  label: string;
  href: string;
  path?: string;
}[] = [
  { label: "GitHub", href: `https://github.com/${GITHUB_USER}/`, path: brandPaths.github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andrefelipebarros/", path: brandPaths.linkedin },
  { label: "Instagram", href: `https://www.instagram.com/${GITHUB_USER}/`, path: brandPaths.instagram },
  { label: "X", href: `https://x.com/${GITHUB_USER}`, path: brandPaths.x },
  { label: "Reddit", href: "https://www.reddit.com/user/andrefelipebarros/", path: brandPaths.reddit },
  { label: "Email", href: "mailto:andre.felipebarros@outlook.com" },
];

function useLocalTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/** Profile photo from GitHub, with initials if it does not load. */
function Avatar() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative shrink-0">
    <div className="h-24 w-24 overflow-hidden rounded-full border border-border bg-card sm:h-28 sm:w-28">
      {failed ? (
        <span className="flex h-full w-full items-center justify-center font-serif text-2xl text-foreground/70">
          AF
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://github.com/${GITHUB_USER}.png?size=240`}
          alt="Andre Felipe"
          width={112}
          height={112}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
    </div>
  );
}

/** Keywords of the intro: bold; the ones that go somewhere are also underlined. */
const KEYWORDS: Record<string, string | undefined> = {
  Minecraft: undefined,
  Java: undefined,
  Unity: undefined,
  backend: undefined,
  "PUC-Rio": undefined,
  "Sábio Diário": "https://andrefelipebarros.com/sabiodiario",
  LinkedIn: "https://www.linkedin.com/in/andrefelipebarros/",
};
function Emphasis({ text }: { text: string }) {
  const keys = Object.keys(KEYWORDS);
  const re = new RegExp(`(${keys.join("|")})`, "g");
  return (
    <>
      {text.split(re).map((part, i) => {
        if (!keys.includes(part)) return <span key={i}>{part}</span>;
        const href = KEYWORDS[part];
        return href ? (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color] duration-200 hover:decoration-foreground"
          >
            {part}
          </a>
        ) : (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        );
      })}
    </>
  );
}

export function Hero() {
  const { t } = useLocale();
  const time = useLocalTime();

  return (
    <section id="home">
      <Column>
        <div className="grid sm:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center px-6 pt-8 sm:border-r sm:border-border sm:px-8 sm:py-8">
            <Avatar />
          </div>

          <div className="flex min-w-0 flex-col justify-center px-6 py-6 sm:py-8">
            <h1 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Andre Felipe
              <br className="hidden sm:block" /> de Barros A. N.
            </h1>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              @{GITHUB_USER}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-foreground/70">
              {t.hero.label}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map(({ label, href, path }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={label}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/45 bg-card text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {path ? (
                      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden>
                        <path d={path} />
                      </svg>
                    ) : (
                      <Mail className="h-[17px] w-[17px]" strokeWidth={2} />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-10 border-t border-border px-6 py-5 sm:flex-col sm:justify-center sm:gap-6 sm:border-l sm:border-t-0 sm:px-8">
            <div>
              <Eyebrow>{t.ui.base}</Eyebrow>
              <p className="mt-1.5 font-mono text-sm text-foreground">{t.ui.location}</p>
            </div>
            <div>
              <Eyebrow>{t.ui.localTime}</Eyebrow>
              <p className="mt-1.5 flex items-center gap-2 font-mono text-sm text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {time} BRT
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-6 py-5 sm:px-8">
          <p className="text-base leading-relaxed text-foreground/85">
            <Emphasis text={t.about.p1} />
          </p>
        </div>
      </Column>
    </section>
  );
}
