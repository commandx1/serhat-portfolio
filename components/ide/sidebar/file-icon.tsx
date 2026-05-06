'use client'

import { FileCode, FileJson, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileIconProps {
  filename: string
  className?: string
}

export const FileIcon = ({ filename, className }: FileIconProps) => {
  const ext = filename.split('.').pop()

  switch (ext) {
    case 'tsx':
    case 'ts':
      return <FileCode className={cn('h-4 w-4 text-[#3b82f6]', className)} />
    case 'json':
      return <FileJson className={cn('h-4 w-4 text-[#eab308]', className)} />
    case 'md':
      return <FileText className={cn('h-4 w-4 text-[#22c55e]', className)} />
    default:
      return <FileText className={cn('h-4 w-4', className)} />
  }
}
