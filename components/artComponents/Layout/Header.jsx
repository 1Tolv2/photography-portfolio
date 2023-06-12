import React, { useState } from "react";
import Link from "next/link";
import artData from "../artData.json";

const Header = () => {
  const links = [
    { title: "Home", slug: "/art" },
    { title: "Category", sublinks: artData.categories },
  ];

  const CustomLink = ({ slug, children }) =>
    slug ? <Link href={slug}>{children}</Link> : children;

  const renderSubLinks = (sublinks, isHovered) => {
    return (
      <ul className={`absolute bg-white ${isHovered ? "" : "hidden"}`}>
        {sublinks.map((sublink) => (
          <li
            key={`sublink-${sublink.slug}`}
            index={`sublink-${sublink.slug}`}
            className=""
          >
            <CustomLink slug={sublink.slug}>
              <span className="block text-md lowercase font-semibold px-6 py-0.5 cursor-pointer">
                {sublink.title}
              </span>
            </CustomLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header>
      <nav className="relative w-full z-10">
        <div className="absolute top-4 w-fit left-10 font-mono">
          <Link href="/" className="text-sm">
            {"<--- dev portfolio"}
          </Link>
        </div>
        <ul className="flex items-center w-fit mx-auto py-4 px-8">
          {links.map((link) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <li
                key={`link-${link.slug}`}
                index={`link-${link.slug}`}
                className="relative"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                <CustomLink slug={link.slug}>
                  <span
                    className={`text-lg uppercase font-semibold p-2 ${
                      link.slug ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    {link.title}
                  </span>
                </CustomLink>

                {link.sublinks && renderSubLinks(link.sublinks, isHovered)}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
