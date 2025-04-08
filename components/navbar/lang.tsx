'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Turkish from '@/public/turkey.png';
import English from '@/public/united-kingdom.png';

import styles from './navbar.module.scss';

const Lang = () => {
    const [locale, setLocale] = useState<string>('');
    const router = useRouter();

    const changeLocale = (newLocale: string) => {
        if (typeof window === undefined) return;

        setLocale(newLocale);
        document.cookie = `serhatbelen_locale=${newLocale}`;
        router.refresh();
    };

    useEffect(() => {
        if (typeof window === undefined) return;

        const cookieLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith('serhatbelen_locale='))
            ?.split('=')[1];

        if (cookieLocale) {
            setLocale(cookieLocale);
        } else {
            const browserLocale = navigator.language.slice(0, 2);
            setLocale(browserLocale);
            document.cookie = `serhatbelen_locale=${browserLocale}`;
            router.refresh();
        }
    }, [router]);

    return (
        <section
            data-text={locale === 'tr' ? 'Türkçe' : 'English'}
            className={styles.selectedLang}
            onClick={() => changeLocale(locale === 'tr' ? 'en' : 'tr')}>
            {locale === 'tr' ? (
                <>
                    <Image src={Turkish} alt='Turkish' /> Türkçe
                </>
            ) : (
                <>
                    <Image src={English} alt='English' />
                    English
                </>
            )}
        </section>
    );
};

export default Lang;
