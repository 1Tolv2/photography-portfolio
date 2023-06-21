import React from "react";
import Image from "next/image";

const HeroTile = ({ data }) => {
  return (
    <div
      key={`text-${data.title}`}
      className={`relative flex justify-center items-center h-full col-span-${data.span} p-6 gap-8`}
    >
      <div className="relative w-10 h-16 lg:w-16 lg:h-24 text-6xl lg:text-8xl uppercase font-bold">
        <div className="absolute left-1/2 -translate-x-1/2 -rotate-90">
          {data.tag}
        </div>
      </div>
      <div className="w-fit">
        <h2 className="text-5xl font-semibold mb-2">{data.title}</h2>
        {data.description &&
          data.description.map((sentence) => (
            <p className="!text-black mb-2 text-sm md:text-base">{sentence}</p>
          ))}
      </div>
      <div className="absolute bottom-4 right-4 w-32 h-16 md:w-64 md:h-24 opacity-50">
        <Image fill src={data.bgImage} alt="" />
      </div>
    </div>
  );
};

export default HeroTile;
