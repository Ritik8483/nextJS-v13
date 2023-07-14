'use client' 

import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Hello Login</h1>
      <Link href="/" >Go back</Link>
      <button onClick={() => router.push("/")}>
        Button Navigate to HOME page
      </button>
    </div>
  );
};

export default Login;
