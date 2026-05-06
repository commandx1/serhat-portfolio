'use client'

import { TitleBar } from './title-bar'
import { Sidebar } from './sidebar'
import { TabBar } from './tab-bar'
import { Breadcrumb } from './breadcrumb'
import { Editor } from './editor'
import { AgentPanel } from './agent-panel'
import { Terminal } from './terminal'
import { StatusBar } from './status-bar'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

export const IDELayout = () => {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Title Bar */}
      <TitleBar />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full" autoSaveId="portfolio-main-layout">
          <ResizablePanel
            id="left-sidebar"
            order={1}
            defaultSize={21}
            minSize={8}
            maxSize={38}
            className="min-w-0"
          >
            <Sidebar />
          </ResizablePanel>

          <ResizableHandle withHandle className="bg-border/70 hover:bg-primary/70 transition-colors" />

          <ResizablePanel id="main-editor" order={2} minSize={30} className="min-w-0">
            {/* Editor Area */}
            <div className="h-full flex flex-col min-w-0">
              {/* Tab Bar */}
              <TabBar />
              
              {/* Breadcrumb */}
              <Breadcrumb />

              {/* Editor + Terminal */}
              <div className="flex-1 overflow-hidden min-h-0">
                <div className="sm:hidden h-full overflow-hidden">
                  <Editor />
                </div>

                <div className="hidden sm:block h-full">
                  <ResizablePanelGroup
                    direction="vertical"
                    autoSaveId="portfolio-editor-terminal-layout"
                    className="h-full"
                  >
                    <ResizablePanel defaultSize={68} minSize={35}>
                      <div className="h-full overflow-hidden">
                        <Editor />
                      </div>
                    </ResizablePanel>

                    <ResizableHandle withHandle className="bg-border/70 hover:bg-primary/70 transition-colors" />

                    <ResizablePanel defaultSize={32} minSize={14} maxSize={65}>
                      <div className="h-full min-h-0 overflow-hidden">
                        <Terminal />
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle className="bg-border/70 hover:bg-primary/70 transition-colors" />
          <ResizablePanel
            id="right-agent"
            order={3}
            defaultSize={25}
            minSize={16}
            maxSize={42}
            className="min-w-0"
          >
            <AgentPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  )
}
