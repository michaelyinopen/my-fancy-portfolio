import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Sky } from '../components/Sky'
import jobShopCollectionPic from '../public/job-shop-collection-home.png'
import jobShopSchedulerPic from '../public/job-shop-scheduler-demo.png'
import controlFlowPractisePic from '../public/control-flow-practise.svg'

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

      <Sky />

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

      <div className={styles.seaSurface}>
        <div className={styles.seaSurfaceArt}>

        </div>
        <div className={styles.contentFlexbox}>
          <div className={styles.seaSurfaceImageContainer}>
            <a
              href="https://job-shop-collection.michael-yin.net"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={jobShopCollectionPic}
                alt="Job Shop Collection Screen"
                title="Job Shop Collection Screen"
                quality='100'
                layout='fill'
                objectFit='cover'
                objectPosition='left top'
              />
            </a>
          </div>
          <div className={styles.contentDescription}>
            <h2>Job Shop Collection</h2>
            <p>
              A web app to manage data of the Job Shop Scheduling Problem.
              <br />
              <br />
              <a
                href="https://job-shop-collection.michael-yin.net"
                target="_blank"
                rel="noreferrer"
                className={styles.contentLink}
              >
                Live Demo
              </a>
              <br />
              <a
                href="https://azure.job-shop-collection.michael-yin.net"
                target="_blank"
                rel="noreferrer"
                className={styles.contentLink}
              >
                Demo on Azure
              </a>
              <br />
              <a
                href="https://github.com/michaelyinopen/job-shop-collection-web"
                target="_blank"
                rel="noreferrer"
                className={styles.contentLink}
              >
                Source
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.seaShallow}>
        <div className={styles.seaShallowArt}>

        </div>
        <div className={styles.contentFlexbox}>
          <div className={styles.contentDescription}>
            <h2>Job Shop Scheduler</h2>
            <p>
              A drag-and-drop schedule.
              <br />
              <br />
              <a
                href="https://michaelyinopen.github.io/job-shop-scheduler/"
                target="_blank"
                rel="noreferrer"
                className={styles.contentLink}
              >
                Live Demo
              </a>
              <br />
              <a
                href="https://github.com/michaelyinopen/job-shop-scheduler"
                target="_blank"
                rel="noreferrer"
                className={styles.contentLink}
              >
                Source
              </a>
            </p>
          </div>
          <div className={styles.seaSurfaceImageContainer}>
            <a
              href="https://michaelyinopen.github.io/job-shop-scheduler/"
              target="_blank"
              rel="noreferrer"
              className={styles.contentLink}
            >
              <Image
                src={jobShopSchedulerPic}
                alt="Job Shop Scheduler Screen"
                title="Job Shop Scheduler Screen"
                quality='100'
                layout='fill'
                objectFit='cover'
                objectPosition='left top'
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.seaDeep}>
        <div className={styles.seaDeepArt}>

        </div>
        <div className={'seaDeep-content'} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div className={styles.contentFlexbox}>
            <div className={styles.seaSurfaceImageContainer}>
              <a
                href="https://github.com/michaelyinopen/control-flow-practise"
                target="_blank"
                rel="noreferrer"
                className={styles.contentLink}
              >
                <Image
                  src={controlFlowPractisePic}
                  alt="Control Flow Practise Diagram"
                  title="Control Flow Practise Diagram"
                  quality='100'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='left top'
                />
              </a>
            </div>
            <div className={styles.contentDescription}>
              <h2>Control flow practise</h2>
              <p>
                An ASP.NET Core project to practise control flow and error handling.
                <br />
                <br />
                <a
                  href="https://github.com/michaelyinopen/control-flow-practise"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contentLink}
                >
                  Source
                </a>
              </p>
            </div>
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
