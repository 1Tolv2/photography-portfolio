import React from "react";
import Heading1 from "../atoms/typography/Heading1";
import Heading2 from "../atoms/typography/Heading2";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="w-fit">
      <motion.div
        className="flex w-full items-baseline"
        initial={{ translateY: -40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "tween" }}
      >
        <Heading2>HELLO</Heading2>
        <span className="w-full h-0.5 bg-white ml-5" />
      </motion.div>
      <Heading1>SOFIA JOHNSSON</Heading1>
      <motion.div
        className="text-right"
        initial={{ translateY: 40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "tween" }}
      >
        <Heading2>FULL STACK DEVELOPER</Heading2>
      </motion.div>
    </div>
  );
};

export default HeroText;
