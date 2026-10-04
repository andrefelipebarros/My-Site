/**
 * Certifications shown in the "Certifications" section.
 * Order matters: most relevant for backend / Java first.
 * `name` can be a plain string or { en, pt } when it should be translated.
 */
const certifications: {
  name: string | { en: string; pt: string };
  issuer: string;
  year?: number;
}[] = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon - AWS" },
  { name: "Bootcamp - Java Cloud Native", issuer: "Fundação Bradesco", year: 2025 },
  { name: "Object-Oriented Design", issuer: "University of Alberta", year: 2026 },
  { name: "MongoDB Java Developer Path", issuer: "MongoDB", year: 2026 },
  { name: "Spring Security: Proteja suas Aplicações Web", issuer: "Alura", year: 2025 },
  { name: "Application Programming Interfaces", issuer: "Meta", year: 2026 },
  { name: "Bootcamp - Desenvolvimento Java com Cloud AWS", issuer: "GFT Technologies", year: 2023 },
  { name: "Curso de Java", issuer: "Rocketseat", year: 2023 },
  { name: "Java Reflection: Simplifique a Conversão de Objetos", issuer: "Alura", year: 2024 },
  { name: "Bootcamp - Descubra a Nuvem AWS", issuer: "Localiza&Co", year: 2023 },
  { name: "PostgreSQL: From Beginner to Intermediate 2023", issuer: "Udemy", year: 2023 },
  { name: "SQL com Oracle Database: Manipule e Consulte Dados", issuer: "Alura", year: 2024 },
  { name: "Create a web API with ASP.NET Core Controllers", issuer: "Microsoft", year: 2024 },
  { name: "EF SET English Certificate (C1 Advanced)", issuer: "EF International Language Campuses", year: 2026 },
  {
    name: { en: "Academic Honor Award", pt: "Honra ao Mérito Acadêmico" },
    issuer: "Universidade Veiga de Almeida",
    year: 2025,
  },
];

const toItems = (locale: "en" | "pt") =>
  certifications.map((c) => ({
    name: typeof c.name === "string" ? c.name : c.name[locale],
    issuer: c.year ? `${c.issuer} · ${c.year}` : c.issuer,
  }));

export const certificationItems = { en: toItems("en"), pt: toItems("pt") };
