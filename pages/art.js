import Head from "next/head";
import Hero from "../components/artComponents/Hero";
import Categories from "../components/artComponents/Categories";

export default function Page() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Illustrator portfolio"></meta>
        <title>Sofia Johnsson S.</title>
      </Head>
      <main className="bg-white">
        <Hero />
        <Categories />
      </main>
    </div>
  );
}
