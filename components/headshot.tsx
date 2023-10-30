import { useCallback, useState } from "react";
import Bio from "./bio";

export default function Headshot({
  currentScreen,
  setCurrentScreen,
}: {
  currentScreen: string;
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [transitionEnd, setTransitionEnd] = useState<boolean>(false);
  const [localCurrentScreen, setLocalCurrentScreen] =
    useState<string>(currentScreen);

  const headshotRef = useCallback(
    (node: HTMLDivElement) => {
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
      if (node && localCurrentScreen !== "bio") {
        observer.observe(node.children[0]);
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
      if (node && localCurrentScreen === "bio") {
        node.animate(
          [
            { transform: "translateX(-60%)", opacity: 0 },
            { transform: "translateX(0%)", opacity: 1 },
          ],
          {
            duration: 500,
            easing: "ease",
            fill: "forwards",
          }
        );
      }
    },
    [currentScreen, localCurrentScreen, setCurrentScreen]
  );

  const baseUrl = "https://sethrhod.github.io/portfolio-project/";

  return (
    !transitionEnd && (
      <div
        ref={headshotRef}
        className="flex flex-col h-screen overflow-hidden md:flex-row transition-all duration-500 ease-in-out"
      >
        <div className="flex md:h-full h-1/2 transition-all duration-1000">
          <img
            src={`${baseUrl}/Seth-Headshot.jpg`}
            alt="Seth Rhodes Headshot"
            className="w-full h-full object-cover"
          />
        </div>
        <Bio setLocalCurrentScreen={setLocalCurrentScreen} />
      </div>
    )
  );
}
