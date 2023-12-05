import { navlinks } from "@/utils";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col space-y-4 items-center">
        <h1 className="text-5xl font-[georgia] md:text-7xl text-gray-900 flex flex-col items-center justify-center text-center animate-pulse">
          Welcome to Overwatch Coder
        </h1>

        <nav className="flex items-center py-5 justify-center space-x-4">
          {navlinks.map((navlink) => (
            <Link
              href={navlink.link}
              key={navlink.name}
              className="hover:text-gray-900 text-600 hover:underline"
            >
              {navlink.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Home;
