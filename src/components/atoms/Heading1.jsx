import React from "react";

const Heading1 = ({ children }) => {
  return (
    <h1 className="lg:text-7xl 2xl:text-8xl font-extrabold text-white">
      {children}
    </h1>
  );
};

export default Heading1;
