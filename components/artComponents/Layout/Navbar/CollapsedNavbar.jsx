import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const CollapsedNavbar = ({ links }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CustomLink = ({ link }) => {
    return link.slug ? (
      <Link
        href={link.slug}
        onClick={() => setTimeout(() => setIsMenuOpen(false), 1000)}
      >
        <span className="text-sm uppercase pl-4">{link.title}</span>
      </Link>
    ) : (
      <span className="text-sm uppercase pl-4">{link.title}</span>
    );
  };

  return (
    <nav
      className={`flex justify-between sm:hidden w-full h-14 z-10 p-4 pr-8 ${
        isMenuOpen ? " text-white pr-4" : ""
      }`}
    >
      <div
        className={`z-50 w-fit font-mono ${isMenuOpen ? "fixed top-4" : ""}`}
      >
        {router.pathname === "/art" && (
          <Link href="/" className="text-xs sm:text-sm">
            {"< dev portfolio"}
          </Link>
        )}
      </div>

      <div
        className={`z-50 flex items-center cursor-pointer ${
          isMenuOpen ? "fixed top-[27px] right-4" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`collapsedMenu ${
            isMenuOpen ? "collapsedMenuOpen" : ""
          } bg-black before:bg-black after:bg-black`}
        />
      </div>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 flex justify-center items-center bg-purpleGrey w-screen h-screen z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="w-max text-left">
            {links.map((link) => {
              return (
                <li
                  key={`link-${link.slug}`}
                  index={`link-${link.slug}`}
                  className="relative"
                >
                  <span
                    className={`block text-lg uppercase font-semibold p-2 ${
                      link.slug ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <CustomLink link={link} />
                    {link.sublinks && (
                      <ul>
                        {link.sublinks.map((sublink, index) => {
                          return (
                            <li key={`sublink-${index}`}>
                              <Link
                                href={`/art/${sublink.slug}`}
                                onClick={() =>
                                  setTimeout(() => setIsMenuOpen(false), 1000)
                                }
                              >
                                <span className="text-sm lowercase pl-4">
                                  {sublink.title}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default CollapsedNavbar;
