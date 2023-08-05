import React from "react";

function convertHexToRgb(hex) {
  // converts the hex from base 16 to base 10
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));

  return [r, g, b];
}

function getLuminance(r, g, b) {
  let [lumR, lumG, lumB] = [r, g, b].map((part) => {
    const proportion = part / 255;

    return proportion <= 0.03928
      ? proportion / 12.92
      : Math.pow((proportion + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
}

function checkContrast(x, y) {
  const lighter = Math.max(x, y);
  const darker = Math.min(x, y);

  return (lighter + 0.05) / (darker + 0.05);
}

function getTextColorFromContrast(colorValues) {
  const blackContrast = checkContrast(
    getLuminance(...colorValues),
    getLuminance(0, 0, 0)
  );

  const whiteContrast = checkContrast(
    getLuminance(...colorValues),
    getLuminance(255, 255, 255)
  );

  return blackContrast >= whiteContrast ? "text-black" : "text-white";
}

const HeroAlternate = ({ category }) => {
  const textColor = getTextColorFromContrast(
    convertHexToRgb(category.thumbnail.bgColor)
  );
  return (
    <div
      className={`h-[50vh] w-screen !fixed top-0`}
      style={{ backgroundColor: category.thumbnail.bgColor }}
    >
      <div className="w-10/12 h-[50vh] flex flex-col justify-center items-center sm:w-1/2 sm:min-w-[400px] max-w-[800px] mx-auto">
        <h1 className={`text-4xl mb-4 sm:mb-6 text-center ${textColor}`}>
          {category.title}
        </h1>
        <p className={textColor}>{category.description}</p>
      </div>
    </div>
  );
};

export default HeroAlternate;
