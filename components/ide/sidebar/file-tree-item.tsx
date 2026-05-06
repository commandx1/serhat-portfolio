'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FolderOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useIDEStore } from '@/lib/ide-store'
import { portfolioFiles } from '@/lib/portfolio-data'
import type { FileTreeNode } from '@/lib/ide-types'
import { FileIcon } from './file-icon'

type FileTreeItemProps = FileTreeNode & {
  depth?: number
}

export const FileTreeItem = (props: FileTreeItemProps) => {
  const { depth = 0 } = props
  const initiallyExpanded = props.type === 'folder' ? (props.expanded ?? true) : true
  const [expanded, setExpanded] = useState(initiallyExpanded)
  const openTab = useIDEStore((state) => state.openTab)
  const activeTabId = useIDEStore((state) => state.activeTabId)
  const isActive = props.type === 'file' && props.id === activeTabId

  const handleClick = () => {
    if (props.type === 'folder') {
      setExpanded(!expanded)
      return
    }

    const file = portfolioFiles.find((item) => item.id === props.id)
    if (file) {
      openTab(file)
    }
  }

  return (
    <div>
      <div
        onClick={handleClick}
        className={cn(
          'flex items-center gap-1 py-1 px-2 cursor-pointer hover:bg-muted/50 transition-colors text-sm',
          isActive && 'bg-muted text-foreground',
        )}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {props.type === 'folder' ? (
          <>
            {expanded ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
            {expanded ? (
              <FolderOpen className="h-4 w-4 text-[#f59e0b]" />
            ) : (
              <Folder className="h-4 w-4 text-[#f59e0b]" />
            )}
          </>
        ) : (
          <>
            <span className="w-4" />
            <FileIcon filename={props.name} />
          </>
        )}
        <span className={cn('ml-1 text-muted-foreground', isActive && 'text-foreground')}>
          {props.name}
        </span>
      </div>

      {props.type === 'folder' && expanded && props.children.length ? (
        <div>
          {props.children.map((child) => (
            <FileTreeItem key={child.name} {...child} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
