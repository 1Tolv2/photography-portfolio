import React from "react";

const BackgroundImage = ({ bgImage, className = "", opacity = "60" }) => {
  return (
    <>
      <div
        className={`absolute top-0 right-0 w-screen h-full bg-primary-900 mix-blend-hard-light z-10 opacity-${opacity}`}
      />
      <div
        className={`flex justify-center items-center w-screen h-screen 
  bg-cover bg-right-top ${className}}`}
        style={{ backgroundImage: bgImage }}
      />
    </>
  );
};

export default BackgroundImage;
