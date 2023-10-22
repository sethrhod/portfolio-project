import { useEffect, useRef } from "react";

export default function Header({
  screens,
  setScreens,
  currentScreen,
  setCurrentScreen,
  transitionEnd,
}: {
  screens: number;
  setScreens: React.Dispatch<React.SetStateAction<number>>;
  currentScreen: number;
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>;
  transitionEnd: boolean;
}) {
  const radioRef = useRef<HTMLDivElement>(null);

  const ScreenRadio = () => {
    useEffect(() => {
      if (radioRef.current) {
        radioRef.current.classList.replace("opacity-0", "opacity-100");
      }
    }, []);

    const buttons = [];

    for (let i = 0; i < screens; i++) {
      buttons.push(
        <div>
          <input
            type="radio"
            name="screen"
            value={i}
            checked={currentScreen === i}
            onChange={(e) => {
              setCurrentScreen(parseInt(e.target.value));
            }}
            className="flex flex-1 w-10 h-6 m-2 transition-all duration-500 ease-in-out transform scale-75 hover:scale-100 cursor-pointer"
          />
        </div>
      );
    }

    return buttons;
  };

  return (
    <div
      ref={radioRef}
      className="flex flex-1 fixed opacity-0 left-0 top-0 w-full h-auto justify-center transition-all duration-500 ease-in-out"
    >
      {screens && transitionEnd && <ScreenRadio />}
    </div>
  );
}
