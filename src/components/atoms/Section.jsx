import React from "react";

const Section = ({ children, center = false, className = "" }) => {
  return (
    <div
      className={`relative min-h-screen h-full w-screen ${
        center ? "flex justify-center items-center" : ""
      } ${className} overflow-x-hidden`}
    >
      {children}
    </div>
  );
};

export default Section;
