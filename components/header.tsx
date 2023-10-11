import styles from "../styles/Header.module.css";

export default function Header() {
  return(
    <div className="flex flex-1 fixed left-0 top-0 w-full h-auto justify-center shadow-md">
      <a className="font-semibold p-5" href="../pages/index.tsx">Home</a>
      <a className="font-semibold p-5" href="../pages/about.tsx">About</a>
      <a className="font-semibold p-5" href="../pages/resume.tsx">Resume</a>
    </div>
  )
}