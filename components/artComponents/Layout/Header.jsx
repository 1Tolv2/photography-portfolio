import React, { useState } from "react";
import artData from "../artData.json";
import StandardNavbar from "./Navbar/StandardNavbar";
import CollapsedNavbar from "./Navbar/CollapsedNavbar";

const Header = () => {
  const links = [
    { title: "Home", slug: "/art" },
    { title: "Categories", sublinks: artData.categories },
  ];

  return (
    <header>
      <StandardNavbar links={links} />
      <CollapsedNavbar links={links} />
    </header>
  );
};

export default Header;
