"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutUs = () => {
  const router = useRouter();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <h2>AboutUs</h2>
      <Link href="/">Go back</Link>
      <button onClick={() => router.push("/about-us/aboutstudent")}>
        GO to nested student page
      </button>
      <button onClick={() => router.push("/about-us/aboutcollege")}>
        GO to nested college page
      </button>
    </div>
  );
};

export default AboutUs;
