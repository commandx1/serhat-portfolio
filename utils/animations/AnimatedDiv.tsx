'use client';

import { motion, useAnimation } from 'framer-motion';
import { FC, ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: ReactNode;
    threshold?: number;
}

const AnimatedDiv: FC<AnimatedSectionProps> = ({ children, threshold = 0.1 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // sadece bir kere tetiklensin
        threshold, // görünürlüğün %10'u yeterli
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, scale: 1 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            {children}
        </motion.div>
    );
};

export default AnimatedDiv;
