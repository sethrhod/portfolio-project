import Head from "next/head";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Seth Rhodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        {/* this component will be implemented later if more content is added */}
        {/* <Header /> */}
        {children}
      </main>
    </div>
  );
}
