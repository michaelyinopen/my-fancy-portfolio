import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Check } from '../components/Check'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Head>
        <title>Michael Yin - Programmer</title>
        <meta name="description" content="Michael Yin's Programmer Portfolio" />
      </Head>
      <div className={styles.sky}>
        <div className={styles.skyContent}>
          <h1 className={styles.title}>
            Michael Yin
          </h1>
          <h2 className={styles.description}>
            Programmer
          </h2>

          <ol className={styles.keyPointList}>
            <li><div className={styles.keyPoint}><Check /> 3 years professional experience building web apps</div></li>
            <li><div className={styles.keyPoint}><Check /> Strong React skills</div></li>
            <li><div className={styles.keyPoint}><Check /> Dedicated to produce high quality software solutions</div></li>
          </ol>

        </div>
        {/* <div style={{ fontSize: '4rem' }}>
          Portfolio<br />
          ↓↓
        </div> */}
      </div>

      <div className={'banner'} style={{ display: 'flex', justifyContent: 'space-evenly', border: '1px solid black', width: '100%' }}>
        <h3>Michael Yin</h3>
        <div style={{ width: '200px' }} />
        <div>
          Portfolio<br />
          ↓ current section and able to choose work
        </div>

        <div style={{ width: '200px' }} />
        <div>
          <Link href="/concept-art" scroll={false}>
            <a>Concept Art
            </a>
          </Link> / Basic Portfolio  / <a href='https://github.com/michaelyinopen'>Github</a>
        </div>
      </div>

      <div className={'seaSurface'} style={{ border: '1px solid black', width: '100%' }}>
        <div className={'seaSurface-art'} style={{ border: '1px solid red', height: '500px' }}>

        </div>
        <div className={'seaSurface-content'} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Image src="/vercel.svg" alt="Job Shop Collection Screen" title="Job Shop Collection Screen" width={500} height={500} />
          <div>
            <h2>Job Shop Collection</h2>
            <p>
              A web app to manage data of the Job Shop Scheduling Problem.<br />

              Live: job-shop-collection.michael-yin.net<br />

              Source: github.com/michaelyinopen/job-shop-collection-web<br />

              Also hosted on Azure: azure.job-shop-collection.michael-yin.net
            </p>
          </div>
        </div>
      </div>




      <div className={'seaShallow'} style={{ border: '1px solid black', width: '100%' }}>
        <div className={'seaShallow-art'} style={{ border: '1px solid green', height: '500px' }}>

        </div>
        <div className={'seaShallow-content'} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <h2>Job Shop Scheduler</h2>
            <p>
              A drag-and-drop schedule.<br />

              Live: michaelyinopen.github.io/job-shop-scheduler/<br />

              Source: github.com/michaelyinopen/job-shop-scheduler<br />
            </p>
          </div>
          <Image src="/vercel.svg" alt="Job Shop Scheduler" title="Job Shop Scheduler" width={500} height={500} />
        </div>
      </div>
      <div className={'seaDeep'} style={{ border: '1px solid black', width: '100%' }}>
        <div className={'seaDeep-art'} style={{ border: '1px solid yellow', height: '500px' }}>

        </div>
        <div className={'seaDeep-content'} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Image src="/vercel.svg" alt="Control flow practise" title="Control flow practise" width={500} height={500} />
          <div>
            <h2>Control flow practise</h2>
            <p>
              An ASP.NET Core project to practise control flow and error handling.<br />

              Source: github.com/michaelyinopen/control-flow-practise
            </p>
          </div>
        </div>
      </div>
      <div className={styles.seaBed}>
        <div className={styles.seaBedRock} />
        <div className={styles.seaBedRock2} />
      </div>

      {/* <div className={styles.grid}>
        <Link href="/concept-art" scroll={false}>
          <a className={styles.card}>
            <h2>Concept Art &rarr;</h2>
            <p>Relax and enjoy the view.</p>
          </a>
        </Link>

        <Link href="/">
          <a className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>Navigate to current page.</p>
          </a>
        </Link>
      </div> */}
    </>
  )
}
