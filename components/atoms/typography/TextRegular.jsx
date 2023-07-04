import React from "react";

const TextRegular = ({ className, children }) => {
  return <p className={`text-base text-white ${className}`}>{children}</p>;
};

export default TextRegular;
