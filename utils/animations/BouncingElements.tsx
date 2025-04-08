'use client';

import { motion, type MotionProps } from 'framer-motion';
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type BouncingElementsProps = {
    children: ReactNode[];
} & MotionProps &
    HTMLAttributes<HTMLUListElement>;

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
        transition: {
            type: 'spring',
            stiffness: 250, // Yay sertliği
            damping: 10, // Yumuşaklık
            mass: 1, // Kütle
        },
    },
};

export const BouncingElements = ({ children, ...props }: BouncingElementsProps) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) setStartAnimation(true);
    }, [inView]);

    return (
        <motion.ul
            ref={ref}
            variants={containerVariant}
            initial='hidden'
            animate={startAnimation ? 'show' : 'hidden'}
            {...props}>
            {children.map((child, i) => (
                <motion.li style={{ listStyle: 'none' }} key={i} variants={itemVariant}>
                    {child}
                </motion.li>
            ))}
        </motion.ul>
    );
};
