import { useState, useEffect } from 'react'

export function useWindowViewport() {
  const [viewport, setViewport] = useState({})
  useEffect(() => {
    function handleWindowResize() {
      const newViewport = getWindowViewport()
      if (didViewportChange(viewport, newViewport)) {
        setViewport(newViewport)
      }
    }
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  })
  return viewport
}

function getWindowViewport() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

function didViewportChange(oldViewport, newViewport) {
  if (newViewport.width !== oldViewport.width) {
    return true
  }
  if (newViewport.height !== oldViewport.height && !/Mobi|Android/i.test(navigator.userAgent)) {
    return true
  }
  // Ignore small height changes that occur on scroll in landscape mode.
  // Eg. Safari on iOS minimizes the address bar and hides the bottom menu
  // after initial scroll
  const heightDiff = Math.abs(newViewport.height - oldViewport.height)
  return heightDiff / newViewport.height >= 0.2
}