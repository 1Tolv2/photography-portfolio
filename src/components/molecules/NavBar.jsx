import React from "react";
import TextRegular from "../atoms/TextRegular";

const NavBar = () => {
  return (
    <nav className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-10 ">
      <a href="#about">
        <TextRegular>ABOUT</TextRegular>
      </a>
      <a href="#projects">
        <TextRegular>PROJECTS</TextRegular>
      </a>
      <a href="#contact">
        <TextRegular>CONTACT</TextRegular>
      </a>
    </nav>
  );
};

export default NavBar;
