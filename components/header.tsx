import styles from "../styles/Header.module.css";

export default function Header() {
  return(
    <div className={styles.header}>
      <a href="../pages/index.tsx">Home</a>
      <a href="../pages/gallery.tsx">Gallery</a>
      <a href="../pages/contact.tsx">Contact</a>
      <a href="../pages/resume.tsx">Resume</a>
    </div>
  )
}