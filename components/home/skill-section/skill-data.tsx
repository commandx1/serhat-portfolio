import DeveloperMode from '@mui/icons-material/IntegrationInstructions';
import Speed from '@mui/icons-material/Speed';
import Storage from '@mui/icons-material/Storage';
import Terminal from '@mui/icons-material/Terminal';
import Web from '@mui/icons-material/Web';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

export interface Skill {
    title: string;
    description: string;
    icon: ReactNode;
    skills: string[];
    levels: { name: string; level: number }[];
}

export const useSkillCategories = (): Skill[] => {
    const t = useTranslations('AboutMe.Skills');

    return [
        {
            title: t('FrontendDevelopment.Title'),
            description: t('FrontendDevelopment.Description'),
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
                'Ant Design',
                'WebSocket Client',
                'GraphQL'
            ],
            levels: [
                { name: 'React', level: 97 },
                { name: 'Redux', level: 95 },
                { name: 'Jotai', level: 85 },
                { name: 'Next.js', level: 90 },
                { name: 'Vue.js', level: 70 },
                { name: 'TypeScript', level: 90 },
                { name: 'SCSS/CSS', level: 97 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'Material UI', level: 95 },
                { name: 'Ant Design', level: 95 }
            ]
        },
        {
            title: t('BackendDevelopment.Title'),
            description: t('BackendDevelopment.Description'),
            icon: <DeveloperMode />,
            skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'NestJS', 'Authentication', 'WebSocket', 'GraphQL'],
            levels: [
                { name: 'Node.js', level: 90 },
                { name: 'Express', level: 90 },
                { name: 'RESTful APIs', level: 90 },
                { name: 'NestJS', level: 85 },
            ]
        },
        {
            title: t('DatabaseManagement.Title'),
            description: t('DatabaseManagement.Description'),
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
            ],
            levels: [
                { name: 'MongoDB', level: 95 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'Indexing', level: 90 },
                { name: 'Redis', level: 85 },
                { name: 'Data Modeling', level: 85 },
                { name: 'Aggregation', level: 95 },
                { name: 'Query Optimization', level: 90 }
            ]
        },
        {
            title: t('WebPerformance.Title'),
            description: t('WebPerformance.Description'),
            icon: <Speed />,
            skills: [
                'SEO',
                'Performance Optimization',
                'Web Accessibility',
                'Progressive Web Apps',
                'Cross-browser Compatibility'
            ],
            levels: [
                { name: 'SEO', level: 95 },
                { name: 'Performance Optimization', level: 90 },
                { name: 'Progressive Web Apps', level: 95 },
                { name: 'Cross-browser Compatibility', level: 95 }
            ]
        },
        {
            title: t('DevelopmentTools.Title'),
            description: t('DevelopmentTools.Description'),
            icon: <Terminal />,
            skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Docker', 'CI/CD', 'Jest', 'Testing Library'],
            levels: [
                { name: 'Git', level: 95 },
                { name: 'GitHub', level: 95 },
                { name: 'VS Code', level: 98 },
                { name: 'Webpack', level: 85 },
                { name: 'Docker', level: 75 },
                { name: 'CI/CD', level: 95 },
                { name: 'Jest', level: 65 },
                { name: 'Testing Library', level: 65 }
            ]
        }
    ];
};
