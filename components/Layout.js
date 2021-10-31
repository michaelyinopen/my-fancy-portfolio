import Head from 'next/head'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title> Michael Yin - Programmer </title>
        <meta name="description" content="Michael Yin's Programmer Portfolio" />
      </Head>
      <TransitionGroup component={null} >
        {/* <CSSTransition key={router.pathname}
          timeout={5000}
          classNames={
            {
              exit: clsx(styles['mainTransition-exit']),
              enterActive: clsx(styles['mainTransition-exit-active']),
            }
          }
        > */}
        <main className={styles.main} >
          {children}
        </main>
        {/* </CSSTransition> */}
        <CSSTransition
          key={router.pathname}
          timeout={{
            enter: 1000,
            exit: 500,
          }}
          classNames={
            {
              enter: clsx(styles.transitionOverlay, styles['transitionOverlay-enter']),
              enterActive: clsx(styles.transitionOverlay, styles['transitionOverlay-enter-active']),
              enterDone: clsx(styles.transitionOverlay, styles['transitionOverlay-enter-done']),
              exit: clsx(styles.transitionOverlay, styles['transitionOverlay-exit']),
              exitActive: clsx(styles.transitionOverlay, styles['transitionOverlay-exit-active']),
              exitDone: clsx(styles.transitionOverlay, styles['transitionOverlay-exit-done']),
            }
          }
        >

          <div />
        </CSSTransition >
      </TransitionGroup>
    </div >
  )
}