import Container from '@mui/material/Container';
import { useTranslations } from 'next-intl';

import AnimatedDiv from '@/utils/animations/AnimatedDiv';

import styles from './skill-section.module.scss';
import SkillsShowcase from './skill-showcase';

const SkillSection = ({ showProgress = true }: { showProgress?: boolean }) => {
    const t = useTranslations('AboutMe');

    return (
        <section className={styles.skillsSection}>
            <Container>
                <AnimatedDiv threshold={0.1}>
                    <h2 className={[styles.sectionTitle, 'lineAnim'].join(' ')}>{t('SkillsTitle')}</h2>
                    <h4 className={styles.sectionSubtitle}>{t('SkillsDescription')}</h4>
                </AnimatedDiv>

                <SkillsShowcase showProgress={showProgress} />
            </Container>
        </section>
    );
};

export default SkillSection;
