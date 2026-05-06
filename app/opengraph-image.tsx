import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/seo'

export const runtime = 'edge'
export const alt = `${siteConfig.name} Portfolio Preview`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0d1117 0%, #111827 55%, #162032 100%)',
          color: '#e6edf3',
          padding: '56px 60px',
          fontFamily: 'ui-monospace, Menlo, Monaco, Consolas, monospace',
        }}
      >
        <div style={{ color: '#9cdcfe', fontSize: 24 }}>serhat-belen.dev</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 34, color: '#4ec9b0' }}>{siteConfig.role}</div>
          <div style={{ fontSize: 26, color: '#b8c1ce', maxWidth: 980 }}>
            Node.js • React • TypeScript • Scalable Backend Systems
          </div>
        </div>
        <div style={{ color: '#9aa7b5', fontSize: 20 }}>Portfolio • Experience • Projects • Contact</div>
      </div>
    ),
    size,
  )
}
