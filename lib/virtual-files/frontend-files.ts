import type { FileTab } from '../ide-types'

export const frontendPortfolioFiles: FileTab[] = [
  {
      id: 'frontend-package-json',
      name: 'package.json',
      path: 'serhat-belen/frontend/package.json',
      icon: '📦',
      content: `{
  "name": "serhat-belen-frontend",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^5.4.8"
  }
}`
    },
  {
      id: 'index-html',
      name: 'index.html',
      path: 'serhat-belen/frontend/index.html',
      icon: '🌐',
      content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Serhat Belen Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
    },
  {
      id: 'main-tsx',
      name: 'main.tsx',
      path: 'serhat-belen/frontend/src/main.tsx',
      icon: '⚛️',
      content: `import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);`
    },
  {
      id: 'app-tsx',
      name: 'App.tsx',
      path: 'serhat-belen/frontend/src/App.tsx',
      icon: '⚛️',
      content: `import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HeroHeader } from "./components/hero-header";
import AboutMe from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function App() {
  return (
    <main className="app-shell">
      <HeroHeader />

      <section className="section">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </main>
  );
}`
    },
  {
      id: 'hero-header',
      name: 'hero-header.tsx',
      path: 'serhat-belen/frontend/src/components/hero-header.tsx',
      icon: '🧱',
      content: `import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export function HeroHeader() {
  return (
    <header className="hero">
      <p className="hero-eyebrow">Serhat Belen</p>
      <h1 className="hero-title">Full Stack Developer</h1>
      <p className="hero-subtitle">
        A clear and simple overview of my background, projects, and contact information.
      </p>
      <nav className="hero-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "hero-nav-link hero-nav-link-active" : "hero-nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}`
    },
  {
      id: 'index-css',
      name: 'index.css',
      path: 'serhat-belen/frontend/src/index.css',
      icon: '🎨',
      content: `:root {
  color-scheme: dark;
  --bg: #0b1017;
  --panel: #131d2b;
  --panel-border: #2a384c;
  --text: #d7e4f5;
  --muted: #9fb5cc;
  --accent: #72d6cf;
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
}

body {
  background: radial-gradient(circle at top, #111a27 0%, var(--bg) 45%);
  color: var(--text);
  font-family: "Geist Mono", "Fira Code", Consolas, monospace;
  line-height: 1.5;
}

.app-shell {
  width: min(1100px, 92%);
  margin: 0 auto;
  padding: 48px 0 80px;
}

.hero {
  margin-bottom: 28px;
}

.hero-eyebrow {
  margin: 0;
  color: var(--accent);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 12px;
}

.hero-title {
  margin: 10px 0 8px;
  font-size: clamp(28px, 5vw, 44px);
}

.hero-subtitle {
  margin: 0;
  color: var(--muted);
  max-width: 70ch;
}

.hero-nav {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hero-nav-link {
  border: 1px solid #2d3f57;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  color: #9fb5cc;
  background: #152132;
  text-decoration: none;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;
}

.hero-nav-link:hover {
  background: #1c2c41;
  color: #d7e4f5;
}

.hero-nav-link-active {
  background: #233752;
  border-color: #43658c;
  color: #e8f2ff;
}

.section {
  margin-top: 16px;
  border: 1px solid var(--panel-border);
  border-radius: 14px;
  background: var(--panel);
  overflow: hidden;
}`
    },
  {
      id: 'about',
      name: 'about.tsx',
      path: 'serhat-belen/frontend/src/pages/about.tsx',
      icon: '⚛️',
      content: `import React from "react";
import { AboutHighlightsGrid } from "../components/about-highlights-grid";
import { AboutRoleBadge } from "../components/about-role-badge";
import { aboutDescriptionParagraphs } from "../data/about-description-paragraphs";
import { SectionHeading } from "../components/section-heading";

export function AboutMe() {
  return (
    <section className="p-6 sm:p-10">
      <div className="max-w-3xl">
        <SectionHeading eyebrow="About" title="Serhat Belen" />
        <AboutRoleBadge />

        <div className="mt-6 space-y-4 text-[#b4c6db] leading-7">
          {aboutDescriptionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <AboutHighlightsGrid />
      </div>
    </section>
  );
}

export default AboutMe;`
    },
  {
      id: 'about-description-paragraphs',
      name: 'about-description-paragraphs.ts',
      path: 'serhat-belen/frontend/src/data/about-description-paragraphs.ts',
      icon: '🧩',
      content: `export const aboutDescriptionParagraphs = [
  "Full Stack Developer with 5+ years of experience specializing in scalable backend systems and modern web applications.",
  "Proficient in Node.js ecosystem technologies, .NET/C#, and event-driven architectures with RabbitMQ and high-throughput async pipelines.",
  "Strong focus on performance optimization including Redis caching strategies and production memory-leak diagnostics.",
];`
    },
  {
      id: 'about-role-badge',
      name: 'about-role-badge.tsx',
      path: 'serhat-belen/frontend/src/components/about-role-badge.tsx',
      icon: '🧱',
      content: `import React from "react";

export function AboutRoleBadge() {
  return (
    <p className="text-lg text-[#9cc7ff] mt-2">
      Full Stack Developer · 5+ years
    </p>
  );
}`
    },
  {
      id: 'about-highlights-grid',
      name: 'about-highlights-grid.tsx',
      path: 'serhat-belen/frontend/src/components/about-highlights-grid.tsx',
      icon: '🧱',
      content: `import React from "react";
import { aboutHighlights } from "../data/about-highlights";

export function AboutHighlightsGrid() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {aboutHighlights.map((item) => (
        <div
          key={item}
          className="rounded-lg border border-[#2a384c] bg-[#131d2b] px-4 py-3 text-sm text-[#c7d7ea]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}`
    },
  {
      id: 'section-heading',
      name: 'section-heading.tsx',
      path: 'serhat-belen/frontend/src/components/section-heading.tsx',
      icon: '🧱',
      content: `import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-[#72d6cf]">{eyebrow}</p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-2 text-[#e8f2ff]">
        {title}
      </h1>
    </>
  );
}`
    },
  {
      id: 'about-highlights',
      name: 'about-highlights.ts',
      path: 'serhat-belen/frontend/src/data/about-highlights.ts',
      icon: '🧩',
      content: `export const aboutHighlights = [
  "Dockerized monorepo architecture",
  "AWS EC2 and Lightsail deployments",
  "Fast-paced startup execution",
  "Critical system ownership",
];`
    },
  {
      id: 'skills',
      name: 'skills.json',
      path: 'serhat-belen/skills.json',
      icon: '📦',
      content: `{
  "technicalExpertise": {
    "backend": [
      "Node.js",
      "NestJS", 
      "Express",
      ".NET (C# / ASP.NET Core)",
      "Java",
      "Spring Boot",
      "Event-Driven Architecture",
      "RabbitMQ",
      "REST APIs"
    ],
    "frontend": [
      "React",
      "Next.js",
      "React Native",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Redux",
      "Zustand",
      "Jotai"
    ],
    "databases": [
      "MongoDB",
      "PostgreSQL", 
      "Redis",
      "SQL Optimization",
      "NoSQL Schema Design",
      "MongoDB Aggregation Pipeline Optimization",
      "Indexing Strategies",
      "Query Performance Analysis",
      "Data Denormalization"
    ],
    "ai": [
      "LLM API Integration",
      "Prompt Engineering",
      "AI Workflow Automation"
    ],
    "infrastructure": [
      "Docker",
      "Dockerized Monorepo Deployments",
      "AWS (EC2, S3, Lightsail)",
      "CI/CD Pipelines",
      "Ubuntu Server Administration",
      "Nginx"
    ],
    "engineering": [
      "System Design",
      "Plugin Architecture",
      "Performance Optimization",
      "Memory Profiling",
      "Unit Testing (Jest)"
    ]
  }
}`
    },
  {
      id: 'experience',
      name: 'experience.tsx',
      path: 'serhat-belen/frontend/src/pages/experience.tsx',
      icon: '💼',
      content: `import React, { useEffect, useState } from "react";
import { ExperienceCard, type WorkExperience } from "../components/experience-card";
import { SectionHeading } from "../components/section-heading";

const API_BASE_URL = "http://localhost:3001/api";

export function Experience() {
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExperiences = async () => {
      const minDelayPromise = new Promise<void>((resolve) => setTimeout(resolve, 1000));

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(API_BASE_URL + "/experiences");
        if (!response.ok) {
          throw new Error("Failed to load experiences: " + response.status);
        }

        const data: WorkExperience[] = await response.json();
        await minDelayPromise;
        setWorkExperience(data);
      } catch (err) {
        await minDelayPromise;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    loadExperiences();
  }, []);

  return (
    <section className="p-6 sm:p-10">
      <div className="max-w-5xl">
        <SectionHeading eyebrow="Experience" title="Work History" />

        {isLoading && <p className="mt-6 text-sm text-[#9cc7ff]">Loading experiences...</p>}
        {error && <p className="mt-6 text-sm text-red-400">{error}</p>}

        {!isLoading && !error && (
          <div className="mt-8 space-y-4">
            {workExperience.map((job) => (
              <ExperienceCard key={job.company + "-" + job.period} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;`
    },
  {
      id: 'experience-card',
      name: 'experience-card.tsx',
      path: 'serhat-belen/frontend/src/components/experience-card.tsx',
      icon: '🧱',
      content: `import React from "react";
import { ExperienceAchievements } from "./experience-achievements";
import { ExperienceJobHeader } from "./experience-job-header";
import { TechStack } from "./tech-stack";

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  techStack: string[];
  achievements: string[];
}

interface ExperienceCardProps {
  job: WorkExperience;
}

export function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <article className="rounded-xl border border-[#2a384c] bg-[#131d2b] p-5">
      <ExperienceJobHeader company={job.company} period={job.period} />
      <p className="mt-2 text-sm text-[#c7d7ea]">{job.role}</p>
      <TechStack items={job.techStack} />
      <ExperienceAchievements items={job.achievements} />
    </article>
  );
}`
    },
  {
      id: 'experience-achievements',
      name: 'experience-achievements.tsx',
      path: 'serhat-belen/frontend/src/components/experience-achievements.tsx',
      icon: '🧱',
      content: `import React from "react";

interface ExperienceAchievementsProps {
  items: string[];
}

export function ExperienceAchievements({ items }: ExperienceAchievementsProps) {
  return (
    <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-[#b9cbe2]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}`
    },
  {
      id: 'experience-job-header',
      name: 'experience-job-header.tsx',
      path: 'serhat-belen/frontend/src/components/experience-job-header.tsx',
      icon: '🧱',
      content: `import React from "react";

interface ExperienceJobHeaderProps {
  company: string;
  period: string;
}

export function ExperienceJobHeader({
  company,
  period,
}: ExperienceJobHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
      <h2 className="text-lg font-semibold text-[#e8f2ff]">{company}</h2>
      <p className="text-xs text-[#9cc7ff]">{period}</p>
    </div>
  );
}`
    },
  {
      id: 'tech-badge',
      name: 'tech-badge.tsx',
      path: 'serhat-belen/frontend/src/components/tech-badge.tsx',
      icon: '🧱',
      content: `import React from "react";

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="text-xs rounded-md border border-[#39506b] bg-[#182436] px-2 py-1 text-[#b7d3f3]">
      {tech}
    </span>
  );
}`
    },
  {
      id: 'tech-stack',
      name: 'tech-stack.tsx',
      path: 'serhat-belen/frontend/src/components/tech-stack.tsx',
      icon: '🧱',
      content: `import React from "react";
import { TechBadge } from "./tech-badge";

interface TechStackProps {
  items: string[];
}

export function TechStack({ items }: TechStackProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((tech) => (
        <TechBadge key={tech} tech={tech} />
      ))}
    </div>
  );
}`
    },
  {
      id: 'projects',
      name: 'projects.tsx',
      path: 'serhat-belen/frontend/src/pages/projects.tsx',
      icon: '🚀',
      content: `import React, { useEffect, useState } from "react";
import { ProjectCard, type Project } from "../components/project-card";
import { SectionHeading } from "../components/section-heading";

const API_BASE_URL = "http://localhost:3001/api";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      const minDelayPromise = new Promise<void>((resolve) => setTimeout(resolve, 1000));

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(API_BASE_URL + "/projects");
        if (!response.ok) {
          throw new Error("Failed to load projects: " + response.status);
        }

        const payload: unknown = await response.json();
        const data = Array.isArray(payload)
          ? payload
          : (payload && typeof payload === "object" && Array.isArray((payload as { data?: unknown }).data))
            ? (payload as { data: Project[] }).data
            : [];

        await minDelayPromise;
        setProjects(data as Project[]);
      } catch (err) {
        await minDelayPromise;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section className="p-6 sm:p-10">
      <div className="max-w-5xl">
        <SectionHeading eyebrow="Projects" title="Featured Work" />

        {isLoading && <p className="mt-6 text-sm text-[#9cc7ff]">Loading projects...</p>}
        {error && <p className="mt-6 text-sm text-red-400">{error}</p>}

        {!isLoading && !error && (
          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}`
    },
  {
      id: 'project-card',
      name: 'project-card.tsx',
      path: 'serhat-belen/frontend/src/components/project-card.tsx',
      icon: '🧱',
      content: `import React from "react";

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  features?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-[#2a384c] bg-[#131d2b] p-5">
      <h2 className="text-lg font-semibold text-[#e8f2ff]">{project.name}</h2>
      <p className="mt-1 text-xs text-[#9cc7ff]">{project.techStack.join(" · ")}</p>
      <p className="mt-4 text-sm leading-6 text-[#c1d2e7]">{project.description}</p>
    </article>
  );
}`
    },
  {
      id: 'contact',
      name: 'contact.tsx',
      path: 'serhat-belen/frontend/src/pages/contact.tsx',
      icon: '📧',
      content: `import React, { useEffect, useState } from "react";
import { ContactInfoCard, type ContactCard } from "../components/contact-info-card";
import { SectionHeading } from "../components/section-heading";

const API_BASE_URL = "http://localhost:3001/api";

export function Contact() {
  const [contactCards, setContactCards] = useState<ContactCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContactInfo = async () => {
      const minDelayPromise = new Promise<void>((resolve) => setTimeout(resolve, 1000));

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(API_BASE_URL + "/contact");
        if (!response.ok) {
          throw new Error("Failed to load contact info: " + response.status);
        }

        const payload: unknown = await response.json();
        const data = Array.isArray(payload)
          ? payload
          : (payload && typeof payload === "object" && Array.isArray((payload as { data?: unknown }).data))
            ? (payload as { data: ContactCard[] }).data
            : [];

        await minDelayPromise;
        setContactCards(data as ContactCard[]);
      } catch (err) {
        await minDelayPromise;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    loadContactInfo();
  }, []);

  return (
    <section className="p-6 sm:p-10">
      <div className="max-w-3xl">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Useful" />
        <p className="mt-3 text-[#b4c6db]">
          If you have a project idea or need support on an existing product,
          feel free to reach out. I usually reply within 24 hours.
        </p>

        {isLoading && <p className="mt-6 text-sm text-[#9cc7ff]">Loading contact info...</p>}
        {error && <p className="mt-6 text-sm text-red-400">{error}</p>}

        {!isLoading && !error && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactCards.map((item) => (
              <ContactInfoCard
                key={item.title}
                title={item.title}
                value={item.value}
                href={item.href}
                external={item.external}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;`
    },
  {
      id: 'contact-info-card',
      name: 'contact-info-card.tsx',
      path: 'serhat-belen/frontend/src/components/contact-info-card.tsx',
      icon: '🧱',
      content: `import React from "react";

export interface ContactCard {
  title: string;
  value: string;
  href: string;
  external?: boolean;
}

export function ContactInfoCard({
  title,
  value,
  href,
  external = false,
}: ContactCard) {
  return (
    <a
      className="rounded-xl border border-[#2a384c] bg-[#131d2b] p-4"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <p className="text-xs text-[#9cc7ff]">{title}</p>
      <p className="mt-1 text-[#e8f2ff]">{value}</p>
    </a>
  );
}`
    },
]
