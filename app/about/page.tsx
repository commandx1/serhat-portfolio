import type { Metadata } from 'next'
import Link from 'next/link'
import { aboutHighlights, aboutSummary } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description: 'Full Stack Developer profile, focus areas, and career highlights.',
  path: '/about',
  keywords: ['about serhat belen', 'full stack developer profile', 'software engineer bio'],
})

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--ide-accent)]">About</p>
      <h1 className="mt-2 text-3xl font-semibold text-[var(--ide-text-bright)] sm:text-4xl">{aboutSummary.name}</h1>
      <p className="mt-2 text-[var(--ide-accent-soft)]">{aboutSummary.title} · {aboutSummary.experienceYears}</p>

      <div className="mt-6 space-y-3 text-[var(--ide-text-soft)] leading-7">
        {aboutSummary.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ide-accent)]">Highlights</h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {aboutHighlights.map((item) => (
          <li key={item} className="rounded-lg border border-[var(--ide-border)] bg-[var(--ide-bg-card)] px-4 py-3 text-sm text-[var(--ide-text-main)]">
            {item}
          </li>
        ))}
      </ul>

      <Link href="/" className="mt-10 inline-block text-sm text-[var(--ide-accent-soft)] hover:text-[var(--ide-text-bright)]">
        Back to IDE view
      </Link>
    </main>
  )
}
