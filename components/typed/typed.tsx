'use client';

import { Roboto_Mono } from 'next/font/google';
import { ReactTyped } from 'react-typed';

import styles from './typed.module.scss';
import useText from './useText';

const fontFamily = Roboto_Mono({
    weight: '400',
    subsets: ['latin'],
});

// TypeScript error messages to be shown during animation
const TYPE_ERRORS = {
    NUMBER_TO_STRING: 'Type "number" is not assignable to type "string"',
    STRING_TO_ARRAY: 'Type "string" is not assignable to type "string[]"',
};

/**
 * TypeScript code animation component that shows developer skills
 * with simulated typing including TypeScript errors
 */
const Typed = () => {
    const { strings, err1Ref, err2Ref } = useText();

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
            {/* Error message references that will be shown/hidden by the useText hook */}
            <div style={{ display: 'none' }} ref={err1Ref} className={styles.errText}>
                {TYPE_ERRORS.NUMBER_TO_STRING}
            </div>
            <div style={{ display: 'none' }} ref={err2Ref} className={styles.errText}>
                {TYPE_ERRORS.STRING_TO_ARRAY}
            </div>
        </div>
    );
};

export default Typed;
