'use client'

import { Cloud, GitBranch, LayoutGrid, Play, Settings } from 'lucide-react'

export const RightControls = () => (
  <>
    <div className='flex items-center gap-1'>
      <button className='p-1.5 hover:bg-muted rounded transition-colors'>
        <LayoutGrid className='h-4 w-4 text-muted-foreground' />
      </button>
      <button className='p-1.5 hover:bg-muted rounded transition-colors'>
        <Play className='h-4 w-4 text-muted-foreground' />
      </button>
    </div>

    <div className='flex items-center gap-2 text-xs text-muted-foreground px-2'>
      <div className='flex items-center gap-1'>
        <GitBranch className='h-3 w-3' />
        <span>main</span>
      </div>
      <Cloud className='h-3 w-3' />
    </div>

    <button className='p-1.5 hover:bg-muted rounded transition-colors'>
      <Settings className='h-4 w-4 text-muted-foreground' />
    </button>

    <div className='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary'>
      SB
    </div>
  </>
)
