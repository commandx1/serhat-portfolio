'use client'

import { CheckCircle } from 'lucide-react'

interface OutputPaneProps {
  sessionsCount: number
  runningCount: number
}

export const ProblemsPane = () => (
  <div className='flex-1 flex items-center justify-center text-muted-foreground text-sm'>
    <CheckCircle className='h-4 w-4 mr-2 text-green-400' />
    No problems detected
  </div>
)

export const OutputPane = ({ sessionsCount, runningCount }: OutputPaneProps) => (
  <div className='flex-1 p-3 font-mono text-sm text-muted-foreground overflow-y-auto'>
    <p>[info] Terminal subsystem initialized</p>
    <p>[info] Active sessions: {sessionsCount}</p>
    <p>[info] Running processes: {runningCount}</p>
    <p>[hint] frontend: npm run dev (http://localhost:5173)</p>
    <p>[hint] backend: npm run dev (http://localhost:3001)</p>
  </div>
)
