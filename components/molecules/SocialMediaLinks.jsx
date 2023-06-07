import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SocialMediaLinks = () => {
  return (
    <div className="fixed right-1/2 translate-x-1/2 md:translate-x-0 md:right-10 bottom-10 flex md:flex-col gap-10 w-fit z-50">
      <motion.a
        href="https://github.com/1Tolv2"
        aria-label="link to github account"
        initial={{ translateY: 80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 6.5, duration: 0.8, type: "tween" }}
      >
        <Image
          className="w-10 md:w-12 mx-auto"
          src="/github.svg"
          alt="github"
          width={40}
          height={40}
        />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/sofia-johnsson-s-856308188/"
        aria-label="link to linkedin account"
        initial={{ translateY: 80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 6.5, duration: 0.8, delay: 0.3, type: "tween" }}
      >
        <Image
          priority
          className="w-8 md:w-10 mx-auto"
          src="/linkedin.svg"
          alt="linkedin"
          width={40}
          height={40}
        />
      </motion.a>
    </div>
  );
};

export default SocialMediaLinks;
