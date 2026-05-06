'use client'

import { AlertCircle, Globe, Play, Plus, Square, Terminal as TerminalIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TerminalTab } from '../terminal-model'

interface TopBarProps {
  activeTab: TerminalTab
  runningCount: number
  isFrontendRunning: boolean
  runtimePreviewOpen: boolean
  onSetTab: (tab: TerminalTab) => void
  onToggleBrowser: () => void
}

export const TopBar = ({
  activeTab,
  runningCount,
  isFrontendRunning,
  runtimePreviewOpen,
  onSetTab,
  onToggleBrowser,
}: TopBarProps) => (
  <div className='h-8 border-b border-border flex items-center px-2'>
    <div className='flex items-center gap-1'>
      <button
        onClick={() => onSetTab('problems')}
        className={cn(
          'px-3 py-1 text-xs rounded-t transition-colors flex items-center gap-1',
          activeTab === 'problems' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        <AlertCircle className='h-3 w-3' />
        Problems
        <span className='ml-1 px-1 bg-muted-foreground/30 rounded text-[10px]'>0</span>
      </button>

      <button
        onClick={() => onSetTab('output')}
        className={cn(
          'px-3 py-1 text-xs rounded-t transition-colors',
          activeTab === 'output' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        Output
      </button>

      <button
        onClick={() => onSetTab('terminal')}
        className={cn(
          'px-3 py-1 text-xs rounded-t transition-colors flex items-center gap-1',
          activeTab === 'terminal' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        <TerminalIcon className='h-3 w-3' />
        Terminal
        <span className='ml-1 text-[10px] text-primary'>{runningCount}</span>
      </button>
    </div>

    <div className='flex-1' />

    <div className='flex items-center gap-1'>
      {isFrontendRunning || runtimePreviewOpen ? (
        <div className='relative p-px rounded overflow-hidden'>
          <div
            className='absolute -inset-full animate-spin'
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0%, var(--ide-accent-soft) 15%, var(--ide-accent-strong) 30%, transparent 45%)',
              animationDuration: '3s',
              animationTimingFunction: 'linear',
            }}
          />
          <button
            onClick={onToggleBrowser}
            className='relative h-6 px-2 rounded bg-[var(--ide-bg-elevated)] text-[var(--ide-accent-soft)] text-[11px] hover:bg-[var(--ide-bg-chip)] transition-colors flex items-center gap-1.5'
          >
            <Globe className='h-3 w-3' />
            {runtimePreviewOpen ? 'Hide Browser' : 'Show in Browser'}
          </button>
        </div>
      ) : null}

      <button className='p-1 hover:bg-muted rounded transition-colors'>
        <Plus className='h-3 w-3 text-muted-foreground' />
      </button>
      <button className='p-1 hover:bg-muted rounded transition-colors'>
        <Play className='h-3 w-3 text-muted-foreground' />
      </button>
      <button className='p-1 hover:bg-muted rounded transition-colors'>
        <Square className='h-3 w-3 text-muted-foreground' />
      </button>
    </div>
  </div>
)
