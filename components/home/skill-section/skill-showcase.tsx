'use client';

import { Grid } from '@mui/material';

import SkillCard from './skill-card';
import { skillCategories } from './skill-data';
import styles from './skill-section.module.scss';

const SkillsShowcase = () => {
    return (
        <Grid container spacing={4} className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
                <SkillCard category={category} index={index} key={index} />
            ))}
        </Grid>
    );
};

export default SkillsShowcase;
