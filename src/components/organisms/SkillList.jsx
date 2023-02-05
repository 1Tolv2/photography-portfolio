import React from "react";
import Heading3 from "../atoms/Heading3";
import TextSmall from "../atoms/TextSmall";

const SkillList = () => {
  const data = [
    {
      icon: "/logo192.png",
      title: "Full Stack Development",
      text: "From the UI to the database, I enjoy challenging myself in all areas of the stack.",
    },
    {
      icon: "/logo192.png",
      title: "Application Lifecycle Management",
      text: "Building applications with scalability and maintainability in mind.",
    },
    {
      icon: "/logo192.png",
      title: "UI/UX Design",
      text: "A big passion of mine to improve my designs and concepts to strive for a greater user experince.",
    },
  ];
  return (
    <div className="relative -top-10 text-center grid grid-cols-3 h-fit w-[900px] mx-auto gap-8">
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
