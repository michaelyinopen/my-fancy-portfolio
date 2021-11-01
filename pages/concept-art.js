import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ConceptArt.module.css'

export default function ConceptArt() {
  return (
    <div>
      <Head>
        <meta name="description" content="Michael Yin's Programmer Portfolio Concept Art" />
      </Head>
      <Link href="/" scroll={false}>
        <a className={styles.card}>
          <h2>&larr; Portfolio</h2>
        </a>
      </Link>
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
    </div>
  )
}