import { type ReactNode } from 'react'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const tsKeywordPattern =
  /\b(const|let|var|function|return|export|import|from|interface|type|class|extends|implements|new|async|await|if|else|for|while|switch|case|break|default|try|catch|throw)\b/

const tsLanguageConstPattern = /\b(true|false|null|undefined)\b/
const tsIdentifierPattern = /^[A-Za-z_$][\w$]*$/

const tsTokenPattern =
  /(\/\/.*$|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:const|let|var|function|return|export|import|from|interface|type|class|extends|implements|new|async|await|if|else|for|while|switch|case|break|default|try|catch|throw)\b|\b(?:true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b|=>|===|!==|==|!=|<=|>=|\+\+|--|&&|\|\||[{}()[\],.;:<>]|[=+\-*/%!?]|[A-Za-z_$][\w$]*)/g

const cssTokenPattern =
  /(\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[0-9a-fA-F]{3,8}\b|@[A-Za-z-]+|\b\d*\.?\d+(?:ms|s|px|rem|em|%|vh|vw|fr|deg)?\b|[A-Za-z_-][\w-]*(?=\s*:)|\.[A-Za-z_-][\w-]*|#[A-Za-z_-][\w-]*|:[A-Za-z_-][\w-]*|[{}();,>]|[A-Za-z_-][\w-]*)/g

const highlightTSLikeLine = (line: string): string => {
  let output = ''
  let lastIndex = 0
  const isImportTypeLine = /^\s*import\s+type\b/.test(line)

  for (const match of line.matchAll(tsTokenPattern)) {
    const token = match[0]
    const index = match.index ?? 0

    output += escapeHtml(line.slice(lastIndex, index))

    if (token.startsWith('//') || token.startsWith('/*')) {
      output += `<span class="text-[#6a9955]">${escapeHtml(token)}</span>`
    } else if (
      token.startsWith('"') ||
      token.startsWith("'") ||
      token.startsWith('`')
    ) {
      output += `<span class="text-[#ce9178]">${escapeHtml(token)}</span>`
    } else if (tsKeywordPattern.test(token)) {
      output += `<span class="text-[#c586c0]">${escapeHtml(token)}</span>`
    } else if (tsLanguageConstPattern.test(token)) {
      output += `<span class="text-[#569cd6]">${escapeHtml(token)}</span>`
    } else if (/^\d/.test(token)) {
      output += `<span class="text-[#b5cea8]">${escapeHtml(token)}</span>`
    } else if (/^(=>|===|!==|==|!=|<=|>=|\+\+|--|&&|\|\||[{}()[\],.;:<>]|[=+\-*/%!?])$/.test(token)) {
      output += `<span class="text-[#d4d4d4]">${escapeHtml(token)}</span>`
    } else if (tsIdentifierPattern.test(token)) {
      const rest = line.slice(index + token.length)
      const isFunctionLike = /^\s*\(/.test(rest)
      const isTypeLike = token[0] === token[0].toUpperCase()

      if (isImportTypeLine) {
        output += `<span class="text-[#9cc7ff]">${escapeHtml(token)}</span>`
      } else if (isFunctionLike) {
        output += `<span class="text-[#dcdcaa]">${escapeHtml(token)}</span>`
      } else if (isTypeLike) {
        output += `<span class="text-[#4ec9b0]">${escapeHtml(token)}</span>`
      } else {
        output += `<span class="text-[#9cc7ff]">${escapeHtml(token)}</span>`
      }
    } else {
      output += `<span class="text-[#d4d4d4]">${escapeHtml(token)}</span>`
    }

    lastIndex = index + token.length
  }

  output += escapeHtml(line.slice(lastIndex))
  return output
}

const highlightCSSLine = (line: string): string => {
  let output = ''
  let lastIndex = 0

  for (const match of line.matchAll(cssTokenPattern)) {
    const token = match[0]
    const index = match.index ?? 0

    output += escapeHtml(line.slice(lastIndex, index))

    if (token.startsWith('/*')) {
      output += `<span class="text-[#6a9955]">${escapeHtml(token)}</span>`
    } else if (token.startsWith('"') || token.startsWith("'")) {
      output += `<span class="text-[#ce9178]">${escapeHtml(token)}</span>`
    } else if (token.startsWith('@')) {
      output += `<span class="text-[#c586c0]">${escapeHtml(token)}</span>`
    } else if (/^#[0-9a-fA-F]{3,8}$/.test(token)) {
      output += `<span class="text-[#ce9178]">${escapeHtml(token)}</span>`
    } else if (/^[A-Za-z_-][\w-]*(?=\s*:)$/.test(token)) {
      output += `<span class="text-[#9cdcfe]">${escapeHtml(token)}</span>`
    } else if (/^\.[A-Za-z_-][\w-]*$/.test(token) || /^#[A-Za-z_-][\w-]*$/.test(token)) {
      output += `<span class="text-[#9cdcfe]">${escapeHtml(token)}</span>`
    } else if (/^:[A-Za-z_-][\w-]*$/.test(token)) {
      output += `<span class="text-[#b5cea8]">${escapeHtml(token)}</span>`
    } else if (/^\d/.test(token)) {
      output += `<span class="text-[#b5cea8]">${escapeHtml(token)}</span>`
    } else if (/^[{}();,>]$/.test(token)) {
      output += `<span class="text-[#d4d4d4]">${escapeHtml(token)}</span>`
    } else if (/^[A-Za-z_-][\w-]*$/.test(token)) {
      output += `<span class="text-[#9cc7ff]">${escapeHtml(token)}</span>`
    } else {
      output += escapeHtml(token)
    }

    lastIndex = index + token.length
  }

  output += escapeHtml(line.slice(lastIndex))
  return output
}

const highlightInlineJsxTextLine = (line: string): string | null => {
  const inlineJsxTextPattern = />([^<>{}]*)</g
  let output = ''
  let cursor = 0
  let hasTextSegment = false

  for (const match of line.matchAll(inlineJsxTextPattern)) {
    const fullMatch = match[0]
    const textSegment = match[1]
    const matchStart = match.index ?? 0
    const openingTagEndIndex = matchStart
    const closingTagStartIndex = matchStart + fullMatch.length - 1

    output += highlightTSLikeLine(line.slice(cursor, openingTagEndIndex + 1))

    if (textSegment.trim().length > 0) {
      output += `<span class="text-[#b5cea8]">${escapeHtml(textSegment)}</span>`
      hasTextSegment = true
    } else {
      output += escapeHtml(textSegment)
    }

    cursor = closingTagStartIndex
  }

  if (!hasTextSegment) {
    return null
  }

  output += highlightTSLikeLine(line.slice(cursor))
  return output
}

export const syntaxHighlight = (content: string, filename: string): ReactNode[] => {
  const lines = content.split('\n')
  const ext = filename.split('.').pop()
  const isJsxFile = ext === 'tsx' || ext === 'jsx'
  const isCodeFile =
    ext === 'ts' ||
    ext === 'tsx' ||
    ext === 'js' ||
    ext === 'jsx' ||
    ext === 'mjs' ||
    ext === 'cjs'
  let insideJsxTextTag = false

  return lines.map((line, index) => {
    let highlightedLine = line
    const trimmedLine = line.trim()
    const highlightedInlineJsxLine = isJsxFile ? highlightInlineJsxTextLine(line) : null

    const isJsxTextLine =
      isJsxFile &&
      insideJsxTextTag &&
      trimmedLine.length > 0 &&
      !trimmedLine.startsWith('<') &&
      !trimmedLine.startsWith('{')

    if (highlightedInlineJsxLine) {
      highlightedLine = highlightedInlineJsxLine
    } else if (isJsxTextLine) {
      highlightedLine = `<span class="text-[#b5cea8]">${escapeHtml(line)}</span>`
    } else if (isCodeFile) {
      highlightedLine = highlightTSLikeLine(line)
    } else if (ext === 'css') {
      highlightedLine = highlightCSSLine(line)
    } else if (ext === 'json') {
      highlightedLine = highlightedLine.replace(
        /"([^"]+)":/g,
        '<span class="text-[#9cdcfe]">"$1"</span>:'
      )
      highlightedLine = highlightedLine.replace(
        /:\s*"([^"]*)"/g,
        ': <span class="text-[#ce9178]">"$1"</span>'
      )
      highlightedLine = highlightedLine.replace(
        /^\s*"([^"]*)"\s*,?\s*$/g,
        '      <span class="text-[#ce9178]">"$1"</span>,'
      )
    } else if (ext === 'md') {
      highlightedLine = highlightedLine.replace(
        /^(#{1,6})\s+(.*)$/,
        '<span class="text-[#569cd6]">$1</span> <span class="text-[#9cdcfe] font-semibold">$2</span>'
      )
      highlightedLine = highlightedLine.replace(
        /\*\*([^*]+)\*\*/g,
        '<span class="text-[#dcdcaa] font-bold">$1</span>'
      )
      highlightedLine = highlightedLine.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<span class="text-[#4ec9b0]">[$1]</span><span class="text-[#ce9178]">($2)</span>'
      )
      highlightedLine = highlightedLine.replace(
        /^(\s*[-*])\s+/,
        '<span class="text-[#569cd6]">$1</span> '
      )
      highlightedLine = highlightedLine.replace(
        /`([^`]+)`/g,
        '<span class="text-[#ce9178] bg-muted/30 px-1 rounded">$1</span>'
      )
      highlightedLine = highlightedLine.replace(
        /^>\s+(.*)$/,
        '<span class="text-[#6a9955] italic">{">"} $1</span>'
      )
    } else {
      highlightedLine = escapeHtml(line)
    }

    if (isJsxFile) {
      const isOpeningTagLine =
        /^<[^/!][^>]*>$/.test(trimmedLine) &&
        !trimmedLine.endsWith('/>') &&
        !trimmedLine.includes('</')
      const isClosingTagLine = /^<\//.test(trimmedLine)
      const isExpressionLine = trimmedLine.startsWith('{')

      if (isClosingTagLine || isExpressionLine || trimmedLine.endsWith('/>')) {
        insideJsxTextTag = false
      } else if (isOpeningTagLine) {
        insideJsxTextTag = true
      }
    }

    return (
      <div key={index} className='flex hover:bg-muted/20 group'>
        <span className='w-12 text-right pr-4 text-(--line-number) select-none text-sm'>{index + 1}</span>
        <span className='flex-1 text-sm whitespace-pre' dangerouslySetInnerHTML={{ __html: highlightedLine || '&nbsp;' }} />
      </div>
    )
  })
}
