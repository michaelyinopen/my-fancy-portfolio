import { useEffect, useState } from 'react';
import styles from './Check.module.css'


export const Check = ({ visible, delay }) => {
  return (
    <div className={styles.check}>
      <svg className={styles.circleSvg}>
        <circle
          cx="20px"
          cy="20px"
          r="19px"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="120"
          strokeDashoffset={visible ? 0 : 120}
          className={styles.animated}
          style={{ transitionDelay: visible ? `${delay}ms` : '0s' }}
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.checkSvg}
      >
        <path
          d="M4 12 L9 17 L20 6"
          fill="none"
          strokeDasharray="120"
          strokeDashoffset={visible ? 0 : 120}
          className={styles.animated}
          style={{ transitionDelay: visible ? `${delay}ms` : '0s' }}
        />
        🗸
      </svg>
    </div>
  )
}