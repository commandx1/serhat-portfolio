'use client'

import { ChevronRight } from 'lucide-react'
import { useIDEStore } from '@/lib/ide-store'

export const Breadcrumb = () => {
  const { openTabs, activeTabId } = useIDEStore()
  const activeTab = openTabs.find(t => t.id === activeTabId)

  if (!activeTab) {
    return (
      <div className="h-6 bg-(--editor-bg) border-b border-border flex items-center px-4 text-xs text-muted-foreground">
        <span>Welcome</span>
      </div>
    )
  }

  const pathParts = activeTab.path.split('/')

  return (
    <div className="h-6 bg-(--editor-bg) border-b border-border flex items-center px-4 text-xs overflow-x-auto">
      {pathParts.map((part, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-3 w-3 text-muted-foreground mx-1" />}
          <span className={index === pathParts.length - 1 ? "text-foreground" : "text-muted-foreground hover:text-foreground cursor-pointer"}>
            {part}
          </span>
        </span>
      ))}
    </div>
  )
}
