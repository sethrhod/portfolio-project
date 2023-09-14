import Image from 'next/image'
import styles from '../styles/Headshot.module.css'

export default function Headshot() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/Seth-Headshot.jpg"
        alt="Seth Rhodes Headshot"
        height={500}
        width={500}
        className={styles.headshot}
      />
    </div>
  )
}