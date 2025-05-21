import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

import Footer from '@/components/footer';
import LayoutBg from '@/components/layout-bg/layout-bg';
import Navbar from '@/components/navbar/navbar';
import ScrollProgressBar from '@/components/ui/scroll-progress-bar';

import './globals.scss';
import styles from './page.module.scss';

// app/page.tsx
export const metadata: Metadata = {
    title: 'Serhat Belen | Full Stack Developer',
    description: 'Serhat Belen\'s personal portfolio. My projects and experiences as a web developer are here.',
    icons: {
        icon: './favicon.ico',
        apple: './apple-touch-icon.png',
    },
    openGraph: {
        title: 'Serhat Belen | Full Stack Developer',
        description: 'Projects developed with React, Next.js, TypeScript and modern web technologies.',
        url: 'https://serhatbelen.dev',
        siteName: 'Serhat Belen',
        locale: 'tr_TR',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    verification: {
        google: 'google-site-verification=YZcd33uIk9moB-kjDgJzkRLiK5O_ybaVANW5xLU6GUI',
    },
};

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const [messages, locale] = await Promise.all([getMessages(), getLocale()]);

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={poppins.className}>
                <LayoutBg />
                <AppRouterCacheProvider>
                    <NextIntlClientProvider messages={messages}>
                        <Navbar />
                        <ScrollProgressBar />
                        <main className={styles.main}>{children}</main>
                        <Footer />
                    </NextIntlClientProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
