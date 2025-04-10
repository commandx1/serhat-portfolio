import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import CustomizedTimeline from '@/components/about-me/timeline';
import ContactForm from '@/components/contact-form';
import {
    ExpressSVG,
    MongoSVG,
    NextSVG,
    NodeSVG,
    ReactSVG,
    ScssSVG,
    TypeScriptSVG,
    VueSVG,
} from '@/components/typed/SVGs';
import me from '@/public/whp2.png';
import AnimatedDiv from '@/utils/animations/AnimatedDiv';

import styles from './about.module.scss';

const About = () => {
    const t = useTranslations('AboutMe');
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.about}>
                <Container>
                    <Grid container spacing={8}>
                        <Grid size={{ xs: 12, md: 5, lg: 6 }}>
                            <AnimatedDiv>
                                <Typography
                                    variant='h3'
                                    className={[styles.summaryTitle, 'lineAnim'].join(' ')}
                                    marginBottom={2}>
                                    {t('SummaryTitle')}
                                </Typography>
                                <div>{t('Summary')}</div>
                            </AnimatedDiv>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5, lg: 4 }} marginLeft='auto'>
                            <div className={styles.imgBox}>
                                <Image className={styles.me} src={me} alt='developer' />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <section className={styles.skills}>
                <Container>
                    <div className={styles.box} data-text={t('SkillsTitle')}>
                        <div className={styles.svg}>
                            <div
                                style={{ transform: 'rotate(calc(360deg / 8))' }}
                                className={styles.svgBox}
                                dangerouslySetInnerHTML={{ __html: ReactSVG }}
                            />
                            <div
                                style={{ transform: 'rotate(calc(360deg / 8 * 2))' }}
                                className={styles.svgBox}
                                dangerouslySetInnerHTML={{ __html: TypeScriptSVG }}
                            />
                            <div
                                style={{ transform: 'rotate(calc(360deg / 8 * 3))' }}
                                className={styles.svgBox}
                                dangerouslySetInnerHTML={{ __html: ScssSVG }}
                            />
                            <div
                                style={{ transform: 'rotate(calc(360deg / 8 * 4))' }}
                                className={styles.svgBox}
                                dangerouslySetInnerHTML={{ __html: MongoSVG }}
                            />
                            <div
                                style={{ transform: 'rotate(calc(360deg / 8 * 5))' }}
                                className={styles.svgBox}
                                dangerouslySetInnerHTML={{ __html: NodeSVG }}
                            />
                            <div
                                style={{ transform: 'rotate(calc(360deg / 8 * 6))' }}
                                className={styles.svgBox}
                                dangerouslySetInnerHTML={{ __html: ExpressSVG }}
                            />
                            <div
                                style={{ transform: 'rotate(calc(360deg / 8 * 7))' }}
                                className={styles.svgBox}
                                dangerouslySetInnerHTML={{ __html: VueSVG }}
                            />
                            <div
                                style={{ transform: 'rotate(calc(360deg / 8 * 8))' }}
                                className={styles.svgBox}
                                dangerouslySetInnerHTML={{ __html: NextSVG }}
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <CustomizedTimeline />
            <AnimatedDiv threshold={0.2}>
                <ContactForm />
            </AnimatedDiv>
        </div>
    );
};

export default About;
