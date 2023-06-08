import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Section from "../atoms/Section";
import Heading2 from "../atoms/typography/Heading2";

const data = [
  {
    title: "Inktober 2022",
    // thumbnail: "/art/camera.png", // ful bild
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
    // thumbnail: "/art/vaniljbulle.png",
    alt: "white bird",
    bgColor: "#cacaca",
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
    // thumbnail: "/art/crystal.png",
    alt: "mushroom sandwich",
    bgColor: "#E0C8AB",
    span: 3,
  },
  {
    title: "Miscellaneous",
    // thumbnail: "/art/crystal.png",
    alt: "radio",
    bgColor: "#9b9b9b",
    span: 1,
  },
  {
    title: "Food",
    // thumbnail: "/art/crystal.png",
    alt: "frying pan",
    bgColor: "#9b9b9b",
    span: 2,
  },
  {
    title: "Baking",
    // thumbnail: "/art/crystal.png",
    alt: "caster sugar",
    bgColor: "#9b9b9b",
    span: 1,
  },
  {
    title: "Motorcycles",
    thumbnail: "/art/honda-repsol.svg",
    alt: "motorcycle",
    bgColor: "#F6A60E",
    span: 2,
    // custom: "!p-10",
  },
];
const Categories = () => {
  return (
    <Section>
      <div className="grid gap-2 grid-cols-6 w-screen">
        {data.map((item, index) => {
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
