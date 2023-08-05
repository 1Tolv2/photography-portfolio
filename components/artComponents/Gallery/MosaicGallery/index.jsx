import React from "react";
import Section from "../../../atoms/Section";
import Tile from "./Tile";

const MosaicGallery = ({ data }) => {
  return (
    <Section className="bg-white">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 2xl:grid-cols-6 w-screen">
        {data.map((item, index) => (
          <Tile data={item} key={`mosaic-tile-${item.id}`} />
        ))}
      </div>
    </Section>
  );
};

export default MosaicGallery;
