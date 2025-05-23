'use client';

import { Grid, Typography, LinearProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Skill } from './skill-data';
import styles from './skill-section.module.scss';

interface SkillCardProps {
    category: Skill;
    index: number;
    showProgress?: boolean;
}

// Her bir kart için ayrı bir bileşen
const SkillCard = ({ category, index, showProgress = true }: SkillCardProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <Grid size={{ xs: 12 }} key={index}>
            <div ref={ref}>
                <AnimatePresence>
                    {inView && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                            className={styles.cardMotionWrapper}
                        >
                            <div className={styles.skillCard}>
                                <div className={styles.skillCardLeft}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            alignItems: 'center',
                                            marginBottom: '.5rem'
                                        }}
                                    >
                                        <div className={styles.iconContainer}>{category.icon}</div>
                                        <Typography variant='h5' className={styles.skillTitle}>
                                            {category.title}
                                        </Typography>
                                    </div>

                                    <Typography variant='body2' className={styles.skillDescription}>
                                        {category.description}
                                    </Typography>
                                </div>
                                <div className={styles.skillCardRight}>
                                    {showProgress ? (
                                        <div className={styles.skillsListWithProgress}>
                                            {category.levels.map((skill, i) => (
                                                <div key={i} className={styles.skillProgressItem}>
                                                    <div className={styles.skillProgressLabel}>
                                                        {skill.name}
                                                        <span className={styles.skillProgressValue}>
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <LinearProgress
                                                        variant='determinate'
                                                        value={skill.level}
                                                        className={styles.progressBar}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className={styles.skillsList}>
                                            {category.skills.map((skill: string, i: number) => (
                                                <div key={i} className={styles.skillItem}>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    )}
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
