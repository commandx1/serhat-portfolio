'use client'

import { useState } from 'react'
import { Box, FileText, GitBranch, Search, Settings, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fileStructure } from '@/lib/portfolio-data'
import type { FileTreeNode } from '@/lib/ide-types'
import { ExtensionItem } from './sidebar/extension-item'
import { FileTreeItem } from './sidebar/file-tree-item'
import { OpenEditors } from './sidebar/open-editors'

type SidebarPanel = 'explorer' | 'search' | 'git' | 'extensions'

const activityButtons: Array<{ panel: SidebarPanel; icon: typeof FileText }> = [
  { panel: 'explorer', icon: FileText },
  { panel: 'search', icon: Search },
  { panel: 'git', icon: GitBranch },
  { panel: 'extensions', icon: Box },
]

const panelTitle: Record<SidebarPanel, string> = {
  explorer: 'Explorer',
  search: 'Search',
  git: 'Source Control',
  extensions: 'Extensions',
}

const treeNodes: FileTreeNode[] = fileStructure

const ActivityBar = ({
  activePanel,
  onPanelClick,
}: {
  activePanel: SidebarPanel
  onPanelClick: (panel: SidebarPanel) => void
}) => (
  <div className='w-12 bg-sidebar border-r border-border flex flex-col items-center py-2 gap-2'>
    {activityButtons.map(({ panel, icon: Icon }) => (
      <button
        key={panel}
        onClick={() => onPanelClick(panel)}
        className={cn('p-2 rounded hover:bg-muted transition-colors', activePanel === panel && 'border-l-2 border-primary bg-muted')}
      >
        <Icon className='h-5 w-5 text-muted-foreground' />
      </button>
    ))}

    <div className='flex-1' />

    <button className='p-2 rounded hover:bg-muted transition-colors'>
      <User className='h-5 w-5 text-muted-foreground' />
    </button>
    <button className='p-2 rounded hover:bg-muted transition-colors'>
      <Settings className='h-5 w-5 text-muted-foreground' />
    </button>
  </div>
)

export const Sidebar = () => {
  const [activePanel, setActivePanel] = useState<SidebarPanel>('explorer')

  return (
    <div className='flex h-full w-full min-w-0'>
      <ActivityBar activePanel={activePanel} onPanelClick={setActivePanel} />

      <div className='flex-1 min-w-0 bg-sidebar border-r border-border flex flex-col'>
        <div className='p-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground'>{panelTitle[activePanel]}</div>

        {activePanel === 'explorer' ? (
          <div className='flex-1 overflow-y-auto'>
            <div className='text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 py-2'>Open Editors</div>
            <OpenEditors />

            <div className='text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 py-2 mt-2 border-t border-border pt-3'>
              Portfolio
            </div>
            {treeNodes.map((item) => (
              <FileTreeItem key={item.name} {...item} />
            ))}
          </div>
        ) : null}

        {activePanel === 'search' ? (
          <div className='p-3'>
            <input
              type='text'
              placeholder='Search...'
              className='w-full bg-input border border-border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary'
            />
            <p className='text-xs text-muted-foreground mt-3'>Search across portfolio files...</p>
          </div>
        ) : null}

        {activePanel === 'git' ? (
          <div className='p-3'>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <GitBranch className='h-4 w-4' />
              <span>main</span>
            </div>
            <p className='text-xs text-muted-foreground mt-3'>No changes to commit</p>
          </div>
        ) : null}

        {activePanel === 'extensions' ? (
          <div className='p-3'>
            <div className='space-y-2'>
              <ExtensionItem name='React' version='1.0.0' />
              <ExtensionItem name='TypeScript' version='5.0.0' />
              <ExtensionItem name='Tailwind CSS' version='3.4.0' />
              <ExtensionItem name='ESLint' version='9.0.0' />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
