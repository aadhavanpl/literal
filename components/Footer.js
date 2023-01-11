import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                <img src='/logo.svg' />
                A blog app created using Flask
            </div>
        </div>
      )
}
