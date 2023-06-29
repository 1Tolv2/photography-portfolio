import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FullMenu from "./Menu/FullMenu";
import CollapsedMenu from "./Menu/CollapsedMenu";

const NavBar = () => {
  const links = [
    { title: "about", slug: "#about" },
    { title: "projects", slug: "#projects" },
    { title: "contact", slug: "#contact" },
  ];

  return (
    <nav className="absolute top-8 w-full h-fit px-8">
      <FullMenu links={links} />
      <CollapsedMenu links={links} />
      <motion.div
        className="absolute top-0 right-8"
        initial={{ translateY: -40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 7.1, duration: 0.6, type: "tween" }}
      >
        <a href="/art">
          <Image
            className="hidden md:block"
            height={40}
            width={170}
            src="/art-portfolio-handwritten.svg"
            alt="handwritten linkname"
          />
          <Image
            className="md:hidden"
            height={8}
            width={60}
            src="/art-short-handwritten.svg"
            alt="handwritten linkname"
          />
        </a>
      </motion.div>
    </nav>
  );
};

export default NavBar;
