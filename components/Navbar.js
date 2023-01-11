import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles['container']}>
        <div className={styles['wrapper']}>
          <Link href="/">
            <img src='/logo.svg' />
          </Link>
          A blog app created using Flask
          <img src='/write-blog.svg' />
        </div>
    </div>
  )
}
