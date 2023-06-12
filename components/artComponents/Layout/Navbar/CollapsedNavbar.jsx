import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CollapsedNavbar = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className={`flex justify-between sm:hidden relative w-full z-10 p-4 pr-8 ${
        isMenuOpen ? "text-white" : ""
      }`}
    >
      <div className="relative z-50 w-fit font-mono">
        <Link href="/" className="text-xs sm:text-sm">
          {"< dev portfolio"}
        </Link>
      </div>
      <div
        className="relative z-50 flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`collapsedMenu ${isMenuOpen ? "collapsedMenuOpen" : ""}`}
        />
      </div>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 flex justify-center items-center bg-purpleGrey w-screen h-screen z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          hej
        </motion.div>
      )}
      {/* <ul className="w-fit">
        {links.map((link) => {
          return (
            <li
              key={`link-${link.slug}`}
              index={`link-${link.slug}`}
              className="relative"
            >
              {/* <CustomLink slug={link.slug}> 
              <span
                className={`text-sm md:text-lg uppercase font-semibold p-2 ${
                  link.slug ? "cursor-pointer" : "cursor-default"
                }`}
              >
                {link.title}
              </span>
              {/* </CustomLink> 
              {/* {link.sublinks && renderSubLinks(link.sublinks, isHovered)} 
            </li>
          );
        })}
      </ul> */}
    </nav>
  );
};

export default CollapsedNavbar;
