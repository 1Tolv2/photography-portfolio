import React from "react";
import { motion } from "framer-motion";
import TextRegular from "../atoms/typography/TextRegular";

const NavBar = () => {
  return (
    <nav className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-5 lg:gap-10 ">
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
    </nav>
  );
};

export default NavBar;
