import React from "react";
import Heading3 from "../atoms/Heading3";
import TextSmall from "../atoms/TextSmall";
const ProjectList = ({ projects }) => {
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
      link: "https://github.com/1Tolv2/vehicle-react-native-app",
      icon: "/motorcycle.svg",
    },
    {
      title: "24-hour Weather App",
      description:
        "A small React weather app displaying the current days weather. The data comes from the OpenWeather API. The background changes throughout the day based on the suns activity and type of weather data.",
      link: "https://github.com/1Tolv2/Weather-react-app",
      icon: "/cloud.svg",
    },
  ];
  return (
    <div className="grid grid-cols-2 w-full mx-auto mt-10 pr-20 gap-10">
      <div className="flex flex-col items-end w-full h-fit">
        {data.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div className="float-right frosted-card w-[280px] h-[350px] py-10 px-5 mb-10 overflow-hidden">
                <Heading3>{item.title}</Heading3>
                <TextSmall className="mt-3">{item.description}</TextSmall>
                {item.icon && (
                  <img
                    src={item.icon}
                    className="absolute -bottom-8 -right-6 h-[160px] max-w-[200px]  opacity-10"
                    alt="icon"
                  />
                )}
              </div>
            );
          }
          return <></>;
        })}
      </div>
      <div className="w-full mt-32">
        {data.map((item, index) => {
          if (index % 2 !== 0) {
            return (
              <div className="float-left frosted-card w-[280px] h-[350px] py-10 px-5 mb-10  overflow-hidden">
                <Heading3>{item.title}</Heading3>
                <TextSmall className="mt-3">{item.description}</TextSmall>
                {item.icon && (
                  <img
                    src={item.icon}
                    className="absolute -bottom-8 -right-6 h-[160px] max-w-[200px] opacity-10"
                    alt="icon"
                  />
                )}
              </div>
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
};
export default ProjectList;
