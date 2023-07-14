"use client";

import Link from "next/link";
import React from "react";

const StudentList = () => {
  return (
    <div>
      <h1>Students list</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1>Dynamic Routing</h1>
        <p>
          <Link href="/studentlist/anil">Anil 1</Link>
        </p>
        <p>
          <Link href="/studentlist/sam">Sam 2</Link>
        </p>
        <p>
          <Link href="/studentlist/peter">Peter 3</Link>
        </p>
        <p>
          <Link href="/studentlist/john">John 4</Link>
        </p>
      </div>
    </div>
  );
};

export default StudentList;
