import React from "react";

const Section = ({ id, children, center = false, className = "" }) => {
  return (
    <div
      id={id}
      className={`relative min-h-screen h-fit w-screen ${
        center ? "flex flex-col justify-center items-center" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
