import React from "react";

const SocialMediaLinks = () => {
  return (
    <div className="fixed right-10 bottom-10 flex flex-col gap-10 w-fit z-50">
      <a href="https://github.com/1Tolv2">
        <img className="w-10 md:w-12 mx-auto" src="/github.svg" />
      </a>
      <a href="https://www.linkedin.com/in/sofia-johnsson-s-856308188/">
        <img className="w-8 md:w-10 mx-auto" src="/linkedin.svg" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
