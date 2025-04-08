'use client';

import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimatedStaggeredListProps = {
    children: ReactNode[];
} & MotionProps &
    HTMLAttributes<HTMLDivElement>;

const containerVariant = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export const AnimatedStaggeredList = ({ children, ...props }: AnimatedStaggeredListProps) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) setStartAnimation(true);
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            variants={containerVariant}
            initial='hidden'
            animate={startAnimation ? 'show' : 'hidden'}
            {...props}>
            {children.map((child, i) => (
                <motion.div key={i} variants={itemVariant}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};
