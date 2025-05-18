'use client';

import { Grid } from '@mui/material';

import SkillCard from './skill-card';
import { useSkillCategories } from './skill-data';
import styles from './skill-section.module.scss';

const SkillsShowcase = ({ showProgress = true }: { showProgress?: boolean }) => {
    const skillCategories = useSkillCategories();
    
    return (
        <Grid container spacing={4} className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
                <SkillCard category={category} index={index} key={index} showProgress={showProgress} />
            ))}
        </Grid>
    );
};

export default SkillsShowcase;
