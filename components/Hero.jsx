import React from "react";
import Section from "./atoms/Section";
import BackgroundImage from "./molecules/BakgroundImage";
import HeroText from "./molecules/HeroText";
import NavBar from "./molecules/NavBar";
import LoadingScreen from "./LoadingScreen";

const Hero = () => {
  return (
    <Section center>
      <NavBar />
      <HeroText />
      <LoadingScreen />
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <div
          className="absolute top-0 left-0 w-full h-full mix-blend-hard-light z-10
          linear-gradient-blue-bottom"
        />
        <BackgroundImage bgImage="IMG_8952.jpg" />
      </div>
    </Section>
  );
};

export default Hero;
