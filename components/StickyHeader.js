import { useState, useEffect } from 'react';
import {
  useLandingRef,
  useJobShopCollectionRef,
  useJobShopSchedulerRef,
  useControlFlowPractiseRef,
} from '../shared/sectionRefHooks'
import { scrollTo } from '../shared/scrollTo'
import { useTransitionCallback } from '../shared/transition'
import styles from './StickyHeader.module.css'

const HomeLink = () => {
  const landingRef = useLandingRef()
  return (
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
  )
}

const Header = ({
  visible,
}) => {
  const jobShopCollectionRef = useJobShopCollectionRef()
  const jobShopSchedulerRef = useJobShopSchedulerRef()
  const controlFlowPractiseRef = useControlFlowPractiseRef()

  const transitionCallback = useTransitionCallback()

  return (
    <div
      className={styles.banner}
      style={{
        position: visible ? 'fixed' : 'absolute',
        top: visible ? 0 : 'auto',
        opacity: visible ? 1 : 0
      }}
    >
      <HomeLink />
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
          Job Shop Collection
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
          Job Shop Scheduler
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
          Control Flow Practise
        </a>
        <br />
      </div>

      <div className={styles.rightSideLinks}>
        <span>
          {// eslint-disable-next-line @next/next/no-html-link-for-pages
            <a
              href="/concept-art"
              onClick={(e) => {
                if (transitionCallback) {
                  e.preventDefault()
                  transitionCallback('/concept-art', undefined, {
                    scroll: false
                  })
                } else {
                  // Follow link natively
                }
              }}>
              Concept Art
            </a>
          }
        </span>
        <span>
          <a
            href="https://michael-yin.net"
            target="_blank"
            rel="noreferrer"
          >
            Basic
          </a>
        </span>
        <span>
          <a
            href='https://github.com/michaelyinopen'
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </span>
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