'use client'

import { useIDEStore } from '@/lib/ide-store'
import { cn } from '@/lib/utils'
import { FileIcon } from './file-icon'

export const OpenEditors = () => {
  const { openTabs, activeTabId, setActiveTab, closeTab } = useIDEStore()

  if (openTabs.length === 0) {
    return <p className="text-xs text-muted-foreground px-3 py-1">No open editors</p>
  }

  return (
    <div className="space-y-0.5">
      {openTabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            'flex items-center gap-2 px-3 py-1 text-sm cursor-pointer hover:bg-muted/50 group',
            activeTabId === tab.id && 'bg-muted',
          )}
        >
          <FileIcon filename={tab.name} className="h-3 w-3" />
          <span className="flex-1 truncate text-muted-foreground">{tab.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeTab(tab.id)
            }}
            className="opacity-0 group-hover:opacity-100 hover:bg-muted rounded p-0.5"
          >
            <span className="text-xs">×</span>
          </button>
        </div>
      ))}
    </div>
  )
}
