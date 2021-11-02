import clsx from 'clsx'
import styles from './SubTitle.module.css'

export const SubTitle = ({
  text,
  visible,
  delay,
}) => {
  return (
    <div className={styles.subTitleContainer}>
      <h1 className={styles.subTitle}>
        {text}
      </h1>
      <h1
        className={clsx(
          styles.subTitle,
          styles.subTitleGlow,
          visible ? styles['subTitleGlow-appear-active'] : styles['subTitleGlow-appear']
        )}
        style={{ transitionDelay: visible ? `${delay}ms` : '0s' }}
      >
        {text}
      </h1>
    </div>
  )
}
