import type { TerminalLine } from './terminal-model'

export interface TerminalChunk {
  delayMs: number
  line: TerminalLine
}

export const frontendLogLines: TerminalLine[] = [
  { type: 'info', content: '11:21:03 [vite] hmr update /src/App.tsx' },
  { type: 'info', content: '11:21:08 [vite] hmr update /src/components/Hero.tsx' },
]

export const backendLogLines: TerminalLine[] = [
  { type: 'info', content: '[server] GET /api/projects 200 11ms' },
  { type: 'info', content: '[server] POST /api/contact 201 17ms' },
]

export const experienceRouteLogLines: TerminalLine[] = [
  { type: 'info', content: '[server] GET /api/experiences 200 14ms' },
]

export const projectsRouteLogLines: TerminalLine[] = [
  { type: 'info', content: '[server] GET /api/projects 200 12ms' },
]

export const contactRouteLogLines: TerminalLine[] = [
  { type: 'info', content: '[server] GET /api/contact 200 6ms' },
]

export const frontendDevStartChunks: TerminalChunk[] = [
  { delayMs: 120, line: { type: 'success', content: '> frontend@0.1.0 dev' } },
  { delayMs: 140, line: { type: 'success', content: '> vite' } },
  { delayMs: 260, line: { type: 'info', content: '' } },
  { delayMs: 220, line: { type: 'success', content: 'VITE v5.4.8  ready in 347ms' } },
  { delayMs: 150, line: { type: 'success', content: '➜  Local:   http://localhost:5173/' } },
  { delayMs: 150, line: { type: 'success', content: '➜  Network: http://192.168.1.100:5173/' } },
  { delayMs: 130, line: { type: 'info', content: '➜  press h + enter to show help' } },
]

export const backendDevStartChunks: TerminalChunk[] = [
  { delayMs: 120, line: { type: 'success', content: '> backend@1.0.0 dev' } },
  { delayMs: 140, line: { type: 'success', content: '> nodemon server.js' } },
  { delayMs: 230, line: { type: 'info', content: '[nodemon] 3.1.10' } },
  { delayMs: 140, line: { type: 'info', content: '[nodemon] to restart at any time, enter `rs`' } },
  { delayMs: 140, line: { type: 'info', content: '[nodemon] watching path(s): *.*' } },
  { delayMs: 140, line: { type: 'info', content: '[nodemon] watching extensions: js,mjs,cjs,json' } },
  { delayMs: 160, line: { type: 'success', content: '[nodemon] starting `node server.js`' } },
  { delayMs: 210, line: { type: 'success', content: '[server] Listening on http://localhost:3001' } },
]
