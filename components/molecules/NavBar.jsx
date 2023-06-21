import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TextRegular from "../atoms/typography/TextRegular";

const NavBar = () => {
  return (
    <nav className="absolute top-8 w-full px-4">
      <div className=" flex flex-wrap justify-center gap-5 lg:gap-10 selection:mx-auto">
        <motion.div
          initial={{ translateY: -40, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 6.5, duration: 0.6, type: "tween" }}
        >
          <a href="#about">
            <TextRegular>ABOUT</TextRegular>
          </a>
        </motion.div>
        <motion.div
          initial={{ translateY: -40, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 6.8, duration: 0.6, type: "tween" }}
        >
          <a href="#projects">
            <TextRegular>PROJECTS</TextRegular>
          </a>
        </motion.div>
        <motion.div
          initial={{ translateY: -40, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 7.1, duration: 0.6, type: "tween" }}
        >
          <a href="#contact">
            <TextRegular>CONTACT</TextRegular>
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute -top-6 md:top-0 right-4 md:right-8"
        initial={{ translateY: -40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 7.1, duration: 0.6, type: "tween" }}
      >
        <a href="/art">
          <Image
            className="hidden md:block"
            height={32}
            width={160}
            src="/art-portfolio-handwritten.svg"
            alt="handwritten linkname"
          />
          <Image
            className="md:hidden"
            height={10}
            width={70}
            src="/art-short-handwritten.svg"
            alt="handwritten linkname"
          />
        </a>
      </motion.div>
    </nav>
  );
};

export default NavBar;
