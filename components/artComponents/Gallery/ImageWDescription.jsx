import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading2 from "../../atoms/typography/Heading2";

const ImageWDescription = ({ data }) => {
  console.log(data);
  return (
    <motion.div
      id={`category-${data.title}`}
      className={`flex flex-col justify-center items-center h-[300px] col-span-${data.span}`}
      style={{ backgroundColor: data.bgColor }}
      initial={{ translateY: 50, opacity: 0 }}
      transition={{ duration: 0.8, type: "tween" }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-[250px] lg:h-[400px] w-full">
        <Image
          className={`object-contain p-4 z-0 ${
            data.customClasses ? data.customClasses : ""
          }
    transition-all ease-in-out duration-500 pointer-events-none`}
          src={data.image}
          alt={data.alt || "illustration"}
          fill
        />
      </div>
      {data.title && (
        <Heading2 className="!text-black lg:!text-3xl text-center">
          {data.title}
        </Heading2>
      )}
      {data.description && <p className="!text-black">{data.description}</p>}
    </motion.div>
  );
};

export default ImageWDescription;
