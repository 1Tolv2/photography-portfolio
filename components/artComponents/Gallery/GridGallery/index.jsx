import React from "react";

import Section from "../../../atoms/Section";
import ImageTile from "./ImageTile";
import CardTile from "./CardTile";
import HeroTile from "./HeroTile";

const GridGallery = ({ data, bgColor }) => {
  return (
    <Section className="bg-white">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 w-screen">
        {data.map((item, index) => {
          if (item.type === "category") {
            return <ImageTile key={`category-${index}`} data={item} />;
          } else if (item.type === "illustration") {
            return (
              <CardTile
                key={`category-${index}`}
                data={item}
                bgColor={bgColor || "#FFF"}
              />
            );
          } else if (item.type === "text") {
            return <HeroTile key={`text-${index}`} data={item} />;
          }
        })}
      </div>
    </Section>
  );
};

export default GridGallery;
