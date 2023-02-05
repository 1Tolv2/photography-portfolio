import React from "react";
import Heading1 from "../atoms/Heading1";
import Heading3 from "../atoms/Heading3";
const HeroText = () => {
  return (
    <div className="w-fit">
      <div className="flex w-full items-baseline">
        <Heading3>HELLO</Heading3>
        <span className="w-full h-0.5 bg-white ml-5 " />
      </div>
      <Heading1>SOFIA JOHNSSON</Heading1>
      <div className="text-right">
        <Heading3>FULL STACK DEVELOPER</Heading3>
      </div>
    </div>
  );
};

export default HeroText;
