"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const handleClick = (item) => {
    alert(item);
  };

  return (
    <main className={styles.main}>
      <h1>Event,function and states</h1>
      {/* <button onClick={() => alert("Hello you clicked me")}>click Me</button>
      <button onClick={() => handleClick("item")}>
        click Me (Functions handling)
      </button> */}

      <Link href="/login">Navigate to login page</Link>
      <button onClick={() => router.push("/login")}>
        Button Navigate to login page
      </button>
      <button onClick={() => router.push("/studentlist")}>
        Button Navigate to student page
      </button>
      <Link href="/about-us">Navigate to About us page</Link>
    </main>
  );
}

//Folder structure
//build related things comes in (.next)
//first component root file of next

//Next components based on rendering
// 1. Server Component in which execution is done inside server (By default all are server component)
// 2. Client components which executes on browser (hooks,onclick etc)
// Note: we can use both components simultaneously

// "use client"
//if we want to treat our component as client component then we need to specify it otherwise it treats it as ss
//To handle events in next js we have to specify client side so that is doesn't perform ssr
//it is only specified on the top of the fie
//need not to replicate in child components

//ROUTING
//Use page.js to show show routing inside folder then change
//<Link> works without importing 'use client'
//<Link href="/login" > is used to navigate
//<Link href="/" > to go back to home page
//For nested routing use '/about-us/aboutstudent' give parent name also
//layout.js make it common to all files 
//conditional rendering can be done on the basis of usePathname
//dynamic routing is written inside folder with a new folder like [students] inside it page.js and destrcture 
//params in order to get query params id 
//catch all segments of routes
//for multiple nesting use [...lecture] then {params} give array of params
//not-found.js

//MIDDLEWARE (It is created inside the root folder)
//executes before routing request
//middleware.js is used as validator in auth process