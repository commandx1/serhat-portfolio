'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

export const NavigationControls = () => (
  <div className='flex items-center gap-1'>
    <button className='p-1.5 hover:bg-muted rounded transition-colors'>
      <ChevronLeft className='h-4 w-4 text-muted-foreground' />
    </button>
    <button className='p-1.5 hover:bg-muted rounded transition-colors'>
      <ChevronRight className='h-4 w-4 text-muted-foreground' />
    </button>
  </div>
)
