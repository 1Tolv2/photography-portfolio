import React from "react";
import Image from "next/image";

import Section from "../atoms/Section";
import Heading2 from "../atoms/typography/Heading2";

const data = [
  {
    title: "Inktober 2022",
    thumbnail: "/art/gazelle.svg",
    alt: "gazelle",
    bgColor: "#D18B68",
    span: 2,
  },
  {
    title: "Inktober",
    thumbnail: "/art/gazelle.svg",
    alt: "gazelle",
    bgColor: "#D18B68",
    span: 1,
  },
  {
    title: "Inktober",
    thumbnail: "/art/gazelle.svg",
    alt: "gazelle",
    bgColor: "#D18B68",
    span: 3,
  },
  {
    title: "Inktober 2022",
    thumbnail: "/art/gazelle.svg",
    alt: "gazelle",
    bgColor: "#D18B68",
    span: 4,
  },
  {
    title: "Inktober 2022",
    thumbnail: "/art/gazelle.svg",
    alt: "gazelle",
    bgColor: "#D18B68",
    span: 2,
  },
];
const Categories = () => {
  return (
    <Section>
      <div className="grid gap-2 grid-cols-6 w-screen">
        {data.map((item, index) => {
          return (
            <div
              id={`category-${index}`}
              className={`relative flex justify-center items-center p-2 col-span-${item.span} h-[400px]`}
              style={{ backgroundColor: item.bgColor }}
            >
              <Image src={item.src} alt={item.alt} fill />
              {/* <Heading2 className="text-black">{item.title}</Heading2> */}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Categories;
