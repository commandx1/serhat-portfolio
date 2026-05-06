'use client'

import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export type RuntimeRoute = 'about' | 'experience' | 'projects' | 'contact'

const BrowserPreviewFrame = ({
  path,
  children,
}: {
  path: string
  children: ReactNode
}) => (
  <div className='h-full w-full p-4 sm:p-6 bg-[linear-gradient(180deg,var(--ide-bg-elevated)_0%,var(--ide-bg-canvas)_100%)]'>
    <div className='h-full rounded-xl border border-(--ide-border) overflow-hidden bg-(--ide-bg-card) shadow-2xl shadow-black/30'>
      <div className='h-10 border-b border-(--ide-border) bg-(--ide-bg-chip) px-4 flex items-center gap-3'>
        <div className='flex items-center gap-1.5'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f57]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#febc2e]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#28c840]' />
        </div>
        <div className='flex-1 max-w-xl mx-auto bg-(--ide-bg-elevated) border border-(--ide-border-strong) rounded-md h-7 px-3 text-xs text-(--ide-text-muted) flex items-center'>
          https://serhatbelen.dev{path}
        </div>
      </div>
      <div className='h-[calc(100%-2.5rem)] overflow-auto bg-(--ide-bg-canvas) text-(--ide-text-main)'>{children}</div>
    </div>
  </div>
)

const AboutPreview = () => (
  <section className='p-6 sm:p-10'>
    <div className='max-w-3xl'>
      <p className='text-xs uppercase tracking-[0.2em] text-(--ide-accent)'>About</p>
      <h1 className='text-3xl sm:text-4xl font-semibold mt-2 text-(--ide-text-bright)'>Serhat Belen</h1>
      <p className='text-lg text-(--ide-accent-soft) mt-2'>Full Stack Developer · 5+ years</p>

      <div className='mt-6 space-y-4 text-(--ide-text-soft) leading-7'>
        <p>
          Full Stack Developer with 5+ years of experience specializing in scalable backend systems and modern web
          applications.
        </p>
        <p>
          Proficient in Node.js ecosystem technologies, .NET/C#, and event-driven architectures with RabbitMQ and
          high-throughput async pipelines.
        </p>
        <p>Strong focus on performance optimization including Redis caching strategies and production memory-leak diagnostics.</p>
      </div>

      <div className='mt-8 grid gap-3 sm:grid-cols-2'>
        {[
          'Dockerized monorepo architecture',
          'AWS EC2 and Lightsail deployments',
          'Fast-paced startup execution',
          'Critical system ownership',
        ].map((item) => (
          <div key={item} className='rounded-lg border border-(--ide-border) bg-(--ide-bg-card) px-4 py-3 text-sm text-(--ide-text-main)'>
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
)

const ProjectsPreview = () => (
  <section className='p-6 sm:p-10'>
    <div className='max-w-5xl'>
      <p className='text-xs uppercase tracking-[0.2em] text-(--ide-accent)'>Projects</p>
      <h1 className='text-3xl font-semibold mt-2 text-(--ide-text-bright)'>Featured Work</h1>
      <div className='mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        {[
          {
            name: 'Ciftopia',
            stack: 'React Native · NestJS · AWS S3',
            desc: 'AI-assisted couples app with real-time quiz and gamification.',
          },
          {
            name: 'Dental B2B Marketplace',
            stack: 'Next.js · .NET · PostgreSQL',
            desc: '50k+ products with supplier workflows and SEO-oriented storefront.',
          },
          {
            name: 'Time Heroes',
            stack: 'React · TypeScript · Jotai',
            desc: 'In-game UI and client-side logic for idle RPG gameplay loops.',
          },
        ].map((project) => (
          <article key={project.name} className='rounded-xl border border-(--ide-border) bg-(--ide-bg-card) p-5 hover:border-(--ide-border-strong) transition-colors'>
            <h2 className='text-lg font-semibold text-(--ide-text-bright)'>{project.name}</h2>
            <p className='mt-1 text-xs text-(--ide-accent-soft)'>{project.stack}</p>
            <p className='mt-4 text-sm leading-6 text-(--ide-text-main)'>{project.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

const ExperiencePreview = () => (
  <section className='p-6 sm:p-10'>
    <div className='max-w-5xl'>
      <p className='text-xs uppercase tracking-[0.2em] text-(--ide-accent)'>Experience</p>
      <h1 className='text-3xl sm:text-4xl font-semibold mt-2 text-(--ide-text-bright)'>Work History</h1>

      <div className='mt-8 space-y-4'>
        {[
          {
            company: 'Onlay AI',
            role: 'Full Stack Developer',
            period: 'Jun 2025 – Present',
            tech: ['Next.js', 'NestJS', 'TypeScript', 'MongoDB', 'RabbitMQ', 'AWS'],
            highlights: [
              'Designed modular plugin architecture for dynamic AI integrations',
              'Built AI-powered features with LLM APIs and async pipelines',
            ],
          },
          {
            company: 'Avena – Retrace',
            role: 'Full Stack Developer',
            period: 'Apr 2021 – May 2025',
            tech: ['React', 'Node.js', '.NET (C#)', 'Redis', 'Docker'],
            highlights: ['Developed high-throughput EDI services for healthcare', 'Improved dashboard performance with Redis caching'],
          },
        ].map((job) => (
          <article key={job.company} className='rounded-xl border border-(--ide-border) bg-(--ide-bg-card) p-5'>
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2'>
              <h2 className='text-lg font-semibold text-(--ide-text-bright)'>{job.company}</h2>
              <p className='text-xs text-(--ide-accent-soft)'>{job.period}</p>
            </div>
            <p className='mt-2 text-sm text-(--ide-text-main)'>{job.role}</p>
            <div className='mt-4 flex flex-wrap gap-2'>
              {job.tech.map((item) => (
                <span key={item} className='text-xs rounded-md border border-(--ide-border-strong) bg-(--ide-bg-chip) px-2 py-1 text-(--ide-accent-soft)'>
                  {item}
                </span>
              ))}
            </div>
            <ul className='mt-4 list-disc pl-5 space-y-2 text-sm text-(--ide-text-soft)'>
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
)

const ContactPreview = () => (
  <section className='p-6 sm:p-10'>
    <div className='max-w-3xl'>
      <p className='text-xs uppercase tracking-[0.2em] text-(--ide-accent)'>Contact</p>
      <h1 className='text-3xl sm:text-4xl font-semibold mt-2 text-(--ide-text-bright)'>Let&apos;s Build Something Useful</h1>
      <p className='mt-3 text-(--ide-text-soft)'>
        If you have a project idea or need support on an existing product, feel free to reach out. I usually reply within 24
        hours.
      </p>

      <div className='mt-8 grid gap-4 sm:grid-cols-2'>
        {[
          { label: 'Email', value: 'serhatbelen7@gmail.com' },
          { label: 'Phone', value: '+90 534 420 0038' },
          { label: 'LinkedIn', value: 'linkedin.com/in/serhat-belen' },
          { label: 'GitHub', value: 'github.com/commandx1' },
        ].map((item) => (
          <article key={item.label} className='rounded-xl border border-(--ide-border) bg-(--ide-bg-card) p-4'>
            <p className='text-xs text-(--ide-accent-soft)'>{item.label}</p>
            <p className='mt-1 text-(--ide-text-bright)'>{item.value}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export const AppRuntimePreview = ({
  route,
  onRouteChange,
}: {
  route: RuntimeRoute
  onRouteChange: (route: RuntimeRoute) => void
}) => {
  const [loadingRoute, setLoadingRoute] = useState<RuntimeRoute | null>(null)
  const loadingTimerRef = useRef<number | null>(null)

  const clearLoadingTimer = useCallback(() => {
    if (loadingTimerRef.current !== null) {
      window.clearTimeout(loadingTimerRef.current)
      loadingTimerRef.current = null
    }
  }, [])

  useEffect(() => {
    return () => {
      clearLoadingTimer()
    }
  }, [clearLoadingTimer])

  const handleRouteChange = useCallback((nextRoute: RuntimeRoute) => {
    clearLoadingTimer()

    const shouldSimulateLoading = nextRoute === 'experience' || nextRoute === 'projects' || nextRoute === 'contact'

    if (shouldSimulateLoading) {
      setLoadingRoute(nextRoute)
      loadingTimerRef.current = window.setTimeout(() => {
        setLoadingRoute((current) => (current === nextRoute ? null : current))
        loadingTimerRef.current = null
      }, 1000)
    } else {
      setLoadingRoute(null)
    }

    onRouteChange(nextRoute)
  }, [clearLoadingTimer, onRouteChange])

  const routeToRender = loadingRoute ?? route
  const isLoadingRoute = loadingRoute !== null

  return (
    <BrowserPreviewFrame path={`/${routeToRender}`}>
      <div className='min-h-full'>
        <header className='sticky top-0 z-10 border-b border-(--ide-border) bg-(--ide-bg-card)/95 backdrop-blur'>
          <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4'>
            <div>
              <p className='text-[11px] uppercase tracking-[0.2em] text-(--ide-accent)'>Portfolio App</p>
              <h1 className='mt-1 text-sm font-semibold text-(--ide-text-bright)'>Serhat Belen</h1>
            </div>

            <nav className='flex flex-wrap gap-2'>
              {[
                { key: 'about' as const, label: 'About' },
                { key: 'experience' as const, label: 'Experience' },
                { key: 'projects' as const, label: 'Projects' },
                { key: 'contact' as const, label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleRouteChange(item.key)}
                  className={cn(
                    'rounded-md border px-3 py-1.5 text-xs transition-colors',
                    routeToRender === item.key
                      ? 'border-(--ide-border-strong) bg-(--ide-bg-chip) text-(--ide-text-bright)'
                      : 'border-(--ide-border) bg-(--ide-bg-elevated) text-(--ide-text-muted) hover:bg-(--ide-bg-chip)'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <main className='mx-auto w-full max-w-6xl'>
          {isLoadingRoute ? (
            <section className='p-6 sm:p-10'>
              <p className='text-sm text-(--ide-accent-soft)'>Loading {routeToRender}...</p>
            </section>
          ) : null}

          {!isLoadingRoute && routeToRender === 'about' && <AboutPreview />}
          {!isLoadingRoute && routeToRender === 'experience' && <ExperiencePreview />}
          {!isLoadingRoute && routeToRender === 'projects' && <ProjectsPreview />}
          {!isLoadingRoute && routeToRender === 'contact' && <ContactPreview />}
        </main>
      </div>
    </BrowserPreviewFrame>
  )
}
