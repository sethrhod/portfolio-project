import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Plaque() {
  return (
    <div className="flex md:h-full h-2/3 flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-[2] justify-center flex-col mr-6 ml-6 md:mr-0 md:ml-0 md:p-12">
        <h1 className="md:text-6xl text-5xl mb-4 mt-4">Seth Rhodes</h1>
        <p className="md:text-2xl text-lg">
          Dedicated, self-motivated, and self-taught software developer with a
          unique palette for creative and ergonomic designs. Passionate about
          learning and contributing in collaborative team environments.
          Seeking to leverage my development skills to add value to projects.
        </p>
      </div>
      <Link href={'/#aboutme'} className="flex flex-1 flex-col text-lg font-medium justify-center items-center">
        More about me
        <FontAwesomeIcon icon={faChevronDown} size="1x" className="hover:text-sky-800" />
      </Link>
    </div>
  );
}
