import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Tile = ({ data }) => {
  const span = data.span ? "art-" + data.span : "";

  return (
    <motion.div
      id={`category-${data.title}`}
      key={`category-${data.title}`}
      className={`flex flex-col items-center ${span}`}
      style={{ backgroundColor: data.bgColor }}
      initial={{ translateY: 50, opacity: 0 }}
      transition={{ duration: 0.8, type: "tween" }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="relative h-full 2xl:!min-h-[350px] w-full"
        style={{
          backgroundColor: data.bgColor || "#ebebeb",
          minHeight: data?.span === "rowRectangle" ? "400px" : "250px",
        }}
      >
        <Image
          className={`object-contain p-8 2xl:py-8 2xl:px-14 z-0 ${
            data.customClasses ? data.customClasses : ""
          }
      transition-all ease-in-out duration-500 pointer-events-none`}
          src={data.image}
          alt={data.alt || "illustration"}
          fill
          sizes="500px"
        />
      </div>
    </motion.div>
  );
};

export default Tile;
