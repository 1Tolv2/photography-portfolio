import React from "react";

const TextSmall = ({ children, className }) => {
  return <p className={`lg:text-sm text-white ${className}`}>{children}</p>;
};

export default TextSmall;
