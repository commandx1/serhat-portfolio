'use client'

import { useIDEStore } from '@/lib/ide-store'
import { portfolioFiles } from '@/lib/portfolio-data'
import { syntaxHighlight } from './editor/syntax-highlight'
import { WelcomeScreen } from './editor/welcome-screen'
import { AppRuntimePreview } from './editor/runtime-preview'

export const Editor = () => {
  const openTabs = useIDEStore((state) => state.openTabs)
  const activeTabId = useIDEStore((state) => state.activeTabId)
  const runtimePreviewOpen = useIDEStore((state) => state.runtimePreviewOpen)
  const openTab = useIDEStore((state) => state.openTab)
  const runtimePreviewRoute = useIDEStore((state) => state.runtimePreviewRoute)
  const setRuntimePreviewRoute = useIDEStore((state) => state.setRuntimePreviewRoute)

  const activeTab = openTabs.find((tab) => tab.id === activeTabId)
  const isRuntimePreviewMode = activeTab?.id === 'app-tsx' && runtimePreviewOpen

  if (!activeTab) {
    return (
      <WelcomeScreen
        onOpenFile={(fileId) => {
          const file = portfolioFiles.find((item) => item.id === fileId)
          if (file) {
            openTab(file)
          }
        }}
      />
    )
  }

  return (
    <div className='relative h-full overflow-auto bg-(--editor-bg) font-mono'>
      {isRuntimePreviewMode ? (
        <AppRuntimePreview route={runtimePreviewRoute} onRouteChange={setRuntimePreviewRoute} />
      ) : (
        <div className='py-2'>
          <div className='min-w-max'>{syntaxHighlight(activeTab.content, activeTab.name)}</div>
        </div>
      )}
    </div>
  )
}
