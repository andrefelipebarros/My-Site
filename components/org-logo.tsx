"use client";

import { useState } from "react";
import { orgLogos } from "@/lib/org-logos";

/**
 * Logo of a company, school or certificate issuer.
 * Order: local file (public/logos) > site icon fetched by domain > monogram.
 */
export function OrgLogo({
  name,
  className = "h-10 w-10",
}: {
  name: string;
  className?: string;
}) {
  // Issuers come as "Name · 2025" in the translations.
  const key = name.split(" · ")[0].trim();
  const logo = orgLogos[key];
  const initials =
    logo?.initials ??
    key
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();

  // Several public icon services, tried in order until one loads.
  const domains = [logo?.domain, ...(logo?.altDomains ?? [])].filter(
    (d): d is string => Boolean(d),
  );
  const sources = [
    ...(logo?.files ?? []),
    ...domains.flatMap((d) => [
      `https://www.google.com/s2/favicons?domain=${d}&sz=128`,
      `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&url=https://${d}&size=128`,
      `https://icons.duckduckgo.com/ip3/${d}.ico`,
      `https://${d}/favicon.ico`,
    ]),
  ];
  const [attempt, setAttempt] = useState(0);
  const remote = sources[attempt];
  const remoteFailed = !remote;

  let content;
  if (logo?.src && logo.color) {
    content = (
      <span
        className="relative block h-[56%] w-[56%]"
        style={{
          backgroundColor: logo.color,
          WebkitMaskImage: `url(${logo.src})`,
          maskImage: `url(${logo.src})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    );
  } else if (logo?.src || (remote && !remoteFailed)) {
    content = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={logo?.src ?? remote}
        src={logo?.src ?? remote}
        alt=""
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setAttempt((n) => n + 1)}
        className="relative h-[56%] w-[56%] object-contain"
      />
    );
  } else {
    content = (
      <span
        className="relative font-mono text-xs font-bold tracking-tight text-foreground/70"
        style={logo?.color ? { color: logo.color } : undefined}
      >
        {initials}
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className={`vitrine flex shrink-0 items-center justify-center rounded-md border border-border ${className}`}
    >
      {content}
    </span>
  );
}
