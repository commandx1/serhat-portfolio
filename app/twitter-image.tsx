import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/seo'

export const runtime = 'edge'
export const alt = `${siteConfig.name} Twitter Card`
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(120deg, #0d1117 0%, #111827 60%, #18263b 100%)',
          color: '#e6edf3',
          padding: '48px 58px',
          fontFamily: 'ui-monospace, Menlo, Monaco, Consolas, monospace',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 52, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 30, color: '#4ec9b0' }}>{siteConfig.role}</div>
          <div style={{ fontSize: 22, color: '#9cdcfe' }}>serhat-belen.dev</div>
        </div>
        <div
          style={{
            width: 240,
            height: 240,
            borderRadius: 24,
            border: '2px solid #2d333b',
            background: '#161b22',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9cdcfe',
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          {'</>'}
        </div>
      </div>
    ),
    size,
  )
}
