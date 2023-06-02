// import React, { useState } from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import SocialMediaLinks from "../components/molecules/SocialMediaLinks";
import Projects from "../components/Projects";

export default function Page() {
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Full stack developer portfolio"
        ></meta>
        <title>Sofia Johnsson S.</title>
      </Head>
      <main>
        <SocialMediaLinks />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
