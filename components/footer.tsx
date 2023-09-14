import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
    <div>
      <a
        href="https://github.com/sethrhod"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/seth-rhodes-80375a238/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </footer>
  )
}