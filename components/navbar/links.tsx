'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { BouncingElements } from '@/utils/animations/BouncingElements';

import Lang from './lang';

type LinksProps = {
    column: boolean;
};

const Links = ({ column }: LinksProps) => {
    const pathname = usePathname();
    const t = useTranslations('NavbarItems');

    return (
        <BouncingElements
            style={{ display: 'flex', flexDirection: column ? 'column' : 'row', alignItems: 'center', gap: '1.3vw' }}
        >
            <Link data-text={t('Home')} className={pathname === '/' ? 'activeLink' : ''} href='/'>
                {t('Home')}
            </Link>

            <Link data-text={t('AboutMe')} className={pathname === '/about-me' ? 'activeLink' : ''} href='about-me'>
                {t('AboutMe')}
            </Link>

            <Link
                data-text={t('MyProjects')}
                className={pathname === '/my-projects' ? 'activeLink' : ''}
                href='my-projects'
            >
                {t('MyProjects')}
            </Link>

            <Lang />
        </BouncingElements>
    );
};

export default Links;
