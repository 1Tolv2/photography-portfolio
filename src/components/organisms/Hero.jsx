import React from "react";
import Heading1 from "../atoms/Heading1";
import Heading2 from "../atoms/Heading2";
import Heading3 from "../atoms/Heading3";
import TextRegular from "../atoms/TextRegular";
import Section from "../atoms/Section";

const Hero = () => {
  return (
    <Section center>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-10">
        <TextRegular>ABOUT</TextRegular>
        <TextRegular>PROJECTS</TextRegular>
      </div>
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
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen ">
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-10"
          style={{
            backgroundImage:
              " linear-gradient(180deg, rgba(70, 162, 214, 0) 0%, rgba(37, 112, 136, 0.78) 47.45%, #0B2027 73.65%, #000000 90.49%)",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-primary-900 opacity-70 z-10" />
        <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen overflow-hidden">
          <img
            src="/IMG_8952.jpg"
            alt="mountains"
            className="w-[150%] h-auto"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
