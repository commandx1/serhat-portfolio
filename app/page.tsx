import type { Metadata } from 'next';

import { IDELayout } from '@/components/ide/ide-layout';
import { createPageMetadata } from '@/lib/seo';

const pageMetadata = createPageMetadata({
    title: 'Serhat Belen - Full-Stack Developer',
    description:
    'Interactive IDE-style portfolio of Serhat Belen with projects, experience, contact details, and developer-focused workflow simulation.',
    path: '/',
    keywords: ['interactive portfolio', 'developer portfolio', 'IDE portfolio']
});

export const metadata: Metadata = {
    ...pageMetadata,
    title: {
        absolute: 'Serhat Belen - Full-Stack Developer'
    }
};

export default function Home() {
    return (
        <>np
            <noscript>
                <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
                    <h1>Serhat Belen - Full Stack Developer</h1>
                    <p>Explore detailed pages for experience, projects, and contact information.</p>
                    <ul>
                        <li>
                            <a href='/about'>About</a>
                        </li>
                        <li>
                            <a href='/experience'>Experience</a>
                        </li>
                        <li>
                            <a href='/projects'>Projects</a>
                        </li>
                        <li>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </noscript>
            <IDELayout />
        </>
    );
}
