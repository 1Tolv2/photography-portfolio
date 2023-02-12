import React from "react";
import Heading1 from "../atoms/Heading1";
import Heading2 from "../atoms/Heading2";

const HeroText = () => {
  return (
    <div className="w-fit">
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
