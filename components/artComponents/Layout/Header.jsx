import React from "react";

const Header = () => {
  const links = [
    { name: "Home", slug: "/art" },
    { name: "Other", slug: "/art" },
  ];
  return (
    <header>
      <nav className="w-full">
        <ul className="flex items-center w-fit mx-auto py-4 px-8">
          {links.map(({ slug, name }) => (
            <li key={`link-${slug}`} index={`link-${slug}`} className="p-2">
              <a href={slug} className="text-lg uppercase font-bold">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
