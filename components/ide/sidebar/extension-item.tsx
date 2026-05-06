'use client'

import { Box } from 'lucide-react'

interface ExtensionItemProps {
  name: string
  version: string
}

export const ExtensionItem = ({ name, version }: ExtensionItemProps) => (
  <div className="flex items-center gap-2 p-2 rounded bg-muted/30">
    <Box className="h-8 w-8 text-primary" />
    <div>
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-muted-foreground">v{version}</p>
    </div>
  </div>
)
