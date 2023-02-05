import React from "react";
import Section from "../atoms/Section";
import TextRegular from "../atoms/TextRegular";
import BackgroundImage from "../molecules/BakgroundImage";
import SectionStartText from "../molecules/SectionStartText";
import TechList from "../molecules/TechList";
import SkillList from "./SkillList";

const About = () => {
  return (
    <>
      <Section id="about" center>
        <div className="relative grid grid-cols-2 w-3/4 max-w-[1000px] gap-5">
          <SectionStartText
            title="I am"
            sectionName="ABOUT"
            className="-left-[19rem] "
          >
            <div className="text-white">
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
            </div>
          </SectionStartText>
          <div></div>
        </div>
        <div className="absolute top-0 left-0 -z-10 w-screen h-screen ">
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
          <BackgroundImage
            bgImage="url('image-of-me.jpg')"
            opacity="0"
            className="left-0"
          />
        </div>
      </Section>
      <SkillList />
    </>
  );
};

export default About;
