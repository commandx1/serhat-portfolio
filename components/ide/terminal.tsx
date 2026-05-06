'use client'

import { useTerminalEngine } from './terminal/use-terminal-engine'
import { MainPane } from './terminal/ui/main-pane'
import { SessionSwitcher } from './terminal/ui/session-switcher'
import { OutputPane, ProblemsPane } from './terminal/ui/static-panes'
import { TopBar } from './terminal/ui/top-bar'

export const Terminal = () => {
  const {
    sessions,
    activeSessionId,
    setActiveSessionId,
    input,
    setInput,
    activeTab,
    setActiveTab,
    inputRef,
    containerRef,
    activeSession,
    handleKeyDown,
    handleContainerClick,
    handleShowInBrowser,
    runningCount,
    isFrontendRunning,
    runtimePreviewOpen,
    idleTip,
  } = useTerminalEngine()

  if (!activeSession) {
    return null
  }

  return (
    <div className='h-full min-h-0 bg-(--panel-bg) border-t border-border flex flex-col'>
      <TopBar
        activeTab={activeTab}
        runningCount={runningCount}
        isFrontendRunning={isFrontendRunning}
        runtimePreviewOpen={runtimePreviewOpen}
        onSetTab={setActiveTab}
        onToggleBrowser={handleShowInBrowser}
      />

      {activeTab === 'terminal' ? (
        <div className='flex-1 min-h-0 flex'>
          <MainPane
            activeSession={activeSession}
            input={input}
            inputRef={inputRef}
            containerRef={containerRef}
            idleTip={idleTip}
            onInputChange={setInput}
            onInputKeyDown={handleKeyDown}
            onContainerClick={handleContainerClick}
          />
          <SessionSwitcher
            sessions={sessions}
            activeSessionId={activeSessionId}
            onSelectSession={setActiveSessionId}
          />
        </div>
      ) : null}

      {activeTab === 'problems' ? <ProblemsPane /> : null}
      {activeTab === 'output' ? <OutputPane sessionsCount={sessions.length} runningCount={runningCount} /> : null}

      <div className='h-6 bg-primary/10 border-t border-border flex items-center justify-between px-3 text-xs'>
        <div className='flex items-center gap-4'>
          <span className='text-primary'>zsh</span>
          <span className='text-muted-foreground'>{activeSession.cwd}</span>
        </div>
        <div className='flex items-center gap-4 text-muted-foreground'>
          <span>Port {activeSession.port}</span>
          <span>UTF-8</span>
          <span>{activeSession.runtime}</span>
        </div>
      </div>
    </div>
  )
}
