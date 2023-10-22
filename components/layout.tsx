import Head from "next/head";
import Header from "./header";

export default function Layout({
  children,
  // screens,
  // setScreens,
  // currentScreen,
  // setCurrentScreen,
  // transitionEnd,
}: {
  children: React.ReactNode;
  // screens: number;
  // setScreens: React.Dispatch<React.SetStateAction<number>>;
  // currentScreen: number;
  // setCurrentScreen: React.Dispatch<React.SetStateAction<number>>;
  // transitionEnd: boolean;
}) {


  return (
    <div className="bg-stone-100">
      <Head>
        <title>Seth Rhodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* this component could be implemented later if more content is added */}
        {/* <Header
          screens={screens}
          setScreens={setScreens}
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
          transitionEnd={transitionEnd}
        /> */}
        {children}
      </main>
    </div>
  );
}
