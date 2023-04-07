import React from "react";
import SectionHeading from "../atoms/RotatedHeading";
import Heading2 from "../atoms/typography/Heading2";
import { motion } from "framer-motion";

const SectionStartText = ({
  children,
  sectionName,
  title,
  className,
  titleAlign = "left",
}) => {
  return (
    <div className={`relative mx-auto md:mx-20 w-full text-${titleAlign}`}>
      <div
        className={`absolute top-1/2 -translate-y-1/2 -rotate-90 ${className}`}
      >
        <SectionHeading>{sectionName}</SectionHeading>
      </div>
      <motion.div
        initial={{ translateY: 100, opacity: 0 }}
        transition={{ duration: 0.8, type: "tween" }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Heading2>{title}</Heading2>
      </motion.div>
      {children}
    </div>
  );
};

export default SectionStartText;
