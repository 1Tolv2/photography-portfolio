import React from "react";

const Heading1 = ({ className, children }) => {
  return (
    <h1 className={`font-extrabold text-white ${className}`}>{children}</h1>
  );
};

export default Heading1;
