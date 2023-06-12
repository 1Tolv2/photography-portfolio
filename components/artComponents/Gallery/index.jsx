import React from "react";

import Section from "../../atoms/Section";
import ImageWColorBg from "./ImageWColorBg";
import ImageWDescription from "./ImageWDescription";

const Gallery = ({ data, bgColor }) => {
  return (
    <Section className="bg-white">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 w-screen">
        {data.map((item) => {
          if (item.type === "category") {
            return <ImageWColorBg data={item} />;
          } else if (item.type === "illustration") {
            return (
              <ImageWDescription data={item} bgColor={bgColor || "#FFF"} />
            );
          }
        })}
      </div>
    </Section>
  );
};

export default Gallery;
