import Container from '@mui/material/Container';

import AnimatedDiv from '@/utils/animations/AnimatedDiv';

import styles from './skill-section.module.scss';
import SkillsShowcase from './skill-showcase';

const SkillSection = () => {
    return (
        <section className={styles.skillsSection}>
            <Container>
                <AnimatedDiv threshold={0.1}>
                    <h2 className={styles.sectionTitle}>My Skills</h2>
                    <h4 className={styles.sectionSubtitle}>
                        Here are some of the technologies and tools I work with on a daily basis.
                    </h4>
                </AnimatedDiv>

                <SkillsShowcase />
            </Container>
        </section>
    );
};

export default SkillSection;
