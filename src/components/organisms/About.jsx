import React from "react";
import Section from "../atoms/Section";
import TextRegular from "../atoms/TextRegular";
import BackgroundImage from "../molecules/BakgroundImage";
import SectionStartText from "../molecules/SectionStartText";
import TechList from "../molecules/TechList";
import Heading3 from "../atoms/Heading3";

const About = () => {
  return (
    <>
      <Section center>
        <div className="relative grid grid-cols-2 w-3/4 max-w-[1200px]">
          <SectionStartText title="I am" sectionName="ABOUT">
            <TextRegular>
              a junior full stack developer with some work experice in front
              end. I have a huge passion to learn and create great and intuitive
              applications.
            </TextRegular>
            <br />
            <TextRegular>
              When I'm not programming I enjoy painting and going on motorcycle
              trips, I'm already planning my next one!
            </TextRegular>
            <br />
            <TextRegular>
              These are the technologies I am currently working with:
            </TextRegular>
            <TechList />
          </SectionStartText>
          <div></div>
        </div>
        <div className="absolute top-0 left-0 -z-10 w-screen h-screen ">
          <div
            className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-20 rotate-180"
            style={{
              backgroundImage:
                "linear-gradient(179.01deg, rgba(70, 162, 214, 0) 7.82%, rgba(11, 32, 39, 0.69) 71.4%, rgba(3, 10, 12, 0.952) 84.24%, rgba(0, 0, 0) 94.22%)",
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
          <BackgroundImage bgImage="url('IMG_8830.jpg')" opacity="40" />
        </div>
      </Section>
    </>
  );
};

export default About;
