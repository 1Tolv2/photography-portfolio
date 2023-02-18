import React from "react";

const RotatedHeading = ({ children, className = "" }) => {
  return (
    <p
      className={`text-9xl font-black text-white opacity-10 w-fit ${className}`}
    >
      {children}
    </p>
  );
};

export default RotatedHeading;
