"use client";

import { useLocale } from "@/lib/locale-context";

/** Thin strip right under the navbar. */
export function OpenBanner() {
  const { t } = useLocale();
  return (
    <div className="border-b border-border bg-card/60">
      <p className="mx-auto flex max-w-[48rem] items-center justify-center gap-2.5 px-6 py-2 font-mono text-xs text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {t.hero.status}
      </p>
    </div>
  );
}
