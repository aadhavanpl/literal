import styles from './blog.module.css'

export default function Blog({date, heading, src, content}) {
  return (
    <div className={styles['container']}>
      <div className={styles['heading-wrapper']}>
        <div className={styles['date']}>{date}</div>
        <div className={styles['heading']}>{heading}</div>        
      </div>
        <div className={styles['img-wrapper']}>
          <img src={src} /> {/*dimensions*/}
        </div>
        <div className={styles['content']}>
          {content}
        </div>
        <div className={styles['line']}></div>        
        <img src='/edit.svg' />
    </div>
  )
}
