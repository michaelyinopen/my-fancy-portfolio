import { useLandingRef } from '../../shared/sectionRefHooks'
import { scrollTo } from '../../shared/scrollTo'
import styles from './Sky.module.css'

export const PortfolioArrow = ({ delay }) => {
  const landingRef = useLandingRef()
  return (
    <div className={styles.arrowContainer}>
      <div
        className={styles.arrowContent}
        style={{ animationDelay: `${delay}ms` }}
        onClick={(e) => {
          console.log('onclick')
          if (landingRef.current) {
            e.preventDefault()
            const { offsetTop, offsetHeight } = landingRef.current;
            const offsetBottom = offsetTop + offsetHeight
            scrollTo(offsetBottom)
            console.log({ offsetBottom })
            console.log('scrolled')
          } else {
            // Follow link natively
          }
        }}
      >
        Portfolio
        <svg
          className={styles.arrowIconsSvg}
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="7 13 12 18 17 13"></polyline>
          <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
      </div>
    </div>
  )
}