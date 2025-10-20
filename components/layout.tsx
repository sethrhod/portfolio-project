import Head from "next/head";
import Header from "./header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="bg-stone-100 w-full overflow-x-hidden">
      <Head>
        <title>Seth Rhodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full pt-16 md:pt-0 md:pr-[20%]">
          <Header />
          <div className="w-full">
            {children}
          </div>
      </main>
    </div>
  );
}
