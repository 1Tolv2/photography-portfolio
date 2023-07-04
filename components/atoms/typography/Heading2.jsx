import React from "react";

const Heading2 = ({ children, className }) => {
  return <h2 className={`lg:text-5xl text-white ${className}`}>{children}</h2>;
};

export default Heading2;
