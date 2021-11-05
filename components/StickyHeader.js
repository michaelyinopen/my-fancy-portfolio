import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { headerHeightPx } from '../shared/dimensions'
import {
  useLandingRef,
  useJobShopCollectionRef,
  useJobShopSchedulerRef,
  useControlFlowPractiseRef,
} from '../shared/sectionRefHooks'
import { scrollTo } from '../shared/scrollTo'
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
    <div className={styles.banner}
      style={{
        height: headerHeightPx,
        position: fixed ? 'fixed' : 'absolute',
        top: fixed ? 0 : 'auto',
        opacity: visible ? 1 : 0
      }}
    >
      <a
        href='#'
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
        <h3 style={{ fontSize: '24px', margin: 0 }}>Michael Yin</h3>
      </a>
      <div style={{ width: '200px' }} />
      <div>
        Portfolio<br />
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

      <div style={{ width: '200px' }} />
      <div>
        <Link href="/concept-art" scroll={false}>
          <a>Concept Art
          </a>
        </Link> / Basic Portfolio  / <a href='https://github.com/michaelyinopen'>Github</a>
      </div>
    </div >
  )
}

export function StickyHeader() {
  const landingRef = useLandingRef();
  const [visible, setVisible] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function update() {
      const skyEl = landingRef.current;
      if (skyEl) {
        const { pageYOffset } = window;
        const { offsetTop, offsetHeight } = skyEl;
        const offsetBottom = offsetTop + offsetHeight
        setFixed(pageYOffset >= offsetBottom);
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

  return <Header visible={visible} fixed={fixed} />;
}