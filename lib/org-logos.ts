/**
 * Logos for companies, schools and certificate issuers.
 *
 * Each entry can use, in this order:
 *  1. `src`: a file in /public/logos. With `color`, a single-color SVG is
 *     painted with that color; without it the file is shown as is.
 *  2. `domain`: the site icon is fetched from that domain at runtime.
 *  3. Otherwise a monogram with `initials` is shown (also the fallback when
 *     the image does not load).
 *
 * To use an official logo, drop the file in /public/logos and set `src`.
 * The key is the exact name used in the translations / certifications data.
 */
export type OrgLogoEntry = {
  initials: string;
  src?: string;
  color?: string;
  domain?: string;
  /** Other domains to try when the main one has no icon. */
  altDomains?: string[];
  /** Files in /public/logos tried first (the first that exists is used). */
  files?: string[];
};

export const orgLogos: Record<string, OrgLogoEntry> = {
  // Companies
  BNDES: { initials: "BN", domain: "bndes.gov.br" },
  BOATLUX: { initials: "BL", src: "/logos/boatlux.png" },
  // Schools
  "PUC-Rio": { initials: "PUC", domain: "puc-rio.br" },
  "Universidade Veiga de Almeida": { initials: "UVA", domain: "uva.br" },
  // Certificate issuers
  "Amazon - AWS": { initials: "AWS", src: "/logos/aws.svg", color: "#FF9900" },
  MongoDB: { initials: "M", src: "/logos/mongodb.svg", color: "#47A248" },
  "Fundação Bradesco": {
    initials: "FB",
    files: [
      "/logos/fundacao-bradesco.svg",
      "/logos/fundacao-bradesco.png",
      "/logos/fundacao-bradesco.webp",
      "/logos/fundacao-bradesco.jpg",
    ],
  },
  "GFT Technologies": { initials: "GFT", domain: "gft.com" },
  Alura: { initials: "AL", domain: "alura.com.br" },
  "University of Alberta": { initials: "UA", domain: "ualberta.ca" },
  "EF International Language Campuses": { initials: "EF", domain: "ef.com" },
};
