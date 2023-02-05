import React from "react";
import Section from "../atoms/Section";
import BackgroundImage from "../molecules/BakgroundImage";
import HeroText from "../molecules/HeroText";
import NavBar from "../molecules/NavBar";

const Hero = () => {
  return (
    <Section center>
      <NavBar />
      <HeroText />
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <div
          className="absolute top-0 left-0 w-full h-full mix-blend-hard-light z-10"
          style={{
            backgroundImage:
              " linear-gradient(180deg, rgba(70, 162, 214, 0) 0%, rgba(37, 112, 136, 0.78) 47.45%, #0B2027 73.65%, #000000 90.49%)",
          }}
        />
        <BackgroundImage bgImage="url('IMG_8952.jpg')" />
      </div>
    </Section>
  );
};

export default Hero;
