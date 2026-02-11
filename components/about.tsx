"use client";

import { useLocale } from "@/lib/locale-context";

const techStack: Record<string, string[]> = {
  backend: ["Java", "Quarkus", "Spring Boot", "Python", "Node.js", "Express.js", "C#", "PHP", "ASP.NET Core", ".NET Framework","Django", "Hibernate", "JPA / JDBC", "Maven", "Gradle", "fastapi", "Flask", "Spring Data JPA", "Spring Security", "Spring Cloud"],
  frontend: ["Angular", "React", "HTML5", "CSS3", "TypeScript", "JavaScript", "Bootstrap", "Tailwind CSS", "Flutter", "Next.js", "React Native", "Thymeleaf", "JSP"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Oracle", "SAP HANA", "SQLite", "DynamoDB"],
  cloud: ["AWS (EC2, S3, RDS)", "Azure", "Docker", "CI/CD", "Kubernetes", "Jenkins", "SonarCloud", "GitHub Actions", "Terraform", "Lambda"],
  methodologies: ["Scrum", "Kanban", "TDD", "Clean Architecture", "XP", "Clean Code", "DDD", "Microservices", "Monolithic", "Event-Driven Architecture", "RESTful APIs", "GraphQL"],
  tools: [ "GitLab", "Git", "GitHub", "Jira", "Figma", "VS Code", "IntelliJ", "Power BI", "JUnit 5", "Mockito", "SAP", "Excel", "Postman", "Swagger", "SonarQube", "Nginx", "Apache", "Prometheus", "Grafana", "AWS CloudWatch", "Azure Monitor"],
};

const categoryKeys = Object.keys(techStack) as Array<keyof typeof techStack>;

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="px-6 py-24 lg:px-16">
      <h2 className="text-3xl font-bold text-foreground">{t.about.title}</h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

      <div className="mt-10 max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>

      <h3 className="mt-12 text-xl font-semibold text-foreground">
        {t.about.techTitle}
      </h3>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryKeys.map((key) => (
          <div key={key} className="rounded-xl border border-border bg-card p-5">
            <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              {t.about.categories[key as keyof typeof t.about.categories]}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack[key].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
