import { useState, useEffect } from 'react'

const defaultVhThreshhold = 0.33

export function useViewportEnter(vhThreshhold = defaultVhThreshhold) {
  const [el, setEl] = useState(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if (el === null) return () => { }
    const capturedEl = el

    function updateEntered() {
      const newEntered = hasEnteredViewport(capturedEl.offsetTop, vhThreshhold)
      if (newEntered && !entered) {
        setEntered(true)
      } else if (entered && !newEntered && scrolledToTop()) {
        setEntered(false)
      }
    }

    updateEntered()
    window.addEventListener('scroll', updateEntered)
    window.addEventListener('resize', updateEntered)
    return () => {
      window.removeEventListener('scroll', updateEntered)
      window.removeEventListener('resize', updateEntered)
    }
  }, [vhThreshhold, el, entered])

  return [setEl, entered]
}

function hasEnteredViewport(elTop, vhThreshhold) {
  return window.pageYOffset > elTop - window.innerHeight * vhThreshhold
}

function scrolledToTop() {
  return window.pageYOffset === 0
}