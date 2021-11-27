import Head from 'next/head'
import Image from 'next/image'
import clsx from 'clsx'
import styles from '../styles/Home.module.css'
import { useViewportEnter } from '../shared/useViewportEnter'
import { getSlideInStyle } from '../shared/slideIn'
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
      <SeaSurface />
      <SeaShallow />
      <SeaDeep />
      <SeaBed />
    </>
  )
}

function SeaSurface() {
  const [ref, entered] = useViewportEnter();
  return (
    <div className={styles.seaSurface}>
      <div className={styles.seaSurfaceArt}>

      </div>
      <div
        ref={ref}
        id='job-shop-collection'
        className={styles.sectionPosition}
        style={getSlideInStyle(entered, 1)}
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
                priority
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
              <div className={styles.beforeLinksSeparator} />
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
  )
}

function SeaShallow() {
  const [ref, entered] = useViewportEnter();
  return (
    <div className={styles.seaShallow}>
      <div className={styles.seaShallowArt}>

      </div>
      <div
        ref={ref}
        id='job-shop-scheduler'
        className={styles.sectionPosition}
        style={getSlideInStyle(entered, 0)}
      >
        <div className={clsx(styles.contentFlexbox, styles['contentFlexbox-reverse'])}>
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
                priority
                layout='fill'
                objectFit='cover'
                objectPosition='left top'
              />
            </a>
          </div>
          <div className={styles.contentDescription}>
            <h2>Job Shop Scheduler</h2>
            <p>
              A drag-and-drop schedule.
              <div className={styles.beforeLinksSeparator} />
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
        </div>
      </div>
    </div>
  )
}

function SeaDeep() {
  const [ref, entered] = useViewportEnter();
  return (
    <div className={styles.seaDeep}>
      <div className={styles.seaDeepArt}>

      </div>
      <div
        ref={ref}
        id='control-flow-practise'
        className={styles.sectionPosition}
        style={getSlideInStyle(entered, 0)}
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
                priority
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
              <div className={styles.beforeLinksSeparator} />
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
  )
}

function SeaBed() {
  return (
    <div className={styles.seaBed}>
      <div className={styles.seaBedRock} />
      <div className={styles.seaBedRock2} />
    </div>
  )
}