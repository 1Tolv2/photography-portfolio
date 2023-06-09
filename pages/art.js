import Head from "next/head";
import Image from "next/image";

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
      <main className="bg-white overflow-hidden">
        <Hero />
        <Categories />
        <div className=" relative flex gap-6 w-fit mx-auto my-8">
          <a href="https://www.instagram.com/sofiajohnsson_illustrations/">
            <Image
              src="/art/instagram.svg"
              height="30"
              width="30"
              alt="instgram"
            />
          </a>
          <a href="https://www.deviantart.com/laiany">
            <Image src="/art/etsy.svg" height="30" width="30" alt="etsy" />
          </a>
          <a href="https://www.etsy.com/se-en/shop/Sofiaillustrations?ref=profile_header">
            <Image
              src="/art/deviantart.svg"
              height="18"
              width="18"
              alt="deviantArt"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
