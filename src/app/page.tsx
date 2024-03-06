import { navlinks } from "@/utils";
import Link from "next/link";
import React from "react";
import Profile from "./components/Profile";

const Home = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col space-y-4 items-center">
        <div className="md:hidden">
          <Profile />
        </div>

        <h1 className="text-4xl sm:text-5xl font-[georgia] md:text-7xl text-gray-900 text-center animate-pulse">
          Welcome to Overwatch Coder
        </h1>

        <div className="flex flex-col space-y pt-7">
          <p className="text-start text-xl font-semibold text-gray-400">
            Explore:
          </p>
          <nav className="flex items-center py-5 justify-center space-x-2 md:space-x-4">
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
      </div>
    </section>
  );
};

export default Home;
