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
import { useTranslations } from 'next-intl';

import avena from '@/public/avena_network_logo.jpg';
import bynogame from '@/public/bynogame_logo.jpg';
import AnimatedDiv from '@/utils/animations/AnimatedDiv';

import styles from './timeline.module.scss';
import useCanvas from './useCanvas';

export default function CustomizedTimeline() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const t = useTranslations('AboutMe');

    const avenaExp = JSON.parse(t('Experiences.Avena'));
    const bynogameExp = JSON.parse(t('Experiences.ByNoGame'));

    useCanvas(isSmallScreen);

    return (
        <AnimatedDiv>
            <div className={styles.timeline}>
                {!isSmallScreen && <canvas id='canv'></canvas>}

                <Typography variant='h3' className={[styles.title, 'lineAnim'].join(' ')} marginBottom={2}>
                    {t('TimelineTitle')}
                </Typography>
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
                            {avenaExp.map((sentence: string, key: string) => (
                                <Typography key={key}>- {sentence}</Typography>
                            ))}
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
                            {bynogameExp.map((sentence: string, key: string) => (
                                <Typography key={key}>{sentence} -</Typography>
                            ))}
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </AnimatedDiv>
    );
}
