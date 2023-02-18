import React from "react";
import SectionHeading from "../atoms/RotatedHeading";
import Heading2 from "../atoms/typography/Heading2";

const SectionStartText = ({
  children,
  sectionName,
  title,
  className,
  titleAlign = "left",
}) => {
  return (
    <div className={`relative mx-auto md:mx-20 w-full text-${titleAlign}`}>
      <div
        className={`absolute top-1/2 -translate-y-1/2 -rotate-90 ${className}`}
      >
        <SectionHeading>{sectionName}</SectionHeading>
      </div>
      <Heading2>{title}</Heading2>
      {children}
    </div>
  );
};

export default SectionStartText;
