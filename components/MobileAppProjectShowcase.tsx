import Carousel from "./carousel";

export default function MobileAppProjectShowcase() {
  return (
      <div
        className="flex h-screen flex-col justify-center space-y-5 transition-all duration-1000 ease-in-out"
      >
        <Carousel />
        <div className="flex flex-col p-4">
          <div className="flex flex-col m-2">
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
              . It's built with React Native and is out on Apple App Store.
            </p>
          </div>
          <div className="flex flex-1 flex-row md:flex-col justify-center items-center">
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
  );
}
