import React from "react";
import Section from "../atoms/Section";
import BackgroundImage from "../molecules/BakgroundImage";
import SectionStartText from "../molecules/SectionStartText";
import TextSmall from "../atoms/TextSmall";
import Heading3 from "../atoms/Heading3";

const Projects = () => {
  const data = [
    {
      title: "Full Stack Chat App (Discord Copy)",
      description:
        "A PERN-stack web application with channels and servers, running sockets for updating of the chat feeds. The application can be run using docker compose or locally. Contains unit tests and github workflow.",
      link: "https://github.com/1Tolv2/chat-pern-app",
      icon: "/ghost-svgrepo-com.svg",
    },
    {
      title: "Full Stack Vehicle Maintenance App",
      description:
        "A React Native + Expo application for registering maintenance on you car och motorcycle. The backend is an Express REST API with a MongoDB database.",
      link: "",
      icon: "",
    },
    {
      title: "24-hour Weather App",
      description:
        "A small React weather app displaying the current days weather. The data comes from the OpenWeather API. The background changes throughout the day based on the suns activity and type of weather data.",
      link: "",
      icon: "",
    },
    {
      title: "24-hour Weather App",
      description:
        "A small React weather app displaying the current days weather. The data comes from the OpenWeather API. The background changes throughout the day based on the suns activity and type of weather data.",
      link: "",
      icon: "",
    },
  ];
  return (
    <Section className="flex flex-col items-center my-16 py-16">
      <div className="relative w-3/4 max-w-[1000px]">
        <SectionStartText
          title="Featured Projects"
          sectionName="PROJECTS"
          className="-left-[26rem] top-72"
        >
          <div className="grid grid-cols-2 w-full mx-auto mt-10 pr-20 gap-10">
            <div className="flex flex-col items-end w-full h-fit">
              {data.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <div className="float-right frosted-card w-[280px] h-[350px] py-10 px-5 mb-10">
                      <Heading3>{item.title}</Heading3>
                      <TextSmall className="mt-3">{item.description}</TextSmall>
                    </div>
                  );
                }
              })}
            </div>
            <div className="w-full mt-32">
              {data.map((item, index) => {
                if (index % 2 !== 0) {
                  return (
                    <div className="float-left frosted-card w-[280px] h-[350px] py-10 px-5 mb-10">
                      <Heading3>{item.title}</Heading3>
                      <TextSmall className="mt-3">{item.description}</TextSmall>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </SectionStartText>
      </div>
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen ">
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-20 rotate-180"
          style={{
            backgroundImage:
              "linear-gradient(179.01deg, rgba(70, 162, 214, 0) 7.82%, rgba(11, 32, 39, 0.69) 85.4%, rgba(3, 10, 12, 0.952) 93.24%, rgba(0, 0, 0) 98%)",
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
          bgImage="url('IMG_8830.jpg')"
          opacity="40"
          className="left-0"
        />
      </div>
    </Section>
  );
};

export default Projects;
