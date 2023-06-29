import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

const CollapsedMenu = ({ links }) => {
  const [scope, animate] = useAnimate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const duration = 0.8;
    if (isMenuOpen) {
      animate(
        "li",
        {
          width: ["fit-content", "fit-content", "fit-content"],
          height: [2, 12, 12],
          marginBottom: [5, 20, 20],
        },
        { duration, ease: "linear" }
      );
      animate(
        "div",
        {
          width: "100%",
          height: ["100%", "100%", "0%"],
        },
        { duration, ease: "linear" }
      );
      animate(
        "span",
        {
          rotateX: 0,
        },
        { duration, ease: "linear" }
      );
    } else {
      animate(
        "div",
        {
          width: "100%",
          height: "100%",
        },
        { duration, ease: "linear" }
      );
      animate(
        "li",
        {
          width: "20px",
          height: "2px",
          marginBottom: 5,
        },
        { duration, ease: "linear" }
      );

      animate(
        "span",
        {
          // color: "white",
          rotateX: 90,
        },
        { duration, ease: "linear" }
      );
    }
  }, [isMenuOpen]);

  return (
    <motion.div
      className={`relative sm:hidden z-[80]`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <ul ref={scope} className={`flex flex-col`}>
        {links.map((link, index) => {
          return (
            <li
              key={`link-${link.slug}`}
              className={`block relative h-0.5 w-5 overflow-hidden mb-[5px]`}
            >
              <div className="absolute bottom-0 w-full h-full bg-white" />
              <span
                className="relative block text-md bottom-1.5 uppercase text-white"
                style={{ transform: "rotateX(90deg)" }}
              >
                {link.title}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default CollapsedMenu;
