import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { headerHeightPx } from '../shared/dimensions'
import styles from './StickyHeader.module.css'


function useSkyRef() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById('sky');
  }, []);
  return ref;
}

function useJobShopCollectionRef() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById('job-shop-collection');
  }, []);
  return ref;
}

function useJobShopSchedulerRef() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById('job-shop-scheduler');
  }, []);
  return ref;
}

function useControlFlowPractiseRef() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById('control-flow-practise');
  }, []);
  return ref;
}

const Header = ({
  visible,
  fixed,
}) => {
  const jobShopCollectionRef = useJobShopCollectionRef();
  const jobShopSchedulerRef = useJobShopSchedulerRef();
  const controlFlowPractiseRef = useControlFlowPractiseRef();
  return (
    <div className={styles.banner}
      style={{
        height: headerHeightPx,
        position: fixed ? 'fixed' : 'absolute',
        top: fixed ? 0 : 'auto',
        opacity: visible ? 1 : 0
      }}
    >
      <a href='#'>
        <h3 style={{ fontSize: '24px', margin: 0 }}>Michael Yin</h3>
      </a>
      <div style={{ width: '200px' }} />
      <div>
        Portfolio<br />
        ↓ <a href='#job-shop-collection'>job-shop-collection</a><br />
        ↓ <a href='#job-shop-scheduler'>job-shop-scheduler</a><br />
        ↓ <a href='#control-flow-practise'>control-flow-practise</a><br />
      </div>

      <div style={{ width: '200px' }} />
      <div>
        <Link href="/concept-art" scroll={false}>
          <a>Concept Art
          </a>
        </Link> / Basic Portfolio  / <a href='https://github.com/michaelyinopen'>Github</a>
      </div>
    </div>
  )
}

export function StickyHeader() {
  const skyRef = useSkyRef();
  const [visible, setVisible] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function update() {
      const skyEl = skyRef.current;
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
  }, [skyRef]);

  return <Header visible={visible} fixed={fixed} />;
}