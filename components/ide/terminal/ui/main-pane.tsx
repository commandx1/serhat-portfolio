'use client'

import type { KeyboardEvent, RefObject } from 'react'
import { cn } from '@/lib/utils'
import type { TerminalSession } from '../terminal-model'

interface MainPaneProps {
  activeSession: TerminalSession
  input: string
  inputRef: RefObject<HTMLInputElement | null>
  containerRef: RefObject<HTMLDivElement | null>
  idleTip: string
  onInputChange: (value: string) => void
  onInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
  onContainerClick: () => void
}

export const MainPane = ({
  activeSession,
  input,
  inputRef,
  containerRef,
  idleTip,
  onInputChange,
  onInputKeyDown,
  onContainerClick,
}: MainPaneProps) => (
  <div className='flex-1 min-h-0 flex flex-col'>
    <div ref={containerRef} onClick={onContainerClick} className='flex-1 overflow-y-auto p-3 font-mono text-sm cursor-text'>
      {activeSession.status === 'idle' ? (
        <div className='sticky top-0 z-10 mb-2 rounded border border-[var(--ide-border-strong)] bg-[var(--ide-bg-elevated)] px-2 py-1 text-[11px] text-[var(--ide-accent-soft)]'>
          {idleTip}
        </div>
      ) : null}

      {activeSession.lines.map((line, index) => (
        <div
          key={`${activeSession.id}-${index}`}
          className={cn(
            'whitespace-pre-wrap',
            line.type === 'input' && 'text-foreground',
            line.type === 'output' && 'text-muted-foreground',
            line.type === 'error' && 'text-red-400',
            line.type === 'success' && 'text-green-400',
            line.type === 'info' && 'text-primary',
          )}
        >
          {line.content}
        </div>
      ))}

      <div className='flex items-center'>
        <span className='text-green-400 mr-2'>$</span>
        <input
          ref={inputRef}
          type='text'
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onInputKeyDown}
          className='flex-1 bg-transparent outline-none text-foreground'
          autoFocus
        />
        <span className='w-2 h-4 bg-foreground cursor-blink' />
      </div>
    </div>
  </div>
)
