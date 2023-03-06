import React from "react";
import Image from "next/image";
import Heading3 from "../atoms/typography/Heading3";
import TextSmall from "../atoms/typography/TextSmall";

const SkillList = () => {
  const data = [
    {
      icon: "/engineer.svg",
      title: "Full Stack Development",
      text: "From the UI to the database, I enjoy challenging myself in all areas of the stack.",
    },
    {
      icon: "/update.svg",
      title: "Application Lifecycle Management",
      text: "Building applications with scalability and maintainability in mind.",
    },
    {
      icon: "/design.svg",
      title: "UI/UX Design",
      text: "A big passion of mine to improve my designs and concepts to strive for a greater user experince.",
    },
  ];
  return (
    <div className="relative -top-8 text-center flex flex-wrap lg:grid lg:grid-cols-3 justify-center ítems-center h-fit w-full md:max-w-[1200px] mx-auto px-4 md:px-10 gap-6 md:gap-8">
      {data.map((item, index) => (
        <div
          className="h-full frosted-card max-w-[350px] w-fit mx-auto py-6 md:py-10 px-5"
          key={index}
        >
          <Image
            src={item.icon}
            alt={item.title + " icon"}
            className="w-10 mx-auto"
            width={40}
            height={40}
          />
          <Heading3>{item.title}</Heading3>
          <TextSmall className="mt-3">{item.text}</TextSmall>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
