export interface ExperienceItem {
  company: string
  role: string
  period: string
  techStack: string[]
  achievements: string[]
}

export interface ProjectItem {
  name: string
  description: string
  techStack: string[]
  features: string[]
}

export interface ContactItem {
  title: string
  value: string
  href: string
}

export const aboutSummary = {
  name: 'Serhat Belen',
  title: 'Full Stack Developer',
  experienceYears: '5+ years',
  description: [
    'Full Stack Developer focused on scalable backend systems and modern web applications.',
    'Works across Node.js and .NET ecosystems with event-driven patterns, RabbitMQ and async data pipelines.',
    'Strong focus on production performance, including Redis caching, memory profiling and reliability improvements.',
  ],
}

export const aboutHighlights: string[] = [
  'Dockerized monorepo architecture',
  'AWS EC2 and Lightsail deployments',
  'Fast-paced startup execution',
  'Critical system ownership',
]

export const workExperience: ExperienceItem[] = [
  {
    company: 'Onlay AI',
    role: 'Senior Full Stack Developer',
    period: 'Jun 2025 – Present',
    techStack: ['React', 'Node.js (NestJS)', 'MongoDB', 'RabbitMQ', 'AWS', 'LLM APIs'],
    achievements: [
      'Designed real-time insurance eligibility verification pipelines with automated benefits parsing and coverage detection',
      'Built an automated claims submission engine with attachment extraction, retry logic, and denial detection',
      'Designed event-driven workflows with RabbitMQ and reduced eligibility processing latency by ~50%',
      'Implemented LLM-powered document comprehension for claims processing, EOB parsing, and coverage analysis',
      'Led internal operational dashboards for system health, service metrics, and LLM usage',
      'Resolved critical production memory leaks through in-depth Node.js memory profiling',
    ],
  },
  {
    company: 'Avena – Retrace',
    role: 'Full Stack Developer',
    period: 'Apr 2021 – May 2025',
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis', 'RabbitMQ', 'Puppeteer', 'Docker'],
    achievements: [
      'Developed high-throughput EDI services for healthcare',
      'Implemented rich, high-performance dashboards using complex MongoDB aggregation pipelines and Redis caching',
      'Designed query and cache invalidation flows to keep analytics screens fast under heavy data load',
      'Managed CI/CD pipelines for 50+ healthcare organizations',
    ],
  },
  {
    company: 'Bynogame',
    role: 'Frontend Developer',
    period: 'Sep 2020 – Apr 2021',
    techStack: ['React', 'JavaScript', 'Laravel APIs', 'SCSS'],
    achievements: [
      'Built interfaces for a high-traffic e-commerce platform',
      'Translated design files into production-ready components',
      'Contributed to performance and SEO optimization efforts',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Ciftopia – Couples App',
    techStack: ['React Native/Expo', 'NestJS', 'AWS S3'],
    description: 'Full-stack mobile app for couples with real-time interactions and AI features.',
    features: [
      'Real-time couples quiz powered by Socket.io',
      'AI-generated stories with TTS integration',
      '3D experience modules with React Three Fiber',
    ],
  },
  {
    name: 'Dental B2B Marketplace',
    techStack: ['Next.js', 'Zustand', '.NET/ASP.NET Core', 'PostgreSQL'],
    description: 'B2B dental supply marketplace connecting clinics with approved suppliers.',
    features: [
      '50,000+ products across 8+ categories',
      'SEO-focused storefront and performant UX',
      'Supplier workflows and order management',
    ],
  },
  {
    name: 'Time Heroes – Idle RPG',
    techStack: ['React', 'TypeScript', 'Jotai'],
    description: 'Client-side game UI and interaction flows for an idle pet-collecting RPG.',
    features: [
      'Interactive game screens and HUD components',
      'Cross-component state management with Jotai',
      'Optimized rendering for smooth gameplay',
    ],
  },
]

export const contactItems: ContactItem[] = [
  {
    title: 'Email',
    value: 'serhatbelen7@gmail.com',
    href: 'mailto:serhatbelen7@gmail.com',
  },
  {
    title: 'Phone',
    value: '+90 534 420 0038',
    href: 'tel:+905344200038',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/serhat-belen',
    href: 'https://linkedin.com/in/serhat-belen',
  },
  {
    title: 'GitHub',
    value: 'github.com/commandx1',
    href: 'https://github.com/commandx1',
  },
]
