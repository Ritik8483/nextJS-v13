"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }) => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <div>
      {pathName !== "/about-us/aboutcollege" && (
        <h1>Common layout for ABout page</h1>
      )}

      {children}
    </div>
  );
};

export default Layout;
