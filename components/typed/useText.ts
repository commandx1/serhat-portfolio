'use client';

import { useEffect, useRef, useState } from 'react';

import { generateString } from './helpers';

// hook to manage animated text with error messages
const useText = () => {
    const [strings, setStrings] = useState<string[]>(['']);

    const err1Ref = useRef<HTMLDivElement>(null);
    const err2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        setStrings(generateString());

        return () => {
            setStrings(['']);
        };
    }, []);

    const delay = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    useEffect(() => {
        const showErrorMessages = async () => {
            // show error messages at specific times
            if (err1Ref.current) {
                await delay(3800);
                err1Ref.current.style.display = 'block';

                await delay(3100);
                err1Ref.current.style.display = 'none';
            }

            if (err2Ref.current) {
                await delay(2130);
                err2Ref.current.style.display = 'block';

                await delay(2900);
                err2Ref.current.style.display = 'none';
            }
        };

        showErrorMessages();
    }, []);

    return { strings, err1Ref, err2Ref };
};

export default useText;
