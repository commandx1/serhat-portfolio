'use client'

import { Search } from 'lucide-react'

export const SearchTrigger = () => (
  <div className='flex-1 flex justify-center'>
    <button className='flex items-center gap-2 bg-muted/50 hover:bg-muted px-4 py-1.5 rounded-md min-w-[300px] max-w-[500px] transition-colors'>
      <Search className='h-4 w-4 text-muted-foreground' />
      <span className='text-sm text-muted-foreground flex-1 text-left'>
        serhat-belen — Serhat Belen Portfolio
      </span>
      <kbd className='text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground'>⌘P</kbd>
    </button>
  </div>
)
