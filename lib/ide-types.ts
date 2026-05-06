export interface FileTab {
  id: string
  name: string
  path: string
  icon: string
  content: string
}

export type FileTreeNode =
  | {
      name: string
      type: 'file'
      id: string
    }
  | {
      name: string
      type: 'folder'
      expanded?: boolean
      children: FileTreeNode[]
    }
