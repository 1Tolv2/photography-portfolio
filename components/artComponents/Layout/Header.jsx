import React from "react";
import artData from "../artData.json";
import FullMenu from "./Menu/FullMenu";
import CollapsedMenu from "./Menu/CollapsedMenu";

const Header = () => {
  const links = [
    { title: "Home", slug: "/art" },
    { title: "Categories", sublinks: [...artData.categories] },
  ];

  return (
    <header>
      <FullMenu links={links} />
      <CollapsedMenu links={links} />
    </header>
  );
};

export default Header;
