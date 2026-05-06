import type { FileTreeNode } from './ide-types'
import type { FileTab } from './ide-types'
import { backendPortfolioFiles } from './virtual-files/backend-files'
import { frontendPortfolioFiles } from './virtual-files/frontend-files'
import { rootPortfolioFiles } from './virtual-files/root-files'

export const portfolioFiles: FileTab[] = [
  ...rootPortfolioFiles,
  ...frontendPortfolioFiles,
  ...backendPortfolioFiles,
]

export const fileStructure: FileTreeNode[] = [
  {
    name: 'serhat-belen',
    type: 'folder' as const,
    expanded: true,
    children: [
      { name: 'README.md', type: 'file' as const, id: 'readme' },
      { name: 'OZGECMIS.md', type: 'file' as const, id: 'ozgecmis' },
      { name: 'RESUME.md', type: 'file' as const, id: 'resume' },
      { name: 'skills.json', type: 'file' as const, id: 'skills' },
      {
        name: 'frontend',
        type: 'folder' as const,
        expanded: false,
        children: [
          { name: 'package.json', type: 'file' as const, id: 'frontend-package-json' },
          { name: 'index.html', type: 'file' as const, id: 'index-html' },
          {
            name: 'src',
            type: 'folder' as const,
            expanded: false,
            children: [
              { name: 'main.tsx', type: 'file' as const, id: 'main-tsx' },
              { name: 'App.tsx', type: 'file' as const, id: 'app-tsx' },
              { name: 'index.css', type: 'file' as const, id: 'index-css' },
              {
                name: 'pages',
                type: 'folder' as const,
                expanded: false,
                children: [
                  { name: 'about.tsx', type: 'file' as const, id: 'about' },
                  { name: 'experience.tsx', type: 'file' as const, id: 'experience' },
                  { name: 'projects.tsx', type: 'file' as const, id: 'projects' },
                  { name: 'contact.tsx', type: 'file' as const, id: 'contact' }
                ]
              },
              {
                name: 'components',
                type: 'folder' as const,
                expanded: false,
                children: [
                  { name: 'hero-header.tsx', type: 'file' as const, id: 'hero-header' },
                  { name: 'about-role-badge.tsx', type: 'file' as const, id: 'about-role-badge' },
                  { name: 'section-heading.tsx', type: 'file' as const, id: 'section-heading' },
                  { name: 'about-highlights-grid.tsx', type: 'file' as const, id: 'about-highlights-grid' },
                  { name: 'contact-info-card.tsx', type: 'file' as const, id: 'contact-info-card' },
                  { name: 'project-card.tsx', type: 'file' as const, id: 'project-card' },
                  { name: 'experience-card.tsx', type: 'file' as const, id: 'experience-card' },
                  { name: 'experience-achievements.tsx', type: 'file' as const, id: 'experience-achievements' },
                  { name: 'experience-job-header.tsx', type: 'file' as const, id: 'experience-job-header' },
                  { name: 'tech-stack.tsx', type: 'file' as const, id: 'tech-stack' },
                  { name: 'tech-badge.tsx', type: 'file' as const, id: 'tech-badge' }
                ]
              },
              {
                name: 'data',
                type: 'folder' as const,
                expanded: false,
                children: [
                  { name: 'about-highlights.ts', type: 'file' as const, id: 'about-highlights' },
                  { name: 'about-description-paragraphs.ts', type: 'file' as const, id: 'about-description-paragraphs' }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'backend',
        type: 'folder' as const,
        expanded: false,
        children: [
          { name: 'README.md', type: 'file' as const, id: 'backend-readme' },
          { name: 'package.json', type: 'file' as const, id: 'backend-package-json' },
          {
            name: 'src',
            type: 'folder' as const,
            expanded: false,
            children: [
              { name: 'server.js', type: 'file' as const, id: 'backend-server-js' },
              { name: 'app.js', type: 'file' as const, id: 'backend-app-js' },
              {
                name: 'routes',
                type: 'folder' as const,
                expanded: false,
                children: [
                  { name: 'index.js', type: 'file' as const, id: 'backend-routes-index-js' },
                  { name: 'profile-routes.js', type: 'file' as const, id: 'backend-routes-profile-js' },
                  { name: 'contact-routes.js', type: 'file' as const, id: 'backend-routes-contact-js' },
                  { name: 'experience-routes.js', type: 'file' as const, id: 'backend-routes-experience-js' },
                  { name: 'project-routes.js', type: 'file' as const, id: 'backend-routes-project-js' }
                ]
              },
              {
                name: 'controllers',
                type: 'folder' as const,
                expanded: false,
                children: [
                  { name: 'profile-controller.js', type: 'file' as const, id: 'backend-controllers-profile-js' },
                  { name: 'contact-controller.js', type: 'file' as const, id: 'backend-controllers-contact-js' },
                  { name: 'experience-controller.js', type: 'file' as const, id: 'backend-controllers-experience-js' },
                  { name: 'project-controller.js', type: 'file' as const, id: 'backend-controllers-project-js' }
                ]
              },
              {
                name: 'services',
                type: 'folder' as const,
                expanded: false,
                children: [
                  { name: 'profile-service.js', type: 'file' as const, id: 'backend-services-profile-js' },
                  { name: 'contact-service.js', type: 'file' as const, id: 'backend-services-contact-js' },
                  { name: 'experience-service.js', type: 'file' as const, id: 'backend-services-experience-js' },
                  { name: 'project-service.js', type: 'file' as const, id: 'backend-services-project-js' }
                ]
              },
              {
                name: 'data',
                type: 'folder' as const,
                expanded: false,
                children: [
                  { name: 'contact-data.js', type: 'file' as const, id: 'backend-data-contact-js' },
                  { name: 'experience-data.js', type: 'file' as const, id: 'backend-data-experience-js' },
                  { name: 'projects-data.js', type: 'file' as const, id: 'backend-data-projects-js' }
                ]
              },
              {
                name: 'middlewares',
                type: 'folder' as const,
                expanded: false,
                children: [
                  { name: 'error-handler.js', type: 'file' as const, id: 'backend-middlewares-error-handler-js' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
