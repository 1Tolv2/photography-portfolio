import React from "react";
import { motion } from "framer-motion";
import TextRegular from "../atoms/typography/TextRegular";

const NavBar = () => {
  return (
    <nav className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-5 lg:gap-10 ">
      <motion.a
        href="#about"
        initial={{ translateY: -80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "tween" }}
      >
        <TextRegular>ABOUT</TextRegular>
      </motion.a>
      <motion.a
        href="#projects"
        initial={{ translateY: -80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "tween" }}
      >
        <TextRegular>PROJECTS</TextRegular>
      </motion.a>
      <motion.a
        href="#contact"
        initial={{ translateY: -80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, type: "tween" }}
      >
        <TextRegular>CONTACT</TextRegular>
      </motion.a>
    </nav>
  );
};

export default NavBar;
