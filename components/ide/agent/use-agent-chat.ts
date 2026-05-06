import { useCallback, useEffect, useRef, useState } from 'react'
import { useIDEStore } from '@/lib/ide-store'
import { getAgentResponse } from './agent-responses'

export const useAgentChat = () => {
  const { chatMessages, addChatMessage, isTyping, setIsTyping } = useIDEStore()
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const responseTimerRef = useRef<number | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages, isTyping])

  useEffect(() => {
    return () => {
      if (responseTimerRef.current !== null) {
        window.clearTimeout(responseTimerRef.current)
      }
    }
  }, [])

  const sendMessage = useCallback(() => {
    const normalized = input.trim()
    if (!normalized) return

    addChatMessage({ role: 'user', content: normalized })
    setInput('')
    setIsTyping(true)

    const delayMs = 1200
    responseTimerRef.current = window.setTimeout(() => {
      addChatMessage({ role: 'assistant', content: getAgentResponse(normalized) })
      setIsTyping(false)
      responseTimerRef.current = null
    }, delayMs)
  }, [addChatMessage, input, setIsTyping])

  return {
    input,
    setInput,
    isTyping,
    chatMessages,
    messagesEndRef,
    sendMessage,
  }
}
