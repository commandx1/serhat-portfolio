'use client'

import { cn } from '@/lib/utils'
import type { TerminalSession } from '../terminal-model'

interface SessionSwitcherProps {
  sessions: TerminalSession[]
  activeSessionId: string
  onSelectSession: (sessionId: string) => void
}

export const SessionSwitcher = ({ sessions, activeSessionId, onSelectSession }: SessionSwitcherProps) => (
  <aside className='w-52 border-l border-border bg-sidebar/40 p-2 space-y-1'>
    <p className='text-[10px] uppercase tracking-wider text-muted-foreground px-1 pb-1'>Terminals</p>
    {sessions.map((session) => (
      <button
        key={session.id}
        onClick={() => onSelectSession(session.id)}
        className={cn(
          'w-full text-left rounded-md px-2 py-1.5 border transition-colors',
          activeSessionId === session.id ? 'bg-muted border-primary/50' : 'bg-transparent border-transparent hover:bg-muted/40',
        )}
      >
        <div className='flex items-center justify-between'>
          <span className='text-xs text-foreground truncate'>{session.name}</span>
          <span className={cn('h-2 w-2 rounded-full', session.status === 'running' ? 'bg-green-400' : 'bg-muted-foreground')} />
        </div>
        <p className='text-[11px] text-muted-foreground truncate'>
          {session.runtime} :{session.port}
        </p>
      </button>
    ))}
  </aside>
)
