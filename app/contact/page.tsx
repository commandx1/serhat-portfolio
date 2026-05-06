import type { Metadata } from 'next'
import Link from 'next/link'
import { contactItems } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: 'Contact channels for project collaboration, consulting, and product engineering work.',
  path: '/contact',
  keywords: ['contact serhat belen', 'hire full stack developer', 'engineering consulting'],
})

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--ide-accent)]">Contact</p>
      <h1 className="mt-2 text-3xl font-semibold text-[var(--ide-text-bright)] sm:text-4xl">Let&apos;s Build Something Useful</h1>
      <p className="mt-3 text-[var(--ide-text-soft)]">
        If you have a project idea or need support on an existing product, feel free to reach out.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {contactItems.map((item) => (
          <li key={item.title}>
            <a
              className="block rounded-xl border border-[var(--ide-border)] bg-[var(--ide-bg-card)] p-4"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <p className="text-xs text-[var(--ide-accent-soft)]">{item.title}</p>
              <p className="mt-1 text-[var(--ide-text-bright)]">{item.value}</p>
            </a>
          </li>
        ))}
      </ul>

      <Link href="/" className="mt-10 inline-block text-sm text-[var(--ide-accent-soft)] hover:text-[var(--ide-text-bright)]">
        Back to IDE view
      </Link>
    </main>
  )
}
