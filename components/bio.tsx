import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Bio({ style }) {
  const handleClick = () => {
    return () => {
      window.open("/SethRhodesResume_2023.pdf", "_blank");
    };
  };
  return (
    <div className={style}>
      <div className="item-start m-2">
        <h1 className="text-6xl">Seth Rhodes</h1>
      </div>
      <div className="flex flex-1 m-2">
        <p className="text-lg">
          Dedicated, self-motivated, and self-taught React developer with a
          unique palette for creative and ergonomic designs. Passionate about
          learning and contributing in collaborative team environments. Seeking
          to leverage my React skills to add value to projects.
        </p>
      </div>
      <div className="flex flex-1 flex-row justify-evenly items-center m-2">
        <a href="https://github.com/sethrhod">
          <FontAwesomeIcon icon={faGithub} size="5x" className="hover:text-sky-800" />
        </a>
        <a href="https://www.linkedin.com/in/seth-rhodes-80375a238/">
          <FontAwesomeIcon icon={faLinkedinIn} size="5x" className="hover:text-sky-800" />
        </a>
      </div>
      <div className="flex flex-1 items-start justify-center">
        <div>
          <button
            onClick={handleClick()}
            className="text-black hover:text-sky-800 font-bold text-lg py-2 px-4"
          >
            View my resume
          </button>
        </div>
      </div>
    </div>
  );
}
