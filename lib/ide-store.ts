import { create } from 'zustand'
import type { FileTab } from './ide-types'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp?: number
}

interface IDEState {
  openTabs: FileTab[]
  activeTabId: string | null
  runtimePreviewOpen: boolean
  runtimePreviewRoute: 'about' | 'experience' | 'projects' | 'contact'
  chatMessages: ChatMessage[]
  isTyping: boolean
  
  openTab: (tab: FileTab) => void
  closeTab: (tabId: string) => void
  closeOtherTabs: (tabId: string) => void
  closeAllTabs: () => void
  setActiveTab: (tabId: string) => void
  openRuntimePreview: () => void
  closeRuntimePreview: () => void
  setRuntimePreviewRoute: (route: 'about' | 'experience' | 'projects' | 'contact') => void
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void
  setIsTyping: (typing: boolean) => void
}

const generateMessageId = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }

  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

export const useIDEStore = create<IDEState>((set, get) => ({
  openTabs: [],
  activeTabId: null,
  runtimePreviewOpen: false,
  runtimePreviewRoute: 'about',
  chatMessages: [
    {
      id: '1',
      role: 'assistant',
      content: 'Merhaba! Ben Serhat\'ın AI asistanıyım. Portfolio hakkında sorularınız varsa yardımcı olabilirim. Deneyimleri, projeleri veya teknik becerileri hakkında sorabilirsiniz.'
    }
  ],
  isTyping: false,

  openTab: (tab) => {
    const { openTabs } = get()
    const existingIndex = openTabs.findIndex(t => t.id === tab.id)

    if (existingIndex === -1) {
      set({ openTabs: [...openTabs, tab], activeTabId: tab.id })
    } else {
      const updatedTabs = [...openTabs]
      updatedTabs[existingIndex] = tab
      set({ openTabs: updatedTabs, activeTabId: tab.id })
    }
  },

  closeTab: (tabId) => {
    const { openTabs, activeTabId } = get()
    const newTabs = openTabs.filter(t => t.id !== tabId)
    let newActiveId = activeTabId
    if (activeTabId === tabId) {
      const index = openTabs.findIndex(t => t.id === tabId)
      newActiveId = newTabs[Math.min(index, newTabs.length - 1)]?.id || null
    }
    set({ openTabs: newTabs, activeTabId: newActiveId })
  },

  closeOtherTabs: (tabId) => {
    const { openTabs } = get()
    const targetTab = openTabs.find((tab) => tab.id === tabId)

    if (!targetTab) {
      return
    }

    set({ openTabs: [targetTab], activeTabId: targetTab.id })
  },

  closeAllTabs: () => {
    set({ openTabs: [], activeTabId: null })
  },

  setActiveTab: (tabId) => set({ activeTabId: tabId }),
  openRuntimePreview: () => set({ runtimePreviewOpen: true }),
  closeRuntimePreview: () => set({ runtimePreviewOpen: false }),
  setRuntimePreviewRoute: (route) => set({ runtimePreviewRoute: route }),
  
  addChatMessage: (message) => {
    const newMessage: ChatMessage = {
      ...message,
      id: generateMessageId(),
      timestamp: Date.now()
    }
    set((state) => ({ chatMessages: [...state.chatMessages, newMessage] }))
  },
  
  setIsTyping: (typing) => set({ isTyping: typing })
}))
