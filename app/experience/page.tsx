import type { Metadata } from 'next'
import Link from 'next/link'
import { workExperience } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Experience',
  description: 'Work history, responsibilities, and measurable impact across product engineering roles.',
  path: '/experience',
  keywords: ['software engineer experience', 'nodejs experience', 'backend engineering roles'],
})

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
      <p className="text-xs uppercase tracking-[0.2em] text-(--ide-accent)">Experience</p>
      <h1 className="mt-2 text-3xl font-semibold text-(--ide-text-bright) sm:text-4xl">Work History</h1>

      <div className="mt-8 space-y-4">
        {workExperience.map((job) => (
          <article key={job.company} className="rounded-xl border border-(--ide-border) bg-(--ide-bg-card) p-5">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-semibold text-(--ide-text-bright)">{job.company}</h2>
              <p className="text-xs text-(--ide-accent-soft)">{job.period}</p>
            </header>
            <p className="mt-2 text-sm text-(--ide-text-main)">{job.role}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {job.techStack.map((tech) => (
                <li key={tech} className="text-xs rounded-md border border-(--ide-border-strong) bg-(--ide-bg-chip) px-2 py-1 text-(--ide-accent-soft)">
                  {tech}
                </li>
              ))}
            </ul>

            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-(--ide-text-soft)">
              {job.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <Link href="/" className="mt-10 inline-block text-sm text-(--ide-accent-soft) hover:text-(--ide-text-bright)">
        Back to IDE view
      </Link>
    </main>
  )
}
