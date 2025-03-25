import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Bio({ setLocalCurrentScreen }) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const name = target.name;
    if (name === "resume") {
      window.open("/portfolio-project/SethRhodesMarch2025CV.pdf", "_blank");
    } else {
      setLocalCurrentScreen(name);
    }
  };

  return (
    <div className="flex md:h-full h-2/3 justify-center bg-opacity-100 transition-all bg-stone-100">
      <div className="flex flex-col justify-around md:w-3/4">
        <div className="flex flex-[2] justify-center flex-col mr-6 ml-6 md:mr-0 md:ml-0">
          <h1 className="md:text-6xl text-5xl mb-4 mt-4">Seth Rhodes</h1>
          <p className="md:text-2xl text-lg">
            Dedicated, self-motivated, and self-taught software developer with a
            unique palette for creative and ergonomic designs. Passionate about
            learning and contributing in collaborative team environments.
            Seeking to leverage my development skills to add value to projects.
          </p>
          <div className="flex md:flex-col justify-center font-bold mt-6 md:mt-10 md:text-xl">
            <button
              name="project"
              onClick={handleClick}
              className="text-black hover:text-sky-800"
            >
              ATC Conferences App
            </button>
            {/* <button
              name="about"
              onClick={handleClick}
              className="text-black hover:text-sky-800"
            >
              More about me
            </button> */}
            <button
              name="resume"
              onClick={handleClick}
              className="text-black hover:text-sky-800"
            >
              View my resume
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-row justify-evenly items-center m-2">
          <a href="https://github.com/sethrhod">
            <FontAwesomeIcon
              icon={faGithub}
              size="5x"
              className="hover:text-sky-800"
            />
          </a>
          <a href="https://www.linkedin.com/in/seth-rhodes-80375a238/">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="5x"
              className="hover:text-sky-800"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
