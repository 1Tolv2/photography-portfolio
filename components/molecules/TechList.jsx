import React from "react";
import Heading3 from "../atoms/typography/Heading3";

const TechList = () => {
  const columnData = [
    {
      title: "Web",
      classes: "grid grid-cols-2",
      skills: [
        "JavaScript",
        "Node.js",
        "TypeScript",
        "Express.js",
        "React.js & Next.js",
        "PostgreSQL",
        "Tailwind CSS & Sass",
        "MongoDB",
      ],
    },
    {
      title: "Other",
      classes: "",
      skills: [
        "Git",
        "Docker",
        "Jest & Cypress",
        "Figma",
        "Storyblok (Headless CMS)",
      ],
    },
  ];
  return (
    <div className="flex w-full text-white font-light mt-3">
      {columnData.map((item) => (
        <div>
          <Heading3>{item.title}</Heading3>
          <ul className={item.classes}>
            {item.skills.map((skill, index) => (
              <li key={`skill-${index}`} className="mt-3 ml-8">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* <ul className="grid grid-cols-3 text-white font-light mt-3">
        <Heading3>Backend</Heading3>
        <Heading3>Other</Heading3>
        {data.map((item, index) => (
          <li key={index} className="mt-3 ml-8">
            {item}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TechList;
