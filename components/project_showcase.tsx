import styles from "../styles/ProjectShowcase.module.css";
import Carousel from "./carousel";

export default function ProjectShowcase() {

  return (
    <div className={styles.container}>
      <Carousel />
      {/* <div className={styles.description}>
        <h2>ATC conferences App</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nisl quis tincidunt ultricies, nunc nisl ultrices tortor,
          quis ultrices nisl nunc quis nisl. Donec euismod, nisl vitae aliquam
          ultricies, nisl nisl ultricies nisl, quis ultrices nisl nunc quis
          nisl. Donec euismod, nisl vitae aliquam ultricies, nisl nisl ultricies
          nisl, quis ultrices nisl nunc quis nisl.
        </p>
      </div> */}
    </div>
  );
}
