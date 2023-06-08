import React from "react";
import Image from "next/image";

import Section from "../atoms/Section";
import Heading1 from "../atoms/typography/Heading1";

const Hero = () => {
  return (
    <Section center>
      <div className="w-full flex items-center justify-center">
        <div>
          <Heading1 className="text-4xl font-normal !text-black">
            SOFIA JOHNSSON
          </Heading1>
          <div className="relative flex justify-center gap-4 mt-4">
            <Image
              src="/art/instagram.svg"
              alt="instagram link"
              width="30"
              height="30"
            />
            <Image
              src="/art/etsy.svg"
              alt="instagram link"
              width="30"
              height="30"
            />
          </div>
        </div>
        <div className="relative w-[35%] h-[800px]">
          <Image fill src="/art/gazelle.png" className="object-contain" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
