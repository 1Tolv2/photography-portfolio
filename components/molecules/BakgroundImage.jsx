import React from "react";
import Image from "next/image";

const BackgroundImage = ({
  bgImage,
  className = "",
  opacity = 0.6,
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
        fill
        sizes="100vw"
        style={{
          objectFit: imageBehaviour,
          objectPosition: bgPosition,
          opacity,
        }}
      />
    </>
  );
};

export default BackgroundImage;
