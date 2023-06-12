import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Heading2 from "../../atoms/typography/Heading2";

const ImageWColorBg = ({ data }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { thumbnail } = data;

  return (
    <Link
      key={`category-${thumbnail.alt}`}
      href={`/art/${data.slug}`}
      className={`col-span-${thumbnail.span}`}
    >
      <div
        id={`category-${thumbnail.alt}`}
        className={`relative flex justify-center items-center h-[200px] sm:h-[300px] lg:h-[400px] cursor-pointer`}
        style={{ backgroundColor: thumbnail.bgColor }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Heading2
          className={`hidden md:block relative !text-4xl !text-black z-40 transition-opacity ease-in ${
            isHovered ? "opacity-1" : "opacity-0"
          } lowercase text-center drop-shadow-xl bg-white p-4`}
        >
          {data.title}
        </Heading2>
        <Heading2
          className={`md:hidden absolute bottom-0 !text-2xl !text-black z-40 lowercase text-center bg-white px-5 py-3`}
        >
          {data.title}
        </Heading2>
        <motion.div
          className="absolute w-full h-full overflow-hidden md:overflow-visible"
          initial={{ translateY: 50, opacity: 0 }}
          transition={{ duration: 0.8, type: "tween" }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {thumbnail.art ? (
            <Image
              className={`relative object-contain p-4 z-0 ${
                thumbnail.customClasses ? thumbnail.customClasses : ""
              }
    transition-all ease-in-out duration-500
    ${isHovered ? "sm:scale-125 z-30" : ""} pointer-events-none`}
              src={thumbnail.art}
              alt={thumbnail.alt || "illustration"}
              fill
            />
          ) : (
            <Heading2>{thumbnail.alt}</Heading2>
          )}
        </motion.div>
      </div>
    </Link>
  );
};

export default ImageWColorBg;
