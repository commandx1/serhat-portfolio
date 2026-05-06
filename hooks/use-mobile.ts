import * as React from 'react'

const MOBILE_BREAKPOINT = 768

const mobileMediaQuery = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

const getMobileSnapshot = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia(mobileMediaQuery).matches
}

const subscribeToMobileMediaQuery = (onStoreChange: () => void) => {
  if (typeof window === 'undefined') return () => {}

  const mql = window.matchMedia(mobileMediaQuery)
  mql.addEventListener('change', onStoreChange)

  return () => mql.removeEventListener('change', onStoreChange)
}

export function useIsMobile() {
  return React.useSyncExternalStore(
    subscribeToMobileMediaQuery,
    getMobileSnapshot,
    () => false,
  )
}
