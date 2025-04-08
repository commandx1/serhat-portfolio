'use client';

import { useEffect, useState } from 'react';

import { generateString } from './helpers';
import styles from './typed.module.scss';

const useText = () => {
    const [strings, setStrings] = useState<string[]>(['']);

    useEffect(() => {
        if (typeof window === undefined) return;

        setStrings(generateString());

        const a = setTimeout(() => {
            const err1 = document.createElement('span');
            err1.classList.add(styles.errText);
            err1.textContent = 'Type "number" is not assignable to type "string"';

            const span = document.getElementById('err1Span');
            span?.appendChild(err1);

            if (span?.previousElementSibling?.classList?.add) {
                span.previousElementSibling.classList.add(styles.bordered);
            }

            setTimeout(() => {
                const err2 = document.createElement('span');
                err2.classList.add(styles.errText);
                err2.textContent = 'Type "string" is not assignable to type "string[]"';

                const span = document.getElementById('err2Span');
                span?.appendChild(err2);
                if (span?.previousElementSibling?.classList?.add) {
                    span.previousElementSibling.classList.add(styles.bordered);
                }
            }, 5100);
        }, 3800);

        return () => {
            clearTimeout(a);
            setStrings(['']);
        };
    }, []);

    return { strings };
};

export default useText;
