import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ConceptArt.module.css'

export default function ConceptArt() {
  return (
    <div className={styles.page}>
      <Head>
        <meta name="description" content="Michael Yin's Programmer Portfolio Concept Art" />
      </Head>
      <div className={styles.landingScreen}>
        <Link href="/" scroll={false}>
          <a className={styles.card}>
            <h2>&larr; Portfolio</h2>
          </a>
        </Link>
      </div>
    </div>
  )
}