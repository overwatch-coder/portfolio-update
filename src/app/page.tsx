"use client";

import { redirect, usePathname } from "next/navigation";
import React from "react";

const Home = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return redirect("/about");
  }

  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-slate-900">
      hello
    </section>
  );
};

export default Home;
