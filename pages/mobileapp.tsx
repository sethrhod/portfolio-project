import Carousel from "../components/carousel";
import { useCallback, useState } from "react";

export default function ProjectShowcase({
  setCurrentScreen,
  currentScreen,
}: {
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
  currentScreen: string;
}) {
  const [transitionEnd, setTransitionEnd] = useState<boolean>(false);
  const [localCurrentScreen, setLocalCurrentScreen] =
    useState<string>("project");

  const CarouselRef = useCallback(
    (node: HTMLDivElement) => {
      if (node && localCurrentScreen !== "project") {
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
      if (node && localCurrentScreen === "project") {
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

  return (
    !transitionEnd && (
      <div
        ref={CarouselRef}
        className="flex flex-1 h-screen flex-col justify-between transition-all duration-1000 ease-in-out"
      >
        <button
          onClick={() => {
            setLocalCurrentScreen("bio");
          }}
        >
          Back
        </button>
        <Carousel />
        <div className="flex flex-col md:flex-row p-4">
          <div className="flex flex-[3] flex-col m-2">
            <h2 className="text-2xl mb-1 text-left font-bold">
              ATC conferences App
            </h2>
            <p className="text-base text-left">
              The ATC conferences app is a mobile app built for the{" "}
              <a
                href="https://www.atldevcon.com/"
                className="
            text-blue-500
            hover:text-blue-700
            visited:text-purple-600
            hover:visited:text-purple-700
            "
              >
                Atlanta developer's conference
              </a>{" "}
              and the{" "}
              <a
                href="https://atlcloudconf.com/"
                className="
            text-blue-500
            hover:text-blue-700
            visited:text-purple-600
            hover:visited:text-purple-700
            "
              >
                Atlanta cloud conference
              </a>
              . It's built with React Native and is out on both the Google Play
              Store and the Apple App Store.
            </p>
          </div>
          <div className="flex flex-1 flex-row md:flex-col justify-center items-center">
            <a
              className="flex flex-1 justify-end items-center m-2"
              href="https://play.google.com/store/apps/details?id=com.qimatatech.atcconferences&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                height={110}
                width={110}
              />
            </a>
            <a
              className="flex flex-1 justify-start items-center m-2"
              href="https://apps.apple.com/us/app/atc-conferences/id6450556298"
            >
              <img
                alt="Download on the App store"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                height={100}
                width={100}
              />
            </a>
          </div>
        </div>
      </div>
    )
  );
}
