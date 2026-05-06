'use client'

import { Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { RefObject } from 'react'
import type { ChatMessage } from '@/lib/ide-store'
import { useIsMobile } from '@/components/ui/use-mobile'

interface MessageListProps {
  chatMessages: ChatMessage[]
  isTyping: boolean
  messagesEndRef: RefObject<HTMLDivElement | null>
}

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

export const MessageList = ({ chatMessages, isTyping, messagesEndRef }: MessageListProps) => {
  const isMobile = useIsMobile()
  const mobileIntroNote =
    '\n\nNot: Daha geniş ekranlarda (tablet/desktop) agent ve IDE panelleriyle daha iyi bir deneyim yaşayabilirsiniz.'

  return (
    <div className="flex-1 overflow-y-auto p-3 space-y-4">
      {chatMessages.map((message) => {
        const shouldAppendMobileNote =
          isMobile &&
          message.role === 'assistant' &&
          message.content.startsWith('Merhaba!')
        const content = shouldAppendMobileNote
          ? `${message.content}${mobileIntroNote}`
          : message.content

        return (
          <div key={message.id} className={cn('flex gap-2', message.role === 'user' && 'flex-row-reverse')}>
            <div
              className={cn(
                'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0',
                message.role === 'assistant' ? 'bg-primary/20' : 'bg-muted',
              )}
            >
              {message.role === 'assistant' ? (
                <Bot className="h-4 w-4 text-primary" />
              ) : (
                <User className="h-4 w-4 text-muted-foreground" />
              )}
            </div>

            <div
              className={cn(
                'flex-1 rounded-lg px-3 py-2 text-sm',
                message.role === 'assistant' ? 'bg-muted/50 text-foreground' : 'bg-primary/20 text-foreground',
              )}
            >
              <div className="whitespace-pre-wrap">{content}</div>
              {message.timestamp ? (
                <span className="text-xs text-muted-foreground mt-1 block">
                  {timeFormatter.format(message.timestamp)}
                </span>
              ) : null}
            </div>
          </div>
        )
      })}

      {isTyping ? (
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div className="bg-muted/50 rounded-lg px-3 py-2">
            <div className="flex gap-1">
              <span
                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                style={{ animationDelay: '0ms' }}
              />
              <span
                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                style={{ animationDelay: '150ms' }}
              />
              <span
                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                style={{ animationDelay: '300ms' }}
              />
            </div>
          </div>
        </div>
      ) : null}

      <div ref={messagesEndRef} />
    </div>
  )
}
