import React from "react";
import Section from "./atoms/Section";
import BackgroundImage from "./molecules/BakgroundImage";
import SectionStartText from "./molecules/SectionStartText";
import ProjectList from "./organisms/ProjectList";

const Projects = () => {
  return (
    <Section
      id="projects"
      className="flex flex-col items-center mb-16 mt-24 pt-10 scroll-mt-24"
    >
      <div className="relative grid grid-cols-1 gap-5 w-3/4 max-w-[1000px]">
        <SectionStartText
          title="Featured Projects"
          sectionName="PROJECTS"
          className="-left-[20.5rem] md:-left-[25rem]"
          titleAlign="center"
        >
          <ProjectList />
        </SectionStartText>
        <div className="hidden md:block"></div>
      </div>
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen ">
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-20 rotate-180"
          style={{
            backgroundImage:
              "linear-gradient(179.01deg, rgba(70, 162, 214, 0) 7.82%, rgba(11, 32, 39, 0.69) 80.4%, rgba(3, 10, 12, 0.952) 93.24%, rgba(0, 0, 0) 98%)",
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
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light
           linear-gradient-blue-left"
        />
        <BackgroundImage
          bgImage="IMG_8830.jpg"
          opacity="40"
          bgPosition="right"
          className="left-0 contrast-125 brightness-110 saturate-150"
        />
      </div>
    </Section>
  );
};

export default Projects;
