import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Fatto con <img src="/poop.png" alt="Poop" className={styles.logo} /> per nessuno.
      </footer>
    </>
  )
}
