import { useJobShopCollectionRef } from '../../shared/sectionRefHooks'
import { scrollTo } from '../../shared/scrollTo'
import styles from './Sky.module.css'

export const PortfolioArrow = ({ delay }) => {
  const jobShopCollectionRef = useJobShopCollectionRef()
  return (
    <div className={styles.arrowContainer}>
      <div
        className={styles.arrowContent}
        style={{ animationDelay: `${delay}ms` }}
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