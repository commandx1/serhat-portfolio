'use client';

import { X, GitHub, LinkOffOutlined, ArrowRight } from '@mui/icons-material';
import {
    Container,
    Typography,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Chip,
    Grid
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';

import AnimatedDiv from '@/utils/animations/AnimatedDiv';

import type { Project } from './projects-data';
import { projects } from './projects-data';
import styles from './style.module.scss';

const MyProjects = () => {
    const t = useTranslations('MyProjects');
    const [filter, setFilter] = useState<string>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredProjects =
        filter === 'all'
            ? projects
            : filter === 'featured'
                ? projects.filter(p => p.featured)
                : projects.filter(p => p.category === filter);

    const handleOpen = (project: Project) => {
        setSelectedProject(project);
        setOpen(true);
        setActiveIndex(0);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const nextImage = () => {
        if (selectedProject) {
            setActiveIndex(prev => (prev + 1) % selectedProject.screenshots.length);
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setActiveIndex(
                prev => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length
            );
        }
    };

    // Parallax effect for project cards
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll(`.${styles.projectCard}`);
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible) {
                    const distance = window.innerHeight - rect.top;
                    const percentage = Math.min(distance / window.innerHeight, 1);
                    const translateY = percentage * -20;
                    card.setAttribute('style', `transform: translateY(${translateY}px)`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={styles.projectsContainer}>
                <Container maxWidth='lg'>
                    <AnimatedDiv>
                        <div className={styles.heroSection}>
                            <motion.h1
                                className={styles.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {t('Title')}
                            </motion.h1>
                            <motion.p
                                className={styles.subtitle}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {t('Subtitle')}
                            </motion.p>
                        </div>
                    </AnimatedDiv>

                    <AnimatedDiv>
                        <div className={styles.filterContainer}>
                            <motion.div
                                className={styles.filters}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <button
                                    onClick={() => setFilter('all')}
                                    className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
                                >
                                    {t('All')}
                                </button>
                                <button
                                    onClick={() => setFilter('featured')}
                                    className={`${styles.filterButton} ${filter === 'featured' ? styles.active : ''}`}
                                >
                                    {t('Featured')}
                                </button>
                                <button
                                    onClick={() => setFilter('frontend')}
                                    className={`${styles.filterButton} ${filter === 'frontend' ? styles.active : ''}`}
                                >
                                    {t('Frontend')}
                                </button>
                                <button
                                    onClick={() => setFilter('fullstack')}
                                    className={`${styles.filterButton} ${filter === 'fullstack' ? styles.active : ''}`}
                                >
                                    {t('Fullstack')}
                                </button>
                            </motion.div>
                        </div>
                    </AnimatedDiv>

                    <div className={styles.projectsGrid} ref={containerRef}>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={styles.projectCard}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                onClick={() => handleOpen(project)}
                            >
                                <div className={styles.projectImageContainer}>
                                    <Image
                                        src={project.image}
                                        alt={t(`Projects.${project.id}.title`)}
                                        width={500}
                                        height={300}
                                        className={styles.projectImage}
                                    />
                                    <div className={styles.projectCategory}>
                                        <span>{t(`Category.${project.category}`)}</span>
                                    </div>
                                    {project.featured && (
                                        <div className={styles.featuredBadge}>
                                            <span>{t('FeaturedBadge')}</span>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.projectContent}>
                                    <h3 className={styles.projectTitle}>{t(`Projects.${project.id}.title`)}</h3>
                                    <p className={styles.projectDescription}>
                                        {t(`Projects.${project.id}.Description`)}
                                    </p>
                                    <div className={styles.projectTech}>
                                        {project.technologies.slice(0, 3).map(tech => (
                                            <span key={tech} className={styles.techTag}>
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className={styles.techTag}>+{project.technologies.length - 3}</span>
                                        )}
                                    </div>
                                    <button className={styles.viewDetailsButton}>
                                        {t('ViewDetails')} <ArrowRight />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatedDiv threshold={0.1}>
                        <div className={styles.moreProjects}>
                            <Button
                                variant='contained'
                                startIcon={<GitHub />}
                                href='https://github.com/commandx1'
                                target='_blank'
                                className={styles.moreButton}
                            >
                                {t('MoreOnGithub')}
                            </Button>
                        </div>
                    </AnimatedDiv>
                </Container>
            </div>

            <Dialog open={open} onClose={handleClose} maxWidth='lg' fullWidth classes={{ paper: styles.dialogPaper }}>
                <DialogTitle className={styles.dialogTitle}>
                    {!!selectedProject && t(`Projects.${selectedProject.id}.title`)}
                    <IconButton onClick={handleClose} className={styles.closeButton}>
                        <X />
                    </IconButton>
                </DialogTitle>
                <DialogContent className={styles.dialogContent}>
                    {!!selectedProject && (
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <div className={styles.projectSlider}>
                                    <div className={styles.sliderContainer}>
                                        <AnimatePresence mode='wait'>
                                            <motion.div
                                                key={activeIndex}
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                className={styles.sliderImageContainer}
                                            >
                                                <Image
                                                    src={selectedProject.screenshots[activeIndex]}
                                                    alt={`${t(`Projects.${selectedProject.id}.title`)} screenshot ${activeIndex + 1}`}
                                                    width={800}
                                                    height={500}
                                                    className={styles.sliderImage}
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                        <div className={styles.sliderControls}>
                                            <button onClick={prevImage} className={styles.sliderButton}>
                                                &lt;
                                            </button>
                                            <div className={styles.sliderDots}>
                                                {selectedProject.screenshots.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        className={`${styles.sliderDot} ${i === activeIndex ? styles.active : ''}`}
                                                        onClick={() => setActiveIndex(i)}
                                                    />
                                                ))}
                                            </div>
                                            <button onClick={nextImage} className={styles.sliderButton}>
                                                &gt;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <div className={styles.projectDetails}>
                                    <div className={styles.projectDescription}>
                                        <Typography variant='body1' paragraph>
                                            {t(`Projects.${selectedProject.id}.longDescription`)}
                                        </Typography>
                                    </div>

                                    <div className={styles.projectSection}>
                                        <h6 className={styles.sectionTitle}>{t('Dialog.Technologies')}</h6>
                                        <div className={styles.techChips}>
                                            {selectedProject.technologies.map(tech => (
                                                <Chip key={tech} label={tech} className={styles.techChip} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.projectSection}>
                                        <h6 className={styles.sectionTitle}>{t('Dialog.Objectives')}</h6>
                                        <ul className={styles.projectList}>
                                            {JSON.parse(t(`Projects.${selectedProject.id}.challenges`)).map(
                                                (challenge: string, i: number) => (
                                                    <li key={i}>{challenge}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div className={styles.projectSection}>
                                        <h6 className={styles.sectionTitle}>{t('Dialog.Solutions')}</h6>
                                        <ul className={styles.projectList}>
                                            {JSON.parse(t(`Projects.${selectedProject.id}.solutions`)).map(
                                                (solution: string, i: number) => (
                                                    <li key={i}>{solution}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div className={styles.projectLinks}>
                                        {selectedProject.github && (
                                            <Button
                                                variant='outlined'
                                                startIcon={<GitHub />}
                                                href={selectedProject.github}
                                                target='_blank'
                                                className={styles.projectLink}
                                            >
                                                {t('Dialog.ViewCode')}
                                            </Button>
                                        )}
                                        {selectedProject.live && (
                                            <Button
                                                variant='contained'
                                                startIcon={<LinkOffOutlined />}
                                                href={selectedProject.live}
                                                target='_blank'
                                                className={styles.projectLink}
                                            >
                                                {t('Dialog.LiveDemo')}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default MyProjects;
