import React from "react";

import Section from "../../atoms/Section";
import ImageWColorBg from "./ImageWColorBg";

const Gallery = ({ data }) => {
  return (
    <Section className="bg-white">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 w-screen">
        {data.map((item) => {
          if (item.type === "category") {
            return <ImageWColorBg item={item} />;
          } else if (item.type === "illustration") {
            return <p>hej</p>;
          }
        })}
      </div>
    </Section>
  );
};

export default Gallery;
