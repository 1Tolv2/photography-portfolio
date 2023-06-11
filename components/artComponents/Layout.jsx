import React from "react";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden min-h-screen">{children}</main>
      <footer className="relative pt-8 pb-4">
        <div className="flex gap-6 w-fit mx-auto mb-3">
          <a
            href="https://www.instagram.com/sofiajohnsson_illustrations/"
            target="_blank"
          >
            <Image
              src="/art/instagram.svg"
              height="30"
              width="30"
              alt="instagram"
            />
          </a>
          <a href="https://www.deviantart.com/laiany" target="_blank">
            <Image src="/art/etsy.svg" height="30" width="30" alt="etsy" />
          </a>
          <a
            href="https://www.etsy.com/se-en/shop/Sofiaillustrations?ref=profile_header"
            target="_blank"
          >
            <Image
              src="/art/deviantart.svg"
              height="18"
              width="18"
              alt="deviantArt"
            />
          </a>
        </div>
        <p className="text-center text-xs">
          © {new Date().getFullYear()} by Sofia Johnsson S.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
