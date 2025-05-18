'use client';

import { Grid, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Skill } from './skill-data';
import styles from './skill-section.module.scss';

interface SkillCardProps {
    category: Skill;
    index: number;
}

// Her bir kart için ayrı bir bileşen
const SkillCard = ({ category, index }: SkillCardProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <div ref={ref} style={{ height: '100%' }}>
                <AnimatePresence>
                    {inView && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                            style={{ height: '100%' }}
                            className={styles.cardMotionWrapper}
                        >
                            <div className={styles.skillCard}>
                                <div className={styles.iconContainer}>{category.icon}</div>
                                <Typography variant='h5' className={styles.skillTitle}>
                                    {category.title}
                                </Typography>
                                <Typography variant='body2' className={styles.skillDescription}>
                                    {category.description}
                                </Typography>
                                <div style={{ flex: 1 }} />
                                <div className={styles.skillsList}>
                                    {category.skills.map((skill: string, i: number) => (
                                        <div key={i} className={styles.skillItem}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Grid>
    );
};

export default SkillCard; 