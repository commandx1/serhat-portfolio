import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Serhat Belen',
  role: 'Senior Full Stack Developer',
  title: 'Serhat Belen | Senior Full Stack Developer',
  description:
    'Portfolio of Serhat Belen, Senior Full Stack Developer specialized in Node.js, React, TypeScript, scalable backend systems, and AI-powered product engineering.',
  locale: 'en_US',
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || 'https://serhatbelen.dev').replace(/\/+$/, ''),
  email: 'serhatbelen7@gmail.com',
  links: {
    github: 'https://github.com/commandx1',
    linkedin: 'https://linkedin.com/in/serhat-belen',
  },
  keywords: [
    'Serhat Belen',
    'Senior Full Stack Developer',
    'Full Stack Developer Portfolio',
    'Node.js',
    'React',
    'TypeScript',
    'Next.js',
    'NestJS',
    'Redis',
    'RabbitMQ',
    'AWS',
  ],
} as const

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.siteUrl).toString()

const defaultOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} - ${siteConfig.role}`,
}

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata => {
  const fullTitle = `${title} | ${siteConfig.name}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: path,
      siteName: siteConfig.title,
      locale: siteConfig.locale,
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/twitter-image'],
    },
  }
}
