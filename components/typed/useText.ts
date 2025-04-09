'use client';

import { useEffect, useRef, useState } from 'react';

import { generateString } from './helpers';

const useText = () => {
    const [strings, setStrings] = useState<string[]>(['']);

    const err1Ref = useRef<HTMLDivElement>(null);
    const err2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === undefined) return;

        setStrings(generateString());

        return () => {
            setStrings(['']);
        };
    }, []);

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

    return { strings, err1Ref, err2Ref };
};

export default useText;
