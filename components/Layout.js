import {
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement
} from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  const router = useRouter()
  const pathname = router.pathname

  const [displayChildren, setDisplayChildren] = useState(children)
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [transitionStage, setTransitionStage] = useState("end")

  if (pathname !== prevPathname) {
    setTransitionStage("start")
    setPrevPathname(pathname)
  }

  return (
    <div className={''/*styles.container*/}>
      <Head>
        <title> Michael Yin - Programmer </title>
        <meta name="description" content="Michael Yin's Programmer Portfolio" />
      </Head>
      <main
        className={clsx({
          [styles.main]: true,
          [styles['main-start']]: transitionStage === "start",
          [styles['main-end']]: transitionStage === "middle" || transitionStage === "end",
        })}
      >

        {displayChildren}
      </main>
      {/* <div
        className={styles.firstTransOverlay}

      /> */}
      <div
        className={clsx({
          [styles.lastTransOverlay]: true,
          [styles['lastTransOverlay-start']]: transitionStage === "start",
          [styles['lastTransOverlay-middle']]: transitionStage === "middle",
          [styles['lastTransOverlay-end']]: transitionStage === "end",
        })}
        onTransitionEnd={() => {
          if (transitionStage === "start") {
            setDisplayChildren(children)
            setTransitionStage("middle")
          }
          if (transitionStage === "middle") {
            setTransitionStage("end")
          }
        }}
      />
    </div >
  )
}