import Head from "next/head";
import Header from "./header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="bg-stone-100"> {/* Optional: Keep outer background */}
      <Head>
        <title>Seth Rhodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Main flex container for horizontal division */}
        <div className="flex flex-row min-h-screen items-start">
          {/* Children container takes 3/4 width */}
          <div className="w-3/4 bg-gray-100"> {/* Apply background here if needed */}
            {children}
          </div>
          {/* Header container takes 1/4 width */}
          <div className="w-1/4 sticky top-0"> {/* Added sticky top-0 */}
            <Header />
          </div>
        </div>
      </main>
    </div>
  );
}
