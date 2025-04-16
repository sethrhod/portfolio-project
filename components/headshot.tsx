import { prefix } from "../lib/prefix";

export default function Headshot() {
  return (
    <div className="flex md:h-full h-1/3 transition-all duration-1000">
    <img
      src={`${prefix}/Seth-Headshot.jpg`}
      alt="Seth Rhodes Headshot"
      className="w-full h-full object-cover"
    />
  </div>
    )
}
