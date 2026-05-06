import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { useIDEStore } from '@/lib/ide-store'
import { portfolioFiles } from '@/lib/portfolio-data'
import {
  initialSessions,
  staticCommands,
  type TerminalLine,
  type TerminalSession,
  type TerminalTab,
} from './terminal-model'
import {
  backendDevStartChunks,
  backendLogLines,
  contactRouteLogLines,
  experienceRouteLogLines,
  frontendDevStartChunks,
  frontendLogLines,
  projectsRouteLogLines,
  type TerminalChunk,
} from './terminal-simulation'

export const useTerminalEngine = () => {
  const {
    openTab,
    openRuntimePreview,
    closeRuntimePreview,
    runtimePreviewOpen,
    runtimePreviewRoute,
    setRuntimePreviewRoute,
  } = useIDEStore()

  const [sessions, setSessions] = useState<TerminalSession[]>(initialSessions)
  const [activeSessionId, setActiveSessionId] = useState(initialSessions[0].id)
  const [input, setInput] = useState('')
  const [activeTab, setActiveTab] = useState<TerminalTab>('terminal')

  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const streamTimersRef = useRef<Array<{ sessionId: string; timerId: number }>>([])
  const prevPreviewOpenRef = useRef(runtimePreviewOpen)
  const prevPreviewRouteRef = useRef(runtimePreviewRoute)

  const activeSession = useMemo(
    () => sessions.find((session) => session.id === activeSessionId) ?? sessions[0],
    [sessions, activeSessionId],
  )

  const appendLines = useCallback((sessionId: string, nextLines: TerminalLine[]) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? { ...session, lines: [...session.lines, ...nextLines] }
          : session,
      ),
    )
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [activeSession?.lines, activeSessionId, activeTab])

  useEffect(() => {
    return () => {
      streamTimersRef.current.forEach(({ timerId }) => window.clearTimeout(timerId))
      streamTimersRef.current = []
    }
  }, [])

  useEffect(() => {
    const wasPreviewOpen = prevPreviewOpenRef.current
    const prevRoute = prevPreviewRouteRef.current
    let appendTimerId: number | undefined

    const enteredNewPreviewRoute =
      runtimePreviewOpen &&
      (!wasPreviewOpen || prevRoute !== runtimePreviewRoute)

    if (enteredNewPreviewRoute) {
      const routeRequestLogs = {
        about: null,
        experience: experienceRouteLogLines,
        projects: projectsRouteLogLines,
        contact: contactRouteLogLines,
      }
      const logs = routeRequestLogs[runtimePreviewRoute]

      if (logs) {
        appendTimerId = window.setTimeout(() => {
          appendLines('backend-api', logs)
        }, 0)
      }
    }

    prevPreviewOpenRef.current = runtimePreviewOpen
    prevPreviewRouteRef.current = runtimePreviewRoute

    return () => {
      if (appendTimerId !== undefined) {
        window.clearTimeout(appendTimerId)
      }
    }
  }, [appendLines, runtimePreviewOpen, runtimePreviewRoute])

  const setSessionStatus = (sessionId: string, status: TerminalSession['status']) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId ? { ...session, status } : session,
      ),
    )
  }

  const clearSessionStreams = (sessionId: string) => {
    streamTimersRef.current.forEach(({ sessionId: sId, timerId }) => {
      if (sId === sessionId) {
        window.clearTimeout(timerId)
      }
    })
    streamTimersRef.current = streamTimersRef.current.filter(
      ({ sessionId: sId }) => sId !== sessionId,
    )
  }

  const streamLines = (
    sessionId: string,
    chunks: TerminalChunk[],
  ) => {
    let elapsed = 0
    chunks.forEach((chunk) => {
      elapsed += chunk.delayMs
      const timerId = window.setTimeout(() => {
        appendLines(sessionId, [chunk.line])
      }, elapsed)
      streamTimersRef.current.push({ sessionId, timerId })
    })
  }

  const handleCommand = (cmd: string) => {
    if (!activeSession) return

    const rawCmd = cmd.trim()
    const normalizedCmd = rawCmd.toLowerCase()
    if (!rawCmd) return

    appendLines(activeSession.id, [{ type: 'input', content: `$ ${rawCmd}` }])

    if (normalizedCmd === 'clear') {
      setSessions((prev) =>
        prev.map((session) =>
          session.id === activeSession.id ? { ...session, lines: [] } : session,
        ),
      )
      return
    }

    if (normalizedCmd === 'ps') {
      appendLines(activeSession.id, [
        {
          type: 'output',
          content: `${activeSession.name}  ${activeSession.status}  port:${activeSession.port}`,
        },
      ])
      return
    }

    if (normalizedCmd === 'logs') {
      const nextLines = activeSession.id === 'frontend-app' ? frontendLogLines : backendLogLines
      appendLines(activeSession.id, nextLines)
      return
    }

    if (normalizedCmd === 'npm run dev') {
      clearSessionStreams(activeSession.id)
      setSessionStatus(activeSession.id, 'running')

      if (activeSession.id === 'frontend-app') {
        streamLines(activeSession.id, frontendDevStartChunks)
      } else {
        streamLines(activeSession.id, backendDevStartChunks)
      }
      return
    }

    const staticResponse = staticCommands[normalizedCmd]
    if (staticResponse) {
      appendLines(activeSession.id, [{ type: 'output', content: staticResponse }])
      return
    }

    appendLines(activeSession.id, [
      {
        type: 'error',
        content: `Command not found: ${normalizedCmd}. Type "help" for available commands.`,
      },
    ])
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
      e.preventDefault()
      if (!activeSession) return

      if (activeSession.status === 'running') {
        clearSessionStreams(activeSession.id)
        appendLines(activeSession.id, [
          { type: 'input', content: '^C' },
          { type: 'error', content: '[process] terminated by SIGINT (Ctrl+C)' },
        ])
        setSessionStatus(activeSession.id, 'idle')
      } else {
        appendLines(activeSession.id, [{ type: 'input', content: '^C' }])
      }
      return
    }

    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    }
  }

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  const handleShowInBrowser = () => {
    if (!activeSession) return

    if (runtimePreviewOpen) {
      closeRuntimePreview()
      appendLines(activeSession.id, [{ type: 'info', content: '[preview] Browser simulator closed.' }])
      return
    }

    const appFile = portfolioFiles.find((file) => file.id === 'app-tsx')
    if (appFile) {
      openTab(appFile)
    }
    setRuntimePreviewRoute('about')
    openRuntimePreview()
    appendLines(activeSession.id, [{ type: 'info', content: '[preview] Opening React app in browser simulator...' }])
  }

  const runningCount = sessions.filter((session) => session.status === 'running').length
  const isFrontendRunning = sessions.some(
    (session) => session.id === 'frontend-app' && session.status === 'running',
  )
  const idleTip =
    activeSession?.id === 'frontend-app'
      ? 'Tip: run "npm run dev" to start the React app on :5173'
      : 'Tip: run "npm run dev" to start the Express API on :3001'

  return {
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
  }
}
