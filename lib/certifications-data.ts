/**
 * Certifications shown in the "Certifications" section (only the big ones).
 * `inProgress: true` shows an "In progress" tag. `note` is a small extra line.
 * `name` can be a plain string or { en, pt } when it should be translated.
 */
const certifications: {
  name: string | { en: string; pt: string };
  issuer: string;
  year?: number;
  inProgress?: boolean;
  note?: { en: string; pt: string };
}[] = [
  { name: "EF SET English Certificate (C1 Advanced)", issuer: "EF International Language Campuses", year: 2026 },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon - AWS", inProgress: true },
  {
    name: "Object-Oriented Design",
    issuer: "University of Alberta",
    inProgress: true,
    note: {
      en: "Coursera specialization, partly completed",
      pt: "Especialização no Coursera, parte concluída",
    },
  },
  { name: "Bootcamp - Java Cloud Native", issuer: "Fundação Bradesco", year: 2025 },
];

const toItems = (locale: "en" | "pt") =>
  certifications.map((c) => ({
    name: typeof c.name === "string" ? c.name : c.name[locale],
    issuer: c.year ? `${c.issuer} · ${c.year}` : c.issuer,
    inProgress: Boolean(c.inProgress),
    note: c.note ? c.note[locale] : "",
  }));

export const certificationItems = { en: toItems("en"), pt: toItems("pt") };
