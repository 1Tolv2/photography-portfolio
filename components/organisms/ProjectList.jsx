import React from "react";
import Image from "next/image";
import Heading3 from "../atoms/typography/Heading3";
import TextSmall from "../atoms/typography/TextSmall";
import { motion } from "framer-motion";

const ProjectList = ({ projects }) => {
  const data = [
    {
      title: "STHLM MC Parking - PWA",
      description:
        "A progressive web app, PWA, that helps motorcyclists find parking in Stockholm City. Written in TypeScript with Next.js utilising Googles Maps JavaScript API and Stockholms Stads LvWS 4 API as well as their Parking API.",
      link: "https://github.com/1Tolv2/sthlm-mc-parking-pwa",
      icon: "/directions.svg",
    },
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

  const renderCard = (item) => {
    return (
      <>
        <div>
          <Heading3>{item.title}</Heading3>
          <TextSmall className="mt-3">{item.description}</TextSmall>
        </div>
        <a href={item.link}>
          <Image
            alt="external link"
            src="external-link.svg"
            className="w-6"
            width={24}
            height={24}
          />
        </a>
        {item.icon && (
          <div className="absolute -bottom-8 -right-6 h-[160px] w-full max-w-[200px] opacity-10">
            <Image src={item.icon} alt="" fill />
          </div>
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 w-full mx-auto mt-10 md:pr-10 lg:pr-20 gap-10 text-left">
      <div className="flex flex-wrap justify-center md:flex-col md:items-end w-full h-fit gap-10">
        {data.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <motion.div
                key={`project-${item.title}`}
                className="relative flex flex-col justify-between float-right frosted-card w-full sm:min-w-[280px] max-w-[300px] min-h-[340px] max-h-[380px] py-7 px-5 md:mb-10 overflow-hidden"
                initial={{ translateY: 100, opacity: 0 }}
                transition={{ duration: 0.8, type: "tween" }}
                whileInView={{ translateY: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                {renderCard(item)}
              </motion.div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex flex-wrap justify-center md:flex-col md:items-start w-full h-fit gap-10 md:mt-[200px]">
        {data.map((item, index) => {
          if (index % 2 !== 0) {
            return (
              <motion.div
                key={`project-${item.title}`}
                className="relative flex flex-col justify-between float-left frosted-card sm:min-w-[280px] max-w-[300px] min-h-[340px] max-h-[380px] py-7 px-5 md:mb-10 overflow-hidden"
                initial={{ translateY: 100, opacity: 0 }}
                transition={{ duration: 0.8, type: "tween" }}
                whileInView={{ translateY: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                {renderCard(item)}
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
export default ProjectList;
