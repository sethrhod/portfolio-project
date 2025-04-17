import Head from "next/head";
import Header from "./header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="bg-stone-100">
      <Head>
        <title>Seth Rhodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          <div>
            {children}
          </div>
      </main>
    </div>
  );
}
