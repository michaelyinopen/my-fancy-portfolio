import styles from './PortfolioArrow.module.css'

export const PortfolioArrow = ({ delay }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{ animationDelay: `${delay}ms` }}
      >
        Portfolio
        <svg
          className={styles.iconsSvg}
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ bottom: '20px' }}
          onClick={() => { }/*scrollToContent*/}
        >
          <polyline points="7 13 12 18 17 13"></polyline>
          <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
      </div>
    </div>
  )
}