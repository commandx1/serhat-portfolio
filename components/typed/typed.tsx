'use client';

import { Roboto_Mono } from 'next/font/google';
import { ReactTyped } from 'react-typed';

import styles from './typed.module.scss';
import useText from './useText';

const fontFamily = Roboto_Mono({
    weight: '400',
    subsets: ['latin']
});

const Typed = () => {
    const { strings } = useText();

    return (
        <div className={[styles.box, fontFamily.className].join(' ')}>
            <ReactTyped
                className={styles.content}
                startWhenVisible
                strings={strings}
                typeSpeed={10}
            />
        </div>
    );
};

export default Typed;
