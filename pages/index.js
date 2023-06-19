// import React, { useState } from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import SocialMediaLinks from "../components/molecules/SocialMediaLinks";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

export default function Page() {
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
      <motion.main
        initial={{ height: "100vh", overflow: "hidden" }}
        animate={{ height: "auto", overflow: "auto" }}
        transition={{ delay: 6.6, duration: 0.5 }}
      >
        <SocialMediaLinks />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  );
}
