import { useCallback, useState } from "react";
import Bio from "./plaque";

export default function Headshot() {
  // const [transitionEnd, setTransitionEnd] = useState<boolean>(false);

  // const headshotRef = useCallback(
  //   (node: HTMLDivElement) => {
  //     const observer = new IntersectionObserver(
  //       (entries) =>
  //         entries.forEach((entry) => {
  //           if (!entry.isIntersecting) {
  //             setTransitionEnd(true);
  //           }
  //         }),
  //       {
  //         threshold: 0.5,
  //       }
  //     );
  //     if (node) {
  //       observer.observe(node.children[0]);
  //       node.animate(
  //         [
  //           { transform: "translateX(0%)", opacity: 1 },
  //           { transform: "translateX(-60%)", opacity: 0 },
  //         ],
  //         {
  //           duration: 500,
  //           easing: "ease-in-out",
  //           fill: "forwards",
  //         }
  //       );
  //     }
  //     if (node) {
  //       node.animate(
  //         [
  //           { transform: "translateX(-60%)", opacity: 0 },
  //           { transform: "translateX(0%)", opacity: 1 },
  //         ],
  //         {
  //           duration: 500,
  //           easing: "ease",
  //           fill: "forwards",
  //         }
  //       );
  //     }
  //   }, []
  // );

  return (
    <div className="flex md:h-full h-1/3 transition-all duration-1000">
    <img
      src={`/Seth-Headshot.jpg`}
      alt="Seth Rhodes Headshot"
      className="w-full h-full object-cover"
    />
  </div>
    )
}
