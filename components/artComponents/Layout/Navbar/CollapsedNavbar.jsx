import React from "react";
import Link from "next/link";

const CollapsedNavbar = () => {
  return (
    <nav className="sm:hidden relative w-full z-10 pl-4">
      <div className="py-4 w-fit  font-mono">
        <Link href="/" className="text-xs sm:text-sm">
          {"< dev portfolio"}
        </Link>
      </div>
    </nav>
  );
};

export default CollapsedNavbar;
