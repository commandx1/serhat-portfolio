import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTranslations } from 'next-intl';

import ContactForm from '@/components/contact-form';
import HomeScroll from '@/components/home/home-scroll';
import Typed from '@/components/typed/typed';
import AnimatedDiv from '@/utils/animations/AnimatedDiv';

import styles from './page.module.scss';

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <div className={styles.homeWrapper}>
            <HomeScroll />
            <Container className={styles.home}>
                <Grid className={styles.banner} container spacing={8}>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <AnimatedDiv>
                            <div className={styles.bannerContent}>
                                <div className={[styles.dash, 'lineAnim'].join(' ')} />
                                <div className={styles.desc}>{t('Hey')}</div>
                                <div className={styles.subDesc}>{t('Desc')}</div>
                            </div>
                        </AnimatedDiv>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <AnimatedDiv>
                            <Typed />
                        </AnimatedDiv>
                    </Grid>
                </Grid>
            </Container>
            <AnimatedDiv threshold={0.2}>
                <ContactForm />
            </AnimatedDiv>
        </div>
    );
}
