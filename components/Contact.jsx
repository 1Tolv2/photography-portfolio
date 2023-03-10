import React from "react";
import Heading2 from "./atoms/typography/Heading2";
import RotatedHeading from "./atoms/RotatedHeading";
import Section from "./atoms/Section";
import BackgroundImage from "./molecules/BakgroundImage";
import TextRegular from "./atoms/typography/TextRegular";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Section id="contact" center className=" mt-16 pt-16 overflow-hidden">
      <div className="relative w-3/4 max-w-md text-center">
        <div className="absolute text-center -top-6 sm:-top-8 md:-top-20 left-1/2 -translate-x-1/2">
          <RotatedHeading className="!text-6xl sm:!text-7xl md:!text-9xl">
            CONTACT
          </RotatedHeading>
        </div>
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          transition={{ duration: 0.8, type: "tween" }}
          whileInView={{ translateY: 0, opacity: 1 }}
        >
          <Heading2>Reach Me</Heading2>
        </motion.div>

        <motion.div
          className="mt-2 mb-8 text-white"
          initial={{ translateY: 100, opacity: 0 }}
          transition={{ duration: 0.8, type: "tween" }}
          whileInView={{ translateY: 0, opacity: 1 }}
        >
          <TextRegular>
            I am currently open for a new adventure, so if you think I'll be a
            great fit for you team, don't hesitate to say hi!
          </TextRegular>
        </motion.div>
        <button
          onClick={() => window.location.assign("mailto:sofiaq1@gmail.com")}
          className="px-6 py-3 bg-[#4599ca] transition hover:scale-110 text-white"
        >
          <p className="text-base text-black">Say hi!</p>
        </button>
      </div>
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen ">
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light
         linear-gradient-blue-bottom rotate-180"
        />
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-30"
          style={{
            transform: "rotate(180deg)",
            backgroundImage:
              "linear-gradient(179.01deg, rgba(70, 162, 214, 0) 7.82%, rgba(11, 32, 39, 0.69) 85.4%, rgba(3, 10, 12, 0.952) 93.24%, rgba(0, 0, 0) 98%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-30"
          style={{
            backgroundImage:
              "linear-gradient(179.01deg, rgba(70, 162, 214, 0) 7.82%, rgba(11, 32, 39, 0.69) 85.4%, rgba(3, 10, 12, 0.952) 93.24%, rgba(0, 0, 0) 98%)",
          }}
        />
        <BackgroundImage
          bgImage="lake2.jpg"
          opacity={0.4}
          bgPosition="bg-center"
          className="left-0"
        />
      </div>
    </Section>
  );
};

export default Contact;
