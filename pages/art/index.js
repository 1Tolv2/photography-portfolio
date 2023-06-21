import { useEffect, useState } from "react";
import Head from "next/head";

import artData from "../../components/artComponents/artData.json";
import Hero from "../../components/artComponents/Hero";
import Layout from "../../components/artComponents/Layout";
import Gallery from "../../components/artComponents/Gallery";

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(
      artData.categories.toSpliced(4, 0, {
        type: "text",
        tag: "About",
        title: "I am",
        description: [
          "an illustrator based in Stockholm, Sweden. I have a passion for traditional media and my all time favourite is aquarelle. As of late I've started to explore more digital illustration through my web development work.",
          "Checkout my work by clicking on the images :D",
        ],
        bgImage: "/signature.svg",
        span: "md",
      })
    );
  }, [artData]);

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
          <Gallery data={data} />
        </div>
      </Layout>
    </div>
  );
}
