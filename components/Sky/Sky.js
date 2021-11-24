import { useState, useEffect } from 'react'
import { Title } from './Title'
import { SubTitle } from './SubTitle'
import { Check } from './Check'
import { PortfolioArrow } from './PortfolioArrow'
import styles from './Sky.module.css'
import { useWindowViewport } from '../../shared/useWindowViewport'

export const Sky = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [])

  const windowViewport = useWindowViewport()
  const { height } = windowViewport

  return (
    <div
      id='landing'
      className={styles.sky}
      style={{ minHeight: height }}
    >
      <div className={styles.skyContent}>
        <div className={styles.titlesFlexboxContainer}>
          <div className={styles.titlesLeftSpace} />
          <div className={styles.titlesFlexbox}>
            <Title
              text="Michael Yin"
              visible={visible}
              delay={400}
            />
            <SubTitle
              text="Programmer"
              visible={visible}
              delay={1400}
            />
          </div>
        </div>
        <ol className={styles.keyPointList}>
          <li><div className={styles.keyPoint}><Check visible={visible} delay={2400} /> 3 years professional experience building web apps</div></li>
          <li><div className={styles.keyPoint}><Check visible={visible} delay={3400} /> Strong React skills</div></li>
          <li><div className={styles.keyPoint}><Check visible={visible} delay={4400} /> Dedicated to produce high quality software solutions</div></li>
        </ol>
      </div>
      <PortfolioArrow delay={5400} />
    </div>
  )
}