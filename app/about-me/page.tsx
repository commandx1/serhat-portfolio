import { Box, Chip, Container, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Timeline from '@/components/about-me/timeline';
import ContactForm from '@/components/contact-form';
import SkillSection from '@/components/home/skill-section';
import AnimatedDiv from '@/utils/animations/AnimatedDiv';
import { BouncingElements } from '@/utils/animations/BouncingElements';

import styles from './about.module.scss';

const About = () => {
    const t = useTranslations('AboutMe');
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.about}>
                <Container>
                    <AnimatedDiv>
                        <Grid container spacing={8}>
                            <Grid size={{ xs: 12, md: 5, lg: 6 }}>
                                <Typography
                                    variant='h3'
                                    className={[styles.summaryTitle, 'lineAnim'].join(' ')}
                                    marginBottom={2}
                                >
                                    {t('SummaryTitle')}
                                </Typography>
                                <div>{t('Summary')}</div>
                            </Grid>
                            <Grid size={{ xs: 12, md: 5, lg: 4 }} marginLeft='auto'>
                                <div className={styles.imgBox}>
                                    <Image
                                        className={styles.me}
                                        src='/whp2.png'
                                        width={300}
                                        height={300}
                                        alt='developer'
                                    />
                                </div>
                            </Grid>
                            <Box className={styles.quickInfo}>
                                <BouncingElements className={styles.infoItems}>
                                    <div className={styles.infoItem}>
                                        <Typography variant='subtitle2' className={styles.infoLabel}>
                                            {t('QuickInfo.Location')}
                                        </Typography>
                                        <Typography variant='body2' className={styles.infoValue}>
                                            Mersin, Turkey
                                        </Typography>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <Typography variant='subtitle2' className={styles.infoLabel}>
                                            {t('QuickInfo.Email')}
                                        </Typography>
                                        <Typography variant='body2' className={styles.infoValue}>
                                            serhatbelen7@gmail.com
                                        </Typography>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <Typography variant='subtitle2' className={styles.infoLabel}>
                                            {t('QuickInfo.Role')}
                                        </Typography>
                                        <Typography variant='body2' className={styles.infoValue}>
                                            Full Stack Developer
                                        </Typography>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <Typography variant='subtitle2' className={styles.infoLabel}>
                                            {t('QuickInfo.Experience')}
                                        </Typography>
                                        <Typography variant='body2' className={styles.infoValue}>
                                            4+ Years
                                        </Typography>
                                    </div>
                                </BouncingElements>
                            </Box>
                        </Grid>
                    </AnimatedDiv>
                </Container>
            </div>
            <SkillSection />
            <Timeline />
            <AnimatedDiv threshold={0.1}>
                <section className={styles.education}>
                    <Container>
                        <Typography variant='h3' marginBottom={2} className={[styles.educationTitle, 'lineAnim'].join(' ')}>{t('Education.Title')}</Typography>
                        <Divider className={styles.divider} />

                        <div className={styles.educationItem}>
                            <div className={styles.educationHeader}>
                                <Typography variant='h5' className={styles.degreeTitle}>
                                    {t('Education.Degree')}
                                </Typography>
                                <Chip label='2013-2019' className={styles.yearChip} />
                            </div>
                            <Typography variant='subtitle1' className={styles.universityName}>
                                {t('Education.University')}
                            </Typography>
                            <Typography variant='body2' className={styles.educationDesc}>
                                {t('Education.Description')}
                            </Typography>
                        </div>
                    </Container>
                </section>
            </AnimatedDiv>
            <ContactForm />
        </div>
    );
};

export default About;
