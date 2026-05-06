'use client'

import { NavigationControls } from './titlebar/navigation-controls'
import { RightControls } from './titlebar/right-controls'
import { SearchTrigger } from './titlebar/search-trigger'
import { WindowControls } from './titlebar/window-controls'

export const TitleBar = () => {
  return (
    <div className='h-10 bg-card border-b border-border flex items-center px-2 gap-2'>
      <WindowControls />
      <NavigationControls />

      <SearchTrigger />
      <RightControls />
    </div>
  )
}
