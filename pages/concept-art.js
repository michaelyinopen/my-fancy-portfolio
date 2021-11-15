import Head from 'next/head'
import { useTransitionCallback } from '../shared/transition'
import styles from '../styles/ConceptArt.module.css'

export default function ConceptArt() {
  const transitionCallback = useTransitionCallback()
  return (
    <div>
      <Head>
        <meta name="description" content="Michael Yin's Programmer Portfolio Concept Art" />
      </Head>
      {// eslint-disable-next-line @next/next/no-html-link-for-pages
        <a
          href="/"
          className={styles.card}
          onClick={(e) => {
            if (transitionCallback) {
              e.preventDefault()
              transitionCallback('/')
            } else {
              // Follow link natively
            }
          }}
        >
          <h2>&larr; Portfolio</h2>
        </a>
      }
      <div className={styles.page}>
        <div className={styles.sky}>
          <div className={styles.skyContent} />
        </div>
        <div className={styles.seaSurface} />
        <div className={styles.seaShallow} />
        <div className={styles.seaDeep} />
        <div className={styles.seaBed}>
          <div className={styles.seaBedRock} />
          <div className={styles.seaBedRock2} />
        </div>
      </div>
    </div >
  )
}