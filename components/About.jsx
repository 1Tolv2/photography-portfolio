import React from "react";
import Section from "./atoms/Section";
import TextRegular from "./atoms/typography/TextRegular";
import BackgroundImage from "./molecules/BakgroundImage";
import SectionStartText from "./molecules/SectionStartText";
import TechList from "./molecules/TechList";
import SkillList from "./organisms/SkillList";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Section id="about" center>
        <div className="relative grid grid-cols-1 md:grid-cols-2 w-3/4 max-w-[1000px] gap-5">
          <SectionStartText
            title="I am"
            sectionName="ABOUT"
            className="-left-[15rem] md:-left-[19rem]"
          >
            <motion.div
              className="text-white"
              initial={{ translateY: 100, opacity: 0 }}
              transition={{ duration: 0.8, type: "tween" }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <TextRegular>
                a junior full stack developer with some work experice in front
                end. I have a huge passion to learn and create great and
                intuitive applications.
              </TextRegular>
              <br />
              <TextRegular>
                When I'm not programming I enjoy painting and going on
                motorcycle trips, I'm already planning my next one!
              </TextRegular>
              <br />
              <TextRegular>
                These are the technologies I am currently working with:
              </TextRegular>
              <TechList />
            </motion.div>
          </SectionStartText>
          <div className="hidden md:block"></div>
        </div>
        <div className="absolute top-0 left-0 -z-10 w-screen h-screen bg-primary-900">
          <div
            className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-20 rotate-180"
            style={{
              backgroundImage:
                "linear-gradient(179.01deg, rgba(70, 162, 214, 0) 7.82%, rgba(11, 32, 39, 0.69) 85.4%, rgba(3, 10, 12, 0.952) 93.24%, rgba(0, 0, 0) 99%)",
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(6, 11, 19, 0) 73.51%, rgba(0, 1, 1, 0.82) 89.24%, #000000 100%)",
            }}
          />

          <div
            className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-10
           linear-gradient-blue-left"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-screen w-full max-w-[1500px] linear-x-gradient z-10" />
          <BackgroundImage
            bgImage="image-of-me.jpg"
            opacity="100"
            bgPosition="top"
            className="left-0 max-w-[1500px] mx-auto brightness-[1.75]"
          />
        </div>
      </Section>
      <SkillList />
    </>
  );
};

export default About;
