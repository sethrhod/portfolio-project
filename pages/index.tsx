import Layout from "../components/layout";
import Headshot from "../components/headshot";
import Bio from "../components/bio";
import ProjectShowcase from "../components/project_showcase";
import Resume from "../components/resume";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.add("opacity-0");
          }
        }),
      {
        threshold: 0.50,
      }
    );
    Observer.observe(ref.current);
  }, []);

  return (
    <Layout>
      <div className="flex-1 flex-col justify-center items-center bg-stone-100">
        <div className="flex flex-col w-screen h-screen justify-center items-center">
          <main ref={ref} className="flex flex-1 flex-col md:flex-row transition-all duration-500 ease-in-out">
            <Headshot style={styles.headshot} />
            <Bio style={styles.bio} />
          </main>
        </div>
        <ProjectShowcase />
        <Resume />
      </div>
    </Layout>
  );
}
