import clsx from 'clsx'
import styles from './Title.module.css'

export const Title = ({
  text,
  visible,
  delay,
}) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        {text}
      </h1>
      <h1
        className={clsx(
          styles.title,
          styles.titleGlow,
          visible ? styles['titleGlow-appear-active'] : styles['titleGlow-appear']
        )}
        style={{ transitionDelay: visible ? `${delay}ms` : '0s' }}
      >
        {text}
      </h1>
    </div>
  )
}
