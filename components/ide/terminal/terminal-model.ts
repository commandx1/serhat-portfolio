export type TerminalTab = 'terminal' | 'problems' | 'output'

export interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success' | 'info'
  content: string
}

export interface TerminalSession {
  id: string
  name: string
  runtime: string
  port: string
  cwd: string
  status: 'running' | 'idle'
  lines: TerminalLine[]
}

export const initialSessions: TerminalSession[] = [
  {
    id: 'frontend-app',
    name: 'frontend',
    runtime: 'Vite + React',
    port: '5173',
    cwd: '~/serhat-belen/frontend',
    status: 'idle',
    lines: [
      { type: 'info', content: 'No process is running in this terminal.' },
      { type: 'info', content: 'Tip: run `npm run dev` to start the React app on :5173' },
    ],
  },
  {
    id: 'backend-api',
    name: 'backend',
    runtime: 'Node + Express',
    port: '3001',
    cwd: '~/serhat-belen/backend',
    status: 'idle',
    lines: [
      { type: 'info', content: 'No process is running in this terminal.' },
      { type: 'info', content: 'Tip: run `npm run dev` to start the Express API on :3001' },
    ],
  },
]

export const staticCommands: Record<string, string> = {
  help: `Available commands:
  help        - Show this help message
  npm -v      - Show npm version
  node -v     - Show node version
  npm run dev - Start dev server
  ps          - Show active process
  logs        - Show recent logs
  clear       - Clear terminal output`,
  'npm -v': '10.8.2',
  'node -v': 'v20.19.0',
}
