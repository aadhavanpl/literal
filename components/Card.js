import styles from './card.module.css'

export default function Card({src, date, heading}) {
  return (
    <div className={styles['container']}>
        <img src={src} />
        <div className={styles['date']}>{date}</div>
        <div className={styles['heading']}>{heading}</div>
        <div className={styles['button-wrapper']}>
          <img src='/read-further.svg' />
          <img src='/share.svg' onClick={() => {navigator.clipboard.writeText('Copy this text to clipboard')}} />
        </div>
    </div>
  )
}