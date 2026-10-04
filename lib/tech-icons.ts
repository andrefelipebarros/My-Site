/**
 * Maps a technology name (as written in lib/projects-data.ts) to its logo.
 * Files live in /public/tech.
 *  - `color`: brand color used to paint a single-color logo. Omit it for logos
 *    that are black/white (they follow the theme text color instead).
 *  - `img`: the file is already multicolor and is shown as is.
 *  - `label`: shorter text shown under the logo (optional).
 * Techs that share the same logo (e.g. Spring Boot and Spring Security) are
 * shown only once per card.
 * Names without an entry fall back to a generic icon in the card.
 */
export type TechIcon = { src: string; color?: string; img?: boolean; label?: string };

const java: TechIcon = { src: "/tech/java.svg", img: true };
const spring: TechIcon = { src: "/tech/spring.svg", color: "#6DB33F" };

export const techIcons: Record<string, TechIcon> = {
  Java: java,
  "Java 17": java,
  "Java 21": java,
  Spring: spring,
  "Spring Boot": spring,
  "Spring Boot 3": spring,
  "Spring Security": spring,
  "Spring Data JPA": spring,
  Quarkus: { src: "/tech/quarkus.svg", color: "#4695EB" },
  JWT: { src: "/tech/jsonwebtokens.svg" },
  PostgreSQL: { src: "/tech/postgresql.svg", color: "#4169E1" },
  Flyway: { src: "/tech/flyway.svg", color: "#CC0200" },
  Docker: { src: "/tech/docker.svg", color: "#2496ED" },
  Redis: { src: "/tech/redis.svg", color: "#FF4438" },
  Kafka: { src: "/tech/apachekafka.svg" },
  Stripe: { src: "/tech/stripe.svg", color: "#635BFF" },
  "AWS Lambda": { src: "/tech/aws.svg", color: "#FF9900" },
  Terraform: { src: "/tech/terraform.svg", color: "#844FBA" },
  Python: { src: "/tech/python.svg", color: "#3776AB" },
  "Django REST Framework": { src: "/tech/django.svg", color: "#44B78B", label: "Django REST" },
  Discord: { src: "/tech/discord.svg", color: "#5865F2" },
  Telegram: { src: "/tech/telegram.svg", color: "#26A5E4" },
  TypeScript: { src: "/tech/typescript.svg", color: "#3178C6" },
  "Next.js": { src: "/tech/nextdotjs.svg" },
  "Tailwind CSS": { src: "/tech/tailwindcss.svg", color: "#06B6D4" },
  Netlify: { src: "/tech/netlify.svg", color: "#00C7B7" },
};
