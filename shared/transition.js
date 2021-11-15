import { createContext, useCallback, useContext } from "react"
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
  const transitionCallback = useCallback(
    (url, as, options) => {
      router.push(url, as, options)
    },
    [router]
  )
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
            /*[styles['main-start']]: transitionStage === "start",
            [styles['main-end']]: transitionStage === "middle" || transitionStage === "end",*/
          })}
        >
          {children}
        </main>
      </div>
    </TransitionContext.Provider>
  )
}