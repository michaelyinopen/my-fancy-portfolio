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
        <div className={styles.portion}>
          <div className={styles.sky} />
        </div>
        <div className={styles['sea-surface']} />
        <div className={styles['shallow-sea']} />
        <div className={styles['deep-sea']} />
        <div className={styles['seabed']} />
      </div>
    </div>
  )
}