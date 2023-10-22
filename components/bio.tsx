import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function Bio({ setLocalCurrentScreen }) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const name = target.name;
    if (name === "resume") {
      window.open("/SethRhodesResume_2023.pdf", "_blank");
    } else {
      setLocalCurrentScreen(name);
    }
  };

  return (
    <div className="flex flex-1 flex-col bg-opacity-100 transition-all bg-stone-100">
      <div className="p-6">
        <h1 className="text-6xl">Seth Rhodes</h1>
      </div>
      <div className="flex flex-1 p-6">
        <p className="text-xl">
          Dedicated, self-motivated, and self-taught React developer with a
          unique palette for creative and ergonomic designs.
          Passionate about learning and contributing in collaborative team
          environments.
          Seeking to leverage my React skills to add value to projects.
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <button
          name="project"
          onClick={handleClick}
          className="text-black hover:text-sky-800 font-bold text-lg"
        >
          ATC Conferences App
        </button>
        <button
          name="about"
          onClick={handleClick}
          className="text-black hover:text-sky-800 font-bold text-lg"
        >
          More about me
        </button>
        <button
          name="resume"
          onClick={handleClick}
          className="text-black hover:text-sky-800 font-bold text-lg"
        >
          View my resume
        </button>
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
  );
}
