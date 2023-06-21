import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading2 from "../../atoms/typography/Heading2";

const CardTile = ({ data }) => {
  console.log("CARD", data);
  return (
    <motion.div
      id={`category-${data.title}`}
      className={`flex flex-col items-center col-span-cat-${data.span}`}
      style={{ backgroundColor: data.bgColor }}
      initial={{ translateY: 50, opacity: 0 }}
      transition={{ duration: 0.8, type: "tween" }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-[250px] md:h-[300px] lg:h-[350px] w-full">
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
      <div className="w-full max-w-[300px] p-3">
        {data.title && (
          <Heading2 className="!text-black lg:!text-2xl text-center mb-2">
            {data.title}
          </Heading2>
        )}
        {data.description && <p className="!text-black">{data.description}</p>}
      </div>
    </motion.div>
  );
};

export default CardTile;
