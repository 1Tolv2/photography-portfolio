import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

const CollapsedMenu = ({ links }) => {
  const [scope, animate] = useAnimate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openAnimation = async () => {
    // 1. expands lines, 2. expands line heights, 3. drops line heights
    await animate(
      "li",
      { width: "fit-content" },
      { duration: 0.4, ease: "linear" }
    );
    await animate(
      "li",
      { height: 12, marginBottom: 20 },
      { duration: 0.3, ease: "linear" }
    );
    animate("span", { rotateX: 0 }, { duration: 0 });
    await animate("div", { height: 0 }, { duration: 0.2, ease: "linear" });
  };

  const closeAnimation = async () => {
    // 1. covers text, 2. shrinks line heights, 3. shrinks lines
    await animate("div", { height: 12 }, { duration: 0.2, ease: "linear" });
    animate("span", { rotateX: 90 }, { duration: 0.1, ease: "linear" });
    await animate(
      "li",
      { height: 2, marginBottom: 5 },
      { duration: 0.3, ease: "linear" }
    );
    await animate("li", { width: 20 }, { duration: 0.4, ease: "linear" });
  };

  useEffect(() => {
    isMenuOpen ? openAnimation() : closeAnimation();
  }, [isMenuOpen]);

  return (
    <>
      <motion.div
        className={`relative sm:hidden z-[90] w-fit`}
        onClick={() => setIsMenuOpen(true)}
      >
        <ul ref={scope} className={`flex flex-col w-fit`}>
          {links.map((link, index) => {
            return (
              <li
                key={`link-${link.slug}`}
                className={`block relative h-0.5 w-5 overflow-hidden mb-[5px]`}
              >
                <div className="absolute bottom-0 w-full h-full bg-white" />
                <Link href={link.slug}>
                  <span
                    className="relative block text-md bottom-1.5 uppercase text-white"
                    style={{ transform: "rotateX(90deg)" }}
                  >
                    {link.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
      <div
        className={`absolute -top-8 left-0 w-screen h-[90vh] z-[80] ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default CollapsedMenu;
