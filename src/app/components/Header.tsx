"use client";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavContext } from "../context/NavProvider";
import Link from "next/link";

const Header = () => {
  const { toggleSideBar } = useNavContext();
  return (
    <header className="w-screen z-50 sticky top-0 left-0 py-3 flex justify-between items-center bg-slate-900 md:hidden">
      {/* Logo goes here */}
      <Link href="/" className="text-3xl font-bold text-white px-5">
        O.C
      </Link>

      {/* Icon goes here */}
      <button className="px-2" onClick={toggleSideBar}>
        <BiMenuAltRight color="white" size={30} />
      </button>
    </header>
  );
};

export default Header;
