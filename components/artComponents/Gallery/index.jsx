import React from "react";
import GridGallery from "./GridGallery";
import MosaicGallery from "./MosaicGallery";

const index = ({ type, data }) => {
  return type === "mosaic" ? (
    <MosaicGallery data={data} />
  ) : (
    <GridGallery data={data} />
  );
};

export default index;
