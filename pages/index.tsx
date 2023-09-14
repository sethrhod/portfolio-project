import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Headshot from "../components/headshot";
import Bio from "../components/bio";
import ProjectShowcase from "../components/project_showcase";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Seth Rhodes</h1>
        </div>
        <main className={styles.main}>
          <Headshot />
          <Bio />
        </main>
        <ProjectShowcase />
      </div>
    </Layout>
  );
}
