import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description: 'Featured engineering projects, technology stacks, and delivered product capabilities.',
  path: '/projects',
  keywords: ['software projects', 'nextjs projects', 'portfolio case studies'],
})

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
      <p className="text-xs uppercase tracking-[0.2em] text-(--ide-accent)">Projects</p>
      <h1 className="mt-2 text-3xl font-semibold text-(--ide-text-bright) sm:text-4xl">Featured Work</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="rounded-xl border border-(--ide-border) bg-(--ide-bg-card) p-5">
            <h2 className="text-lg font-semibold text-(--ide-text-bright)">{project.name}</h2>
            <p className="mt-1 text-xs text-(--ide-accent-soft)">{project.techStack.join(' · ')}</p>
            <p className="mt-4 text-sm leading-6 text-(--ide-text-main)">{project.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-(--ide-text-soft)">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
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
