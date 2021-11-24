import clsx from 'clsx'
import styles from './Sky.module.css'

export const SubTitle = ({
  text,
  visible,
  delay,
}) => {
  return (
    <div className={styles.subTitleContainer}>
      <h2 className={styles.subTitle}>
        {text}
      </h2>
      <h2
        className={clsx(
          styles.subTitle,
          styles.subTitleGlow,
          visible ? styles['subTitleGlow-appear-active'] : styles['subTitleGlow-appear']
        )}
        style={{ transitionDelay: visible ? `${delay}ms` : '0s' }}
      >
        {text}
      </h2>
    </div>
  )
}
