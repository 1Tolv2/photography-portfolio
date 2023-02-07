import React from "react";
import Heading1 from "../atoms/Heading1";
import Heading2 from "../atoms/Heading2";
import Heading3 from "../atoms/Heading3";
const HeroText = () => {
  return (
    <div className="relative w-fit">
      <p className="absolute -rotate-45 -left-32 -top-10 font-black text-4xl text-yellow-500 border-4 border-yellow-500 p-3 shadow-xl">
        UNDER CONSTRUCTION
      </p>
      <div className="flex w-full items-baseline">
        <Heading2>HELLO</Heading2>
        <span className="w-full h-0.5 bg-white ml-5 " />
      </div>
      <Heading1>SOFIA JOHNSSON</Heading1>
      <div className="text-right">
        <Heading2>FULL STACK DEVELOPER</Heading2>
      </div>
    </div>
  );
};

export default HeroText;
