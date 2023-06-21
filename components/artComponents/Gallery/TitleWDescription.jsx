import React from "react";

const TitleWDescription = ({ data }) => {
  return (
    <div
      key={`text-${data.title}`}
      className={`flex justify-center items-center h-full col-span-${data.span} p-6 gap-8`}
    >
      <div className="relative w-16 h-24 text-8xl uppercase font-bold">
        <div className="absolute left-1/2 -translate-x-1/2 -rotate-90">
          {data.tag}
        </div>
      </div>
      <div className="w-fit">
        <h2 className="text-5xl font-semibold mb-2">{data.title}</h2>
        {data.description &&
          data.description.map((sentence) => (
            <p className="!text-black mb-2">{sentence}</p>
          ))}
      </div>
    </div>
  );
};

export default TitleWDescription;
