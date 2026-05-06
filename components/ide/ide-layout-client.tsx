'use client';

import dynamic from 'next/dynamic';

const IDELayoutSkeleton = () => (
    <div className='h-screen bg-background overflow-hidden animate-pulse' aria-hidden='true'>
        <div className='h-10 border-b border-border bg-card' />
        <div className='h-[calc(100%-2.5rem)] flex'>
            <aside className='hidden sm:flex w-[21%] min-w-[220px] border-r border-border bg-sidebar flex-col'>
                <div className='h-10 border-b border-border px-3 flex items-center'>
                    <div className='h-3 w-24 rounded bg-muted/70' />
                </div>
                <div className='p-3 space-y-2'>
                    <div className='h-2 w-28 rounded bg-muted/70' />
                    <div className='h-2 w-36 rounded bg-muted/60' />
                    <div className='h-2 w-32 rounded bg-muted/50' />
                    <div className='h-2 w-24 rounded bg-muted/60' />
                    <div className='h-2 w-40 rounded bg-muted/70' />
                    <div className='h-2 w-30 rounded bg-muted/50' />
                </div>
            </aside>

            <main className='flex-1 border-r border-border bg-(--editor-bg) min-w-0 flex flex-col'>
                <div className='h-9 border-b border-border bg-card/70' />
                <div className='h-8 border-b border-border bg-card/40' />
                <div className='flex-1 p-6 space-y-3'>
                    <div className='h-3 w-4/5 rounded bg-muted/60' />
                    <div className='h-3 w-3/5 rounded bg-muted/50' />
                    <div className='h-3 w-2/3 rounded bg-muted/60' />
                    <div className='h-3 w-1/2 rounded bg-muted/50' />
                </div>
                <div className='h-40 border-t border-border bg-black/20 p-3 space-y-2'>
                    <div className='h-2 w-32 rounded bg-muted/60' />
                    <div className='h-2 w-48 rounded bg-muted/50' />
                    <div className='h-2 w-40 rounded bg-muted/60' />
                    <div className='h-2 w-28 rounded bg-muted/50' />
                </div>
            </main>

            <aside className='hidden lg:flex w-[25%] min-w-[260px] bg-sidebar flex-col'>
                <div className='h-10 border-b border-border px-3 flex items-center justify-between'>
                    <div className='h-3 w-16 rounded bg-muted/70' />
                    <div className='h-6 w-6 rounded bg-muted/60' />
                </div>
                <div className='flex-1 p-3 space-y-3'>
                    <div className='ml-auto h-12 w-4/5 rounded-lg bg-muted/60' />
                    <div className='h-14 w-5/6 rounded-lg bg-muted/50' />
                    <div className='ml-auto h-10 w-3/4 rounded-lg bg-muted/60' />
                    <div className='h-16 w-11/12 rounded-lg bg-muted/50' />
                </div>
                <div className='border-t border-border p-3'>
                    <div className='h-20 rounded-lg bg-muted/60' />
                </div>
            </aside>
        </div>
        <div className='h-6 border-t border-border bg-primary/90' />
    </div>
);

const IDELayout = dynamic(
    () => import('@/components/ide/ide-layout').then((mod) => mod.IDELayout),
    {
        ssr: false,
        loading: () => <IDELayoutSkeleton />
    }
);

export const IDELayoutClient = () => <IDELayout />;
