import Head from "next/head";

import artData from "../../components/artComponents/artData.json";
import Hero from "../../components/artComponents/Hero";
import Layout from "../../components/artComponents/Layout";
import Gallery from "../../components/artComponents/Gallery";

export default function Page() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Illustrator portfolio"></meta>
        <title>Sofia Johnsson S.</title>
      </Head>
      <Layout>
        <div className="mt-[100vh]">
          <Hero />
          <Gallery data={artData.categories} />
        </div>
      </Layout>
    </div>
  );
}
