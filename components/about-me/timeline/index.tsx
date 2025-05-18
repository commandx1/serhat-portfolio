'use client';

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import avena from '@/public/avena_network_logo.jpg';
import bynogame from '@/public/bynogame_logo.jpg';
import AnimatedDiv from '@/utils/animations/AnimatedDiv';

import styles from './timeline.module.scss';

export default function CustomizedTimeline() {
    const t = useTranslations('AboutMe');

    const avenaExp = JSON.parse(t('Experiences.Avena'));
    const bynogameExp = JSON.parse(t('Experiences.ByNoGame'));

    const experiences = [
        {
            company: 'AVENA',
            logo: avena,
            experiences: avenaExp,
            date: '2023 - Present'
        },
        {
            company: 'BYNOGAME',
            logo: bynogame,
            experiences: bynogameExp,
            date: '2022 - 2023'
        }
    ];

    return (
        <AnimatedDiv>
            <div className={styles.timeline}>
                <Container>
                    <Typography variant='h3' className={[styles.title, 'lineAnim'].join(' ')} marginBottom={2}>
                        {t('TimelineTitle')}
                    </Typography>

                    <div className={styles.timelineContainer}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                className={styles.timelineItem}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <div className={styles.logoContainer}>
                                            <Image src={exp.logo} alt={exp.company} />
                                        </div>
                                        <div className={styles.companyInfo}>
                                            <Typography variant='h6'>{exp.company}</Typography>
                                            <Typography variant='subtitle2' className={styles.date}>
                                                {exp.date}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={styles.experienceList}>
                                        {exp.experiences.map((sentence: string, key: number) => (
                                            <motion.div
                                                key={key}
                                                className={styles.experienceItem}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: key * 0.05 }}
                                            >
                                                {sentence}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </div>
        </AnimatedDiv>
    );
}
