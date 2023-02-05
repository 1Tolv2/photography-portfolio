import React from "react";
import Section from "../atoms/Section";
import BackgroundImage from "../molecules/BakgroundImage";

const Projects = () => {
  return (
    <Section>
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen ">
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-20 rotate-180"
          style={{
            backgroundImage:
              "linear-gradient(179.01deg, rgba(70, 162, 214, 0) 7.82%, rgba(11, 32, 39, 0.69) 85.4%, rgba(3, 10, 12, 0.952) 93.24%, rgba(0, 0, 0) 99%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-10
           linear-gradient-blue-bottom"
        />
        <BackgroundImage
          bgImage="url('IMG_8830.jpg')"
          opacity="10"
          className="left-0"
        />
      </div>
    </Section>
  );
};

export default Projects;
