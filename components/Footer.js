import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                <Link href="/">
                    <img src='/logo.svg' />
                </Link>
                A blog app created using Flask
            </div>
        </div>
      )
}
