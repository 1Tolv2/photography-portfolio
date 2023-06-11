import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Section from "../atoms/Section";
import Heading2 from "../atoms/typography/Heading2";

const data = [
  {
    title: "Inktober 2022",
    thumbnail: "/art/camera.png",
    alt: "camera",
    bgColor: "#8B8599",
    span: 3,
    custom: "!p-8",
  },
  // {
  //   title: "Inktober 2022",
  //   thumbnail: "/art/car-wreck.png",
  //   alt: "car wreck",
  //   bgColor: "#A7D2D0",
  //   span: 3,
  //   custom: "!p-8",
  // },
  {
    title: "Fauna",
    thumbnail: "/art/bird.png",
    alt: "white bird",
    bgColor: "#E4E5E4",
    span: 1,
  },
  {
    title: "Fika",
    thumbnail: "/art/vaniljbulle.png",
    alt: "vanilla bun",
    bgColor: "#FAF5BB", // french-press "#E0C8AB",
    span: 2,
  },
  {
    title: "Mushroomtober",
    thumbnail: "/art/rafflad-nagelskivling.png",
    alt: "mushroom",
    bgColor: "#E8D9BB",
    span: 2,
  },
  {
    title: "Inktober 2021",
    thumbnail: "/art/crystal.png",
    alt: "crystal",
    bgColor: "#F9E1EA",
    span: 1,
    custom: "!p-8",
  },
  {
    title: "Bread",
    thumbnail: "/art/mushroom-sandwich.png",
    alt: "mushroom sandwich",
    bgColor: "#E5D6B5",
    span: 3,
    custom: "!p-8",
  },
  {
    title: "Miscellaneous",
    thumbnail: "/art/radio.png",
    alt: "radio",
    bgColor: "#E1BC78",
    span: 1,
    custom: "!p-8",
  },
  {
    title: "Food",
    thumbnail: "/art/frying-pan.png",
    alt: "frying pan",
    bgColor: "#B1AFB3",
    span: 2,
    custom: "!p-8",
  },
  {
    title: "Baking",
    thumbnail: "/art/caster-sugar.png",
    alt: "caster sugar",
    bgColor: "#D9EBBE",
    span: 1,
    custom: "!p-8",
  },
  {
    title: "Motorcycles",
    thumbnail: "/art/honda-repsol.svg",
    alt: "motorcycle",
    bgColor: "#F6A60E",
    span: 2,
    custom: "!p-8",
  },
];
const Categories = () => {
  return (
    <Section className="bg-white">
      <div className="grid gap-2 grid-cols-6 w-screen">
        {data.map((item) => {
          const [isHovered, setIsHovered] = React.useState(false);
          return (
            <div
              id={`category-${item.alt}`}
              className={`relative flex justify-center items-center col-span-${
                item.span
              } h-[400px] cursor-pointer ${isHovered ? "z-50" : ""}`}
              style={{ backgroundColor: item.bgColor }}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            >
              <Heading2
                className={`relative !text-4xl !text-black z-10 transition-opacity ease-in ${
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
                {item.thumbnail ? (
                  <Image
                    className={`object-contain p-4 z-0 ${
                      item.custom ? item.custom : ""
                    }
                transition-all ease-in-out duration-500
                ${isHovered ? "scale-125" : ""} pointer-events-none`}
                    src={item.thumbnail}
                    alt={item.alt}
                    fill
                  />
                ) : (
                  <Heading2>{item.alt}</Heading2>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Categories;
