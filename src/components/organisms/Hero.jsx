import React from "react";
import Heading1 from "../atoms/Heading1";
import Heading2 from "../atoms/Heading2";
import Heading3 from "../atoms/Heading3";
import TextRegular from "../atoms/TextRegular";
import Section from "../atoms/Section";

export const Hero = () => {
  return (
    <Section center className="overflow-hidden">
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
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen">
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(70, 162, 214, 0) 0%, rgba(37, 112, 136, 0.78) 50%, #0B2027 77.6%, rgba(0, 0, 0, 0.96) 97.92%)",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-primary-900 opacity-70 z-10" />

        <img src="/IMG_8952.jpg" className="scale-150" alt="mountains" />
      </div>
    </Section>
  );
};
