import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { headerHeightPx } from '../shared/dimensions'
import { Sky } from '../components/Sky'
import { StickyHeader } from '../components/StickyHeader'
import { GithubIcon } from '../components/GithubIcon'
import { ExternalLinkIcon } from '../components/ExternalLinkIcon'
import jobShopCollectionPic from '../public/job-shop-collection-home.png'
import jobShopSchedulerPic from '../public/job-shop-scheduler-demo.png'
import controlFlowPractisePic from '../public/control-flow-practise.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Yin - Programmer</title>
        <meta name="description" content="Michael Yin's Programmer Portfolio" />
      </Head>

      <Sky />

      <StickyHeader />

      <div className={styles.seaSurface}>
        <div className={styles.seaSurfaceArt}>

        </div>
        <div
          id='job-shop-collection'
          className={styles.sectionPosition}
          style={{ paddingTop: headerHeightPx, marginTop: -headerHeightPx }}
        >
          <div className={styles.contentFlexbox}>
            <div className={styles.imageContainer}>
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
                  className={styles.contentLinkWithIcon}
                >
                  Live Demo
                  <ExternalLinkIcon />
                </a>
                <br />
                <a
                  href="https://azure.job-shop-collection.michael-yin.net"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contentLinkWithIcon}
                >
                  Demo on Azure
                  <ExternalLinkIcon />
                </a>
                <br />
                <a
                  href="https://github.com/michaelyinopen/job-shop-collection-web"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contentLinkWithIcon}
                >
                  Source
                  <GithubIcon />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seaShallow}>
        <div className={styles.seaShallowArt}>

        </div>
        <div
          id='job-shop-scheduler'
          className={styles.sectionPosition}
          style={{ paddingTop: headerHeightPx, marginTop: -headerHeightPx }}
        >
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
                  className={styles.contentLinkWithIcon}
                >
                  Live Demo
                  <ExternalLinkIcon />
                </a>
                <br />
                <a
                  href="https://github.com/michaelyinopen/job-shop-scheduler"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contentLinkWithIcon}
                >
                  Source
                  <GithubIcon />
                </a>
              </p>
            </div>
            <div className={styles.imageContainer}>
              <a
                href="https://michaelyinopen.github.io/job-shop-scheduler/"
                target="_blank"
                rel="noreferrer"
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
      </div>

      <div className={styles.seaDeep}>
        <div className={styles.seaDeepArt}>

        </div>
        <div
          id='control-flow-practise'
          className={styles.sectionPosition}
          style={{ paddingTop: headerHeightPx, marginTop: -headerHeightPx }}
        >
          <div className={styles.contentFlexbox}>
            <div className={styles.imageContainer}>
              <a
                href="https://github.com/michaelyinopen/control-flow-practise"
                target="_blank"
                rel="noreferrer"
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
                  className={styles.contentLinkWithIcon}
                >
                  Source
                  <GithubIcon />
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
