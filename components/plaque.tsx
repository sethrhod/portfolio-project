import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { prefix } from "../lib/prefix";

export default function Plaque() {
  return (
    <div className="flex h-screen w-full flex-col justify-center items-center overflow-hidden">
      {/* Container for image and text area */}
      <div className="flex flex-col items-center w-full max-w-2xl">
        {/* Avatar with headshot positioned above text area */}
        <img
          src={`${prefix}/Seth-Headshot.jpg`}
          alt="Seth Rhodes"
          className="rounded-full w-32 h-32 md:w-40 md:h-40 mb-8 relative z-10"
        />
        
        {/* Square text area centered on desktop */}
        <div className="flex flex-col justify-center items-center bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 mx-6 md:mx-0 w-full md:w-[500px] md:h-[400px]">
          <h1 className="text-3xl md:text-5xl mb-6 text-center font-bold">Seth Rhodes</h1>
          <p className="text-sm md:text-lg text-center leading-relaxed max-w-md">
            Dedicated, self-motivated, and self-taught software developer with a
            unique palette for creative and ergonomic designs. Passionate about
            learning and contributing in collaborative team environments. Seeking
            to leverage my development skills to add value to projects.
          </p>
        </div>
      </div>
      
      {/* More about me link positioned below */}
      <Link
        href={"/#aboutme"}
        className="flex flex-col text-lg font-medium justify-center items-center mt-8 hover:text-sky-600 transition-colors"
      >
        More about me
        <FontAwesomeIcon
          icon={faChevronDown}
          size="1x"
          className="hover:text-sky-800 mt-2"
        />
      </Link>
    </div>
  );
}
