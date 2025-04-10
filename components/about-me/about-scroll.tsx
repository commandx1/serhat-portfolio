'use client';

import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

import styles from '@/app/about-me/about.module.scss';

const AboutScroll = () => {
    useEffect(() => {
        const el = document.querySelector(`.${styles.aboutWrapper}`) as HTMLDivElement;

        if (el) {
            if (Scrollbar.get(el)) {
                Scrollbar.destroy(el);
            }

            Scrollbar.init(el, { damping: 0.14 });
        }

        return () => {
            if (el && Scrollbar.get(el)) {
                Scrollbar.destroy(el);
            }
        };
    }, []);

    return null;
};

export default AboutScroll;
