/**
 * Projects shown in the "Featured Projects" carousel.
 *
 * Order matters: best projects first, least relevant last.
 *
 * To add a new repository, copy one block below, paste it at the end of the
 * list and fill in the fields. That is all: it shows up in both languages.
 * Optional fields: `tag` (small label on the card) and `demo` (live site link).
 * Only link PUBLIC repositories, private ones show a 404 to visitors.
 * For a private project that is live, omit `url` and set only `demo`.
 */
export const projects = [
  {
    name: "Sábio Diário",
    tag: "Micro-SaaS",
    demo: "https://andrefelipebarros.com/sabiodiario",
    techs: ["Java 21", "Quarkus", "PostgreSQL", "Stripe", "AWS Lambda", "Terraform"],
    description: {
      en: "Micro-SaaS in production that emails a daily reflection. Quarkus backend with Stripe subscriptions and webhooks, plus an AWS Lambda and SES automation managed with Terraform.",
      pt: "Micro-SaaS em produção que envia uma reflexão diária por e-mail. Backend em Quarkus com assinaturas e webhooks do Stripe, mais uma automação com AWS Lambda e SES gerenciada com Terraform.",
    },
  },
  {
    name: "store-api",
    url: "https://github.com/andrefelipebarros/store-api",
    techs: ["Java 21", "Spring Boot 3", "JWT", "PostgreSQL", "Flyway", "Docker"],
    description: {
      en: "REST API for an online store built with Java 21 and Spring Boot 3. Secured with JWT, versioned database migrations with Flyway, and containerized with Docker.",
      pt: "API REST de loja virtual construída com Java 21 e Spring Boot 3. Protegida com JWT, migrações de banco versionadas com Flyway e containerizada com Docker.",
    },
  },
  {
    name: "techflow-api",
    url: "https://github.com/andrefelipebarros/techflow-api",
    techs: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka"],
    description: {
      en: "REST API for project and task management with caching and event-driven messaging, built with Java and Spring Boot.",
      pt: "API REST para gestão de projetos e tarefas com cache e mensageria orientada a eventos, construída com Java e Spring Boot.",
    },
  },
  {
    name: "Vava-API",
    url: "https://github.com/KairoLab/Vava-API",
    tag: "KairoLab",
    techs: ["Java 17", "Spring Boot 3", "JWT", "PostgreSQL"],
    description: {
      en: "REST authentication API built with Java 17 and Spring Boot 3, using Spring Security and JWT for secure access control and PostgreSQL for persistence.",
      pt: "API REST de autenticação desenvolvida com Java 17 e Spring Boot 3, usando Spring Security e JWT para controle de acesso seguro e PostgreSQL para persistência.",
    },
  },
  {
    name: "agenda-cultural-eventos-api",
    url: "https://github.com/andrefelipebarros/agenda-cultural-eventos-api",
    techs: ["Python", "REST API", "Open-Meteo"],
    description: {
      en: "Main API of the Agenda Cultural MVP. Manages cultural events, checks the weather through Open-Meteo and integrates with the registrations API.",
      pt: "API principal do MVP Agenda Cultural. Gerencia eventos culturais, consulta clima via Open-Meteo e integra com a API de inscrições.",
    },
  },
  {
    name: "Little-Lemon-API",
    url: "https://github.com/andrefelipebarros/Little-Lemon-API",
    techs: ["Python", "Django REST Framework", "REST"],
    description: {
      en: "RESTful API for the Little Lemon restaurant. Final capstone project of the Meta APIs course on Coursera, built with Django REST Framework.",
      pt: "API RESTful do restaurante Little Lemon. Projeto final do curso de APIs da Meta na Coursera, construído com Django REST Framework.",
    },
  },
  {
    name: "FuriaBot-Discord",
    url: "https://github.com/andrefelipebarros/FuriaBot-Discord",
    techs: ["Python", "Discord"],
    description: {
      en: "Interactive Discord chatbot for FURIA CS:GO fans, created for Challenge #1: Conversational Experience. Follow live matches, check results and stats.",
      pt: "Chatbot interativo do Discord para fãs de CS:GO da FURIA, criado para o Challenge #1: Experiência Conversacional. Acompanhe partidas ao vivo, resultados e estatísticas.",
    },
  },
  {
    name: "FuriaBot-Telegram",
    url: "https://github.com/andrefelipebarros/FuriaBot-Telegram",
    techs: ["Python", "Telegram"],
    description: {
      en: "Interactive Telegram chatbot for FURIA CS:GO fans, created for Challenge #1: Conversational Experience. Follow live matches, check results and stats.",
      pt: "Chatbot interativo do Telegram para fãs de CS:GO da FURIA, criado para o Challenge #1: Experiência Conversacional. Acompanhe partidas ao vivo, resultados e estatísticas.",
    },
  },
  {
    name: "KairoLab-Website",
    url: "https://github.com/KairoLab/KairoLab-Website",
    tag: "KairoLab",
    demo: "https://kairolab.netlify.app/",
    techs: ["TypeScript", "Next.js", "Tailwind CSS", "Netlify"],
    description: {
      en: "Institutional website of KairoLab, an ecosystem of digital projects focused on technology, innovation and impact.",
      pt: "Website institucional da KairoLab, um ecossistema de projetos digitais focado em tecnologia, inovação e impacto.",
    },
  },
];

const toItems = (locale: "en" | "pt") =>
  projects.map((p) => ({
    name: p.name,
    url: "url" in p ? p.url : "",
    tag: "tag" in p ? p.tag : "",
    demo: "demo" in p ? p.demo : "",
    techs: p.techs,
    description: p.description[locale],
  }));

export const projectItems = { en: toItems("en"), pt: toItems("pt") };
