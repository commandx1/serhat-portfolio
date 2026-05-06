'use client'

import { GitBranch, Bell, Check, AlertCircle, Radio, Wifi } from 'lucide-react'
import { useIDEStore } from '@/lib/ide-store'

export const StatusBar = () => {
  const { openTabs, activeTabId } = useIDEStore()
  const activeTab = openTabs.find(t => t.id === activeTabId)

  const getLanguage = (filename?: string) => {
    if (!filename) return 'Plain Text'
    const ext = filename.split('.').pop()
    switch (ext) {
      case 'tsx': return 'TypeScript React'
      case 'ts': return 'TypeScript'
      case 'json': return 'JSON'
      case 'md': return 'Markdown'
      default: return 'Plain Text'
    }
  }

  return (
    <div className="h-6 bg-primary flex items-center justify-between px-3 text-xs text-primary-foreground">
      <div className="flex items-center gap-3">
        {/* Git Branch */}
        <div className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          <GitBranch className="h-3 w-3" />
          <span>main</span>
        </div>

        {/* Sync Status */}
        <div className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          <Radio className="h-3 w-3" />
        </div>

        {/* Errors & Warnings */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
            <AlertCircle className="h-3 w-3" />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
            <Check className="h-3 w-3" />
            <span>0</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Line & Column */}
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          Ln 1, Col 1
        </span>

        {/* Spaces */}
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          Spaces: 2
        </span>

        {/* Encoding */}
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          UTF-8
        </span>

        {/* Line Ending */}
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          LF
        </span>

        {/* Language */}
        <span className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          {getLanguage(activeTab?.name)}
        </span>

        {/* Connection Status */}
        <div className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          <Wifi className="h-3 w-3" />
        </div>

        {/* Notifications */}
        <div className="hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">
          <Bell className="h-3 w-3" />
        </div>
      </div>
    </div>
  )
}
