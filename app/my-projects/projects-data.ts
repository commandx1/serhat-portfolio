export interface Project {
    id: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
    featured: boolean;
    category: 'frontend' | 'fullstack' | 'other';
    screenshots: string[];
}

export const projects: Project[] = [
    {
        id: 'project1',
        image: '/blog/blog4.png',
        technologies: [
            'React',
            'TypeScript',
            'NestJS',
            'MongoDB',
            'Redux',
            'NodeMailer',
            'JsonWebToken',
            'Multer',
            'AWS S3',
            'Google OAuth'
        ],
        github: 'https://github.com/commandx1/blogverse',
        live: 'https://blogverse-dun.vercel.app/',
        featured: true,
        category: 'fullstack',
        screenshots: [
            '/blog/blog-login.png',
            '/blog/blog1.png',
            '/blog/blog2.png',
            '/blog/blog3.png',
            '/blog/blog4.png',
            '/blog/blog5.png',
            '/blog/blog6.png',
            '/blog/blog7.png',
            '/blog/blog8.png',
            '/blog/blog9.png'
        ]
    },
    {
        id: 'project2',
        image: '/plant/plant1.png',
        technologies: [
            'React',
            'NestJS',
            'MongoDB',
            'Redux',
            'Open-Meteo API',
            'TypeScript',
            'JsonWebToken',
            'NodeMailer',
            'Google OAuth',
            'Leaflet',
            'React-Leaflet'
        ],
        github: 'https://github.com/commandx1/plant-healthy-app',
        live: 'https://plant-healthy-app.vercel.app/',
        featured: true,
        category: 'fullstack',
        screenshots: [
            '/plant/plant1.png',
            '/plant/plant2.png',
            '/plant/plant3.png',
            '/plant/plant4.png',
            '/plant/plant5.png'
        ]
    },
    {
        id: 'project3',
        image: '/movieapp/movie1.png',
        technologies: ['React', 'Redux', 'TypeScript', 'OMDb API', 'Axios', 'React Router', 'Framer Motion', 'SCSS'],
        github: 'https://github.com/YNS-JNS/Movie-App-React-Redux',
        live: 'https://invent-ai-movieapp.vercel.app/',
        featured: false,
        category: 'frontend',
        screenshots: ['/movieapp/movie1.png', '/movieapp/movie2.png', '/movieapp/movie3.png', '/movieapp/movie4.png']
    },
    {
        id: 'project4',
        image: '/loveapp/love1.png',
        technologies: [
            'React',
            'Redux',
            'TypeScript',
            'React Router',
            'Swagger',
            'Material UI',
            'SCSS',
            'Express',
            'MongoDB',
            'AWS S3',
            'Multer'
        ],
        github: '',
        live: '',
        featured: false,
        category: 'fullstack',
        screenshots: [
            '/loveapp/love1.png',
            '/loveapp/love2.png',
            '/loveapp/love3.png',
            '/loveapp/love4.png',
            '/loveapp/love5.png',
            '/loveapp/love6.png',
            '/loveapp/love7.png'
        ]
    }
];
