import React from "react";
import Image from "next/image";

const SocialMediaLinks = () => {
  return (
    <div className="fixed right-10 bottom-10 flex flex-col gap-10 w-fit z-50">
      <a href="https://github.com/1Tolv2" aria-label="link to github account">
        <Image
          className="w-10 md:w-12 mx-auto"
          src="/github.svg"
          alt="github"
          width={40}
          height={40}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sofia-johnsson-s-856308188/"
        aria-label="link to linkedin account"
      >
        <Image
          className="w-8 md:w-10 mx-auto"
          src="/linkedin.svg"
          alt="linkedin"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
