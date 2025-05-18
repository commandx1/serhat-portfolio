'use client';

import { useEffect, useState } from 'react';

import styles from '@/app/page.module.scss';

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const calculateScrollProgress = () => {
        const scrollElement = document.querySelector(`.${styles.main}`);

        if (scrollElement) {
            const scrollTop = scrollElement.scrollTop;
            const scrollHeight = scrollElement.scrollHeight;
            const clientHeight = scrollElement.clientHeight;

            // subtract scrollable height from page height
            const scrollableHeight = scrollHeight - clientHeight;

            // calculate percentage (scrollTop / scrollableHeight) * 100
            if (scrollableHeight > 0) {
                const newProgress = (scrollTop / scrollableHeight) * 100;
                setScrollProgress(newProgress);
            }
        }
    };

    useEffect(() => {
        // connect to scroll event
        const scrollElement = document.querySelector(`.${styles.main}`);

        if (scrollElement) {
            scrollElement.addEventListener('scroll', calculateScrollProgress);

            // calculate scroll progress on first load
            calculateScrollProgress();

            return () => {
                scrollElement.removeEventListener('scroll', calculateScrollProgress);
            };
        }
    }, []);

    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
        </div>
    );
};

export default ScrollProgressBar;
