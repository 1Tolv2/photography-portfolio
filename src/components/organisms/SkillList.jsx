import React from "react";
import Heading3 from "../atoms/Heading3";
import TextSmall from "../atoms/TextSmall";

const SkillList = () => {
  const data = [
    {
      icon: "/logo192.png",
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis natus hic?",
    },
    {
      icon: "/logo192.png",
      title: "Application Lifecycle Management",
      text: "Building applications with scalability and maintainability in mind.",
    },
    {
      icon: "/logo192.png",
      title: "Back-end Development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis natus hic?",
    },
  ];
  return (
    <div className="absolute text-center -bottom-28 grid grid-cols-3 h-fit w-[900px] mx-auto gap-8">
      {data.map((item, index) => (
        <div className="h-full frosted-card py-10 px-5" key={index}>
          <img src={item.icon} alt="icon" className="w-10 mx-auto " />
          <Heading3>{item.title}</Heading3>
          <TextSmall className="mt-3">{item.text}</TextSmall>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
