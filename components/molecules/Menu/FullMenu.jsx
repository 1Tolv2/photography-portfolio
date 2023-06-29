import React from "react";
import { motion } from "framer-motion";

import TextRegular from "../../atoms/typography/TextRegular";

const FullMenu = ({ links }) => {
  const calculateDelay = (index) => {
    const delay = 0.3;
    return 6.5 + index * delay;
  };

  return (
    <div className="hidden sm:flex flex-wrap justify-center gap-4 lg:gap-10 selection:mx-auto">
      {links.map((link, index) => {
        return (
          <motion.div
            initial={{ translateY: -40, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: calculateDelay(index),
              duration: 0.6,
              type: "tween",
            }}
          >
            <a href={link.slug}>
              <TextRegular className="uppercase">{link.title}</TextRegular>
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FullMenu;
