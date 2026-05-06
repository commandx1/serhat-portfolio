import type { FileTab } from '../ide-types'

export const backendPortfolioFiles: FileTab[] = [
  {
    id: 'backend-package-json',
    name: 'package.json',
    path: 'serhat-belen/backend/package.json',
    icon: '📦',
    content: `{
  "name": "serhat-belen-backend",
  "version": "1.0.0",
  "private": true,
  "main": "src/server.js",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2"
  }
}`
  },
  {
    id: 'backend-server-js',
    name: 'server.js',
    path: 'serhat-belen/backend/src/server.js',
    icon: '🟢',
    content: `const app = require("./app");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(\`[server] API listening on http://localhost:\${PORT}\`);
});`
  },
  {
    id: 'backend-app-js',
    name: 'app.js',
    path: 'serhat-belen/backend/src/app.js',
    icon: '⚙️',
    content: `const express = require("express");
const cors = require("cors");

const apiRoutes = require("./routes");
const errorHandler = require("./middlewares/error-handler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "serhat-belen-backend" });
});

app.use("/api", apiRoutes);
app.use(errorHandler);

module.exports = app;`
  },
  {
    id: 'backend-routes-index-js',
    name: 'index.js',
    path: 'serhat-belen/backend/src/routes/index.js',
    icon: '🧭',
    content: `const { Router } = require("express");

const profileRoutes = require("./profile-routes");
const contactRoutes = require("./contact-routes");
const experienceRoutes = require("./experience-routes");
const projectRoutes = require("./project-routes");

const router = Router();

router.use("/profile", profileRoutes);
router.use("/contact", contactRoutes);
router.use("/experiences", experienceRoutes);
router.use("/projects", projectRoutes);

module.exports = router;`
  },
  {
    id: 'backend-routes-profile-js',
    name: 'profile-routes.js',
    path: 'serhat-belen/backend/src/routes/profile-routes.js',
    icon: '🛣️',
    content: `const { Router } = require("express");
const { getProfile } = require("../controllers/profile-controller");

const router = Router();

router.get("/", getProfile);

module.exports = router;`
  },
  {
    id: 'backend-routes-contact-js',
    name: 'contact-routes.js',
    path: 'serhat-belen/backend/src/routes/contact-routes.js',
    icon: '🛣️',
    content: `const { Router } = require("express");
const {
  getContactInfo,
  createContactMessage,
} = require("../controllers/contact-controller");

const router = Router();

router.get("/", getContactInfo);
router.post("/", createContactMessage);

module.exports = router;`
  },
  {
    id: 'backend-routes-experience-js',
    name: 'experience-routes.js',
    path: 'serhat-belen/backend/src/routes/experience-routes.js',
    icon: '🛣️',
    content: `const { Router } = require("express");
const {
  getWorkExperiences,
  getWorkExperienceByCompany,
} = require("../controllers/experience-controller");

const router = Router();

router.get("/", getWorkExperiences);
router.get("/:company", getWorkExperienceByCompany);

module.exports = router;`
  },
  {
    id: 'backend-routes-project-js',
    name: 'project-routes.js',
    path: 'serhat-belen/backend/src/routes/project-routes.js',
    icon: '🛣️',
    content: `const { Router } = require("express");
const {
  getProjects,
  getProjectByName,
} = require("../controllers/project-controller");

const router = Router();

router.get("/", getProjects);
router.get("/:name", getProjectByName);

module.exports = router;`
  },
  {
    id: 'backend-controllers-profile-js',
    name: 'profile-controller.js',
    path: 'serhat-belen/backend/src/controllers/profile-controller.js',
    icon: '🎮',
    content: `const profileService = require("../services/profile-service");

function getProfile(_req, res) {
  const profile = profileService.getProfile();
  res.json(profile);
}

module.exports = {
  getProfile,
};`
  },
  {
    id: 'backend-controllers-contact-js',
    name: 'contact-controller.js',
    path: 'serhat-belen/backend/src/controllers/contact-controller.js',
    icon: '🎮',
    content: `const contactService = require("../services/contact-service");

function getContactInfo(_req, res) {
  const contactInfo = contactService.getContactInfo();
  res.json(contactInfo);
}

function createContactMessage(req, res, next) {
  try {
    const message = contactService.createMessage(req.body);
    res.status(201).json({
      success: true,
      data: message,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getContactInfo,
  createContactMessage,
};`
  },
  {
    id: 'backend-controllers-experience-js',
    name: 'experience-controller.js',
    path: 'serhat-belen/backend/src/controllers/experience-controller.js',
    icon: '🎮',
    content: `const experienceService = require("../services/experience-service");

function getWorkExperiences(_req, res) {
  const experiences = experienceService.getAllWorkExperiences();
  res.json(experiences);
}

function getWorkExperienceByCompany(req, res) {
  const { company } = req.params;
  const experience = experienceService.getWorkExperienceByCompany(company);

  if (!experience) {
    return res.status(404).json({
      success: false,
      error: "Work experience not found",
    });
  }

  return res.json(experience);
}

module.exports = {
  getWorkExperiences,
  getWorkExperienceByCompany,
};`
  },
  {
    id: 'backend-controllers-project-js',
    name: 'project-controller.js',
    path: 'serhat-belen/backend/src/controllers/project-controller.js',
    icon: '🎮',
    content: `const projectService = require("../services/project-service");

function getProjects(_req, res) {
  const projects = projectService.getAllProjects();
  res.json(projects);
}

function getProjectByName(req, res) {
  const { name } = req.params;
  const project = projectService.getProjectByName(name);

  if (!project) {
    return res.status(404).json({
      success: false,
      error: "Project not found",
    });
  }

  return res.json(project);
}

module.exports = {
  getProjects,
  getProjectByName,
};`
  },
  {
    id: 'backend-services-profile-js',
    name: 'profile-service.js',
    path: 'serhat-belen/backend/src/services/profile-service.js',
    icon: '🧠',
    content: `function getProfile() {
  return {
    name: "Serhat Belen",
    role: "Full Stack Developer",
    location: "Turkey",
    focus: ["Node.js", "TypeScript", "Distributed Systems"],
  };
}

module.exports = {
  getProfile,
};`
  },
  {
    id: 'backend-services-contact-js',
    name: 'contact-service.js',
    path: 'serhat-belen/backend/src/services/contact-service.js',
    icon: '🧠',
    content: `const { contactCards } = require("../data/contact-data");

function getContactInfo() {
  return contactCards;
}

function createMessage(payload) {
  const { name, email, message } = payload || {};

  if (!name || !email || !message) {
    const error = new Error("name, email and message are required");
    error.statusCode = 400;
    throw error;
  }

  return {
    id: Date.now(),
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  };
}

module.exports = {
  getContactInfo,
  createMessage,
};`
  },
  {
    id: 'backend-data-contact-js',
    name: 'contact-data.js',
    path: 'serhat-belen/backend/src/data/contact-data.js',
    icon: '🧩',
    content: `const contactCards = [
  {
    title: "Email",
    value: "serhatbelen7@gmail.com",
    href: "mailto:serhatbelen7@gmail.com",
  },
  {
    title: "Phone",
    value: "+90 534 420 0038",
    href: "tel:+905344200038",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/serhat-belen",
    href: "https://linkedin.com/in/serhat-belen",
    external: true,
  },
  {
    title: "GitHub",
    value: "github.com/commandx1",
    href: "https://github.com/commandx1",
    external: true,
  },
];

module.exports = {
  contactCards,
};`
  },
  {
    id: 'backend-services-project-js',
    name: 'project-service.js',
    path: 'serhat-belen/backend/src/services/project-service.js',
    icon: '🧠',
    content: `const { projects } = require("../data/projects-data");

function getAllProjects() {
  return projects;
}

function getProjectByName(projectName) {
  const normalizedProjectName = decodeURIComponent(projectName || "")
    .trim()
    .toLowerCase();

  return projects.find(
    (item) => item.name.toLowerCase() === normalizedProjectName,
  );
}

module.exports = {
  getAllProjects,
  getProjectByName,
};`
  },
  {
    id: 'backend-data-experience-js',
    name: 'experience-data.js',
    path: 'serhat-belen/backend/src/data/experience-data.js',
    icon: '🧩',
    content: `const workExperience = [
  {
    company: "Onlay AI",
    role: "Full Stack Developer",
    period: "Jun 2025 – Present",
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "RabbitMQ",
      "Redis",
      "AWS",
      "LLM APIs",
    ],
    achievements: [
      "Designed modular plugin architecture for dynamic AI integrations",
      "Built AI-powered features with LLM APIs and async pipelines",
      "Reduced insurance eligibility processing latency by ~50%",
      "Led development of operational dashboards for system health",
      "Resolved critical production memory leaks via profiling",
      "Led backend architectural decisions for AI integrations",
    ],
  },
  {
    company: "Avena – Retrace",
    role: "Full Stack Developer",
    period: "Apr 2021 – May 2025",
    techStack: [
      "React",
      "Node.js",
      ".NET (C#)",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Puppeteer",
      "Docker",
    ],
    achievements: [
      "Developed high-throughput EDI services for healthcare",
      "Optimized MongoDB aggregation pipelines significantly",
      "Improved performance with Redis, 40% faster dashboards",
      "Automated insurance verification with Puppeteer",
      "Managed CI/CD for 50+ healthcare organizations",
      "Deployed Dockerized monorepo on AWS EC2/Lightsail",
    ],
  },
  {
    company: "Bynogame",
    role: "Frontend Developer",
    period: "Sep 2020 – Apr 2021",
    techStack: ["React", "JavaScript", "Laravel APIs", "SCSS"],
    achievements: [
      "Built UIs for high-traffic e-commerce platform",
      "Converted Figma designs to production components",
      "Contributed to performance and SEO optimization",
    ],
  },
];

module.exports = {
  workExperience,
};`
  },
  {
    id: 'backend-data-projects-js',
    name: 'projects-data.js',
    path: 'serhat-belen/backend/src/data/projects-data.js',
    icon: '🧩',
    content: `const projects = [
  {
    name: "Ciftopia – Couples App",
    techStack: ["React Native/Expo", "NestJS", "AWS S3"],
    description: "Full-stack mobile application for couples with real-time features and AI integration.",
    features: [
      "Real-time couples quiz powered by Socket.io",
      "AI-generated stories with TTS (OpenAI/Gemini)",
      "React Three Fiber 3D space explorer",
      "Gamification system for couple engagement",
      "RevenueCat subscriptions & in-app purchases",
      "Push notifications via Expo/FCM",
    ],
  },
  {
    name: "Dental B2B Marketplace",
    techStack: ["Next.js", "Zustand", ".NET/ASP.NET Core", "PostgreSQL"],
    description: "Net32-style B2B dental supply marketplace connecting dental clinics with approved suppliers.",
    features: [
      "50,000+ products across 8+ categories",
      "Performance-focused SEO-optimized frontend",
      "ASP.NET Core RESTful API layer",
      "Order management & supplier approval workflows",
      "Optimized PostgreSQL with indexing strategies",
    ],
  },
  {
    name: "Time Heroes – Idle Pet-Collecting RPG",
    techStack: ["React", "TypeScript", "Jotai"],
    description: "Developed the in-game UI and client-side logic for an idle pet-collecting RPG game.",
    features: [
      "Interactive game screens and interfaces",
      "Cross-component state management with Jotai",
      "Optimized rendering for game performance",
    ],
  },
];

module.exports = {
  projects,
};`
  },
  {
    id: 'backend-services-experience-js',
    name: 'experience-service.js',
    path: 'serhat-belen/backend/src/services/experience-service.js',
    icon: '🧠',
    content: `const { workExperience } = require("../data/experience-data");

function getAllWorkExperiences() {
  return workExperience;
}

function getWorkExperienceByCompany(companyName) {
  const normalizedCompanyName = decodeURIComponent(companyName || "")
    .trim()
    .toLowerCase();

  return workExperience.find(
    (item) => item.company.toLowerCase() === normalizedCompanyName,
  );
}

module.exports = {
  getAllWorkExperiences,
  getWorkExperienceByCompany,
};`
  },
  {
    id: 'backend-middlewares-error-handler-js',
    name: 'error-handler.js',
    path: 'serhat-belen/backend/src/middlewares/error-handler.js',
    icon: '🛡️',
    content: `function errorHandler(err, _req, res, _next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
}

module.exports = errorHandler;`
  },
  {
    id: 'backend-readme',
    name: 'README.md',
    path: 'serhat-belen/backend/README.md',
    icon: '📄',
    content: `# Backend (Express)

## Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

Runs on \`http://localhost:3001\`.

## API Structure

src/
- routes/
- controllers/
- services/
- data/
- middlewares/

## Endpoints

- \`GET /health\`
- \`GET /api/profile\`
- \`GET /api/contact\`
- \`POST /api/contact\`
- \`GET /api/experiences\`
- \`GET /api/experiences/:company\`
- \`GET /api/projects\`
- \`GET /api/projects/:name\`

## Sample Payload

\`\`\`json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "message": "Hello, let's collaborate."
}
\`\`\``
  }
]
