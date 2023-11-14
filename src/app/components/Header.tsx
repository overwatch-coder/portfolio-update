"use client";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavContext } from "../context/NavProvider";

const Header = () => {
  const { toggleSideBar } = useNavContext();
  return (
    <header className="w-screen z-50 sticky top-0 py-3 flex justify-between items-center bg-slate-900 md:hidden">
      {/* Logo goes here */}
      <h2 className="text-3xl font-bold text-cyan-300 px-5">O.C</h2>

      {/* Icon goes here */}
      <button className="px-2" onClick={toggleSideBar}>
        <BiMenuAltRight color="white" size={30} />
      </button>
    </header>
  );
};

export default Header;
