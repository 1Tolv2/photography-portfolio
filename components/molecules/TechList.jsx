import React from "react";

const TechList = () => {
  const data = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Storyblok",
  ];
  return (
    <ul className="grid grid-cols-2 ml-8 text-white font-light mt-3">
      {data.map((item, index) => (
        <li key={index} className="mt-3">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TechList;
