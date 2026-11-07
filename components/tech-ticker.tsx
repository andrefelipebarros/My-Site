"use client";

import { techIcons } from "@/lib/tech-icons";
import { TechLogo } from "@/components/projects";

const names = [
  "Java",
  "Spring Boot",
  "Quarkus",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Docker",
  "AWS Lambda",
  "Terraform",
  "TypeScript",
  "Next.js",
  "Stripe",
  "Tailwind CSS",
  "Python",
];

/** Scrolling row of tech logos right under the hero. */
export function TechTicker() {
  const items = [...names, ...names];

  return (
    <div className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-[48rem] overflow-hidden border-x border-border [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex w-max animate-[marquee_45s_linear_infinite] gap-8 px-8 py-4 hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-sm text-foreground/80"
            >
              <TechLogo name={name} className="h-5 w-5" />
              {techIcons[name]?.label ?? name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
