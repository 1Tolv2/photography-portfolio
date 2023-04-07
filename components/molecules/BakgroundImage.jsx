import React from "react";
import Image from "next/image";

const BackgroundImage = ({
  bgImage,
  className = "",
  opacity = "60",
  imageBehaviour = "cover",
  bgPosition = "center",
}) => {
  return (
    <>
      <div
        className={`absolute top-0 right-0 w-screen bg-primary-900 mix-blend-hard-light z-10 opacity-${opacity}`}
      />
      <Image
        src={"/" + bgImage}
        alt=""
        fill
        sizes="100vw"
        className={`object-${imageBehaviour} bg-${bgPosition} opacity-${opacity} ${className}`}
      />
    </>
  );
};

export default BackgroundImage;
