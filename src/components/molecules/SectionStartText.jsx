import React from "react";
import SectionHeading from "../atoms/RotatedHeading";
import Heading2 from "../atoms/Heading2";

const SectionStartText = ({ children, sectionName, title }) => {
  return (
    <div className="mx-20 w-[500px]">
      <div className="absolute -left-56 top-1/2 -translate-y-1/2 -rotate-90 ">
        <SectionHeading>{sectionName}</SectionHeading>
      </div>
      <Heading2>{title}</Heading2>
      {children}
    </div>
  );
};

export default SectionStartText;
