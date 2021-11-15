import {
  createContext,
  useCallback,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react"
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from './transition.module.css'

const TransitionContext = createContext()

export const useTransitionCallback = () => {
  const transitionCallback = useContext(TransitionContext)
  return transitionCallback
}

export const TransitionLayout = ({ children }) => {
  const router = useRouter()
  const [transitionStage, setTransitionStage] = useState("end") // end | start | intermediate
  const [hiddenOverlays, setHiddenOverlays] = useState(true)
  const transitionParamsRef = useRef()
  const hiddenTimeoutRef = useRef()
  const transitionCallback = useCallback(
    (url, as, options) => {
      transitionParamsRef.current = { url, as, options }
      setTransitionStage("start")
      setHiddenOverlays(false)
      hiddenTimeoutRef.current = setTimeout(() => { setHiddenOverlays(true) }, 1200)
    },
    []
  )
  useEffect(() => {
    return () => {
      if (hiddenTimeoutRef.current) {
        clearTimeout(hiddenTimeoutRef.current)
      }
    }
  }, [])
  return (
    <TransitionContext.Provider value={transitionCallback}>
      <div className={styles.container}>
        <Head>
          <title> Michael Yin - Programmer </title>
          <meta name="description" content="Michael Yin's Programmer Portfolio" />
        </Head>
        <main
          className={clsx({
            [styles.main]: true,
            [styles['main-start']]: transitionStage === "start",
            [styles['main-end']]: transitionStage === "intermediate" || transitionStage === "end",
          })}
        >
          {children}
        </main>
        <div
          className={clsx({
            [styles.unClickableOverlay]: transitionStage === "start" || transitionStage === "intermediate"
          })}
        />
        <div
          className={clsx({
            [styles.firstTransOverlay]: true,
            [styles['firstTransOverlay-start']]: transitionStage === "start",
            [styles['firstTransOverlay-intermediate']]: transitionStage === "intermediate",
            [styles['firstTransOverlay-end']]: transitionStage === "end",
            [styles.hidden]: hiddenOverlays,
          })}
        />
        <div
          className={clsx({
            [styles.secondTransOverlay]: true,
            [styles['secondTransOverlay-start']]: transitionStage === "start",
            [styles['secondTransOverlay-intermediate']]: transitionStage === "intermediate",
            [styles['secondTransOverlay-end']]: transitionStage === "end",
            [styles.hidden]: hiddenOverlays,
          })}
        />
        <div
          className={clsx({
            [styles.lastTransOverlay]: true,
            [styles['lastTransOverlay-start']]: transitionStage === "start",
            [styles['lastTransOverlay-intermediate']]: transitionStage === "intermediate",
            [styles['lastTransOverlay-end']]: transitionStage === "end",
            [styles.hidden]: hiddenOverlays,
          })}
          onTransitionEnd={() => {
            if (transitionStage === "start") {
              const { url, as, options } = transitionParamsRef.current
              router.push(url, as, options)
              setTransitionStage("intermediate")
            }
            if (transitionStage === "intermediate") {
              setTransitionStage("end")
              setHiddenOverlays(true)
            }
          }}
        />
      </div>
    </TransitionContext.Provider>
  )
}