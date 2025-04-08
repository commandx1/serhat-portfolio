'use client';

import { Roboto_Mono } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';

import styles from './typed.module.scss';
import useText from './useText';

const fontFamily = Roboto_Mono({
    weight: '400',
    subsets: ['latin'],
});

const err1 = 'Type "number" is not assignable to type "string"';
const err2 = 'Type "string" is not assignable to type "string[]"';

const Typed = () => {
    const err1Ref = useRef<HTMLDivElement>(null);
    const err2Ref = useRef<HTMLDivElement>(null);

    const { strings } = useText();

    const timeout = (delay: number) => {
        return new Promise(resolve => setTimeout(resolve, delay));
    };

    useEffect(() => {
        const showErrorMessages = async () => {
            await timeout(3800);
            err1Ref.current!.style.display = 'block';

            await timeout(3100);
            err1Ref.current!.style.display = 'none';

            await timeout(2130);
            err2Ref.current!.style.display = 'block';

            await timeout(2900);
            err2Ref.current!.style.display = 'none';
        };

        showErrorMessages();
    }, []);

    return (
        <div className={[styles.box, fontFamily.className].join(' ')}>
            <ReactTyped
                className={styles.content}
                startWhenVisible
                strings={strings}
                backDelay={3000}
                backSpeed={60}
                typeSpeed={10}
            />
            <div style={{ display: 'none' }} ref={err1Ref} className={styles.errText}>
                {err1}
            </div>
            <div style={{ display: 'none' }} ref={err2Ref} className={styles.errText}>
                {err2}
            </div>
        </div>
    );
};

export default Typed;
