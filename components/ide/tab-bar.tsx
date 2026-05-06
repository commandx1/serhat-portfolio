'use client'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useIDEStore } from '@/lib/ide-store'
import { copyToClipboard } from '@/lib/clipboard'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { FileIcon } from './sidebar/file-icon'

export const TabBar = () => {
  const { openTabs, activeTabId, setActiveTab, closeTab, closeOtherTabs, closeAllTabs } = useIDEStore()

  if (openTabs.length === 0) {
    return (
      <div className="h-9 bg-(--tab-inactive) border-b border-border flex items-center px-4">
        <span className="text-xs text-muted-foreground">No files open</span>
      </div>
    )
  }

  return (
    <div className="h-9 bg-(--tab-inactive) border-b border-border flex items-center overflow-x-auto">
      {openTabs.map((tab) => (
        <ContextMenu key={tab.id}>
          <ContextMenuTrigger asChild>
            <div
              onClick={() => setActiveTab(tab.id)}
              onContextMenu={() => setActiveTab(tab.id)}
              className={cn(
                "h-full flex items-center gap-2 px-3 cursor-pointer border-r border-border group min-w-fit",
                activeTabId === tab.id 
                  ? "bg-(--tab-active) border-t-2 border-t-primary" 
                  : "bg-(--tab-inactive) hover:bg-muted/30"
              )}
            >
              <FileIcon filename={tab.name} />
              <span className={cn(
                "text-sm whitespace-nowrap",
                activeTabId === tab.id ? "text-foreground" : "text-muted-foreground"
              )}>
                {tab.name}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); closeTab(tab.id) }}
                className={cn(
                  "p-0.5 rounded hover:bg-muted transition-colors",
                  activeTabId === tab.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-44">
            <ContextMenuItem onClick={() => closeTab(tab.id)}>
              Close
            </ContextMenuItem>
            <ContextMenuItem
              disabled={openTabs.length <= 1}
              onClick={() => closeOtherTabs(tab.id)}
            >
              Close Others
            </ContextMenuItem>
            <ContextMenuItem
              disabled={openTabs.length === 0}
              onClick={closeAllTabs}
            >
              Close All
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={() => copyToClipboard(tab.path)}>
              Copy Path
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
