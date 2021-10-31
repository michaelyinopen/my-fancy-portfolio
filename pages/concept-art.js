import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ConceptArt.module.css'

export default function ConceptArt() {
  return (
    <div>
      <Head>
        <meta name="description" content="Michael Yin's Programmer Portfolio Concept Art" />
      </Head>
      <div className={styles.grid}>
        <Link href="/">
          <a className={styles.card}>
            <h2>&larr; Back</h2>
          </a>
        </Link>
        Concept ART!
      </div>
    </div>
  )
}