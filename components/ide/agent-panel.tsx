'use client'

import type { KeyboardEvent } from 'react'
import { Maximize2, Minimize2, Send, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MessageList } from './agent/message-list'
import { useAgentChat } from './agent/use-agent-chat'
import { useState } from 'react'

export const AgentPanel = () => {
  const [isMaximized, setIsMaximized] = useState(false)
  const { input, setInput, isTyping, chatMessages, messagesEndRef, sendMessage } = useAgentChat()

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div
      className={cn(
        'bg-sidebar border-l border-border flex flex-col transition-all duration-300',
        isMaximized
          ? 'fixed inset-0 z-50'
          : 'h-full w-full max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:z-40 max-md:w-full max-md:max-w-sm',
      )}
    >
      <div className="h-10 border-b border-border flex items-center justify-between px-3 bg-card">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Agent</span>
          </div>
          <span className="text-xs px-1.5 py-0.5 bg-primary/20 text-primary rounded">Auto</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMaximized((prev) => !prev)}
            className="p-1 hover:bg-muted rounded transition-colors"
          >
            {isMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <MessageList chatMessages={chatMessages} isTyping={isTyping} messagesEndRef={messagesEndRef} />

      <div className="p-3 border-t border-border">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Plan, Build, / for commands, @ for context"
            className="w-full bg-input border border-border rounded-lg px-3 py-2 pr-10 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary min-h-[80px]"
            rows={3}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            className={cn(
              'absolute right-2 bottom-2 p-1.5 rounded transition-colors',
              input.trim() && !isTyping
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-muted-foreground',
            )}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Serhat hakkında sorular sorun</p>
      </div>
    </div>
  )
}
