import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { headerHeightPx } from '../shared/dimensions.js'
import {
  useLandingRef,
  useJobShopCollectionRef,
  useJobShopSchedulerRef,
  useControlFlowPractiseRef,
} from '../shared/sectionRefHooks.js'
import { scrollTo } from '../shared/scrollTo.js'
import styles from './StickyHeader.module.css'

const Header = ({
  visible,
  fixed,
}) => {
  const landingRef = useLandingRef()
  const jobShopCollectionRef = useJobShopCollectionRef()
  const jobShopSchedulerRef = useJobShopSchedulerRef()
  const controlFlowPractiseRef = useControlFlowPractiseRef()

  return (
    <div
      className={styles.banner}
      style={{
        minheight: headerHeightPx,
        position: visible ? 'fixed' : 'absolute',
        top: visible ? 0 : 'auto',
        opacity: visible ? 1 : 0
      }}
    >
      <a
        href='#'
        className={styles.homeLink}
        onClick={(e) => {
          if (landingRef.current) {
            e.preventDefault()
            const { offsetTop } = landingRef.current
            scrollTo(offsetTop)
          } else {
            // Follow link natively
          }
        }}
      >
        <h2>Michael Yin</h2>
      </a>
      <div className={styles.portfolioLinks}>
        <b>Portfolio</b><br />
        <a
          href='#job-shop-collection'
          onClick={(e) => {
            if (jobShopCollectionRef.current) {
              e.preventDefault()
              const { offsetTop } = jobShopCollectionRef.current
              scrollTo(offsetTop)
            } else {
              // Follow link natively
            }
          }}
        >
          job-shop-collection
        </a>
        <br />
        <a
          href='#job-shop-scheduler'
          onClick={(e) => {
            if (jobShopSchedulerRef.current) {
              e.preventDefault()
              const { offsetTop } = jobShopSchedulerRef.current
              scrollTo(offsetTop)
            } else {
              // Follow link natively
            }
          }}
        >
          job-shop-scheduler
        </a>
        <br />
        <a
          href='#control-flow-practise'
          onClick={(e) => {
            if (controlFlowPractiseRef.current) {
              e.preventDefault()
              const { offsetTop } = controlFlowPractiseRef.current
              scrollTo(offsetTop)
            } else {
              // Follow link natively
            }
          }}
        >
          control-flow-practise
        </a>
        <br />
      </div>

      <div className={styles.rightSideLinks}>
        <div>
          <Link href="/concept-art" scroll={false}>
            <a>
              Concept Art
            </a>
          </Link>
          {' / '}
          <a
            href="https://michael-yin.net"
            target="_blank"
            rel="noreferrer"
          >
            Basic
          </a>
          {' / '}
          <a
            href='https://github.com/michaelyinopen'
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div >
  )
}

export function StickyHeader() {
  const landingRef = useLandingRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      const skyEl = landingRef.current;
      if (skyEl) {
        const { pageYOffset } = window;
        const { offsetTop, offsetHeight } = skyEl;
        const offsetBottom = offsetTop + offsetHeight
        setVisible(pageYOffset >= offsetBottom - 80);
      }
    }

    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [landingRef]);

  return <Header visible={visible} />;
}