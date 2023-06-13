import React from "react";
import { motion } from "framer-motion";

import Heading1 from "../atoms/typography/Heading1";
import Heading2 from "../atoms/typography/Heading2";

const HeroText = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      width: "fit-content",
    },
  };

  return (
    <div className="w-fit">
      <motion.div
        className="flex w-full items-baseline"
        initial={{ translateY: -40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 6.5, duration: 0.8, type: "tween" }}
      >
        <Heading2>HELLO</Heading2>
        <span className="w-full h-0.5 bg-white ml-5" />
      </motion.div>
      <div className="relative flex gap-5 justify-center z-[70] ">
        <div className="relative top-2 sm:top-0 flex items-center w-fit">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1.5rem] md:w-[2.3rem] lg:w-[3.1rem] xl:w-[3.8rem] mb-0.5 md:mb-0 mr-0.5"
          >
            <motion.path
              className="item"
              d="M40.448 92.28C33.1947 92.28 26.0267 90.9573 18.944 88.312C11.8613 85.6667 5.54667 81.9973 0 77.304L12.288 61.304C17.7493 65.7413 22.784 68.9413 27.392 70.904C32 72.7813 36.9067 73.72 42.112 73.72C45.5253 73.72 48.4267 73.3787 50.816 72.696C53.2053 72.0133 55.04 71.032 56.32 69.752C57.6 68.3867 58.24 66.808 58.24 65.016C58.24 62.5413 57.3013 60.6213 55.424 59.256C53.5467 57.8907 50.3467 56.824 45.824 56.056L26.112 52.6C18.8587 51.32 13.2693 48.5467 9.344 44.28C5.41867 40.0133 3.456 34.5947 3.456 28.024C3.456 22.2213 4.90667 17.2293 7.808 13.048C10.7947 8.86666 15.0187 5.66666 20.48 3.448C26.0267 1.22933 32.5973 0.119995 40.192 0.119995C46.848 0.119995 53.5467 1.272 60.288 3.576C67.0293 5.79467 72.8747 8.90933 77.824 12.92L66.176 29.176C56.96 22.0933 47.7867 18.552 38.656 18.552C35.6693 18.552 33.0667 18.8933 30.848 19.576C28.7147 20.1733 27.0507 21.0693 25.856 22.264C24.7467 23.3733 24.192 24.7387 24.192 26.36C24.192 28.5787 25.0027 30.2853 26.624 31.48C28.3307 32.6747 31.0613 33.6133 34.816 34.296L53.376 37.368C61.9947 38.7333 68.5227 41.592 72.96 45.944C77.4827 50.296 79.744 55.928 79.744 62.84C79.744 68.8987 78.1653 74.1467 75.008 78.584C71.8507 82.936 67.328 86.3067 61.44 88.696C55.552 91.0853 48.5547 92.28 40.448 92.28Z"
              fill="white"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 1, delay: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </svg>
          <motion.h1
            className="text-[2.3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6.1rem] pb-[8px] md:pb-[9px] lg:pb-[16px]  xl:pb-[17px] font-extrabold text-white relative z-[70]"
            initial="hidden"
            animate="visible"
            variants={text}
            transition={{
              duration: 2,
              delay: 3,
              ease: "easeInOut",
              opacity: { delay: 5, duration: 1 },
            }}
          >
            {"OFIA "}
          </motion.h1>
        </div>
        <div className="relative bottom-2 sm:bottom-0 flex items-center w-content">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1.5rem] md:w-[2.3rem] lg:w-[3.1rem] xl:w-[3.8rem] mr-0.5 lg:mr-1"
          >
            <motion.path
              className="item"
              d="M37.808 91.28C28.336 91.28 20.3573 88.9333 13.872 84.24C7.472 79.4613 2.90667 72.592 0.176 63.632L20.528 56.08C22.2347 61.2853 24.496 65.1253 27.312 67.6C30.128 70.0747 33.6693 71.312 37.936 71.312C42.7147 71.312 46.5973 69.7333 49.584 66.576C52.5707 63.4187 54.064 59.28 54.064 54.16V0.399994H76.08V54.8C76.08 62.0533 74.4587 68.4107 71.216 73.872C68.0587 79.3333 63.6213 83.6 57.904 86.672C52.1867 89.744 45.488 91.28 37.808 91.28Z"
              fill="white"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 1, delay: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </svg>
          <motion.h1
            className="text-[2.3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6.1rem] pb-[8px] md:pb-[9px] lg:pb-[16px] xl:pb-[18px] font-extrabold text-white relative z-[70]"
            initial="hidden"
            animate="visible"
            variants={text}
            transition={{
              duration: 2,
              delay: 3,
              ease: "easeInOut",
              opacity: { delay: 5, duration: 1 },
            }}
          >
            {"OHNSSON"}
          </motion.h1>
        </div>
      </div>
      <motion.div
        className="text-right"
        initial={{ translateY: 40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 6.5, duration: 0.8, type: "tween" }}
      >
        <Heading2>FULL STACK DEVELOPER</Heading2>
      </motion.div>
    </div>
  );
};

export default HeroText;
