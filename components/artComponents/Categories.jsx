import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import artData from "./artData.json";

import Section from "../atoms/Section";
import Heading2 from "../atoms/typography/Heading2";
import Link from "next/link";

const Categories = () => {
  return (
    <Section className="bg-white">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 w-screen">
        {artData.categories.map((item) => {
          const [isHovered, setIsHovered] = React.useState(false);
          const { thumbnail } = item;
          console.log("item", item.thumbnail);
          return (
            <Link
              href={`/art/${item.slug}`}
              className={`col-span-${thumbnail.span}`}
            >
              <div
                id={`category-${thumbnail.alt}`}
                className={`relative flex justify-center items-center h-[200px] sm:h-[300px] md:h-[400px] cursor-pointer`}
                style={{ backgroundColor: thumbnail.bgColor }}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                <Heading2
                  className={`relative !text-4xl !text-black z-40 transition-opacity ease-in ${
                    isHovered ? "opacity-1" : "opacity-0"
                  } lowercase text-center drop-shadow-xl bg-white p-4`}
                >
                  {item.title}
                </Heading2>
                <motion.div
                  className="absolute w-full h-full"
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
                ${isHovered ? "scale-125 z-30" : ""} pointer-events-none`}
                      src={thumbnail.art}
                      alt={thumbnail.alt}
                      fill
                    />
                  ) : (
                    <Heading2>{thumbnail.alt}</Heading2>
                  )}
                </motion.div>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default Categories;
