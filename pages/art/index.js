import Head from "next/head";
import Image from "next/image";

import Hero from "../../components/artComponents/Hero";
import Categories from "../../components/artComponents/Categories";
import Layout from "../../components/artComponents/Layout";

export default function Page() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Illustrator portfolio"></meta>
        <title>Sofia Johnsson S.</title>
      </Head>
      <Layout>
        <Hero />
        <Categories />
      </Layout>
    </div>
  );
}
