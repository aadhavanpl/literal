import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles['container']}>
        <div className={styles['wrapper']}>
            <img src='/logo.svg' />
            A blog app created using Flask
            <img src='/write-blog.svg' />
        </div>
    </div>
  )
}
