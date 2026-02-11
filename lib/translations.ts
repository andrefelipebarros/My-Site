export type Locale = "pt" | "en";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      experience: "Experience",
      certifications: "Certifications",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      label: "SOFTWARE ENGINEER",
      subtitle: "Full Stack Developer",
      description:
        "Building scalable web applications, automating processes, and integrating APIs. Passionate about transforming requirements into high-performance, secure solutions.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
    },
    about: {
      title: "About Me",
      p1: "Full Stack Developer with 2+ years of experience at one of Brazil's largest development banks (BNDES). I hold a Bachelor's degree in Computer Science from Universidade Veiga de Almeida and am currently pursuing a Postgraduate degree in Software Engineering at PUC-Rio.",
      p2: "I specialize in building scalable enterprise applications using Java/Spring Boot on the backend and Angular on the frontend. I have hands-on experience with cloud infrastructure (AWS, Azure), containerization (Docker), and CI/CD pipelines.",
      p3: "I'm driven by clean architecture, test-driven development, and collaborative agile workflows. I enjoy tackling complex problems and continuously learning new technologies.",
      techTitle: "Tech Stack",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Database",
        cloud: "Cloud & DevOps",
        methodologies: "Methodologies",
        tools: "Tools",
      },
    },
    education: {
      title: "Education",
      postgrad: {
        degree: "Postgraduate in Software Engineering",
        school: "PUC-Rio",
        period: "2026 - Present",
        status: "In Progress",
        description:
          "Advanced specialization in software architecture, design patterns, and modern engineering practices.",
      },
      bachelor: {
        degree: "Bachelor in Computer Science",
        school: "Universidade Veiga de Almeida",
        period: "2022 - 2025",
        status: "Completed",
        description:
          "Comprehensive foundation in algorithms, data structures, databases, software engineering, and computer networks.",
      },
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          title: "Systems Analysis Intern",
          company: "BNDES",
          period: "Feb 2024 - Feb 2026",
          description: [
            "Creation, maintenance, and migration of responsive web applications using Java (Spring-Boot, JPA, JDBC, JUnit5, Swagger, Liberty, Maven) and Angular, focused on the financial environment.",
            "Continuous integration with Jenkins and Sonar, and code versioning using Git and GitLab.",
            "Development and maintenance of database structures, including tables, views, and procedures, ensuring system integrity and performance.",
            "Development of RPAs using Python and SAP Script for process automation in an SAP environment, as well as supporting Power BI dashboard creation.",
            "Incident resolution and ticket management via Remedy, working in SAP NetWeaver / SAP ERP environments.",
          ],
          skills: [
            "Java",
            "Spring Boot",
            "JUnit 5",
            "Angular",
            "Python",
            "SAP",
            "SAP NetWeaver",
            "Oracle",
            "Jenkins",
            "Gitlab",
            "Excel",
            "Power BI"
          ],
        },
        {
          title: "Freelance Web Developer",
          company: "GHCi.io",
          period: "Jul 2023",
          description: [
            "Development and maintenance of responsive web applications, ensuring the best user experience.",
            "Collaboration with international clients to create personalized and efficient digital solutions.",
            "Implementation of dynamic interfaces using Bootstrap, HTML, CSS, and JavaScript.",
          ],
          skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "UI Design",
            "Git",
          ],
        },
        {
          title: "Junior Systems Analyst",
          company: "BOATLUX",
          period: "Mar 2023 - May 2023",
          description: [
            "Development of Python scripts using Pandas and Openpyxl libraries to automate daily data extraction and processing.",
            "Responsible for updating and optimizing Power BI dashboards, performing maintenance on DAX measures, and adjusting visualizations for KPIs.",
            "Support for the software development cycle by resolving bugs reported in staging and production environments, using Git and Clean Code.",
          ],
          skills: ["PostgreSQL", "Python", "Pandas", "Power BI", "DAX", "Git", "Clean Code", "Flutter"],
        },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        {
          name: "AWS Certified Cloud Practitioner",
          issuer: "Amazon - AWS",
        },
        {
          name: "MongoDB Java Developer Path",
          issuer: "MongoDB",
        },
        {
          name: "Build .NET applications with C#",
          issuer: "Microsoft",
        },
        {
          name: "Create a web API with ASP.NET Core Controllers",
          issuer: "Microsoft",
        },
        {
          name: "Treinamento Gestão de Risco Operacional e Segurança da Informação",
          issuer: "BNDES",
        },
        {
          name: "PostgreSQL: From Beginner to Intermediate 2023",
          issuer: "Udemy",
        },
        {
          name: "Spring Security: Proteja suas Aplicações Web",
          issuer: "Alura",
        },
        {
          name: "Learning the Basics of ABAP Programming on SAP BTP",
          issuer: "SAP",
        },
        {
          name: "Excel: Domine o Editor de Planilhas",
          issuer: "Alura",
        },
        {
          name: "Bootcamp - Java Cloud Native",
          issuer: "Fundação Bradesco",
        },
        {
          name: "Internet das Coisas (IoT), IA e Revolução Conectada",
          issuer: "PUCRS-Online",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewCode: "View Code",
      items: [
        {
          name: "BiSyllab Web Design",
          description:
            "A web-based syllable division tool for Portuguese language learning, built with HTML, CSS, and JavaScript with an intuitive and responsive interface.",
          techs: ["HTML", "CSS", "JavaScript"],
          url: "https://github.com/andrefelipebarros/BiSyllab-Web-Design",
        },
        {
          name: "Personal Website",
          description:
            "A personal portfolio and project showcase site built with modern web technologies and responsive design principles.",
          techs: ["HTML", "CSS", "JavaScript"],
          url: "https://github.com/andrefelipebarros/meu-projeto-site",
        },
        {
          name: "First Game - Unity",
          description:
            "A 2D platformer game developed in Unity with C#, featuring player mechanics, level design, and game physics.",
          techs: ["C#", "Unity"],
          url: "https://github.com/andrefelipebarros/FirstGameUnity",
        },
        {
          name: "Flappy Bird Clone",
          description:
            "A Flappy Bird-inspired game built in Unity as a learning exercise in game development, physics, and score tracking.",
          techs: ["C#", "Unity"],
          url: "https://github.com/andrefelipebarros/Game-inspired-by-Flappy-Bird-Unity",
        },
        {
          name: "Visual Novel - Ren'Py",
          description:
            "A light novel game developed in Python using the Ren'Py engine with branching narrative paths and custom artwork.",
          techs: ["Python", "Ren'Py"],
          url: "https://github.com/andrefelipebarros/First-Game-for-Ren-Py",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      footer: "Designed & Built by Andre Felipe",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      education: "Formação",
      experience: "Experiência",
      certifications: "Certificações",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      label: "ENGENHEIRO DE SOFTWARE",
      subtitle: "Desenvolvedor Full Stack",
      description:
        "Construindo aplicações web escaláveis, automatizando processos e integrando APIs. Apaixonado por transformar requisitos em soluções de alta performance e seguras.",
      viewProjects: "Ver Projetos",
      getInTouch: "Entre em Contato",
    },
    about: {
      title: "Sobre Mim",
      p1: "Desenvolvedor Full Stack com mais de 2 anos de experiência em um dos maiores bancos de desenvolvimento do Brasil (BNDES). Possuo graduação em Ciência da Computação pela Universidade Veiga de Almeida e atualmente curso pós-graduação em Engenharia de Software na PUC-Rio.",
      p2: "Especializado na construção de aplicações empresariais escaláveis usando Java/Spring Boot no backend e Angular no frontend. Possuo experiência prática com infraestrutura em nuvem (AWS, Azure), containerização (Docker) e pipelines CI/CD.",
      p3: "Sou motivado por arquitetura limpa, desenvolvimento orientado a testes e fluxos de trabalho ágeis colaborativos. Gosto de resolver problemas complexos e aprender continuamente novas tecnologias.",
      techTitle: "Stack Tecnológica",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Banco de Dados",
        cloud: "Cloud & DevOps",
        methodologies: "Metodologias",
        tools: "Ferramentas",
      },
    },
    education: {
      title: "Formação Acadêmica",
      postgrad: {
        degree: "Pós-graduação em Engenharia de Software",
        school: "PUC-Rio",
        period: "2026 - Presente",
        status: "Em Andamento",
        description:
          "Especialização avançada em arquitetura de software, padrões de projeto e práticas modernas de engenharia.",
      },
      bachelor: {
        degree: "Bacharelado em Ciência da Computação",
        school: "Universidade Veiga de Almeida",
        period: "2022 - 2025",
        status: "Concluído",
        description:
          "Base abrangente em algoritmos, estruturas de dados, bancos de dados, engenharia de software e redes de computadores.",
      },
    },
    experience: {
      title: "Experiência",
      jobs: [
        {
          title: "Estagiário de Análise de Sistemas",
          company: "BNDES",
          period: "Fev 2024 - Fev 2026",
          description: [
            "Criação, manutenção e migração de aplicações web responsivas, utilizando Java (Spring-Boot, JPA, JDBC, JUnit5, Swagger, Liberty, Maven) e Angular, voltado para o ambiente financeiro.",
            "Integração contínua com Jenkins e Sonar e versionamento de código com uso de Git e Gitlab.",
            "Desenvolvimento e manutenção de estruturas de banco de dados, incluindo tabelas, views e procedures, garantindo integridade e desempenho do sistema.",
            "Desenvolvimento de RPAs utilizando Python e SAP Script para automação de processos em ambiente SAP, além de apoio na criação de dashboards no Power BI.",
            "Resolução de incidentes e gestão de chamados via Remedy, com atuação em ambientes SAP NetWeaver / SAP ERP.",
          ],
          skills: [
            "Java",
            "Spring Boot",
            "Angular",
            "Python",
            "SAP",
            "Oracle",
            "Jenkins",
            "Git",
            "Power BI"
          ],
        },
        {
          title: "Desenvolvedor Web Freelancer",
          company: "GHCi.io",
          period: "Jul 2023",
          description: [
            "Desenvolvimento e manutenção de aplicações web responsivas, garantindo a melhor experiência para o usuário.",
            "Colaboração com clientes internacionais para criar soluções digitais personalizadas e eficientes.",
            "Implementação de interfaces dinâmicas utilizando Bootstrap, HTML, CSS e JavaScript.",
          ],
          skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "UI Design",
            "Git",
          ],
        },
        {
          title: "Analista de Sistemas Júnior",
          company: "BOATLUX",
          period: "Mar 2023 - Mai 2023",
          description: [
            "Desenvolvimento de scripts em Python utilizando as bibliotecas Pandas e Openpyxl para automatizar a extração e tratamento de dados diários.",
            "Responsável pela atualização e otimização de dashboards no Power BI, realizando a manutenção de medidas em DAX e ajustando visualizações para KPIs.",
            "Suporte ao ciclo de desenvolvimento de software através da resolução de bugs reportados em ambiente de homologação e produção, utilizando Git e Clean Code.",
          ],
          skills: ["Python", "Pandas", "Power BI", "DAX", "Git", "Clean Code"],
        },
      ],
    },
    certifications: {
      title: "Certificações",
      items: [
        {
          name: "AWS Certified Cloud Practitioner",
          issuer: "Amazon - AWS",
        },
        {
          name: "MongoDB Java Developer Path",
          issuer: "MongoDB",
        },
        {
          name: "Build .NET applications with C#",
          issuer: "Microsoft",
        },
        {
          name: "Create a web API with ASP.NET Core Controllers",
          issuer: "Microsoft",
        },
        {
          name: "Treinamento Gestão de Risco Operacional e Segurança da Informação",
          issuer: "BNDES",
        },
        {
          name: "PostgreSQL: From Beginner to Intermediate 2023",
          issuer: "Udemy",
        },
        {
          name: "Spring Security: Proteja suas Aplicações Web",
          issuer: "Alura",
        },
        {
          name: "Learning the Basics of ABAP Programming on SAP BTP",
          issuer: "SAP",
        },
        {
          name: "Excel: Domine o Editor de Planilhas",
          issuer: "Alura",
        },
        {
          name: "Bootcamp - Java Cloud Native",
          issuer: "Fundação Bradesco",
        },
        {
          name: "Internet das Coisas (IoT), IA e Revolução Conectada",
          issuer: "PUCRS-Online",
        },
      ],
    },
    projects: {
      title: "Projetos em Destaque",
      viewCode: "Ver Código",
      items: [
        {
          name: "BiSyllab Web Design",
          description:
            "Uma ferramenta web de divisão silábica para aprendizado da língua portuguesa, construída com HTML, CSS e JavaScript com interface intuitiva e responsiva.",
          techs: ["HTML", "CSS", "JavaScript"],
          url: "https://github.com/andrefelipebarros/BiSyllab-Web-Design",
        },
        {
          name: "Site Pessoal",
          description:
            "Um portfólio pessoal e vitrine de projetos construído com tecnologias web modernas e princípios de design responsivo.",
          techs: ["HTML", "CSS", "JavaScript"],
          url: "https://github.com/andrefelipebarros/meu-projeto-site",
        },
        {
          name: "Primeiro Jogo - Unity",
          description:
            "Um jogo de plataforma 2D desenvolvido em Unity com C#, com mecânicas de jogador, design de níveis e física de jogo.",
          techs: ["C#", "Unity"],
          url: "https://github.com/andrefelipebarros/FirstGameUnity",
        },
        {
          name: "Clone do Flappy Bird",
          description:
            "Um jogo inspirado no Flappy Bird construído em Unity como exercício de aprendizado em desenvolvimento de jogos, física e rastreamento de pontuação.",
          techs: ["C#", "Unity"],
          url: "https://github.com/andrefelipebarros/Game-inspired-by-Flappy-Bird-Unity",
        },
        {
          name: "Visual Novel - Ren'Py",
          description:
            "Um jogo de light novel desenvolvido em Python usando a engine Ren'Py com caminhos narrativos ramificados e arte personalizada.",
          techs: ["Python", "Ren'Py"],
          url: "https://github.com/andrefelipebarros/First-Game-for-Ren-Py",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle:
        "Estou sempre aberto a novas oportunidades, colaborações e conversas. Sinta-se à vontade para entrar em contato!",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      footer: "Projetado e Construído por Andre Felipe",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];