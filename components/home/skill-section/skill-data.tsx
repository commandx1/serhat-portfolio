import DeveloperMode from '@mui/icons-material/IntegrationInstructions';
import PhoneIphone from '@mui/icons-material/PhoneIphone';
import Speed from '@mui/icons-material/Speed';
import Storage from '@mui/icons-material/Storage';
import Terminal from '@mui/icons-material/Terminal';
import Web from '@mui/icons-material/Web';
import { ReactNode } from 'react';

export interface Skill {
    title: string;
    description: string;
    icon: ReactNode;
    skills: string[];
}

export const skillCategories: Skill[] = [
    {
        title: 'Frontend Development',
        description:
            'Creating responsive, accessible, and performant user interfaces with modern frameworks and libraries.',
        icon: <Web />,
        skills: [
            'React',
            'Redux',
            'Jotai',
            'Next.js',
            'Vue.js',
            'TypeScript',
            'SCSS/CSS',
            'Tailwind CSS',
            'Material UI',
            'Ant Design'
        ]
    },
    {
        title: 'Backend Development',
        description:
            'Building robust and scalable server-side applications, APIs, and services that power dynamic web applications, handle complex business logic, and ensure high performance, security, and maintainability.',
        icon: <DeveloperMode />,
        skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'NestJS', 'Authentication']
    },
    {
        title: 'Database Management',
        description: 'Designing and implementing efficient database solutions for various application needs.',
        icon: <Storage />,
        skills: [
            'MongoDB',
            'PostgreSQL',
            'Indexing',
            'Redis',
            'Data Modeling',
            'Optimization',
            'Aggregation',
            'Query Optimization'
        ]
    },
    {
        title: 'Web Performance',
        description: 'Optimizing websites for speed, accessibility, and search engine visibility.',
        icon: <Speed />,
        skills: [
            'SEO',
            'Performance Optimization',
            'Web Accessibility',
            'Progressive Web Apps',
            'Cross-browser Compatibility'
        ]
    },
    {
        title: 'Mobile Development',
        description: 'Creating cross-platform mobile applications with responsive design principles.',
        icon: <PhoneIphone />,
        skills: ['React Native', 'Responsive Design', 'Mobile-first Approach', 'Touch Interfaces']
    },
    {
        title: 'Development Tools',
        description: 'Utilizing modern development tools and practices for efficient workflow and collaboration.',
        icon: <Terminal />,
        skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Docker', 'CI/CD', 'Jest', 'Testing Library']
    }
];
