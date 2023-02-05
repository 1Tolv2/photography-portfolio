import React from "react";
import TextRegular from "../atoms/TextRegular";

const NavBar = () => {
  return (
    <nav className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-10">
      <TextRegular>ABOUT</TextRegular>
      <TextRegular>PROJECTS</TextRegular>
    </nav>
  );
};

export default NavBar;
