import React from "react";

const Section = ({ children, center = false, className = "" }) => {
  return (
    <div
      className={`relative min-h-screen w-screen ${
        center ? "flex justify-center items-center" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
