import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="flex flex-col h-full items-center mt-14 mr-6 ml-6 md:mt-20 md:mx-20">
      <div className="flex basis-2/3 flex-col mb-4 mt-4">
        <span className="font-bold text-3xl self-center mb-10">About Me</span>
        <p className="text-center text-xl md:text-2xl">
          <strong>Hey!</strong>👋 I'm a Fullstack developer with experience building <strong>web</strong> and <strong>mobile</strong> apps.
          <br/>
          I’ve worked with <strong>Python</strong>, <strong>Next.js</strong>, <strong>C#</strong> and <strong>.NET</strong>.
          <br/>
          I love learning — whether it's about something technical, artistic, design oriented, or just something interesting.
          <br/>
          Most of my time is spent learning new languages, training in combat sports, eating pizza, reading, andd improving my skillset as a developer.
        </p>
        </div>
        <div className="flex basis-2/3 w-full flex-col items-center mb-4 mt-4">
          <Link href={`/SethRhodesCV.pdf`}
          target="_blank"
          className="font-bold text-xl m-6 mb-12 hover:text-sky-800"
        >
          View my resume
        </Link>
        <div className="flex justify-evenly w-full m-2">
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
