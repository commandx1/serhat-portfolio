'use client';

import { useEffect, useState } from 'react';

import { generateString } from './helpers';

// hook to manage animated text
const useText = () => {
    const [strings, setStrings] = useState<string[]>(['']);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        setStrings(generateString());

        return () => {
            setStrings(['']);
        };
    }, []);

    return { strings };
};

export default useText;
