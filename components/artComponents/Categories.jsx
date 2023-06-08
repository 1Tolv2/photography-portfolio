import React from "react";
import Image from "next/image";

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
  {
    title: "Beverages",
    thumbnail: "/art/french-press.png",
    alt: "french press",
    bgColor: "#E0C8AB",
    span: 1,
  },
  {
    title: "Pastries",
    thumbnail: "/art/vaniljbulle.png",
    alt: "vanilla pastry",
    bgColor: "#FAF5BB",
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
    title: "Inktober 2022",
    thumbnail: "/art/car-wreck.png",
    alt: "car wreck",
    bgColor: "#A7D2D0",
    span: 3,
    custom: "!p-8",
  },
  {
    title: "Inktober 2022",
    thumbnail: "/art/suit.png",
    alt: "suit",
    bgColor: "#DAD4DF",
    span: 1,
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
              id={`category-${index}`}
              className={`relative flex justify-center items-center col-span-${
                item.span
              } h-[400px] cursor-pointer ${isHovered ? "z-50" : ""}`}
              style={{ backgroundColor: item.bgColor }}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            >
              <Heading2
                className={`relative !text-black z-10 transition-opacity ease-in ${
                  isHovered ? "opacity-1" : "opacity-0"
                } lowercase text-center drop-shadow-xl bg-white p-4`}
              >
                {item.title}
              </Heading2>
              <Image
                className={`object-contain p-4 z-0 ${
                  item.custom ? item.custom : ""
                }
                transition-all ease-in-out duration-500
                ${isHovered ? "scale-125" : ""}`}
                src={item.thumbnail}
                alt={item.alt}
                fill
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Categories;
