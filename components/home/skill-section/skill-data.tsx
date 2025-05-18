import DeveloperMode from '@mui/icons-material/IntegrationInstructions';
import PhoneIphone from '@mui/icons-material/PhoneIphone';
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
                'Ant Design'
            ]
        },
        {
            title: t('BackendDevelopment.Title'),
            description: t('BackendDevelopment.Description'),
            icon: <DeveloperMode />,
            skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'NestJS', 'Authentication']
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
            ]
        },
        {
            title: t('MobileDevelopment.Title'),
            description: t('MobileDevelopment.Description'),
            icon: <PhoneIphone />,
            skills: ['React Native', 'Responsive Design', 'Mobile-first Approach', 'Touch Interfaces']
        },
        {
            title: t('DevelopmentTools.Title'),
            description: t('DevelopmentTools.Description'),
            icon: <Terminal />,
            skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Docker', 'CI/CD', 'Jest', 'Testing Library']
        }
    ];
};
