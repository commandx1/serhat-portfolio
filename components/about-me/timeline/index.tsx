'use client';

import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import { useEffect } from 'react';

import avena from '@/public/avena_network_logo.jpg';
import bynogame from '@/public/bynogame_logo.jpg';

import styles from './timeline.module.scss';

export default function CustomizedTimeline() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(() => {
        // Canvas initialization
        const c = document.getElementById('canv') as HTMLCanvasElement;
        const ctx = c.getContext('2d') as CanvasRenderingContext2D;
        let w = (c.width = window.innerWidth);
        let h = (c.height = window.innerHeight);

        // Options interface
        interface Options {
            len: number;
            count: number;
            baseTime: number;
            addedTime: number;
            dieChance: number;
            spawnChance: number;
            sparkChance: number;
            sparkDist: number;
            sparkSize: number;
            color: string;
            baseLight: number;
            addedLight: number;
            shadowToTimePropMult: number;
            baseLightInputMultiplier: number;
            addedLightInputMultiplier: number;
            cx: number;
            cy: number;
            repaintAlpha: number;
            hueChange: number;
        }

        const opts: Options = {
            len: 20,
            count: 50,
            baseTime: 10,
            addedTime: 10,
            dieChance: 0.05,
            spawnChance: 1,
            sparkChance: 0.1,
            sparkDist: 10,
            sparkSize: 2,
            color: 'hsl(hue,100%,light%)',
            baseLight: 50,
            addedLight: 10,
            shadowToTimePropMult: 6,
            baseLightInputMultiplier: 0.01,
            addedLightInputMultiplier: 0.02,
            cx: w / 2,
            cy: h / 2,
            repaintAlpha: 0.04,
            hueChange: 0.1,
        };

        let tick = 0;
        const lines: Line[] = [];
        let dieX = w / 2 / opts.len;
        let dieY = h / 2 / opts.len;
        const baseRad = (Math.PI * 2) / 6;

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, w, h);

        // Line class
        class Line {
            x: number;
            y: number;
            addedX: number;
            addedY: number;
            rad: number;
            lightInputMultiplier: number;
            color: string;
            cumulativeTime: number;
            time: number;
            targetTime: number;

            constructor() {
                this.reset();
            }

            reset() {
                this.x = 0;
                this.y = 0;
                this.addedX = 0;
                this.addedY = 0;
                this.rad = 0;
                this.lightInputMultiplier =
                    opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
                this.color = opts.color.replace('hue', (tick * opts.hueChange).toString());
                this.cumulativeTime = 0;
                this.beginPhase();
            }

            beginPhase() {
                this.x += this.addedX;
                this.y += this.addedY;
                this.time = 0;
                this.targetTime = Math.floor(opts.baseTime + opts.addedTime * Math.random());
                this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1);
                this.addedX = Math.cos(this.rad);
                this.addedY = Math.sin(this.rad);

                if (
                    Math.random() < opts.dieChance ||
                    this.x > dieX ||
                    this.x < -dieX ||
                    this.y > dieY ||
                    this.y < -dieY
                ) {
                    this.reset();
                }
            }

            step() {
                this.time++;
                this.cumulativeTime++;

                if (this.time >= this.targetTime) {
                    this.beginPhase();
                }

                const prop = this.time / this.targetTime;
                const wave = Math.sin((prop * Math.PI) / 2);
                const x = this.addedX * wave;
                const y = this.addedY * wave;

                ctx.shadowBlur = prop * opts.shadowToTimePropMult;
                ctx.fillStyle = ctx.shadowColor = this.color.replace(
                    'light',
                    (
                        opts.baseLight +
                        opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier)
                    ).toString()
                );
                ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

                if (Math.random() < opts.sparkChance) {
                    ctx.fillRect(
                        opts.cx +
                            (this.x + x) * opts.len +
                            Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
                            opts.sparkSize / 2,
                        opts.cy +
                            (this.y + y) * opts.len +
                            Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
                            opts.sparkSize / 2,
                        opts.sparkSize,
                        opts.sparkSize
                    );
                }
            }
        }

        function loop() {
            window.requestAnimationFrame(loop);
            tick++;

            ctx.globalCompositeOperation = 'source-over';
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(0,0,0,${opts.repaintAlpha})`;
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';

            if (lines.length < opts.count && Math.random() < opts.spawnChance) {
                lines.push(new Line());
            }

            lines.forEach(line => line.step());
        }

        loop();

        window.addEventListener('resize', () => {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, w, h);

            opts.cx = w / 2;
            opts.cy = h / 2;

            dieX = w / 2 / opts.len;
            dieY = h / 2 / opts.len;
        });
    }, []);

    return (
        <div className={styles.timeline}>
            <canvas id='canv'></canvas>

            <Timeline
                sx={
                    isSmallScreen
                        ? {
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }
                        : {}
                }
                position={isSmallScreen ? 'right' : 'alternate'}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <Image src={avena} alt='avena' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant='h6' component='span'>
                            AVENA
                        </Typography>
                        <Typography>
                            - Developed and maintained a MERN stack application to improve accessibility and consistency
                            in oral health care services across the U.S.
                        </Typography>
                        <Typography>
                            - Implemented core features including appointment scheduling, user account management,
                            reporting modules, and dynamic dashboard interfaces.
                        </Typography>
                        <Typography>
                            - Integrated medical imaging formats such as FMX, PANO, and DX into the frontend using
                            React.js for a seamless clinical experience.
                        </Typography>
                        <Typography>
                            - Built and managed background jobs using Node.js and cron to automate tasks such as daily
                            reporting, auto-submissions, and account cleanups.
                        </Typography>
                        <Typography>
                            - Designed and implemented a modular task management system, triggered both in real-time and
                            via background jobs, to notify users of pending actions across various modules.
                        </Typography>
                        <Typography>
                            - Developed and optimized dynamic, filterable, and categorized data visualizations using
                            React Chart.js 2 for dashboards, providing insightful graphical representations of complex
                            data.
                        </Typography>
                        <Typography>
                            - Developed a roles and permissions module to control access to different parts of the
                            application based on user roles, including the ability to manage permissions and edit roles
                            for specific users.
                        </Typography>
                        <Typography>
                            - Created and maintained a settings page to allow admins to configure filters, job
                            parameters, and schedules for background jobs, ensuring customizable and efficient task
                            automation.
                        </Typography>
                        <Typography>
                            - Wrote and executed data migration scripts to support schema changes and ensure data
                            integrity during feature updates.
                        </Typography>
                        <Typography>
                            - Worked extensively with MongoDB to handle large datasets and complex queries, optimizing
                            performance through effective indexing and query tuning.
                        </Typography>
                        <Typography>
                            - Ensured accurate timezone handling across all U.S. regions to maintain consistency in
                            scheduling and reporting.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color='primary'>
                            <Image src={bynogame} alt='bynogame' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant='h6' component='span'>
                            BYNOGAME
                        </Typography>
                        <Typography>
                            Converted Figma designs into responsive, pixel-perfect user interfaces using HTML, CSS,
                            jQuery, and JavaScript -
                        </Typography>
                        <Typography>
                            Developed and maintained a responsive web application for the trading of in-game items and
                            accounts across popular games such as Knight, CS:GO, Metin2, PUBG, and Valorant -
                        </Typography>
                        <Typography>
                            Implemented dynamic features and enhanced user interactivity through jQuery, ensuring a
                            smooth user experience across multiple browsers and devices -
                        </Typography>
                        <Typography>
                            Collaborated closely with backend developers working with Laravel to integrate frontend with
                            APIs and ensure seamless data flow between client and server -
                        </Typography>
                        <Typography>
                            Focused on optimizing frontend performance and accessibility while maintaining clean and
                            maintainable code -
                        </Typography>
                        <Typography>
                            Ensured the site was fully responsive, providing a seamless experience on both desktop and
                            mobile devices -
                        </Typography>
                        <Typography>
                            Implemented SEO best practices, including optimizing meta tags, image alt attributes, and
                            URL structures to improve search engine visibility and ranking -
                        </Typography>
                        <Typography>
                            Actively contributed to the development process by submitting pull requests for code
                            changes, collaborating with the team to ensure high-quality code -
                        </Typography>
                        <Typography>
                            Managed tasks and tracked project progress using Jira, adhering to agile methodologies and
                            ensuring timely delivery of features and bug fixes -
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
