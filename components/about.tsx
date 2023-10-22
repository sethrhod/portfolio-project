import { useCallback, useEffect, useRef, useState } from "react";
import Scene from "./scene";

export default function About({
  setCurrentScreen,
  currentScreen,
}: {
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
  currentScreen: string;
}) {

  const [transitionEnd, setTransitionEnd] = useState<boolean>(false);
  const [localCurrentScreen, setLocalCurrentScreen] =
    useState<string>(currentScreen);

    
  const ref = useCallback(
    (node: HTMLDivElement) => {
      if (node && localCurrentScreen !== "about") {
        const observer = new IntersectionObserver(
          (entries) =>
            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                setTransitionEnd(true);
                setCurrentScreen(localCurrentScreen);
              }
            }),
          {
            threshold: 0.5,
          }
        );
        observer.observe(node);
        node.animate(
          [
            { transform: "translateX(0%)", opacity: 1 },
            { transform: "translateX(-60%)", opacity: 0 },
          ],
          {
            duration: 500,
            easing: "ease-in-out",
            fill: "forwards",
          }
        );
      }
      if (node && localCurrentScreen === "about") {
        node.animate(
          [
            { transform: "translateX(-60%)", opacity: 0 },
            { transform: "translateX(0%)", opacity: 1 },
          ],
          {
            duration: 1000,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    },
    [currentScreen, localCurrentScreen, setCurrentScreen]
  );

  // useEffect(() => {
  //   const Observer = new IntersectionObserver(
  //     (entries) =>
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.remove("opacity-0");
  //         } else {
  //           entry.target.classList.add("opacity-0");
  //         }
  //       }),
  //     {
  //       threshold: 0.5,
  //     }
  //   );
  //   Observer.observe(ref.current);
  // }, []);

  return (
    !transitionEnd && (
      <div
        ref={ref}
        className="flex h-screen flex-col transition-all duration-500 ease-in-out"
      >
        <button
          onClick={() => {
            setLocalCurrentScreen("bio");
          }}
        >
          Back
        </button>
        <div className="flex flex-1 flex-col bg-stone-100 p-4">
          <h1 className="text-2xl">About Me</h1>
          <p>
            I spend most of my time learning new technologies and building
            things but I also enjoy playing video games, practicing Muay Thai,
            rock climbing, and making art.
            <br />
            <br />
            I've been using Blender to learn 3D modeling and animation. Here's one of my creations.
          </p>
        </div>
        <Scene />
      </div>
    )
  );
}
