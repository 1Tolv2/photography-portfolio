import React from "react";

const BackgroundImage = ({ bgImage }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-primary-900 opacity-60 z-10 mix-blend-hard-light" />
      <div
        className="flex justify-center items-center w-screen h-screen 
  bg-cover"
        style={{ backgroundImage: bgImage }}
      />
    </>
  );
};

export default BackgroundImage;
